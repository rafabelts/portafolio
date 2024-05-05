import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Presentation from "@/components/presentation";
import Footer from "@/components/footer";

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Rafa Belts",
    description: "Portafolio Rafa Beltran",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                        <Presentation />
                        {children}
                        <Footer />
            </body>
        </html>
    );
}
