import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Mybook from "./book";
import Myuser from "./user";
import Myapi from "./api";
import Myall from "./all";

function App() {
	return (
			<HashRouter>
				<ul id="mynav">
					<li> <Link to="/" className="mylink">Book Management</Link> </li>
					<li> <Link to="/user" className="mylink">User Management</Link> </li>
					<li> <Link to="/api" className="mylink">Manage Api</Link> </li>
					<li> <Link to="/all" className="mylink">All Redux Data</Link> </li>
				</ul>
				<Routes>
					<Route exact path="/" element={<Mybook/>} />
					<Route exact path="/user" element={<Myuser/>} />
					<Route exact path="/api" element={<Myapi/>} />
					<Route exact path="/all" element={<Myall/>} />
				</Routes>
			</HashRouter>
		)
}

export default App;
