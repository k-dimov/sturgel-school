import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";


import AuthContext from "./contexts/authContext";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Logout from './components/logout/Logout';
import Home from "./components/home/Home";
import Donations from './components/donations/Donations';

import styles from "./App.module.css"

function App() {
	const [user, setUser] = useState({});

	const logoutHandler = () => {
		setUser({});
	}

    return (
		<AuthContext.Provider value={user}>
			<div className={styles.container}>

				<Header setUser={setUser}/>

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
					<Route path='/logout' element={<Logout logoutHandler={logoutHandler}/>}></Route>
				</Routes>

				<Footer />
			</div>
		</AuthContext.Provider>
    );
}

export default App;
