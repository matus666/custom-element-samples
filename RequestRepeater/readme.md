# Request repeater
RequestRepeater is simple AWS Lambda node.js script which repeats GET request (copies querystring and headers) and adds authorization header. This utility bypasses browsers' CORS policy as well as provide a safe place for storing sensitive data such as credentials or tokens.

# Usage

Copy and paste script into [ASW Lambda](https://docs.aws.amazon.com/lambda/latest/dg/programming-model.html) (node.js) and configure environment variables (or edit config section in script directly).

Configuration:

```
HOST - host of the requested service
PATH - uri path
ACCESS_CONTROL_ALLOW_ORIGIN - Access-Control-Allow-Origin value
ACCESS_CONTROL_ALLOW_HEADERS - Access-Control-Allow-Headers value
BEARER_TOKEN - security token
USERNAME - username for basic authentization
PASSWORD - password for basic authentization
```

Example environment variable key-value pair (without quotation marks):
```
"HOST" : "google.com"
"PATH" : "/index.php/rest/V1/products"
"ACCESS_CONTROL_ALLOW_ORIGIN" : "*"
"ACCESS_CONTROL_ALLOW_HEADERS" : "*"
"BEARER_TOKEN" : "xqxqoxop5jf5jrzbpxz9o4vqvt47akuou"
"USERNAME" : "makma"
"PASSWORD" : "easterEgg"
```

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/kontent-custom-element-samples/RequestRepeater?pixel)