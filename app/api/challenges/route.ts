import { NextResponse } from "next/server";

import db from "@/db/drizzle";
import { isAdmin } from "@/lib/admin";
import { challenges } from "@/db/schema";

// get all challenges
export const GET = async () => {
    if (!isAdmin) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
    const data = await db.query.challenges.findMany();

    return NextResponse.json(data);
};

// create new challenges
export const POST = async (req: Request) => {
    if (!isAdmin) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();

    const data = await db
        .insert(challenges)
        .values({
            ...body,
        })
        .returning();

    return NextResponse.json(data[0]);
};
