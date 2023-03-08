import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React from "react";
import classes from '@/modules/header/header.module.scss'

const Header: React.FC = () => {
	return <AppBar>
		<Toolbar>
			<Typography variant="h1">SJobsUA</Typography>
			<Typography variant="h2" className={classes.subtitle}>Job Board for tech industry in Ukraine</Typography>
			<Tabs className={classes.tabs}>
				<Tab label="Offers" disableTouchRipple/>
				<Tab className={classes.post_tab} label="Post a Job"/>
				<Tab className={classes.sign_tab} label="Sign in"/>
			</Tabs>
		</Toolbar>
	</AppBar>;
};

export default Header;