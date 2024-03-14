import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { User } from "@/lib/models";
import { connectDb } from "@/lib/db";
import bcrypt from "bcryptjs";
import { authConfig } from './auth.config';


const getUserByEmail = async (email) => {
  try {
    connectDb();
    const user = await User.findOne({ email: email });
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to get user!");
  }
}

const checkUserInDb = async (credentials) => {
  try {
    const user = await getUserByEmail(credentials.email);

    if (!user) throw new Error("User with this email does not exist!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPasswordCorrect) throw new Error("Wrong password!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};


const config = {
	providers: [
    GoogleProvider({
      // async profile(profile) {
        
      //   const user = await getUserByEmail(profile.email)
      //   profile.isAdmin = user.isAdmin
  
      //   return {
      //     id: profile.sub,
      //     username: profile.name,
      //     email: profile.email,
      //     isAdmin: profile.isAdmin
      //   }
      // },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),

		GitHubProvider({
    //  async profile(profile) {
        
    //     const user = await getUserByEmail(profile.email)
    //     profile.isAdmin = user.isAdmin
  
    //     return {
    //       username: profile.login,
    //       email: profile.email,
    //       id: profile.id,
    //       isAdmin: profile.isAdmin
    //     }
    //   },
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET
		}),

		CredentialsProvider({
			name: "credentials",
			credentials: {},
			async authorize(credentials){
				try {
          const user = await checkUserInDb(credentials);
          return user;
        } catch (err) {
          return null;
        }

			}
		})
	],
	callbacks:{
		async signIn({user, account, profile}){
			if (account.provider === "github") {
        try {
          const user = await getUserByEmail(profile.email);

          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url,
            });
            await newUser.save();
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }

      if (account.provider === "google") {
        try {
          const user = await getUserByEmail(profile.email);

          if (!user) {
            const newUser = new User({
              username: profile.name,
              email: profile.email,
              img: profile.picture,
            });
            await newUser.save();
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }

      return true;
		},
  
		...authConfig.callbacks,
	}
}


export const {handlers, auth, signIn, signOut} = NextAuth({...authConfig, ...config})