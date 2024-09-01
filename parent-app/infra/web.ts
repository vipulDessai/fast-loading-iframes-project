const region = aws.getRegionOutput().name;

export const frontend = new sst.aws.StaticSite("Frontend", {
  path: "packages/frontend",
  build: {
    output: "dist",
    command: "npm i && npm run build",
  },
  environment: {
    VITE_REGION: region,
    VITE_CHILD_IFRAME_URL:
      $app.stage === "prod"
        ? "https://dw55ui6s3616k.cloudfront.net/index.html"
        : "http://localhost:3000",
  },
});
