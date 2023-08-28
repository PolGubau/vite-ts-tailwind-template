import React from "react";

interface Props {
	onClickOutside?: () => void;
	children?: React.ReactNode;
	hasOverlay?: boolean;
}

const Wrapper: React.FC<Props> = ({ onClickOutside, children, hasOverlay }): React.JSX.Element => {
	const handleWrapperClick = (e: { target: any; currentTarget: any }) => {
		if (e.target === e.currentTarget) {
			onClickOutside?.();
		}
	};
	return (
		<dialog
			className={`flex h-fit min-h-screen w-full overflow-x-hidden absolute top-0 z-40 justify-center items-center md:h-full 
				${hasOverlay ? "bg-primary/10" : ""}`}
			onClick={handleWrapperClick}
		>
			{children}
		</dialog>
	);
};
export default Wrapper;