import { Metadata } from "next";

import { minecraft } from "../layout";

export const metadata: Metadata = {
	title: "About",
	description: "About ByteGames website and developer",
};

export default function page() {
	return (
		<main className={`${minecraft.className} p-8 min-h-screen`}>
			<h1 className="text-3xl font-bold mb-8">About This Page</h1>
			<div className="*:mb-4">
				<p>
					For now, this project is still WIP (Work-In-Progress). The main goal of this project is as
					a showcase of every other project I've done, mainly games. I will be creating my game
					using the{" "}
					<a href="https://www.rust-lang.org/" className="underline text-primary">
						Rust programming language
					</a>{" "}
					since that is what I also have been learning as of recent.
				</p>
				<p>
					I <i>(as the game developer)</i> am looking forward to create some other projects in game
					industry later on, but for now I am still learning and is focused on other things on the
					matter so I'm not expecting for any projects to be done soon.
				</p>
				<i>
					<b>- Lyer</b>
				</i>
			</div>
		</main>
	);
}
