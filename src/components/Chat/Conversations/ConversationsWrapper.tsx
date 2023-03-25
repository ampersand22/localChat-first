import { Box } from "@chakra-ui/react";
import { Session } from "next-auth";
import ConversationsList from "./ConversationList";

interface ConservationsWrapperProps {
  session: Session;
}

const ConversationsWrapper:React.FC<ConservationsWrapperProps> = ({ 
  session, 
}) => {
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