import useModal from "@/hooks/useModal";
import { Button } from "pol-ui";
import { ModalProps } from "pol-ui/dist/components/PopUps/Modal/types";

const HomePage = () => {
	const { trigerModalWithoutButtons } = useModal();

	const handleTrigerModal = () => {
		const modal: ModalProps = {
			isOpen: true,
			title: "Welcome to the official Pol-UI template.",
			icon: "asset",
			children: (
				<>
					<p>Enjoy your session using Pol-ui, typescript, tailwind, recoil and react router dom.</p>
				</>
			),
		};
		trigerModalWithoutButtons(modal);
	};

	return (
		<section className="grid w-full h-full justify-center">
			<Button onClick={handleTrigerModal}>Click me</Button>
		</section>
	);
};

export default HomePage;
