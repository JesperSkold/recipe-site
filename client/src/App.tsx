import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import HomePage from "./components/HomePage";
const App = () => {
	return (
    <>
    <GlobalStyles/>
		<Router>
			<Routes>
        <Route path="/" element={<HomePage />}/>
			</Routes>
		</Router>
    </>
	);
};

{/* <div>App</div> */}
export default App;
