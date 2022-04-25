import type * as Types from "../type.interface";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type SignInMutationVariables = Types.Exact<{
  username: Types.Scalars["String"];
  password: Types.Scalars["String"];
}>;

export type SignInMutationResponse = { __typename?: "Mutation" } & {
  signIn: { __typename?: "jwt" } & Pick<Types.Jwt, "[object Object]">;
};

export const SignInDocument = gql`
  mutation signIn($username: String!, $password: String!) {
    signIn(username: $username, password: $password) {
      accessToken
    }
  }
`;
export function useSignInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignInMutationResponse,
    SignInMutationVariables
  >
) {
  return Apollo.useMutation<SignInMutationResponse, SignInMutationVariables>(
    SignInDocument,
    baseOptions
  );
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<
  SignInMutationResponse
>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<
  SignInMutationResponse,
  SignInMutationVariables
>;
