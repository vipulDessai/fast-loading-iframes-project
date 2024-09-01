# SST

# tutorial

## how to create/deplpy vite react app

- repository - https://github.com/sst/demo-notes-app/
- https://guide.sst.dev/chapters/create-a-new-reactjs-app.html

# Development

## update the env file

```ts
/* tslint:disable */
/* eslint-disable */
import "sst";
declare module "sst" {
  export interface Resource {
    MyApi: {
      type: "sst.aws.ApiGatewayV2";
      url: string;
    };
    MyBucket: {
      name: string;
      type: "sst.aws.Bucket";
    };
  }
}
export {};
```

## start the dev server

### windows (requires WSL or docker)

```properties
docker compose build --no-cache
# or
docker compose up

docker run -it -v D:\repositories\fast-loading-iframes-project\fast-loading-iframes-project-parent:/server -v C:\Users\badga\.aws:/root/.aws -p 5173:5173 --name fast-loading-iframes-project-parent fastiframeparent:1.0
```

```properties
npm run dev
```

# Deploy

## SST - needs linux / ubuntu

- deploy
  - npx sst deploy --stage prod

# TODO

- implement github actions for building and deploying the app
