import Link from "next/link";

import { minecraftia } from "@/app/layout";

export default function Footer() {
	return (
		<>
			<footer className={`bg-black text-white p-8 ${minecraftia.className}`}>
				<p>
					Website is built by <Link href="https://github.com/VinctLY">Lyerix</Link>
				</p>
			</footer>
		</>
	);
}
