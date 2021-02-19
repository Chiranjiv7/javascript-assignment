import React from 'react';
//import {Component} from 'react';

export default class ComponentSignup extends React.Component{
    render()
    {
        return (
            <div>
                Hello I am SignUp.
                <div className="mt-4 ml-4">
                <form onSubmit={this.handleSignUp}>
                <label htmlFor="fullname">FullName</label>
                <input type="text" id="fullname" name="fullname" required autoFocus />
                <br />
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required/>
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required/>
                <br />
                <button type="submit">signup</button>       
                </form>
                </div>
            </div>
        )   
    }
    handleSignUp = (event) => {
        event.preventDefault();
        localStorage.setItem(document.getElementById("username").value,document.getElementById("password").value);
        console.log('signup successfull')
    }
}