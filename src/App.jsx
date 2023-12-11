import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { firestore } from "./config/firebase";
import { addDoc, collection } from "@firebase/firestore";
import { auth } from "./config/firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";

import Header from "./components/header/Header";
import Register from "./components/register/Register";
import Login from "./components/login/Login";

function App() {
    const [message, setMessage] = useState("");

    const ref = collection(firestore, "messages");

    const loginSubmitHandler = (formData) => {
        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((token) => console.log(token))
            .catch((err) => console.log(err.message));
    };

    const registerSubmitHandler = (formData) => {
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((token) => console.log(token))
            .catch((err) => console.log(err.message));
    };

    return (
        <>
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
        </>
    );
}

export default App;
