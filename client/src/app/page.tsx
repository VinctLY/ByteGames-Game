import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { minecraft } from "./layout";
import LandingHeader from "@/components/LandingHeader";

export default function Home() {
	return (
		<main className={`${minecraft.className} p-8 min-h-screen flex items-center`}>
			<div className="flex flex-col gap-2 mb-32">
				<LandingHeader />
				<div className="flex items-center flex-wrap gap-4 text-lg">
					<p>Let's explore a little bit more</p>
					<Link
						href="/games"
						className="flex flex-nowrap items-center gap-2 bg-black text-md text-white py-3 px-4 rounded-md">
						See Games
						<FontAwesomeIcon icon={faArrowRight} />
					</Link>
				</div>
			</div>
		</main>
	);
}
