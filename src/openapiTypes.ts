import { operations } from "./__generated__/openapi-typescript/schema";

export type RequestParametersType<T extends keyof operations> =
  operations[T] extends {
    parameters: infer P;
  }
    ? P
    : never;
type GetUserByNameParams = RequestParametersType<"getUserByName">;

export type RequestBodyType<T extends keyof operations> =
  operations[T] extends {
    requestBody: {
      content: { "application/json": infer R };
    };
  }
    ? R
    : never;
type UpdateUserRequestBody = RequestBodyType<"updateUser">;

export type ResponseContentType<T extends keyof operations> =
  operations[T] extends {
    responses: {
      200: {
        content: infer R;
      };
    };
  }
    ? operations[T]["responses"][200]["content"][keyof operations[T]["responses"][200]["content"]]
    : never;

type GetUserByNameResponse = ResponseContentType<"getUserByName">;
