import { useSetRecoilState } from "recoil";
import { toastState } from "@/States/toast.state";
import { ToastProps } from "pol-ui/dist/components";

const useToast = (): {
	trigger: (toast: ToastProps) => void;
	trigerToast: (toast: ToastProps) => void;
	closeToast: () => void;
} => {
	const trigger = useSetRecoilState<ToastProps>(toastState);

	const closeToast = (): void => {
		trigger({ isOpen: false });
	};

	const trigerToast = ({
		isOpen = true,
		message = "",
		variant = "success",
		duration = 3000,
		action,
	}: ToastProps): void => {
		trigger({
			isOpen,
			message,
			variant,
			duration,
			action,
		});
	};

	return {
		trigger,
		trigerToast,
		closeToast,
	};
};

export default useToast;
