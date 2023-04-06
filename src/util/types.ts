// import from backend
import { ConversationPopulated } from '../../../ring-backend/src/util/types'; 
 
 /*
 * Users
 */
 
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

/***
 * Conversations
 */
export interface ConversationsData {
  conversations: Array<ConversationPopulated>
}

export interface CreateConversationData {
  createConversation: {
    conversationId: string;
  };
}

export interface CreateConversationInput {
  participantIds: Array<string>;
}