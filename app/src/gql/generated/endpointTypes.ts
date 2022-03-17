/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AddContentsToLessonInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddDisciplinesToStudentInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddStudentsToDisciplineInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AuthInput = {
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  tokens: TokensType;
  user: User;
};

export type Content = {
  __typename?: 'Content';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  lesson: Lesson;
  linkContent?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContentAggregateGroupBy = {
  __typename?: 'ContentAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  linkContent?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContentConnection = {
  __typename?: 'ContentConnection';
  /** Array of nodes. */
  nodes: Array<Content>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ContentCountAggregate = {
  __typename?: 'ContentCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  linkContent?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ContentDeleteFilter = {
  and?: InputMaybe<Array<ContentDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  linkContent?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ContentDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ContentDeleteResponse = {
  __typename?: 'ContentDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  linkContent?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContentFilter = {
  and?: InputMaybe<Array<ContentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lesson?: InputMaybe<ContentFilterLessonFilter>;
  linkContent?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ContentFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ContentFilterLessonFilter = {
  and?: InputMaybe<Array<ContentFilterLessonFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ContentFilterLessonFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ContentMaxAggregate = {
  __typename?: 'ContentMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  linkContent?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContentMinAggregate = {
  __typename?: 'ContentMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  linkContent?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContentSort = {
  direction: SortDirection;
  field: ContentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ContentSortFields {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  LinkContent = 'linkContent',
  UpdatedAt = 'updatedAt'
}

export type ContentUpdateFilter = {
  and?: InputMaybe<Array<ContentUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  linkContent?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ContentUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CreateContentInput = {
  description: Scalars['String'];
  lessonId?: InputMaybe<Scalars['String']>;
  linkContent?: InputMaybe<Scalars['String']>;
};

export type CreateDisciplineInput = {
  name: Scalars['String'];
};

export type CreateLessonInput = {
  description: Scalars['String'];
};

export type CreateManyContentsInput = {
  /** Array of records to create */
  contents: Array<CreateContentInput>;
};

export type CreateManyDisciplinesInput = {
  /** Array of records to create */
  disciplines: Array<CreateDisciplineInput>;
};

export type CreateManyLessonsInput = {
  /** Array of records to create */
  lessons: Array<CreateLessonInput>;
};

export type CreateManyStudentsInput = {
  /** Array of records to create */
  students: Array<CreateStudent>;
};

export type CreateManyUserTokensInput = {
  /** Array of records to create */
  userTokens: Array<CreateUserToken>;
};

export type CreateManyUsersInput = {
  /** Array of records to create */
  users: Array<CreateUser>;
};

export type CreateOneContentInput = {
  /** The record to create */
  content: CreateContentInput;
};

export type CreateOneDisciplineInput = {
  /** The record to create */
  discipline: CreateDisciplineInput;
};

export type CreateOneLessonInput = {
  /** The record to create */
  lesson: CreateLessonInput;
};

export type CreateOneStudentInput = {
  /** The record to create */
  student: CreateStudent;
};

export type CreateOneUserInput = {
  /** The record to create */
  user: CreateUser;
};

export type CreateOneUserTokenInput = {
  /** The record to create */
  userToken: CreateUserToken;
};

export type CreateStudent = {
  key: Scalars['String'];
  name: Scalars['String'];
};

export type CreateUser = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type CreateUserToken = {
  expiresAt: Scalars['DateTime'];
  refreshToken: Scalars['String'];
  userId: Scalars['String'];
};

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime'];
  upper: Scalars['DateTime'];
};

export type DeleteManyContentsInput = {
  /** Filter to find records to delete */
  filter: ContentDeleteFilter;
};

export type DeleteManyDisciplinesInput = {
  /** Filter to find records to delete */
  filter: DisciplineDeleteFilter;
};

export type DeleteManyLessonsInput = {
  /** Filter to find records to delete */
  filter: LessonDeleteFilter;
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int'];
};

export type DeleteManyStudentsInput = {
  /** Filter to find records to delete */
  filter: StudentDeleteFilter;
};

export type DeleteManyUserTokensInput = {
  /** Filter to find records to delete */
  filter: UserTokenDeleteFilter;
};

export type DeleteManyUsersInput = {
  /** Filter to find records to delete */
  filter: UserDeleteFilter;
};

export type DeleteOneContentInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneDisciplineInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneLessonInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneStudentInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneUserInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneUserTokenInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type Discipline = {
  __typename?: 'Discipline';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  students?: Maybe<DisciplineStudentsConnection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type DisciplineStudentsArgs = {
  filter?: InputMaybe<StudentFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<StudentSort>>;
};

export type DisciplineAggregateGroupBy = {
  __typename?: 'DisciplineAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DisciplineConnection = {
  __typename?: 'DisciplineConnection';
  /** Array of nodes. */
  nodes: Array<Discipline>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type DisciplineCountAggregate = {
  __typename?: 'DisciplineCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type DisciplineDeleteFilter = {
  and?: InputMaybe<Array<DisciplineDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DisciplineDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type DisciplineDeleteResponse = {
  __typename?: 'DisciplineDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DisciplineFilter = {
  and?: InputMaybe<Array<DisciplineFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DisciplineFilter>>;
  students?: InputMaybe<DisciplineFilterStudentFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type DisciplineFilterStudentFilter = {
  and?: InputMaybe<Array<DisciplineFilterStudentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  key?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DisciplineFilterStudentFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type DisciplineMaxAggregate = {
  __typename?: 'DisciplineMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DisciplineMinAggregate = {
  __typename?: 'DisciplineMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DisciplineSort = {
  direction: SortDirection;
  field: DisciplineSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum DisciplineSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type DisciplineStudentsConnection = {
  __typename?: 'DisciplineStudentsConnection';
  /** Array of nodes. */
  nodes: Array<Student>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type DisciplineUpdateFilter = {
  and?: InputMaybe<Array<DisciplineUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DisciplineUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  iLike?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  neq?: InputMaybe<Scalars['ID']>;
  notILike?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  notLike?: InputMaybe<Scalars['ID']>;
};

export type Lesson = {
  __typename?: 'Lesson';
  contents?: Maybe<LessonContentsConnection>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type LessonContentsArgs = {
  filter?: InputMaybe<ContentFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ContentSort>>;
};

export type LessonAggregateGroupBy = {
  __typename?: 'LessonAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LessonConnection = {
  __typename?: 'LessonConnection';
  /** Array of nodes. */
  nodes: Array<Lesson>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type LessonContentsConnection = {
  __typename?: 'LessonContentsConnection';
  /** Array of nodes. */
  nodes: Array<Content>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type LessonCountAggregate = {
  __typename?: 'LessonCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type LessonDeleteFilter = {
  and?: InputMaybe<Array<LessonDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<LessonDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type LessonDeleteResponse = {
  __typename?: 'LessonDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LessonFilter = {
  and?: InputMaybe<Array<LessonFilter>>;
  contents?: InputMaybe<LessonFilterContentFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<LessonFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type LessonFilterContentFilter = {
  and?: InputMaybe<Array<LessonFilterContentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  linkContent?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<LessonFilterContentFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type LessonMaxAggregate = {
  __typename?: 'LessonMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LessonMinAggregate = {
  __typename?: 'LessonMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LessonSort = {
  direction: SortDirection;
  field: LessonSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum LessonSortFields {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type LessonUpdateFilter = {
  and?: InputMaybe<Array<LessonUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<LessonUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addContentsToLesson: Lesson;
  addDisciplinesToStudent: Student;
  addStudentsToDiscipline: Discipline;
  createManyContents: Array<Content>;
  createManyDisciplines: Array<Discipline>;
  createManyLessons: Array<Lesson>;
  createManyStudents: Array<Student>;
  createManyUserTokens: Array<UserToken>;
  createManyUsers: Array<User>;
  createOneContent: Content;
  createOneDiscipline: Discipline;
  createOneLesson: Lesson;
  createOneStudent: Student;
  createOneUser: User;
  createOneUserToken: UserToken;
  deleteManyContents: DeleteManyResponse;
  deleteManyDisciplines: DeleteManyResponse;
  deleteManyLessons: DeleteManyResponse;
  deleteManyStudents: DeleteManyResponse;
  deleteManyUserTokens: DeleteManyResponse;
  deleteManyUsers: DeleteManyResponse;
  deleteOneContent: ContentDeleteResponse;
  deleteOneDiscipline: DisciplineDeleteResponse;
  deleteOneLesson: LessonDeleteResponse;
  deleteOneStudent: StudentDeleteResponse;
  deleteOneUser: UserDeleteResponse;
  deleteOneUserToken: UserTokenDeleteResponse;
  login: AuthResponse;
  removeContentsFromLesson: Lesson;
  removeDisciplinesFromStudent: Student;
  removeLessonFromContent: Content;
  removeStudentsFromDiscipline: Discipline;
  removeUserFromUserToken: UserToken;
  restoreManyStudents: UpdateManyResponse;
  restoreManyUsers: UpdateManyResponse;
  restoreOneStudent: Student;
  restoreOneUser: User;
  setContentsOnLesson: Lesson;
  setDisciplinesOnStudent: Student;
  setLessonOnContent: Content;
  setStudentsOnDiscipline: Discipline;
  setUserOnUserToken: UserToken;
  updateManyContents: UpdateManyResponse;
  updateManyDisciplines: UpdateManyResponse;
  updateManyLessons: UpdateManyResponse;
  updateManyStudents: UpdateManyResponse;
  updateManyUserTokens: UpdateManyResponse;
  updateManyUsers: UpdateManyResponse;
  updateOneContent: Content;
  updateOneDiscipline: Discipline;
  updateOneLesson: Lesson;
  updateOneStudent: Student;
  updateOneUser: User;
  updateOneUserToken: UserToken;
};


export type MutationAddContentsToLessonArgs = {
  input: AddContentsToLessonInput;
};


export type MutationAddDisciplinesToStudentArgs = {
  input: AddDisciplinesToStudentInput;
};


export type MutationAddStudentsToDisciplineArgs = {
  input: AddStudentsToDisciplineInput;
};


export type MutationCreateManyContentsArgs = {
  input: CreateManyContentsInput;
};


export type MutationCreateManyDisciplinesArgs = {
  input: CreateManyDisciplinesInput;
};


export type MutationCreateManyLessonsArgs = {
  input: CreateManyLessonsInput;
};


export type MutationCreateManyStudentsArgs = {
  input: CreateManyStudentsInput;
};


export type MutationCreateManyUserTokensArgs = {
  input: CreateManyUserTokensInput;
};


export type MutationCreateManyUsersArgs = {
  input: CreateManyUsersInput;
};


export type MutationCreateOneContentArgs = {
  input: CreateOneContentInput;
};


export type MutationCreateOneDisciplineArgs = {
  input: CreateOneDisciplineInput;
};


export type MutationCreateOneLessonArgs = {
  input: CreateOneLessonInput;
};


export type MutationCreateOneStudentArgs = {
  input: CreateOneStudentInput;
};


export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput;
};


export type MutationCreateOneUserTokenArgs = {
  input: CreateOneUserTokenInput;
};


export type MutationDeleteManyContentsArgs = {
  input: DeleteManyContentsInput;
};


export type MutationDeleteManyDisciplinesArgs = {
  input: DeleteManyDisciplinesInput;
};


export type MutationDeleteManyLessonsArgs = {
  input: DeleteManyLessonsInput;
};


export type MutationDeleteManyStudentsArgs = {
  input: DeleteManyStudentsInput;
};


export type MutationDeleteManyUserTokensArgs = {
  input: DeleteManyUserTokensInput;
};


export type MutationDeleteManyUsersArgs = {
  input: DeleteManyUsersInput;
};


export type MutationDeleteOneContentArgs = {
  input: DeleteOneContentInput;
};


export type MutationDeleteOneDisciplineArgs = {
  input: DeleteOneDisciplineInput;
};


export type MutationDeleteOneLessonArgs = {
  input: DeleteOneLessonInput;
};


export type MutationDeleteOneStudentArgs = {
  input: DeleteOneStudentInput;
};


export type MutationDeleteOneUserArgs = {
  input: DeleteOneUserInput;
};


export type MutationDeleteOneUserTokenArgs = {
  input: DeleteOneUserTokenInput;
};


export type MutationLoginArgs = {
  input: AuthInput;
};


export type MutationRemoveContentsFromLessonArgs = {
  input: RemoveContentsFromLessonInput;
};


export type MutationRemoveDisciplinesFromStudentArgs = {
  input: RemoveDisciplinesFromStudentInput;
};


export type MutationRemoveLessonFromContentArgs = {
  input: RemoveLessonFromContentInput;
};


export type MutationRemoveStudentsFromDisciplineArgs = {
  input: RemoveStudentsFromDisciplineInput;
};


export type MutationRemoveUserFromUserTokenArgs = {
  input: RemoveUserFromUserTokenInput;
};


export type MutationRestoreManyStudentsArgs = {
  input: StudentFilter;
};


export type MutationRestoreManyUsersArgs = {
  input: UserFilter;
};


export type MutationRestoreOneStudentArgs = {
  input: Scalars['ID'];
};


export type MutationRestoreOneUserArgs = {
  input: Scalars['ID'];
};


export type MutationSetContentsOnLessonArgs = {
  input: SetContentsOnLessonInput;
};


export type MutationSetDisciplinesOnStudentArgs = {
  input: SetDisciplinesOnStudentInput;
};


export type MutationSetLessonOnContentArgs = {
  input: SetLessonOnContentInput;
};


export type MutationSetStudentsOnDisciplineArgs = {
  input: SetStudentsOnDisciplineInput;
};


export type MutationSetUserOnUserTokenArgs = {
  input: SetUserOnUserTokenInput;
};


export type MutationUpdateManyContentsArgs = {
  input: UpdateManyContentsInput;
};


export type MutationUpdateManyDisciplinesArgs = {
  input: UpdateManyDisciplinesInput;
};


export type MutationUpdateManyLessonsArgs = {
  input: UpdateManyLessonsInput;
};


export type MutationUpdateManyStudentsArgs = {
  input: UpdateManyStudentsInput;
};


export type MutationUpdateManyUserTokensArgs = {
  input: UpdateManyUserTokensInput;
};


export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUsersInput;
};


export type MutationUpdateOneContentArgs = {
  input: UpdateOneContentInput;
};


export type MutationUpdateOneDisciplineArgs = {
  input: UpdateOneDisciplineInput;
};


export type MutationUpdateOneLessonArgs = {
  input: UpdateOneLessonInput;
};


export type MutationUpdateOneStudentArgs = {
  input: UpdateOneStudentInput;
};


export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput;
};


export type MutationUpdateOneUserTokenArgs = {
  input: UpdateOneUserTokenInput;
};

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  content?: Maybe<Content>;
  contents: ContentConnection;
  discipline?: Maybe<Discipline>;
  disciplines: DisciplineConnection;
  lesson?: Maybe<Lesson>;
  lessons: LessonConnection;
  me: User;
  student?: Maybe<Student>;
  students: StudentConnection;
  user?: Maybe<User>;
  userToken?: Maybe<UserToken>;
  userTokens: UserTokenConnection;
  users: UserConnection;
};


export type QueryContentArgs = {
  id: Scalars['ID'];
};


export type QueryContentsArgs = {
  filter?: InputMaybe<ContentFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ContentSort>>;
};


export type QueryDisciplineArgs = {
  id: Scalars['ID'];
};


export type QueryDisciplinesArgs = {
  filter?: InputMaybe<DisciplineFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<DisciplineSort>>;
};


export type QueryLessonArgs = {
  id: Scalars['ID'];
};


export type QueryLessonsArgs = {
  filter?: InputMaybe<LessonFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<LessonSort>>;
};


export type QueryStudentArgs = {
  id: Scalars['ID'];
};


export type QueryStudentsArgs = {
  filter?: InputMaybe<StudentFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<StudentSort>>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUserTokenArgs = {
  id: Scalars['ID'];
};


export type QueryUserTokensArgs = {
  filter?: InputMaybe<UserTokenFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<UserTokenSort>>;
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<UserSort>>;
};

export type RemoveContentsFromLessonInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveDisciplinesFromStudentInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveLessonFromContentInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveStudentsFromDisciplineInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveUserFromUserTokenInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetContentsOnLessonInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetDisciplinesOnStudentInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetLessonOnContentInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetStudentsOnDisciplineInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetUserOnUserTokenInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  iLike?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  notILike?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  notLike?: InputMaybe<Scalars['String']>;
};

export type Student = {
  __typename?: 'Student';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  disciplines?: Maybe<StudentDisciplinesConnection>;
  id: Scalars['ID'];
  key: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type StudentDisciplinesArgs = {
  filter?: InputMaybe<DisciplineFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<DisciplineSort>>;
};

export type StudentAggregateGroupBy = {
  __typename?: 'StudentAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StudentConnection = {
  __typename?: 'StudentConnection';
  /** Array of nodes. */
  nodes: Array<Student>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type StudentCountAggregate = {
  __typename?: 'StudentCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type StudentDeleteFilter = {
  and?: InputMaybe<Array<StudentDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  key?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<StudentDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type StudentDeleteResponse = {
  __typename?: 'StudentDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StudentDisciplinesConnection = {
  __typename?: 'StudentDisciplinesConnection';
  /** Array of nodes. */
  nodes: Array<Discipline>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type StudentFilter = {
  and?: InputMaybe<Array<StudentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  disciplines?: InputMaybe<StudentFilterDisciplineFilter>;
  id?: InputMaybe<IdFilterComparison>;
  key?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<StudentFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type StudentFilterDisciplineFilter = {
  and?: InputMaybe<Array<StudentFilterDisciplineFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<StudentFilterDisciplineFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type StudentMaxAggregate = {
  __typename?: 'StudentMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StudentMinAggregate = {
  __typename?: 'StudentMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StudentSort = {
  direction: SortDirection;
  field: StudentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum StudentSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Key = 'key',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type StudentUpdateFilter = {
  and?: InputMaybe<Array<StudentUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  key?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<StudentUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type TokensType = {
  __typename?: 'TokensType';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type UpdateContentInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lessonId?: InputMaybe<Scalars['String']>;
  linkContent?: InputMaybe<Scalars['String']>;
};

export type UpdateDisciplineInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateLessonInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type UpdateManyContentsInput = {
  /** Filter used to find fields to update */
  filter: ContentUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateContentInput;
};

export type UpdateManyDisciplinesInput = {
  /** Filter used to find fields to update */
  filter: DisciplineUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateDisciplineInput;
};

export type UpdateManyLessonsInput = {
  /** Filter used to find fields to update */
  filter: LessonUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateLessonInput;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int'];
};

export type UpdateManyStudentsInput = {
  /** Filter used to find fields to update */
  filter: StudentUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateStudent;
};

export type UpdateManyUserTokensInput = {
  /** Filter used to find fields to update */
  filter: UserTokenUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateUserToken;
};

export type UpdateManyUsersInput = {
  /** Filter used to find fields to update */
  filter: UserUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateUser;
};

export type UpdateOneContentInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateContentInput;
};

export type UpdateOneDisciplineInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateDisciplineInput;
};

export type UpdateOneLessonInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateLessonInput;
};

export type UpdateOneStudentInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateStudent;
};

export type UpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateUser;
};

export type UpdateOneUserTokenInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateUserToken;
};

export type UpdateStudent = {
  key?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateUser = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UpdateUserToken = {
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserAggregateGroupBy = {
  __typename?: 'UserAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  /** Array of nodes. */
  nodes: Array<User>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type UserDeleteFilter = {
  and?: InputMaybe<Array<UserDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserFilter = {
  and?: InputMaybe<Array<UserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type UserToken = {
  __typename?: 'UserToken';
  expiresAt: Scalars['DateTime'];
  id: Scalars['ID'];
  refreshToken: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type UserTokenAggregateGroupBy = {
  __typename?: 'UserTokenAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
  refreshToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserTokenConnection = {
  __typename?: 'UserTokenConnection';
  /** Array of nodes. */
  nodes: Array<UserToken>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type UserTokenCountAggregate = {
  __typename?: 'UserTokenCountAggregate';
  id?: Maybe<Scalars['Int']>;
  refreshToken?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UserTokenDeleteFilter = {
  and?: InputMaybe<Array<UserTokenDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserTokenDeleteFilter>>;
  refreshToken?: InputMaybe<StringFieldComparison>;
  userId?: InputMaybe<StringFieldComparison>;
};

export type UserTokenDeleteResponse = {
  __typename?: 'UserTokenDeleteResponse';
  expiresAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  refreshToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserTokenFilter = {
  and?: InputMaybe<Array<UserTokenFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserTokenFilter>>;
  refreshToken?: InputMaybe<StringFieldComparison>;
  user?: InputMaybe<UserTokenFilterUserFilter>;
  userId?: InputMaybe<StringFieldComparison>;
};

export type UserTokenFilterUserFilter = {
  and?: InputMaybe<Array<UserTokenFilterUserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserTokenFilterUserFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserTokenMaxAggregate = {
  __typename?: 'UserTokenMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  refreshToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserTokenMinAggregate = {
  __typename?: 'UserTokenMinAggregate';
  id?: Maybe<Scalars['ID']>;
  refreshToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserTokenSort = {
  direction: SortDirection;
  field: UserTokenSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserTokenSortFields {
  Id = 'id',
  RefreshToken = 'refreshToken',
  UserId = 'userId'
}

export type UserTokenUpdateFilter = {
  and?: InputMaybe<Array<UserTokenUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserTokenUpdateFilter>>;
  refreshToken?: InputMaybe<StringFieldComparison>;
  userId?: InputMaybe<StringFieldComparison>;
};

export type UserUpdateFilter = {
  and?: InputMaybe<Array<UserUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createOneUser: { __typename?: 'User', id: string, name: string, email: string } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', user: { __typename?: 'User', id: string, name: string, email: string }, tokens: { __typename?: 'TokensType', accessToken: string, refreshToken: string } } };

export type FindUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type FindUsersQuery = { __typename?: 'Query', users: { __typename?: 'UserConnection', totalCount: number, nodes: Array<{ __typename?: 'User', id: string, name: string, email: string }> } };

export type GetStudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStudentsQuery = { __typename?: 'Query', students: { __typename?: 'StudentConnection', totalCount: number, nodes: Array<{ __typename?: 'Student', id: string, key: string, name: string }> } };


export const CreateUserDocument = gql`
    mutation createUser($name: String!, $email: String!, $password: String!) {
  createOneUser(input: {user: {name: $name, email: $email, password: $password}}) {
    id
    name
    email
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(input: {email: $email, password: $password}) {
    user {
      id
      name
      email
    }
    tokens {
      accessToken
      refreshToken
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const FindUsersDocument = gql`
    query findUsers {
  users {
    totalCount
    nodes {
      id
      name
      email
    }
  }
}
    `;

/**
 * __useFindUsersQuery__
 *
 * To run a query within a React component, call `useFindUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindUsersQuery(baseOptions?: Apollo.QueryHookOptions<FindUsersQuery, FindUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUsersQuery, FindUsersQueryVariables>(FindUsersDocument, options);
      }
export function useFindUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUsersQuery, FindUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUsersQuery, FindUsersQueryVariables>(FindUsersDocument, options);
        }
export type FindUsersQueryHookResult = ReturnType<typeof useFindUsersQuery>;
export type FindUsersLazyQueryHookResult = ReturnType<typeof useFindUsersLazyQuery>;
export type FindUsersQueryResult = Apollo.QueryResult<FindUsersQuery, FindUsersQueryVariables>;
export const GetStudentsDocument = gql`
    query getStudents {
  students {
    nodes {
      id
      key
      name
    }
    totalCount
  }
}
    `;

/**
 * __useGetStudentsQuery__
 *
 * To run a query within a React component, call `useGetStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStudentsQuery(baseOptions?: Apollo.QueryHookOptions<GetStudentsQuery, GetStudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStudentsQuery, GetStudentsQueryVariables>(GetStudentsDocument, options);
      }
export function useGetStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStudentsQuery, GetStudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStudentsQuery, GetStudentsQueryVariables>(GetStudentsDocument, options);
        }
export type GetStudentsQueryHookResult = ReturnType<typeof useGetStudentsQuery>;
export type GetStudentsLazyQueryHookResult = ReturnType<typeof useGetStudentsLazyQuery>;
export type GetStudentsQueryResult = Apollo.QueryResult<GetStudentsQuery, GetStudentsQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    