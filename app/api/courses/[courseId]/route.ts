import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

import db from "@/db/drizzle";
import { courses } from "@/db/schema";
import { isAdmin } from "@/lib/admin";

// get course by id
export const GET = async (req: Request, { params }: { params: { courseId: number } }) => {
    if (!isAdmin()) {
        return new NextResponse("Unauthorized", { status: 403 });
    }

    const data = await db.query.courses.findFirst({
        where: eq(courses.id, params.courseId),
    });

    return NextResponse.json(data);
};

// edit course by id
export const PUT = async (req: Request, { params }: { params: { courseId: number } }) => {
    if (!isAdmin()) {
        return new NextResponse("Unauthorized", { status: 403 });
    }

    const body = await req.json();

    const data = await db
        .update(courses)
        .set({
            ...body,
        })
        .where(eq(courses.id, params.courseId))
        .returning();

    return NextResponse.json(data[0]);
};

// delete course by id
export const DELETE = async (req: Request, { params }: { params: { courseId: number } }) => {
    if (!isAdmin()) {
        return new NextResponse("Unauthorized", { status: 403 });
    }

    const data = await db.delete(courses).where(eq(courses.id, params.courseId)).returning();

    return NextResponse.json(data[0]);
};
