import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import DropdownArrow from "@/ui/dropdown-arrow";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material";
import { useRef, useState } from "react";
import Image from "next/image";

interface ISplitButton {
	sx?: SxProps<Theme> | undefined;
	title: string;
	options: [string, string?][];
}

const SplitButton: React.FC<ISplitButton> = ({ sx, title, options }) => {
	const [open, setOpen] = useState(false);
	const anchorRef = useRef<HTMLDivElement>(null);
	const customSx = { backgroundColor: "secondary.main", "&:hover": { backgroundColor: "secondary.dark" } };

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event: Event) => {
		if (
			anchorRef.current &&
			anchorRef.current.contains(event.target as HTMLElement)
		) {
			return;
		}

		setOpen(false);
	};

	return (
		<React.Fragment>
			<ButtonGroup sx={sx} variant="contained" ref={anchorRef} aria-label="split button">
				<Button sx={customSx}>{title}</Button>
				<Button
					sx={customSx}
					size="small"
					aria-controls={open ? "split-button-menu" : undefined}
					aria-expanded={open ? "true" : undefined}
					aria-label="select merge strategy"
					aria-haspopup="menu"
					onClick={handleToggle}
				>
					<DropdownArrow />
				</Button>
			</ButtonGroup>
			<Popper
				sx={{
					zIndex: 1
				}}
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				transition
				disablePortal
			>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin:
								placement === "bottom" ? "center top" : "center bottom"
						}}
					>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList id="split-button-menu" autoFocusItem>
									{options.map((option, index) => (
										<MenuItem key={index}
										>
											{option[1] && <Image src={`/images/icons/${option[1]}.png`} alt={"icon"} width={15}
												   height={15} style={{marginRight: 10}}/>}{option[0]}
										</MenuItem>
									))}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</React.Fragment>
	);
};

export default SplitButton;