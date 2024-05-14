import { redirect } from "next/navigation";
import Image from "next/image";

import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress, getUserSubscription } from "@/db/queries";
import { Items } from "./items";
import { Quests } from "@/components/quests";

const ShopPage = async () => {
    const userProgressData = getUserProgress();
    const userSubscriptionData = getUserSubscription();

    const [userProgress, userSubscription] = await Promise.all([userProgressData, userSubscriptionData]);

    const isPro = !!userSubscription?.isActive;

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses");
    }

    return (
        <div className=" flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress activeCourse={userProgress.activeCourse} hearts={userProgress.hearts} points={userProgress.points} hasActiveSubscription={isPro} />
                <Quests points={userProgress.points} />
            </StickyWrapper>
            <FeedWrapper>
                <div className=" w-full flex flex-col items-center">
                    <Image src="/shop.svg" alt="Shop" height={90} width={90} />
                    <h1 className=" text-center font-bold text-neutral-800 text-2xl my-6">Shop</h1>
                    <p className=" text-muted-foreground text-center text-lg">Spend your points on coll stuff.</p>
                    <Items hearts={userProgress.hearts} points={userProgress.points} hasActiveSubscription={isPro} />
                </div>
            </FeedWrapper>
        </div>
    );
};

export default ShopPage;
