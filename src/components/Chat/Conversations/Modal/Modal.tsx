import { SearchedUser, SearchUsersData, SearchUsersInput } from "@/src/util/types";
import { useLazyQuery, useQuery } from "@apollo/client";
import { Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, Modal, Stack, Input } from "@chakra-ui/react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import UserOperations from '../../../../graphql/operations/user';
import Participants from "./Participants";
import UserSearchList from "./UserSearchList";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConversationModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [participants, setParticipants] = useState<Array<SearchedUser>>([]);
  // useLazyQuery is the async 
  const [searchUsers, { data, error, loading }] = useLazyQuery<
  SearchUsersData,
  SearchUsersInput
  >(UserOperations.Queries.searchUsers);

  const onCreateConversation = async () => {
    try {
      // createConversation mutation
    } catch (error: any) {
      console.log('onCreateConversation error', error);
      toast.error(error?.message);
    }
  };
  

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    // search user query
    searchUsers({ variables: { username } })
    // console.log("inside onSearch", username);
    
  }

  const addParticipant = (user: SearchedUser) => {
    setParticipants((prev) => [...prev, user]);
    setUsername("");
  };

  const removeParticipant = (userId: string) => {
    setParticipants((prev) => prev.filter(p => p.id !== userId));
  };


  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#faf3dd" pb={4}>
          <ModalHeader>Find User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={onSearch}>
              <Stack spacing={4}>
                <Input 
                  placeholder="Enter a username" 
                  value={username} 
                  onChange={event => setUsername(event.target.value)} 
                />
                <Button type="submit" disabled={!username} isLoading={loading} bg="#ebc999">
                  Search
                </Button>
              </Stack>
            </form>
            {data?.searchUsers && (
              <UserSearchList 
                users={data.searchUsers} 
                addParticipant={addParticipant}
              />
            )}
            {participants.length !== 0 && (
              <>
                <Participants 
                  participants={participants} 
                  removeParticipant={removeParticipant} 
                />
                <Button
                  bg="brand.secondary"
                  width="100%"
                  mt={4}
                  py={2}
                  px={4}
                  _hover={{ bg: "brand.platinum"}}
                  onClick={() => {}}
                >
                  Create Conversation</Button>
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
};

export default ConversationModal;
