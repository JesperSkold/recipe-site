import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import HomePage from "./components/HomePage";
import RecipePage from "./components/RecipePage";
const App = () => {
	return (
    <>
    <GlobalStyles/>
		<Router>
			<Routes>
        <Route path="/" element={<HomePage />}/>
				<Route path="/recipes/:recipeId" element={<RecipePage />} />
			</Routes>
		</Router>
    </>
	);
};

{/* <div>App</div> */}
export default App;
