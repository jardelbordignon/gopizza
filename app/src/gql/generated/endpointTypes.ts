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
  UploadScalar: any;
};

export type CreateManyProductsInput = {
  /** Array of records to create */
  products: Array<CustomCreateOneProduct>;
};

export type CreateManyUserTokensInput = {
  /** Array of records to create */
  userTokens: Array<CreateUserToken>;
};

export type CreateManyUsersInput = {
  /** Array of records to create */
  users: Array<CreateUser>;
};

export type CreateOneProductInput = {
  /** The record to create */
  product: CustomCreateOneProduct;
};

export type CreateOneUserInput = {
  /** The record to create */
  user: CreateUser;
};

export type CreateOneUserTokenInput = {
  /** The record to create */
  userToken: CreateUserToken;
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

export type CustomCreateOneProduct = {
  description: Scalars['String'];
  imageFile: Scalars['UploadScalar'];
  name: Scalars['String'];
  priceSizeG: Scalars['Float'];
  priceSizeM: Scalars['Float'];
  priceSizeP: Scalars['Float'];
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

export type DeleteManyProductsInput = {
  /** Filter to find records to delete */
  filter: ProductDeleteFilter;
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int'];
};

export type DeleteManyUserTokensInput = {
  /** Filter to find records to delete */
  filter: UserTokenDeleteFilter;
};

export type DeleteManyUsersInput = {
  /** Filter to find records to delete */
  filter: UserDeleteFilter;
};

export type DeleteOneProductInput = {
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

export type LoginInput = {
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  tokens: TokensType;
  user: User;
};

export type LogoutInput = {
  userId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyProducts: Array<Product>;
  createManyUserTokens: Array<UserToken>;
  createManyUsers: Array<User>;
  createOneProduct: Product;
  createOneUser: User;
  createOneUserToken: UserToken;
  customCreateOneProduct: Product;
  customUpdateOneProduct: Product;
  deleteManyProducts: DeleteManyResponse;
  deleteManyUserTokens: DeleteManyResponse;
  deleteManyUsers: DeleteManyResponse;
  deleteOneProduct: ProductDeleteResponse;
  deleteOneUser: UserDeleteResponse;
  deleteOneUserToken: UserTokenDeleteResponse;
  login: LoginResponse;
  logout: Scalars['Boolean'];
  removeUserFromUserToken: UserToken;
  resetPassword: Scalars['Boolean'];
  restoreManyProducts: UpdateManyResponse;
  restoreManyUsers: UpdateManyResponse;
  restoreOneProduct: Product;
  restoreOneUser: User;
  sendPasswordResetEmail: Scalars['Boolean'];
  setUserOnUserToken: UserToken;
  updateManyProducts: UpdateManyResponse;
  updateManyUserTokens: UpdateManyResponse;
  updateManyUsers: UpdateManyResponse;
  updateOneProduct: Product;
  updateOneUser: User;
  updateOneUserToken: UserToken;
};


export type MutationCreateManyProductsArgs = {
  input: CreateManyProductsInput;
};


export type MutationCreateManyUserTokensArgs = {
  input: CreateManyUserTokensInput;
};


export type MutationCreateManyUsersArgs = {
  input: CreateManyUsersInput;
};


export type MutationCreateOneProductArgs = {
  input: CreateOneProductInput;
};


export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput;
};


export type MutationCreateOneUserTokenArgs = {
  input: CreateOneUserTokenInput;
};


export type MutationCustomCreateOneProductArgs = {
  input: CustomCreateOneProduct;
};


export type MutationCustomUpdateOneProductArgs = {
  input: UpdateProduct;
};


export type MutationDeleteManyProductsArgs = {
  input: DeleteManyProductsInput;
};


export type MutationDeleteManyUserTokensArgs = {
  input: DeleteManyUserTokensInput;
};


export type MutationDeleteManyUsersArgs = {
  input: DeleteManyUsersInput;
};


export type MutationDeleteOneProductArgs = {
  input: DeleteOneProductInput;
};


export type MutationDeleteOneUserArgs = {
  input: DeleteOneUserInput;
};


export type MutationDeleteOneUserTokenArgs = {
  input: DeleteOneUserTokenInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationLogoutArgs = {
  input: LogoutInput;
};


export type MutationRemoveUserFromUserTokenArgs = {
  input: RemoveUserFromUserTokenInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationRestoreManyProductsArgs = {
  input: ProductFilter;
};


export type MutationRestoreManyUsersArgs = {
  input: UserFilter;
};


export type MutationRestoreOneProductArgs = {
  input: Scalars['ID'];
};


export type MutationRestoreOneUserArgs = {
  input: Scalars['ID'];
};


export type MutationSendPasswordResetEmailArgs = {
  input: SendPasswordResetEmailInput;
};


export type MutationSetUserOnUserTokenArgs = {
  input: SetUserOnUserTokenInput;
};


export type MutationUpdateManyProductsArgs = {
  input: UpdateManyProductsInput;
};


export type MutationUpdateManyUserTokensArgs = {
  input: UpdateManyUserTokensInput;
};


export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUsersInput;
};


export type MutationUpdateOneProductArgs = {
  input: UpdateOneProductInput;
};


export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput;
};


export type MutationUpdateOneUserTokenArgs = {
  input: UpdateOneUserTokenInput;
};

export type NumberFieldComparison = {
  between?: InputMaybe<NumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
  notBetween?: InputMaybe<NumberFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars['Float'];
  upper: Scalars['Float'];
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

export type Product = {
  __typename?: 'Product';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  priceSizeG: Scalars['Float'];
  priceSizeM: Scalars['Float'];
  priceSizeP: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductAggregateGroupBy = {
  __typename?: 'ProductAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  priceSizeG?: Maybe<Scalars['Float']>;
  priceSizeM?: Maybe<Scalars['Float']>;
  priceSizeP?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  priceSizeG?: Maybe<Scalars['Float']>;
  priceSizeM?: Maybe<Scalars['Float']>;
  priceSizeP?: Maybe<Scalars['Float']>;
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** Array of nodes. */
  nodes: Array<Product>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  priceSizeG?: Maybe<Scalars['Int']>;
  priceSizeM?: Maybe<Scalars['Int']>;
  priceSizeP?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ProductDeleteFilter = {
  and?: InputMaybe<Array<ProductDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductDeleteFilter>>;
  priceSizeG?: InputMaybe<NumberFieldComparison>;
  priceSizeM?: InputMaybe<NumberFieldComparison>;
  priceSizeP?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductDeleteResponse = {
  __typename?: 'ProductDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  imageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priceSizeG?: Maybe<Scalars['Float']>;
  priceSizeM?: Maybe<Scalars['Float']>;
  priceSizeP?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductFilter = {
  and?: InputMaybe<Array<ProductFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilter>>;
  priceSizeG?: InputMaybe<NumberFieldComparison>;
  priceSizeM?: InputMaybe<NumberFieldComparison>;
  priceSizeP?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  priceSizeG?: Maybe<Scalars['Float']>;
  priceSizeM?: Maybe<Scalars['Float']>;
  priceSizeP?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  priceSizeG?: Maybe<Scalars['Float']>;
  priceSizeM?: Maybe<Scalars['Float']>;
  priceSizeP?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductSort = {
  direction: SortDirection;
  field: ProductSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProductSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  PriceSizeG = 'priceSizeG',
  PriceSizeM = 'priceSizeM',
  PriceSizeP = 'priceSizeP',
  UpdatedAt = 'updatedAt'
}

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  priceSizeG?: Maybe<Scalars['Float']>;
  priceSizeM?: Maybe<Scalars['Float']>;
  priceSizeP?: Maybe<Scalars['Float']>;
};

export type ProductUpdateFilter = {
  and?: InputMaybe<Array<ProductUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductUpdateFilter>>;
  priceSizeG?: InputMaybe<NumberFieldComparison>;
  priceSizeM?: InputMaybe<NumberFieldComparison>;
  priceSizeP?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type Query = {
  __typename?: 'Query';
  me: User;
  product?: Maybe<Product>;
  products: ProductConnection;
  user?: Maybe<User>;
  userToken?: Maybe<UserToken>;
  userTokens: UserTokenConnection;
  users: UserConnection;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryProductsArgs = {
  filter?: InputMaybe<ProductFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProductSort>>;
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

export type RemoveUserFromUserTokenInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type ResetPasswordInput = {
  password: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type SendPasswordResetEmailInput = {
  email: Scalars['String'];
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

export type TokensType = {
  __typename?: 'TokensType';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type UpdateManyProductsInput = {
  /** Filter used to find fields to update */
  filter: ProductUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProduct;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int'];
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

export type UpdateOneProductInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateProduct;
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

export type UpdateProduct = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  imageFile?: InputMaybe<Scalars['UploadScalar']>;
  name?: InputMaybe<Scalars['String']>;
  priceSizeG?: InputMaybe<Scalars['Float']>;
  priceSizeM?: InputMaybe<Scalars['Float']>;
  priceSizeP?: InputMaybe<Scalars['Float']>;
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


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', user: { __typename?: 'User', id: string, name: string, email: string }, tokens: { __typename?: 'TokensType', accessToken: string, refreshToken: string } } };

export type LogoutMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type SendPasswordResetEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type SendPasswordResetEmailMutation = { __typename?: 'Mutation', sendPasswordResetEmail: boolean };

export type ResetPasswordMutationVariables = Exact<{
  refreshToken: Scalars['String'];
  password: Scalars['String'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: boolean };

export type FindUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type FindUsersQuery = { __typename?: 'Query', users: { __typename?: 'UserConnection', totalCount: number, nodes: Array<{ __typename?: 'User', id: string, name: string, email: string }> } };

export type CustomCreateOneProductMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
  imageFile: Scalars['UploadScalar'];
  priceSizeP: Scalars['Float'];
  priceSizeM: Scalars['Float'];
  priceSizeG: Scalars['Float'];
}>;


export type CustomCreateOneProductMutation = { __typename?: 'Mutation', customCreateOneProduct: { __typename?: 'Product', description: string, id: string, imageUrl?: string | null, name: string, priceSizeP: number, priceSizeM: number, priceSizeG: number } };

export type CustomUpdateOneProductMutationVariables = Exact<{
  id: Scalars['String'];
  imageFile?: InputMaybe<Scalars['UploadScalar']>;
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  priceSizeP?: InputMaybe<Scalars['Float']>;
  priceSizeM?: InputMaybe<Scalars['Float']>;
  priceSizeG?: InputMaybe<Scalars['Float']>;
}>;


export type CustomUpdateOneProductMutation = { __typename?: 'Mutation', customUpdateOneProduct: { __typename?: 'Product', description: string, id: string, imageUrl?: string | null, name: string, priceSizeP: number, priceSizeM: number, priceSizeG: number } };

export type ProductsQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  filter?: InputMaybe<Scalars['String']>;
}>;


export type ProductsQuery = { __typename?: 'Query', products: { __typename?: 'ProductConnection', totalCount: number, pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Product', id: string, name: string, description: string, imageUrl?: string | null, priceSizeP: number, priceSizeM: number, priceSizeG: number }> } };


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
export const LogoutDocument = gql`
    mutation logout($userId: String!) {
  logout(input: {userId: $userId})
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const SendPasswordResetEmailDocument = gql`
    mutation sendPasswordResetEmail($email: String!) {
  sendPasswordResetEmail(input: {email: $email})
}
    `;
export type SendPasswordResetEmailMutationFn = Apollo.MutationFunction<SendPasswordResetEmailMutation, SendPasswordResetEmailMutationVariables>;

/**
 * __useSendPasswordResetEmailMutation__
 *
 * To run a mutation, you first call `useSendPasswordResetEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendPasswordResetEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendPasswordResetEmailMutation, { data, loading, error }] = useSendPasswordResetEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSendPasswordResetEmailMutation(baseOptions?: Apollo.MutationHookOptions<SendPasswordResetEmailMutation, SendPasswordResetEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendPasswordResetEmailMutation, SendPasswordResetEmailMutationVariables>(SendPasswordResetEmailDocument, options);
      }
export type SendPasswordResetEmailMutationHookResult = ReturnType<typeof useSendPasswordResetEmailMutation>;
export type SendPasswordResetEmailMutationResult = Apollo.MutationResult<SendPasswordResetEmailMutation>;
export type SendPasswordResetEmailMutationOptions = Apollo.BaseMutationOptions<SendPasswordResetEmailMutation, SendPasswordResetEmailMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation resetPassword($refreshToken: String!, $password: String!) {
  resetPassword(input: {refreshToken: $refreshToken, password: $password})
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
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
export const CustomCreateOneProductDocument = gql`
    mutation CustomCreateOneProduct($name: String!, $description: String!, $imageFile: UploadScalar!, $priceSizeP: Float!, $priceSizeM: Float!, $priceSizeG: Float!) {
  customCreateOneProduct(
    input: {name: $name, description: $description, imageFile: $imageFile, priceSizeP: $priceSizeP, priceSizeM: $priceSizeM, priceSizeG: $priceSizeG}
  ) {
    description
    id
    imageUrl
    name
    priceSizeP
    priceSizeM
    priceSizeG
  }
}
    `;
export type CustomCreateOneProductMutationFn = Apollo.MutationFunction<CustomCreateOneProductMutation, CustomCreateOneProductMutationVariables>;

/**
 * __useCustomCreateOneProductMutation__
 *
 * To run a mutation, you first call `useCustomCreateOneProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomCreateOneProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customCreateOneProductMutation, { data, loading, error }] = useCustomCreateOneProductMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      imageFile: // value for 'imageFile'
 *      priceSizeP: // value for 'priceSizeP'
 *      priceSizeM: // value for 'priceSizeM'
 *      priceSizeG: // value for 'priceSizeG'
 *   },
 * });
 */
export function useCustomCreateOneProductMutation(baseOptions?: Apollo.MutationHookOptions<CustomCreateOneProductMutation, CustomCreateOneProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CustomCreateOneProductMutation, CustomCreateOneProductMutationVariables>(CustomCreateOneProductDocument, options);
      }
export type CustomCreateOneProductMutationHookResult = ReturnType<typeof useCustomCreateOneProductMutation>;
export type CustomCreateOneProductMutationResult = Apollo.MutationResult<CustomCreateOneProductMutation>;
export type CustomCreateOneProductMutationOptions = Apollo.BaseMutationOptions<CustomCreateOneProductMutation, CustomCreateOneProductMutationVariables>;
export const CustomUpdateOneProductDocument = gql`
    mutation CustomUpdateOneProduct($id: String!, $imageFile: UploadScalar, $name: String, $description: String, $priceSizeP: Float, $priceSizeM: Float, $priceSizeG: Float) {
  customUpdateOneProduct(
    input: {id: $id, imageFile: $imageFile, name: $name, description: $description, priceSizeP: $priceSizeP, priceSizeM: $priceSizeM, priceSizeG: $priceSizeG}
  ) {
    description
    id
    imageUrl
    name
    priceSizeP
    priceSizeM
    priceSizeG
  }
}
    `;
export type CustomUpdateOneProductMutationFn = Apollo.MutationFunction<CustomUpdateOneProductMutation, CustomUpdateOneProductMutationVariables>;

/**
 * __useCustomUpdateOneProductMutation__
 *
 * To run a mutation, you first call `useCustomUpdateOneProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomUpdateOneProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customUpdateOneProductMutation, { data, loading, error }] = useCustomUpdateOneProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      imageFile: // value for 'imageFile'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      priceSizeP: // value for 'priceSizeP'
 *      priceSizeM: // value for 'priceSizeM'
 *      priceSizeG: // value for 'priceSizeG'
 *   },
 * });
 */
export function useCustomUpdateOneProductMutation(baseOptions?: Apollo.MutationHookOptions<CustomUpdateOneProductMutation, CustomUpdateOneProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CustomUpdateOneProductMutation, CustomUpdateOneProductMutationVariables>(CustomUpdateOneProductDocument, options);
      }
export type CustomUpdateOneProductMutationHookResult = ReturnType<typeof useCustomUpdateOneProductMutation>;
export type CustomUpdateOneProductMutationResult = Apollo.MutationResult<CustomUpdateOneProductMutation>;
export type CustomUpdateOneProductMutationOptions = Apollo.BaseMutationOptions<CustomUpdateOneProductMutation, CustomUpdateOneProductMutationVariables>;
export const ProductsDocument = gql`
    query products($limit: Int!, $offset: Int!, $filter: String) {
  products(
    paging: {limit: $limit, offset: $offset}
    filter: {name: {like: $filter}}
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      id
      name
      description
      imageUrl
      priceSizeP
      priceSizeM
      priceSizeG
    }
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useProductsQuery(baseOptions: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    