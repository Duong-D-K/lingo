import { Nunito } from "next/font/google"; // set font for project
import { ClerkProvider } from "@clerk/nextjs";

import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ExitModal } from "@/components/modals/exit-modal";
import { HeartsModal } from "@/components/modals/hearts-modal";
import { PractiseModal } from "@/components/modals/practise-modal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Lingo",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={font.className}>
                    <Toaster />
                    <ExitModal />
                    <HeartsModal />
                    <PractiseModal />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
