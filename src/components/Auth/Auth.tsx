import { signIn } from "next-auth/react";
import { Button, Center, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Session } from "next-auth";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import UserOperations from '../../graphql/operations/user';
import { CreateUsernameData, CreateUsernameVariables } from "@/src/util/types";

interface IAuthProps {
    session: Session | null;
    reloadSession: () => void;
}


const Auth: React.FC<IAuthProps> = ({
    session,
    reloadSession,
}) => {
    const [username, setUsername] = useState("");

        // first value is  mutation function createUsername
        // second is object with data loading and error
        // inside angles, return two types, first is type of data we want back, second is type of variables
        // ref interface CreateUsername above
    const [createUsername, { data, loading, error } ] = useMutation<
        CreateUsernameData, 
        CreateUsernameVariables
    >(UserOperations.Mutations.createUsername)

    console.log('Here is user Data', data, loading, error)

    // async function will communicate with backend
    // use graphql mutation (used to create, update or delete resources)
    // and here we are updating user resource
    const onSubmit = async () => {
        // check to make sure user put input
        if (!username) return;
        try {
            // createUsername mutation to send our username to GraphQL API
            await createUsername({ variables: { username } })
            reloadSession();
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
