import { UserApi } from "./__generated__/typescript-fetch/apis/UserApi";

const userApi = new UserApi();

const res = await userApi.getUserByName({ username: "hoge" });

import createClient, { Middleware } from "openapi-fetch";
import { paths } from "./__generated__/openapi-typescript/schema";

const client = createClient<paths>();

const middleware: Middleware = {
  async onRequest(req) {
    const token = await getToken();

    if (token) {
      req.headers.set("Authorization", `Bearer ${token}`);
    }

    return req;
  },
};

client.use(middleware);

const res = client.GET("/user/{username}", {
  params: {
    path: {
      username: "hoge",
    },
  },
});
