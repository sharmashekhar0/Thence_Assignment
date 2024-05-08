import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
	createBrowserRouter,
	Route,
	RouterProvider,
	createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Register from "./pages/Register/Register.jsx";
import Congratulations from "./pages/Congratulations/Congratulations.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="/" element={<Home />} />
			<Route path="/register" element={<Register />} />
			<Route
				path="/register/Congratulations"
				element={<Congratulations />}
			/>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</React.StrictMode>
);
