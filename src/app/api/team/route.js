import { connectDb } from "@/lib/db";
import { Partner } from "@/lib/models";
import { NextResponse } from "next/server";

// export const dynamic = 'force-dynamic'

export async function PATCH (req, res){
	const {method, body} = req
	
	console.log("BBBNOOODYYYYY", body)
	try {
		connectDb()
		const partner = await Partner.findByIdAndUpdate(
			body.id,
			{ $set: { fieldName: body.like } }, 
			{ new: true } 
		);

		console.log("PAAARRRRTTTNEEERRRR",partner)
		return NextResponse.json(partner)
	} catch (error) {
		console.log(error);
    return { error: "Something went wrong!" };
	}
}



