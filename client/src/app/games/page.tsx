import { Metadata } from "next";

import { minecraft } from "../loader";

export const metadata: Metadata = {
	title: "Find Games",
	description: "Find various games by ByteGames developer",
};

export default function page() {
	return (
		<main className={`${minecraft.className} min-h-screen p-8 flex justify-center items-center`}>
			No games for now..
		</main>
	);
}
