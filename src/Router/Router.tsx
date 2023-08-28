import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Routes } from "./Routes";
import { AboutPage, ContactPage, HomePage } from "@/Pages";
import Layout from "@/components/Layout/Layout";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path={Routes.Home} element={<Layout />}>
			<Route index element={<HomePage />} />
			<Route path={Routes.About} element={<AboutPage />} />
			<Route path={Routes.Contact} element={<ContactPage />} />
			<Route path={Routes.NotFound} element={<div>NotFound</div>} />
		</Route>
	)
);
export default router;
