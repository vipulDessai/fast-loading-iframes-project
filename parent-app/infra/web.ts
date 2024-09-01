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
        ? "https://d265hohjoe5m4b.cloudfront.net"
        : "http://localhost:3000",
  },
});
