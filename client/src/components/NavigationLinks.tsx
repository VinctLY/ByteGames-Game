"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { useState } from "react";

export default function NavigationLinks() {
	let [navOpen, setNavOpen] = useState(false);

	return (
		<ul>
			<FontAwesomeIcon
				icon={navOpen ? faXmark : faBars}
				className="absolute top-4 right-8 size-6 cursor-pointer z-10 sm:hidden"
				onClick={() => setNavOpen(!navOpen)}
			/>
			<div
				className={`flex flex-col gap-12 fixed right-0 top-0 py-24 w-2/3 h-full ${
					navOpen ? "translate-x-0" : "translate-x-full"
				} transition-transform bg-white shadow-lg *:text-center *:transition-transform active:*:scale-95 sm:flex-row sm:static sm:w-full sm:shadow-none sm:translate-x-0 sm:px-0 sm:py-0 sm:pt-3 sm:bg-transparent`}>
				<li className="">
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/games">Games</Link>
				</li>
				<li>
					<Link href="https://github.com/VinctLY">Github</Link>
				</li>
			</div>
		</ul>
	);
}
