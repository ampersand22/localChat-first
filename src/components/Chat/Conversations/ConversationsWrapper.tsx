import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";
import { Box } from "@chakra-ui/react";
import { Session } from "next-auth";
import ConversationsList from "./ConversationList";
import ConversationOperations from "../../../graphql/operations/conversation"
import { log } from "console";
import { ConversationsData } from "@/src/util/types";
import { cache, useEffect } from "react";
import { useRouter } from "next/router";

interface ConservationsWrapperProps {
  session: Session;
}

const ConversationsWrapper:React.FC<ConservationsWrapperProps> = ({ 
  session, 
}) => {

  const { 
    data: conversationsData, 
    error: conversationsError, 
    loading: conversationsLoading 
  } = useQuery<ConversationsData>
  // removed null after ConversationsData because it broke
  (ConversationOperations.Queries.conversations);

  console.log("Here is CONVO QUERY", conversationsData);
  

  return (
    <Box width={{ base: '100%', md: "400px" }} 
    bg='#f9f9f9'
    py={6}
    px={3}
    >
      {/* Skeleton Loader */}
      <ConversationsList session={session} conversations={conversationsData?.conversations || [] } />
    </Box>
  );
};

export default ConversationsWrapper;