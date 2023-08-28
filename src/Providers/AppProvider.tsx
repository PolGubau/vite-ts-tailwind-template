import router from "@/Router/Router";
import { modalState } from "@/States";
import { toastState } from "@/States/toast.state";
import { PopupsProvider } from "pol-ui";
import { RouterProvider } from "react-router-dom";
import { useRecoilState } from "recoil";
import Modal from "./Modal";

const AppProvider = () => {
	const [modal, setModal] = useRecoilState(modalState);
	const [toast, setToast] = useRecoilState(toastState);

	console.log(modal.isOpen);
	return (
		<>
			{/* <PopupsProvider modalState={modal} toastState={toast} setModal={setModal} setToast={setToast}> */}
			<RouterProvider router={router} />
			{modal.isOpen && <Modal state={modal} setState={setModal} />} {/* </PopupsProvider> */}
		</>
	);
};

export default AppProvider;
