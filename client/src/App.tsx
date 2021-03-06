import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./global-styles/GlobalStyles";
import HomePage from "./components/HomePage";
import RecipePage from "./components/RecipePage";
import PageNotFound from "./components/PageNotFound";

const App = () => {
	return (
    <>
    <GlobalStyles/>
		<Router>
			<Routes>
        <Route path="*" element={<PageNotFound />}/>
        <Route path="/" element={<HomePage />}/>
				<Route path="/recipes/:recipeId" element={<RecipePage />} />
				<Route path="/category/:categoryName" element={<HomePage />} />
			</Routes>
		</Router>
    </>
	);
};

export default App;
