const { createServer, IncomingMessage, ServerResponse } = require("http");
const { parse } = require("url");
const next = require("next");
const serverless = require("serverless-http");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const server = createServer((req: any, res: any) => {
  const parsedUrl = parse(req.url, true);
  handle(req, res, parsedUrl);
});

module.exports.server = serverless(server);
