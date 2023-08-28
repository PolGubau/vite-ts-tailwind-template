import { ToastProps } from "pol-ui/dist/components";
import { atom } from "recoil";

const initialState: ToastProps = {
	isOpen: false,
};

export const toastState = atom<ToastProps>({
	key: "toastState",
	default: initialState,
});
