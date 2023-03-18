import { signIn } from "next-auth/react";
import { Button, Center, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Session } from "next-auth";
import { useState } from "react";

interface IAuthProps {
    session: Session | null;
    reloadSession: () => void;
}

const Auth: React.FC<IAuthProps> = ({
    session,
    reloadSession,
}) => {
    const [username, setUsername] = useState("");

    // async function will communicate with backend
    // use graphql mutation (used to create, update or delete resources)
    // and here we are updating user resource
    const onSubmit = async () => {
        try {
            // createUsername mutation to send our username to GraphQL API
        } catch (error) {
            console.log("onSubmit error", error); 
        }
    }
    


    return ( 
        <Center height="100vh">
            <Stack spacing={6} align='center'>
                {session ? (
                    <>
                        <Text fontSize='3xl'>Create a Username</Text>
                        <Input 
                            placeholder="Enter Username"
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Button width='100%' onClick={onSubmit}>Save</Button>
                    </>
                ) : (
                    <>
                        <Text fontSize='3xl'>localRing</Text>
                        <Button 
                            onClick={() => signIn("google")}
                            leftIcon={<Image height='20px' src='/images/googlelogo.png' />}
                            >
                            Continue With Google
                        </Button>
                    </>
                )}
            </Stack>
        </Center>
    ) ;
};

export default Auth;
