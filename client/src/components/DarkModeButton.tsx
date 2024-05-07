"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function DarkModeButton() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		document.body.setAttribute("data-mode", isDark ? "dark" : "light");
	}, [isDark]);

	return (
		<div
			className="flex items-center bg-dark text-light p-2 rounded-full *:size-4 dark:bg-light dark:text-dark active:scale-95 transition-transform cursor-pointer"
			onClick={() => setIsDark(!isDark)}>
			{isDark ? (
				<FontAwesomeIcon icon={faSun} title="Toggle Light Mode" titleId="light" />
			) : (
				<FontAwesomeIcon icon={faMoon} title="Toggle Dark Mode" titleId="dark" />
			)}
		</div>
	);
}
