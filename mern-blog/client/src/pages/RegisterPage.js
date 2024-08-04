import { useState } from 'react';

export default function RegisterPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function register(ev){
        
        ev.preventDefault();
        
        const response = await fetch('http://localhost:4000/register' , {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.status === 200){
            alert('registration successful');
        } else {
            alert('registration failed');
        }
        
    }

    //onSubmit takes in a function that
    //takes in a code to be executed
    //with the form input when an event triggers 

    //return type is event (It is an event object 
    //containing information about the event 
    //like target element and values)
    //no need to specify 
    return (
        <form className="register" onSubmit={register}>
            <h1>Register</h1>
                <input type="text" 
                placeholder="username"
                value={username}
                onChange={ev => setUsername(ev.target.value)}/>
                <input type="password" 
                placeholder="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)}/> 
                <button>Register</button>
            </form>
    );
}