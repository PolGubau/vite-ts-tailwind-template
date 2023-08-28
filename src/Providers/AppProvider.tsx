import router from "@/Router/Router";
import { modalState } from "@/States";
import { toastState } from "@/States/toast.state";
import { PopupsProvider } from "pol-ui";
import { RouterProvider } from "react-router-dom";
import { useRecoilState } from "recoil";

const AppProvider = () => {
	const [modal, setModal] = useRecoilState(modalState);
	const [toast, setToast] = useRecoilState(toastState);

	return (
		<>
			<PopupsProvider modalState={modal} toastState={toast} setModal={setModal} setToast={setToast}>
				<RouterProvider router={router} />
			</PopupsProvider>
		</>
	);
};

export default AppProvider;
