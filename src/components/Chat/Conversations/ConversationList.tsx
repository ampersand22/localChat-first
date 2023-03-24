import { Session } from "next-auth";

interface ConservationsListProps {
  session: Session;
}

const ConversationsList:React.FC<ConservationsListProps> = ({ session }) => {
  return (
    <div>ConversationsList</div>
  );
};

export default ConversationsList;