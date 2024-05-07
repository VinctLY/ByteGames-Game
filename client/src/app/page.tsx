import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { minecraft } from "./loader";
import LandingHeader from "@/components/LandingHeader";

export default function Home() {
	return (
		<main
			className={`${minecraft.className} p-8 min-h-screen flex items-center text-dark dark:bg-dark dark:text-light`}>
			<div className="flex flex-col gap-2 mb-32">
				<LandingHeader />
				<div className="flex items-center flex-wrap gap-4 text-lg">
					<p className="text-gray-500 dark:text-gray-400">Let&apos;s explore a little bit more</p>
					<Link
						href="/games"
						className="flex flex-nowrap items-center gap-2 py-3 px-4 rounded-md bg-dark text-light dark:bg-primary dark:text-dark">
						See Games
						<FontAwesomeIcon icon={faArrowRight} className="size-4" />
					</Link>
				</div>
			</div>
		</main>
	);
}
