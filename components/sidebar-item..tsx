"use client";
{
    /*
 bcz from NextJs 13 use app router, every single component that created and Page inside App folder is server component default
 so that you can't use hooks and interactivity obiviously
'use client' allows us create boundaries that we can use some hook inside
*/
}

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

type Props = {
    label: string;
    iconSrc: string;
    href: string;
};
export const SidebarItem = ({ label, iconSrc, href }: Props) => {
    const pathname = usePathname();
    const active = pathname === href;

    return (
        <Button variant={active ? "sidebarOutline" : "sidebar"} className="justify-start h-[52px]" asChild>
            <Link href={href}>
                <Image src={iconSrc} alt={label} className="mr-5" width={32} height={32} />
                {label}
            </Link>
        </Button>
    );
};
