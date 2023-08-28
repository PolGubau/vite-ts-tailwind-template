import { useSetRecoilState } from "recoil";
import { ModalProps } from "pol-ui/dist/components/PopUps/Modal/types";
import { modalState } from "@/States";

const useModal = (): {
	triger: (modal: ModalProps) => void;
	trigerModal: (modal: ModalProps) => void;
	trigerModalWithoutButtons: (modal: ModalProps) => void;
	closeModal: () => void;
} => {
	const triger = useSetRecoilState<ModalProps>(modalState);

	const closeModal = (): void => {
		console.log("close modal");
		triger({ isOpen: false });
	};

	const trigerModal = ({
		isOpen = true,
		handleClose,
		children = null,
		title = "",
		icon = null,
		cancelButton = {
			text: "Cancel",
			onClick: handleClose?.() ?? (() => {}),
		},
		submitButton = {
			text: "Submit",
			buttonType: "filled",
			icon: "",
			onClick: handleClose?.() ?? (() => {}),
		},
	}: ModalProps): void => {
		const handleHide = () => {
			handleClose?.();
			// closeModal();
		};
		triger({
			isOpen,
			handleClose: handleHide,
			children,
			title,
			icon,
			cancelButton,
			submitButton,
		});
	};
	const trigerModalWithoutButtons = ({
		isOpen = true,
		handleClose,
		children = null,
		title = "",
		icon = null,
	}: ModalProps): void => {
		const handleHide = () => {
			handleClose?.();
			// closeModal();
		};

		triger({
			isOpen,
			handleClose: handleHide,
			children,
			title,
			icon,
		});
	};

	return {
		triger,
		trigerModal,
		closeModal,
		trigerModalWithoutButtons,
	};
};

export default useModal;
