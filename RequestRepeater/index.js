const https = require("https");
const querystring = require('querystring');

/* ========Config Section======== */
const endpoint = process.env.ENDPOINT; 
const path = process.env.PATH;
const accessControlAllowOriginValue = process.env.ACCESS_CONTROL_ALLOW_ORIGIN;
const accessControlAllowHeadersValue = process.env.ACCESS_CONTROL_ALLOW_HEADERS;

const shouldAddAuthorizationHeader = JSON.parse(process.env.SHOULD_ADD_AUTHORIZATION_HEADER);

// True for bearer, false for basic auth
const useBearerAuth = JSON.parse(process.env.USE_BEARER_AUTH);

// Bearer token authentization
const bearerToken = process.env.BEARER_TOKEN;

//  Basic authentication credentials   
const username = process.env.USERNAME; 
const password = process.env.PASSWORD;
/* ========Config Section======== */

let requestHeaders;

if (shouldAddAuthorizationHeader) {
    console.log(`wtf: ${shouldAddAuthorizationHeader}`);
    const authorizationHeaderValue = useBearerAuth ?
        `Bearer ${bearerToken}` :
        'Basic ' + new Buffer(username + ":" + password).toString("base64");

    requestHeaders =
    {
        'Content-Type': 'application/json',
        'Authorization': `${authorizationHeaderValue}`
    };
} else {
    requestHeaders = {'Content-Type': 'application/json',}
}

console.log(`request headers : ${JSON.stringify(requestHeaders)}`);

let requestOptions = {
  host: endpoint,
  path: path,
  port: 443,
  method: 'GET',
  headers: requestHeaders
};

const request = (queryStringParameters) => {
    
    requestOptions.path = requestOptions.path + `?${querystring.stringify(queryStringParameters, '&', '=')}`;
    
    return new Promise((resolve, reject) => {
        https.request(requestOptions, response => {
            let data = "";
            response.on("data", chunk => {
                data += chunk;
            });
            response.on("end", () => {
                resolve(JSON.parse(data));
            });
        })
        .on("error", error => {
            reject(error);
        })
        .end();
    });
};
      
exports.handler = (event, context, callback) => {
    
    const done = (error, response) => {
        callback(null, {
        statusCode: error ? '400' : '200',
        body: error ? error.message : JSON.stringify(response),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': `${accessControlAllowOriginValue}`,
            'Access-Control-Allow-Headers': `${accessControlAllowHeadersValue}`
        },
        });
    };
    
    switch (event.httpMethod) {
        case 'GET':
            request(event.queryStringParameters)
            .then(response => {
                done(null, response);
            })
            .catch(error => {
                done(error, null)
            });
            break;
        default:
            done(new Error(`Unsupported method "${event.httpMethod}"`));
    }
};
