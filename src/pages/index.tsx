import type { NextPage } from "next";
import { Inter } from 'next/font/google'
// streamlines sign and useSession hook
import { signIn, signOut, useSession } from "next-auth/react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data } = useSession();

  console.log("Here is data", data);

  return (
    // signIn is a next-auth function
    // use control + spacebar to view autocomplete 
    <div>
      {data?.user ? (
      <button onClick={() => signOut()}>Sign Out</button>
      ) : (
      <button onClick={() => signIn("google")}>Sign In</button>
      )}
      
      {data?.user?.name}
    </div>
  )
}
