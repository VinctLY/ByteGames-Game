"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { useEffect, useRef, useState } from "react";

export interface link {
	url: string;
	anchor: string;
}

interface NavigationLinksProps {
	links: link[];
}

export default function NavigationLinks({ links }: NavigationLinksProps) {
	let [navOpen, setNavOpen] = useState(false);
	let navRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (navOpen) document.body.style.overflowY = "hidden";
		else document.body.style.overflowY = "visible";

		function onclick(evt: MouseEvent) {
			if (navRef.current) {
				const width = navRef.current.offsetWidth;
				const pos_from_right = document.body.offsetWidth - evt.clientX;

				if (pos_from_right > width) setNavOpen(false);
			}
		}

		document.body.addEventListener("click", onclick);

		return () => document.body.removeEventListener("click", onclick);
	}, [navOpen]);

	useEffect(() => {
		function onresize() {
			if (document.body.clientWidth > 640) setNavOpen(false);
		}

		window.addEventListener("resize", onresize);

		return () => {
			window.removeEventListener("resize", onresize);
		};
	}, []);

	return (
		<ul className="flex items-center">
			<FontAwesomeIcon
				icon={faBars}
				className="sm:hidden size-6 cursor-pointer"
				onClick={() => setNavOpen(true)}
			/>
			<div
				className={`flex flex-col gap-12 fixed right-0 top-0 z-50 py-24 w-2/3 h-full transition-transform bg-white shadow-lg *:text-center *:transition-[transform,color] active:*:scale-95 sm:transition-none sm:flex-row sm:static sm:w-full sm:shadow-none sm:translate-x-0 sm:px-0 sm:py-0 sm:bg-transparent text-lg ${
					navOpen ? "translate-x-0" : "translate-x-full"
				}`}
				ref={navRef}>
				<FontAwesomeIcon
					icon={faXmark}
					className="absolute top-4 right-8 size-6 cursor-pointer sm:hidden"
					onClick={() => setNavOpen(false)}
				/>
				{links.map((link, i) => {
					return (
						<li className="hover:text-primary" key={i}>
							<Link href={link.url}>{link.anchor}</Link>
						</li>
					);
				})}
			</div>
		</ul>
	);
}
