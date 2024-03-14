"use server";

import { revalidatePath } from "next/cache";
import { connectDb } from "../db";
import { Partner } from "../models";
import { redirect } from "next/navigation";

export async function savePartner(formData) {
  const { name, email, position, phone, img } = Object.fromEntries(formData);
  try {
    connectDb();
    const newPartner = new Partner({
      name,
      email,
      position,
      phone,
      img,
      like: false,
    });

    await newPartner.save();
    console.log("saved");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return "Something went wrong!";
  }
}

export async function deletePartner(formData) {
  const { id } = Object.fromEntries(formData);
  try {
    connectDb();
    await Partner.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return "Something went wrong!";
  }
}

export async function editPartner(formData) {
  const { id, name, email, position, phone, img, like } = Object.fromEntries(formData);
  try {
    connectDb();
    const newPartner = {
      name,
      email,
      position,
      phone,
      img,
      like,
    };

		await Partner.findByIdAndUpdate(
      id,
      { $set: newPartner },
      { new: true }
    );
    console.log("saved");
    revalidatePath("/admin");
		redirect("/admin", "push")
  } catch (error) {
    console.log(error);
    return "Something went wrong!";
  }
}