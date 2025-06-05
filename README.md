# Express in Lambda
Running express server inside an AWS Lamba thus allowing multiple endpoints.
Please make sure to have Node installed and your aws credentials are correctly setup.

# Usage
```npm install```

```serverless deploy```

#### Run from the terminal - you may need to change the endpoint address:
```curl https://hlue996n43.execute-api.eu-west-1.amazonaws.com/dev/getsecret```

#### To run the simple node app to fetch data from the api:
```node frontui/main.js```
