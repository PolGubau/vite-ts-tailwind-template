import "./assets/styles/global.css";

import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./Providers/AppProvider";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<RecoilRoot>
			<AppProvider />
		</RecoilRoot>
	</React.StrictMode>
);
