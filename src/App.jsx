import { useState } from "react";
import { firestore } from "./config/firebase";
import {addDoc, collection} from '@firebase/firestore'

function App() {
	const [message, setMessage] = useState('');

	const ref = collection(firestore, 'messages');

	const submitHandler = (e) => {
		e.preventDefault();

		addDoc(ref, {message})
	}

	const changeHandler = (e) => {
		setMessage(e.target.value);
	}
    return (
	<>
		<form onSubmit={submitHandler}>
			<label htmlFor="text">Message</label>
			<input type="text" name="text" id="text" value={message} onChange={changeHandler}/>
			<button type="submit">Save</button>
		</form>
	</>
	);
}

export default App;
