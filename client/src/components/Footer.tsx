import Link from "next/link";

import { minecraft } from "@/app/loader";

export default function Footer() {
	return (
		<>
			<footer className={`bg-black text-white p-8 ${minecraft.className}`}>
				<p>
					Website is built by <Link href="https://github.com/VinctLY">Lyerix</Link>
				</p>
			</footer>
		</>
	);
}
