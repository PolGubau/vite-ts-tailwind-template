/* eslint-disable react-hooks/exhaustive-deps */

import { Button, Icon, IconButton, Text } from "pol-ui";
import { ModalProps } from "pol-ui/dist/components/PopUps/Modal/types";
import React, { useEffect } from "react";
import Wrapper from "./Wrapper";

interface Props {
	state: ModalProps;
	setState?: React.Dispatch<React.SetStateAction<ModalProps>>;
}

export enum ModalCloseReason {
	Escape = "Escape",
	ClickOutside = "ClickOutside",
	Submit = "Submit",
	Cancel = "Cancel",
}

const Modal = ({ state, setState }: Props) => {
	const { handleClose, title, icon, children, cancelButton, submitButton } = state;
	const modalRef = React.useRef(null);
	const closeModal = (reason: ModalCloseReason) => {
		if (handleClose) {
			handleClose(reason);
		}
		setState?.({ ...state, isOpen: false });
	};
	useEffect(() => {
		// if you press esc key, close modal
		window.addEventListener("keydown", keyDownHandler);
		return () => {
			window.removeEventListener("keydown", keyDownHandler);
		};
	}, []);

	const keyDownHandler = (e: { key: string; shiftKey: any; preventDefault: () => void }) => {
		// only execute if tab is pressed

		// Scape function
		if (e.key === "Escape") {
			closeModal(ModalCloseReason.Escape);
		}

		// Tab trap
		if (e.key !== "Tab") return;

		if (!modalRef.current) return;
		const modal: any = modalRef.current;

		// here we query all focusable elements, customize as your own need
		const focusableModalElements = modal.querySelectorAll(
			"a[href], button:not([disabled]), textarea, input, select"
		);

		const firstElement = focusableModalElements[0];
		const lastElement = focusableModalElements[focusableModalElements.length - 1];

		// if going forward by pressing tab and lastElement is active shift focus to first focusable element
		if (!e.shiftKey && document.activeElement === lastElement) {
			firstElement.focus();
			return e.preventDefault();
		}

		// if going backward by pressing tab and firstElement is active shift focus to last focusable element
		if (e.shiftKey && document.activeElement === firstElement) {
			lastElement.focus();
			e.preventDefault();
		}
	};

	return (
		<Wrapper onClickOutside={() => closeModal(ModalCloseReason.ClickOutside)} hasOverlay={true}>
			<section
				onKeyDown={keyDownHandler}
				ref={modalRef}
				className={`animate-fade-up animate-once animate-ease-out flex flex-col gap-4 relative animate-duration-500  rounded-2xl  w-full bg-white dark:bg-gray-800 dark:ring-gray-700 dark:text-gray-200   justify-center p-6 shadow-2xl max-w-[90vw] md:max-w-3xl `}
			>
				<IconButton
					className="absolute right-4 top-4"
					icon="close"
					onClick={() => closeModal(ModalCloseReason.Cancel)}
					variant="text"
				/>
				{title && (
					<header className="max-w-[85%] flex gap-4 items-center ">
						<Icon icon={icon} size="xl" />
						<Text size={4} className="" value={title} />
					</header>
				)}
				<section className=" min-h-20 text-black/70"> {children}</section>
				{(cancelButton || submitButton) && (
					<footer className="flex gap-4 w-full">
						{cancelButton && (
							<Button
								variant={cancelButton.buttonType ?? "filled"}
								onClick={() => cancelButton.onClick?.()}
								icon={cancelButton?.icon}
							>
								{cancelButton.text}
							</Button>
						)}
						{submitButton && (
							<Button
								autoFocus
								variant={submitButton.buttonType ?? "filled"}
								onClick={() => submitButton.onClick?.()}
								icon={submitButton?.icon}
							>
								{submitButton.text}
							</Button>
						)}
					</footer>
				)}
			</section>
		</Wrapper>
	);
};

export default Modal;