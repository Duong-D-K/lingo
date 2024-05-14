"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

import { usePractiseModal } from "@/store/use-practise-modal";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";

export const PractiseModal = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const { isOpen, close } = usePractiseModal();

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className=" max-w-md">
                <DialogHeader>
                    <div className=" flex items-center w-full justify-center mb-5">
                        <Image src={"/heart.svg"} alt="Heart" height={100} width={100} />
                    </div>
                    <DialogTitle className=" text-center font-bold text-2xl">Practise lesson!</DialogTitle>
                    <DialogDescription className=" text-center text-base">Use pratise lessons to regain hearts and points.You can not loose hearts and points in practise lessons.</DialogDescription>
                </DialogHeader>
                <DialogFooter className=" mb-4">
                    <div className=" flex flex-col gap-y-4 w-full">
                        <Button variant="primary" className=" w-full" size="lg" onClick={close}>
                            I understand
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
