"use client";

import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import Logo from "/public/ByteGames.png";
import NavigationLinks from "./NavigationLinks";

const minecraftia = localFont({
	src: "../assets/fonts/Minecraftia-Regular.ttf",
	fallback: ["sans-serif"],
});

export default function NavigationBar() {
	return (
		<header className={`${minecraftia.className} py-4 px-8`}>
			<nav className="flex justify-between">
				<Link href="/">
					<Image src={Logo} alt="ByteGames logo" className="w-[144px]" />
				</Link>
				<NavigationLinks />
			</nav>
		</header>
	);
}
