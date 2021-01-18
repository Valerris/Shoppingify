import Link from "next/link";
import { LogoS } from "./styled";
import LogoUri from "public/images/Logo.svg";

export default function Logo() {
	const UI = (
		<LogoS>
			<Link href="/">
				<a>
					<img src={LogoUri} />
				</a>
			</Link>
		</LogoS>
	);

	return UI;
}
