import { connectDb } from "@/lib/db";
import { Partner } from "@/lib/models";
import { NextResponse, NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    connectDb();
    const partners = await Partner.find();
    // console.log(partners);
    return NextResponse.json(partners);
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
}

