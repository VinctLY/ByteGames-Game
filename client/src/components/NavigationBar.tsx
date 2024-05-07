"use client";

import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import Logo from "/public/ByteGames.png";
import NavigationLinks, { link } from "./NavigationLinks";
import DarkModeButton from "./DarkModeButton";

const minecraft = localFont({
	src: "../assets/fonts/Minecraft.otf",
	fallback: ["sans-serif"],
});

const links: link[] = [
	{ anchor: "Home", url: "/" },
	{ anchor: "About", url: "/about" },
	{ anchor: "Games", url: "/games" },
	{ anchor: "Visit Github", url: "https://github.com/VinctLY" },
];

export default function NavigationBar() {
	return (
		<header className={`${minecraft.className} py-4 px-8 dark:bg-darker`}>
			<nav className="flex justify-between">
				<Link href="/">
					<Image src={Logo} alt="ByteGames logo" className="w-[144px]" />
				</Link>
				<div className="flex items-center gap-8">
					<DarkModeButton />
					<NavigationLinks links={links} />
				</div>
			</nav>
		</header>
	);
}
