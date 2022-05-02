import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
const App = () => {
	return (
		<Router>
			<Routes>
        <Route path="/" element={<HomePage />}/>
			</Routes>
		</Router>
	);
};

{/* <div>App</div> */}
export default App;
