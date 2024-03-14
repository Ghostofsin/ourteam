import { connectDb } from "@/lib/db";
import { Partner } from "@/lib/models";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

// using params for getting one record
export async function GET (request, {params}){

const {id} = params

	try {
		connectDb()
		const partner = await Partner.findById(id)
		console.log(partner)
		return NextResponse.json(partner)
	} catch (error) {
		console.log(error);
    return { error: "Something went wrong!" };
	}
}