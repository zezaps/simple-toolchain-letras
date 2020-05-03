import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./componentes/diseño/Navbar";
import Index from "./componentes/diseño/Index";
import Lyrics from "./componentes/canciones/Lyrics";
import Footer from "./componentes/diseño/Footer";

import "./App.css";

import { ContextController } from "./context";

const App = () => {
	return (
		<ContextController>
			<Router>
				<>
					<Navbar />
					<div className="container">
						<Switch>
							<Route exact path="/" component={Index} />
							<Route exact path="/lyrics/track/:id" component={Lyrics} />
						</Switch>
					</div>
					<Footer />
				</>
			</Router>
		</ContextController>
	);
};

export default App;
