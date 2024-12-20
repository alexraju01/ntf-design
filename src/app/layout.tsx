import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

const inter = Inter({ subsets: ["latin"], weight: ["400", "800"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${inter.className} antialiased`}>
				<main className='w-full px-[15px] md:mx-auto max-w-[1512px] 2xl:px-[79px] '>
					{children}
				</main>
			</body>
		</html>
	);
}
