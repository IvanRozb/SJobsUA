import { Button, Tab, Tabs } from "@mui/material";
import classes from "@/modules/header/header.module.scss";
import { theme } from "@/helpers/theme";
import SplitButton from "@/ui/split-button";
import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const tabs = [
	{ label: "Offers", path: "/" },
	{ label: "Matchmaking", path: "/matchmaking" }
];

const Navigation: React.FC = () => {
	const { pathname } = useRouter();
	const [activeTab, setActiveTab] = useState(getActiveTabIndex());

	function getActiveTabIndex() {
		for (let i = 0; i < tabs.length; i++) {
			if (pathname === tabs[i].path) {
				return i;
			}
		}
		return 0; // default to the first tab if no match is found
	}

	useEffect(() => {
		setActiveTab(getActiveTabIndex());
	}, [pathname]);

	return <Fragment>
		<Tabs
			value={activeTab}
			className={classes.tabs}
			textColor={"secondary"}
			sx={{
				"& .MuiTab-textColorPrimary:hover": {
					color: theme.palette.secondary.main
				}
			}}
		>
			{tabs.map((tab, index) => (
				<Tab
					key={index}
					label={
						<Link href={tab.path}>
							{tab.label}
						</Link>
					}
					disableTouchRipple
					sx={{ cursor: "auto" }}
				/>
			))}
		</Tabs>
		<Button sx={{ backgroundColor: "primary.light" }} variant="contained">Post a Job</Button>
		<SplitButton sx={{ marginLeft: "0.7rem", backgroundColor: "secondary.main" }} title={"Sign in"}
					 options={[["Sign in as a developer", "sign_in_developer"], ["Sign in to Employer Panel", "sign_in_employee"]]} />
	</Fragment>;
};

export default Navigation;
