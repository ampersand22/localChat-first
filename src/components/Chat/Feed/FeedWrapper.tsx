import conversation from "@/src/graphql/operations/conversation";
import { Flex } from "@chakra-ui/react";
import { Session } from "next-auth";
import { useRouter } from "next/router";

interface FeedWrapperProps {
  session: Session;
}

const FeedWrapper:React.FC<FeedWrapperProps> = ({ session }) => {

  const router = useRouter();

  const { conversationId } = router.query;

  // display/base is for mobile screens and wont display on them

  return (
    <Flex
      display={{ base: conversationId ? "flex" : "none", md: "flex" }}
      direction="column"
      width="100%"
    >
      {conversationId ? (
        <Flex>{conversationId}</Flex>
      ) : (
        <div>No Convo Selected</div>
      )}

      {/* {conversationId && typeof conversationId === "string" ? (
        <>
          <Flex
            direction="column"
            justify="space-between"
            overflow="hidden"
            flexGrow={1}
          >
            <MessagesHeader
              userId={session.user.id}
              conversationId={conversationId}
            />
            <Messages
              userId={session.user.id}
              conversationId={conversationId}
            />
          </Flex>
          <MessageInput session={session} conversationId={conversationId} />
        </>
      ) : (
        <NoConversationSelected />
      )} */}
    </Flex>
  );
};


export default FeedWrapper;