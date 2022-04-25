import type * as Types from "../type.interface";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type LessonQueryVariables = Types.Exact<{
  id: Types.Scalars["String"];
}>;

export type LessonQueryResponse = { __typename?: "Query" } & {
  lesson: { __typename?: "lesson" } & Pick<
    Types.Lesson,
    | "[object Object]"
    | "[object Object]"
    | "[object Object]"
    | "[object Object]"
  >;
};

export const LessonDocument = gql`
  query lesson($id: String!) {
    lesson(id: $id) {
      id
      name
      startDate
      endDate
    }
  }
`;
export function useLessonQuery(
  baseOptions?: Apollo.QueryHookOptions<
    LessonQueryResponse,
    LessonQueryVariables
  >
) {
  return Apollo.useQuery<LessonQueryResponse, LessonQueryVariables>(
    LessonDocument,
    baseOptions
  );
}
export function useLessonLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LessonQueryResponse,
    LessonQueryVariables
  >
) {
  return Apollo.useLazyQuery<LessonQueryResponse, LessonQueryVariables>(
    LessonDocument,
    baseOptions
  );
}
export type LessonQueryHookResult = ReturnType<typeof useLessonQuery>;
export type LessonLazyQueryHookResult = ReturnType<typeof useLessonLazyQuery>;
export type LessonQueryResult = Apollo.QueryResult<
  LessonQueryResponse,
  LessonQueryVariables
>;
