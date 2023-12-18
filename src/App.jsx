import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";


import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import AuthContext from "./contexts/authContext";
import Home from "./components/home/Home";

import styles from "./App.module.css"
import Donations from './components/donations/Donations';

function App() {
	const [user, setUser] = useState({});
	
    return (
		<AuthContext.Provider value={user}>
			<div className={styles.container}>

				<Header />

				<Routes>
					<Route
						path="/register"
						element={<Register setUser={setUser} />}
					/>
					<Route
						path="/login"
						element={<Login setUser={setUser} />}
					/>
					<Route path='/' element={<Home/>} />
					<Route path='/home' element={<Navigate to='/'/>}/>
					<Route path='/donations' element={<Donations/>}/>
				</Routes>

				<Footer />
			</div>
		</AuthContext.Provider>
    );
}

export default App;
