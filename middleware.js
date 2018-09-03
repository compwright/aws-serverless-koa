'use strict';

module.exports = (options = {}) => async function apiGatewayEventParser (ctx, next) {
  const reqPropKey = options.reqPropKey || 'apiGateway';
  const deleteHeaders = options.deleteHeaders === undefined ? true : options.deleteHeaders;

  if (!ctx.headers['x-apigateway-event'] || !ctx.headers['x-apigateway-context']) {
    throw new Error('Missing x-apigateway-event or x-apigateway-context header(s)');
  }

  ctx.request[reqPropKey] = {
    event: JSON.parse(decodeURIComponent(ctx.headers['x-apigateway-event'])),
    context: JSON.parse(decodeURIComponent(ctx.headers['x-apigateway-context']))
  };

  if (deleteHeaders) {
    delete ctx.headers['x-apigateway-event'];
    delete ctx.headers['x-apigateway-context'];
  }

  await next();
};
