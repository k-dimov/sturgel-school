import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { auth } from "./config/firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";

import Header from "./components/header/Header";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import AuthContext from "./contexts/authContext";

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
            </Routes>
        </AuthContext.Provider>
    );
}

export default App;
