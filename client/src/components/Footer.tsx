import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import { minecraft } from "@/app/loader";

export default function Footer() {
	return (
		<>
			<footer className={`flex flex-col gap-16 bg-black text-white p-8 ${minecraft.className}`}>
				<div className="flex flex-wrap gap-8 text-gray-300 sm:gap-16">
					<div>
						<h3 className="text-3xl text-primary font-bold mb-2">Socials</h3>
						<div className="flex gap-2 text-xl hover:*:text-light">
							<a href="">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
							<a href="">
								<FontAwesomeIcon icon={faGithub} />
							</a>
							<a href="">
								<FontAwesomeIcon icon={faDiscord} />
							</a>
						</div>
					</div>
					<div>
						<h3 className="text-3xl text-primary font-bold mb-2">Contacts</h3>
						<div className="flex flex-col gap-2 text-sm hover:*:text-light">
							<a href="mailto:vincenty1004@gmail.com" className="inline-flex items-center gap-2">
								<FontAwesomeIcon icon={faEnvelope} className="size-4" />
								vincenty1004@gmail.com
							</a>
							<a href="tel:+6282211336623" className="inline-flex items-center gap-2">
								<FontAwesomeIcon icon={faPhone} className="size-4" />
								+62 82211336623
							</a>
						</div>
					</div>
				</div>
				<p className="self-center">
					Website is built by{" "}
					<Link href="https://github.com/VinctLY" className="text-primary">
						Lyerix
					</Link>
				</p>
			</footer>
		</>
	);
}
