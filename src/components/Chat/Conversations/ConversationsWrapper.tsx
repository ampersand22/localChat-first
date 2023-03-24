import { Box } from "@chakra-ui/react";
import { Session } from "next-auth";
import ConversationsList from "./ConversationList";

interface ConservationsWrapperProps {
  session: Session;
}

const ConversationsWrapper:React.FC<ConservationsWrapperProps> = ({ session }) => {
  return (
    <Box>
      <ConversationsList session={session }/>
    </Box>
  );
};

export default ConversationsWrapper;