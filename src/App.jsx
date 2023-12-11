import {Routes, Route} from 'react-router-dom'
import { useState } from "react";
import { firestore } from "./config/firebase";
import {addDoc, collection} from '@firebase/firestore'

import Header from './components/header/Header'
import Register from './components/register/Register';
import Login from './components/login/Login';

function App() {
	const [message, setMessage] = useState('');

	const ref = collection(firestore, 'messages');

	const loginSubmitHandler = () => {

	}

    return (
	<>
		<Header />

		<Routes>
			<Route path='/register' element={<Register />}/>
			<Route path='/login' element={<Login />}/>
		</Routes>
	</>
	);
}

export default App;
