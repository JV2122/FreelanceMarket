import React, { Component } from 'react'
import axios from 'axios';
import './componentCss/Registratio'
export default class Registration extends Component {


    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            fullname: "",
            mobile: "",
            email: "",
            confirm: ""
        };

        this.onChangeInput = this.onChangeInput.bind(this);
    }

    /* callAPI() {
       fetch("http://localhost:3001/kk")
           .then(res => res.text())
           .then(res => this.setState({ apiResponse: res }));
   }
   
   componentWillMount() { 
       this.callAPI();
   }
   */


    validateForm() {
        const username = this.state.username;
        const password = this.state.password;
        const fullname = this.state.fullname;
        const mobile = this.state.mobile;
        const email = this.state.email;
        const confirm = this.state.confirm;

        if (confirm != password) {
            alert("incorrect confirm password");
        }
        else {
            var data = {
                username: username,
                password: password,
                fullname: fullname,
                mobile: mobile,
                email: email
            }

            axios.post('http://localhost:3001/registration', data)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

            alert("Registration successfull");

        }


    }

    onChangeInput(event) {

        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value })

    }




    render() {
        return (
            <div>
                <div class="container">
                    <div class="login">
                        <h2>Login</h2>
                        <form>
                            <input class="fulName-input" type="text" name="fullName" placeholder="Full Name" />
                            <input class="email-input" type="text" name="email" placeholder="Email" />
                            <input class="username-input" type="text" name="username" placeholder="Username" />
                            <input class="mobile-input" type="text" name="Mobile" placeholder="Mobile" />
                            <input class="password-input" type="text" name="password" placeholder="Password" />
                            <input class="confirm-password-input" type="text" name="confirm-password"
                                placeholder="Confirm Password" />
                        </form>
                        <button class="login-button" type="submit" name="submit">Login</button>
                        <div>
                            <h5>Already Have Account?<a href="#">Login</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
