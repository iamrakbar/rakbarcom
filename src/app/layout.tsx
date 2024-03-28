import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans, VT323 } from "next/font/google";
import colors from 'tailwindcss/colors'

import "./globals.css";

const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ['400', '600', '700'],
    style: ['normal', 'italic'],
    display: 'swap',
    variable: '--font-plus_jakarta_sans'
});

const lora = Lora({
    subsets: ["latin"],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    display: 'swap',
    variable: '--font-lora'
});

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
        <html lang="en" className="antialiased">
            <meta name="theme-color" content={colors.blue[700]} />

            <body className={`${plus_jakarta_sans.variable} ${lora.variable} ${vt323.variable} font-sans`}>
                {children}
            </body>
        </html>
    );
}
