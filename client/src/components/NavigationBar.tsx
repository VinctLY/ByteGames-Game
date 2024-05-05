"use client";

import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import Logo from "/public/ByteGames.png";
import NavigationLinks from "./NavigationLinks";

const minecraft = localFont({
	src: "../assets/fonts/Minecraft.otf",
	fallback: ["sans-serif"],
});

export default function NavigationBar() {
	return (
		<header className={`${minecraft.className} py-4 px-8`}>
			<nav className="flex justify-between">
				<Link href="/">
					<Image src={Logo} alt="ByteGames logo" className="w-[144px]" />
				</Link>
				<NavigationLinks />
			</nav>
		</header>
	);
}
