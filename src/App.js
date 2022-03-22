import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Welcome from "./Pages/Welcome/Welcome";

function App() {
	return (
		<main className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Welcome />} />
					<Route path="*" element={<Layout />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;
