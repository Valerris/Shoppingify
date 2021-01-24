import Head from "next/head";
import { PageContainerS } from "./styled";

export default function PageContainer(props) {
	const { pageTitle, children } = props;

	const UI = (
		<PageContainerS>
			<div>
				<Head>
					<title>{pageTitle}</title>
					<link rel="icon" href="/favicon.ico" />
					<link
						href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=Material+Icons+Round&family=Material+Icons+Outlined&display=swap"
						rel="stylesheet"
					></link>
				</Head>
				{children}
			</div>
		</PageContainerS>
	);

	return UI;
}
