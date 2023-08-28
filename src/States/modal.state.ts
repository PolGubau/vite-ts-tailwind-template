import { ModalProps } from "pol-ui/dist/components/PopUps/Modal/types";
import { atom } from "recoil";

const initialModalState: ModalProps = {
	isOpen: false,
};

export const modalState = atom<ModalProps>({
	key: "modalState",
	default: initialModalState,
});
