
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


export const authOptions = {
   
    session: {
        strategy: 'jwt',
        maxAge: 30*24*60*60
    },

    jwt: {
    // secret: "aerywe5ybw45tbwq4etw5b6ytw54by",  // Ensure you have a secret key for JWT
},
    providers: [
        // without stored/db credentials 
        // CredentialsProvider({
        //     credentials: {
        //         email: {label: "Email", type:"text", required: true, placeholder: "Your Email"},
        //         password: {label: "Password", type:"password", required: true, placeholder: "Your Password"},
        //     },
        //     async authorize(credentials) {
        //         if (!credentials) {
        //             return null;
        //         }
        //         return true;
        //     }
        // })


        // with stored/db credentials 

        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text", required: true, placeholder: "Your Email" },
                password: { label: "Password", type: "password", required: true, placeholder: "Your Password" },
            },

            // manual version 
            // async authorize(credentials) {
            //     // Example: You should validate the credentials here (e.g., check against your database)
            //     const user = { id: 1, name: 'John Doe', email: credentials.email };

            //     if (!credentials) {
            //         return null;
            //     }

            //     // Example: Replace with real authentication logic
            //     if (credentials.email === 'm@m.com' && credentials.password === '1234567') {
            //         return user;  // Return a valid user object if authentication succeeds
            //     } else {
            //         return null;  // Return null if authentication fails
            //     }
            // }

            async authorize(credentials) {
                const { email, password } = credentials;
                console.log(email, password);

                if (!credentials) {
                    return null;
                }

                // Example: Replace with real authentication logic
                if (email) {
                    const currentUser = users.find((user) => user.email === email)
                    if (currentUser && currentUser.password === password) {
                        
                        return currentUser;  // Return a valid user object if authentication succeeds
                    }
                } else {
                    return null;  // Return null if authentication fails
                }
            }
        })

    ],
    



}

const handler = NextAuth(authOptions);


const users = [
    
    
    {
        id: 3,
        name: "Joya",
        email: 'joya@gmail.com',
        password: "2345678",
        type: "admin",
        image:'https://picsum.photos/200/300'
        
    },
    {
        id: 2,
        name: "Joya",
        email: 'hasib@gmail.com',
        password: "2345678",
        type: 'moderator',
        image:'https://picsum.photos/200/300'
        
    },
    {
        id: 4,
        name: "Joya",
        email: 'hasib1@gmail.com',
        password: "2345678",
        type: 'member',
        image:'https://picsum.photos/200/300'
        
    }
]



export { handler as GET, handler as POST };