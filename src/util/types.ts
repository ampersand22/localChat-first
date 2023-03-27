 export interface CreateUsernameData {
  createUsername: {
      success: boolean;
      error: string;
  };
}

export interface CreateUsernameVariables {
  username: String
}

export interface SearchUsersInput {
  username: String;
}

export interface SearchUsersData {
  searchUsers: Array<SearchedUser>
}

export interface SearchedUser {
  id: string;
  username: string;
}