import { NextResponse } from "next/server";

import db from "@/db/drizzle";
import { isAdmin } from "@/lib/admin";
import { units } from "@/db/schema";

// get all units
export const GET = async () => {
    if (!isAdmin) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
    const data = await db.query.units.findMany();

    return NextResponse.json(data);
};

// create new units
export const POST = async (req: Request) => {
    if (!isAdmin) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();

    const data = await db
        .insert(units)
        .values({
            ...body,
        })
        .returning();

    return NextResponse.json(data[0]);
};
