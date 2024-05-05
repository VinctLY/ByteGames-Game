"use client";

import { MutableRefObject, useEffect, useRef } from "react";

import "./styles/LandingHeader.css";

export default function LandingHeader() {
	const text = "Hello, good to see you here!";
	const words = text.split(" ");
	const textRef: MutableRefObject<HTMLHeadingElement | null> = useRef(null);

	useEffect(() => {
		if (textRef.current) textRef.current.innerHTML = "";

		const timing = 50;
		let i = 0;

		words.forEach((word) => {
			let container = document.createElement("div");

			word.split("").forEach((char) => {
				let elem = document.createElement("div");
				elem.innerText = char;

				setTimeout(() => {
					container.append(elem);
				}, timing * i);

				i++;
			});

			textRef.current?.append(container);
		});

		return () => {};
	}, []);

	return (
		<h1
			ref={textRef}
			id="landing-heading--animation"
			className="text-5xl font-bold w-fit *:inline-block *:mr-4">
			{text}
		</h1>
	);
}
