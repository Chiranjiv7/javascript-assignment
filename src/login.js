import React from 'react';
import { Link } from 'react-router-dom';

export default class ComponentLogin extends React.Component{
    render()
    {
        return (
            <div>
                Hello I am Login.
                <div className="mt-4 ml-4">
                <form onSubmit={this.handleLogin}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required autoFocus />
                <br /> 
                <label htmlFor="password" className="ml-4" style={{width: '100px' ,color: 'red', marginTop: '1em'}}>Password</label>
                <input type="password" id="password" name="password" required />
                <br />
                <button type="submit">login</button>
                </form>
                </div>
                <Link to={'/signup'} className="nav-link" style={{marginRight:'2em'}}>Signup</Link>
            </div>
        )
    }
    handleLogin = (event) => {
        event.preventDefault()
        let pwd = localStorage.getItem(document.getElementById('username').value)
        if (pwd === document.getElementById('password').value) return console.log('login successfull')
    }
}