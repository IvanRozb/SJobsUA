import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header: React.FC = () => {
	return <AppBar>
		<Toolbar><Typography variant="h1">SJobsUA</Typography></Toolbar>
	</AppBar>;
};

export default Header;