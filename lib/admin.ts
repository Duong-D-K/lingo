import { auth } from "@clerk/nextjs/server";

const allowedIds = ["user_2fzsL3phSalUuFb8Q5vyphsboEg"];

export const isAdmin = () => {
    const { userId } = auth();

    if (!userId) {
        return false;
    }

    return allowedIds.indexOf(userId) !== -1;
};
