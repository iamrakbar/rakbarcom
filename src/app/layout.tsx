import type { Metadata } from "next";
import { Plus_Jakarta_Sans, VT323 } from "next/font/google";
import "./globals.css";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });
const vt323 = VT323({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    variable: '--font-vt323',
})

export const metadata: Metadata = {
    title: "R Akbar",
    description: "Creative Developer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${plus_jakarta_sans.className} ${vt323.variable}`}>
                {children}
            </body>
        </html>
    );
}
