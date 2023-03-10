import React from "react";
import Image from "next/image";

const DropdownArrow: React.FC = () => {
	return <Image
		src="/images/icons/dropdown-icon.png"
		alt="dropdown-icon"
		width={13}
		height={13} />;
};

export default DropdownArrow;