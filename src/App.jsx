import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "./config/firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import AuthContext from "./contexts/authContext";
import Home from "./components/home/Home";

import styles from "./App.module.css"
import Donations from './components/donations/Donations';
import DonationModal from './components/donations/DonationModal';

function App() {
	const [authToken, setAuthToken] = useState({});

    const loginSubmitHandler = (formData) => {
        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((token) => setAuthToken(token.user))
            .catch((err) => console.log(err.message));
    };

    const registerSubmitHandler = (formData) => {
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((token) => setAuthToken(token.user))
            .catch((err) => console.log(err.message));
    };

    return (
		<AuthContext.Provider value={authToken}>
			<div className={styles.container}>

				<Header />

				<Routes>
					<Route
						path="/register"
						element={<Register submitHandler={registerSubmitHandler} />}
					/>
					<Route
						path="/login"
						element={<Login submitHandler={loginSubmitHandler} />}
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
