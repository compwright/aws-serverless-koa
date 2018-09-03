# aws-serverless-koa

This library enables you to utilize AWS Lambda and Amazon API Gateway to respond to web and API requests using the Koa.js application framework

## Installation

```bash
$ npm install --save aws-serverless-koa
```

## Usage

```javascript
const Koa = require('koa');
const serverless = require('aws-serverless-koa');

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello, world!';
});

module.exports.handler = serverless(app);
```

## Middleware

This package includes middleware to easily get the event object Lambda receives from API Gateway (based on `aws-serverless-express/middleware`):

```
const awsServerlessKoaMiddleware = require('aws-serverless-koa/middleware');
app.use(awsServerlessKoaMiddleware());
app.use(ctx => {
  ctx.body = ctx.apiGateway.event
});
```

## License

MIT license
