import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/helpers/theme";

export default function App({ Component, pageProps }: AppProps) {
	return <Fragment>
		<ThemeProvider theme={theme}>
			<Head>
				<title>SJobsUA</title>
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	</Fragment>;
}
