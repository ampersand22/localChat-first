import { Box } from "@chakra-ui/react";
import { Session } from "next-auth";
import ConversationsList from "./ConversationList";
import { useQuery } from "@apollo/client";
import ConversationOperations from "../../../graphql/operations/conversation"
import { log } from "console";

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
  } = useQuery(ConversationOperations.Queries.conversations);

  console.log("Here is CONVO QUERY", conversationsData);
  

  return (
    <Box width={{ base: '100%', md: "400px" }} 
    bg='#f9f9f9'
    py={6}
    px={3}
    >
      {/* Skeleton Loader */}
      <ConversationsList session={session} />
    </Box>
  );
};

export default ConversationsWrapper;