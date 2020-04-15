const https = require('https');
const querystring = require('querystring');

/* ========Config Section======== */
const host = process.env.HOST;
const path = process.env.PATH;
const accessControlAllowOriginValue = process.env.ACCESS_CONTROL_ALLOW_ORIGIN;
const accessControlAllowHeadersValue = process.env.ACCESS_CONTROL_ALLOW_HEADERS;

// Bearer token authentization
const bearerToken = process.env.BEARER_TOKEN;

//  Basic authentication credentials   
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
/* ========Config Section======== */

let authorizationHeaderValue;

if (bearerToken || (username && password)) {
    authorizationHeaderValue = bearerToken ?
        `Bearer ${bearerToken}` :
        `Basic ${new Buffer(username + ":" + password).toString('base64')}`;
}

const request = (queryStringParameters, headers) => {

    const requestOptions = {
        host: host,
        path: path,
        port: 443,
        method: 'GET',
    };
    
    if (queryStringParameters) {
        requestOptions.path = `${requestOptions.path}?${querystring.stringify(queryStringParameters)}`;
    }

    if (authorizationHeaderValue) {
        headers['Authorization'] = authorizationHeaderValue;
    }

    headers['accept-encoding'] = 'identity';
    headers['Host'] = host;
    
    requestOptions.headers = headers;

    return new Promise((resolve, reject) => {
        https.request(requestOptions, response => {
            let data = '';
            response.on('data', chunk => {
                data += chunk;
            });
            response.on('end', () => {
                const dataObject = JSON.parse(data);
                response.data = dataObject;
                resolve(response);
            });
        })
            .on('error', error => {
                reject(error);
            })
            .end();
    });
};

exports.handler = (event, context, callback) => {

    const corsHeaders = {
        'Access-Control-Allow-Origin': accessControlAllowOriginValue,
        'Access-Control-Allow-Headers': accessControlAllowHeadersValue
    };

    const repeatResponse = (response) => {
        let multiValueHeaders = {};

        for (const headerName in response.headers) {
            if (Array.isArray(response.headers[headerName])) {
                multiValueHeaders[headerName] = response.headers[headerName];
                delete response.headers[headerName];
            }
        }

        callback(null, {
            statusCode: response.statusCode,
            body: JSON.stringify(response.data),
            headers: { ...response.headers, ...corsHeaders },
            multiValueHeaders: multiValueHeaders,
        });
    };

    const sendError = (error) => {
        callback(null, {
            statusCode: '400',
            body: JSON.stringify(error),
            headers: corsHeaders,
        });
    };

    switch (event.httpMethod) {
        case 'GET':
            request(event.queryStringParameters, event.headers)
                .then((response) => {
                    repeatResponse(response);
                })
                .catch(error => {
                    sendError(error);
                });
            break;
        case 'OPTIONS':
            callback(null, {
                statusCode: '200',
                headers: corsHeaders,
            });
        default:
            sendError(new Error(`Unsupported method "${event.httpMethod}"`));
    }
};
