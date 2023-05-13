import { Box, Text } from "@chakra-ui/react";
import { Session } from "next-auth";
import { useState } from "react";
import ConversationModal from './Modal/Modal';
import { ConversationPopulated } from "../../../../../ring-backend/src/util/types";
import ConversationItem from "./ConversationItem";

interface ConservationsListProps {
  session: Session;
  conversations: Array<ConversationPopulated>;
}

const ConversationsList:React.FC<ConservationsListProps> = ({ 
  session, 
  conversations 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <Box width="100%">
      <Box 
      py={2} 
      px={4} 
      mb={4} 
      bg='blackAlpha.300' 
      borderRadius={4} 
      cursor="pointer"
      onClick={onOpen}
      >
        <Text textAlign='center' color="whiteAlpha.800" fontWeight={500}>
          Find or start a conversation
        </Text>
      </Box>
      <ConversationModal session={session} isOpen={isOpen} onClose={onClose}/>
      {conversations.map((conversation) => (
        <ConversationItem key={conversation.id} conversation={conversation} />
      ))}
    </Box>
  );
};

export default ConversationsList;