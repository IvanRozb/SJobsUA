import {
	AppBar,
	Toolbar,
	Typography
} from "@mui/material";
import React from "react";
import classes from "./header.module.scss";
import Navigation from "@/components/navigation";
import Link from "next/link";
import { theme } from "@/helpers/theme";

const Header: React.FC = () => {
	return <AppBar>
		<Toolbar>
			<Link href="/"><Typography sx={{
				"&:hover": {
					color: theme.palette.secondary.main
				}
			}} variant="h1">SJobsUA</Typography></Link>
			<Typography variant="h2" className={classes.subtitle}>Job Board for tech industry in Ukraine</Typography>
			<Navigation />
		</Toolbar>
	</AppBar>;
};

export default Header;