import { Routes } from "@/Router";
import { Navbar, Icon, Text } from "pol-ui";
import { Link, Outlet } from "react-router-dom";

interface Props {
	children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<section className="w-full min-h-screen">
			<Navbar
				logo={
					<div className="flex items-center">
						<Icon icon="🤨" alwaysRender />
						<Text size={5} className="ml-2" value="Logo" />
					</div>
				}
				shadow="lg"
			>
				<div className="flex gap-3">
					<Link to={Routes.Home}>Home</Link>
					<Link to={Routes.Contact}>Contact</Link>
					<Link to={Routes.About}>About</Link>
				</div>
			</Navbar>
			<main className="flex flex-col gap-2 p-8">{children ?? <Outlet />}</main>
		</section>
	);
};

export default Layout;
