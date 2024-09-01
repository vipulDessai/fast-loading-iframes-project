/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "fast-loading-iframes-project-parent",
      removal: "remove",
      home: "aws",
    };
  },
  async run() {
    await import("./infra/web");

    return {
      Region: aws.getRegionOutput().name,
    };
  },
});
