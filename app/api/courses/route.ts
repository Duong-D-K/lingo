import { NextResponse } from "next/server";

import db from "@/db/drizzle";
import { isAdmin } from "@/lib/admin";
import { courses } from "@/db/schema";

// get all courses
export const GET = async () => {
    if (!isAdmin) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
    const data = await db.query.courses.findMany();

    return NextResponse.json(data);
};

// create new courses
export const POST = async (req: Request) => {
    if (!isAdmin) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();

    const data = await db
        .insert(courses)
        .values({
            ...body,
        })
        .returning();

    return NextResponse.json(data[0]);
};
