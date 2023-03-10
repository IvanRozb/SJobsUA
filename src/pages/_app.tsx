import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/helpers/theme";
import Header from "@/modules/header";

export default function App({ Component, pageProps }: AppProps) {
	return <Fragment>
		<ThemeProvider theme={theme}>
			<Head>
				<title>SJobsUA</title>
			</Head>
			<Header/>
			<Component {...pageProps} />
		</ThemeProvider>
	</Fragment>;
}
