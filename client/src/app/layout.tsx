import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

const poppins = Poppins({
	weight: ["400", "500"],
	subsets: ["latin"],
	fallback: ["sans-serif"],
});

export const metadata: Metadata = {
	title: {
		default: "ByteGames",
		template: "ByteGames | %s",
	},
	description: "Find interesting games in ByteGames. Have fun and enjoy!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<NavigationBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
