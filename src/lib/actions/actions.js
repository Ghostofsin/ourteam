"use server";

import { revalidatePath } from "next/cache";
import { connectDb } from "../db";
import { Partner, User } from "../models";
import bcrypt from "bcryptjs";
import { signIn, signOut } from "../../auth";
import { AuthError } from "next-auth";

export async function register(prevState, formData) {
  const { username, email, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectDb();
    const user = await User.findOne({ email });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/team");
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
}

export async function login(prevState, formData) {
  const { email, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { email, password });
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function handleGithubLogin() {
  "use server";
  await signIn("github");
}

export async function handleGoogleLogin() {
  "use server";
  await signIn("google");
}

export async function handleLogout() {
  "use server";
  await signOut();
}

export async function saveLike(formData) {
  const { id, like } = Object.fromEntries(formData);
  try {
    connectDb();
    await Partner.findByIdAndUpdate(
      id,
      { $set: { like: like } },
      { new: true }
    );
    console.log("saved");
    revalidatePath("/team");
  } catch (error) {
    console.log(error);
    return "Something went wrong!";
  }
}
