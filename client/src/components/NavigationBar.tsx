import Image from "next/image";
import Link from "next/link";

import Logo from "/public/ByteGames.png";
import { minecraftia } from "@/app/layout";

export default function NavigationBar() {
	return (
		<header className={`${minecraftia.className} py-4 px-8`}>
			<nav className="flex justify-between">
				<Link href="/">
					<Image src={Logo} alt="ByteGames logo" className="w-[144px]" />
				</Link>
				<ul className="flex items-center gap-8 pt-2.5">
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/games">Games</Link>
					</li>
					<li>
						<Link href="https://github.com/VinctLY">Github</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
