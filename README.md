Issues.
1. Hard time finding best way to use GraphQL.
2. Found Next.js, MERN stack with google auth guide.
3. had to add binaryTargets into prisma schema
4. Fix babel with 
    {
        "extends": ["next/babel", "next/core-web-vitals"]
    }



Wins.
1. Loving the Next.js




What to remember?:

// Remember to recompile dev when changing variables or environments

1. npx create-next-app@latest --ts
2. Set up google auth with nextauth
    - copy nextauth PrismaClient from docs
    - Prisma schema needs Account, Session, and User to
        work with nextAuth (added Verification Token)
    - add in binaryTargets, with "native, darwin"
3. Run npx prisma generate --schema=sr
c/prisma/schema.prisma in terminal to connect

let's go