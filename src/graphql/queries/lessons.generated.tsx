import type * as Types from "../type.interface";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type LessonsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type LessonsQueryResponse = { __typename?: "Query" } & {
  lessons: Array<
    { __typename?: "lesson" } & Pick<
      Types.Lesson,
      | "[object Object]"
      | "[object Object]"
      | "[object Object]"
      | "[object Object]"
    >
  >;
};

export const LessonsDocument = gql`
  query lessons {
    lessons {
      id
      name
      startDate
      endDate
    }
  }
`;
export function useLessonsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    LessonsQueryResponse,
    LessonsQueryVariables
  >
) {
  return Apollo.useQuery<LessonsQueryResponse, LessonsQueryVariables>(
    LessonsDocument,
    baseOptions
  );
}
export function useLessonsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LessonsQueryResponse,
    LessonsQueryVariables
  >
) {
  return Apollo.useLazyQuery<LessonsQueryResponse, LessonsQueryVariables>(
    LessonsDocument,
    baseOptions
  );
}
export type LessonsQueryHookResult = ReturnType<typeof useLessonsQuery>;
export type LessonsLazyQueryHookResult = ReturnType<typeof useLessonsLazyQuery>;
export type LessonsQueryResult = Apollo.QueryResult<
  LessonsQueryResponse,
  LessonsQueryVariables
>;
