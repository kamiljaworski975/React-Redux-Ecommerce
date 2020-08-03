import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/configfirebase";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
        alert("passwords don't match")
        this.setState({
            password: "",
            confirmPassword: ""
        })
        return
    }

    try {
        const {user} = await auth.createUserWithEmailAndPassword(email, password)

        await createUserProfileDocument(user, {displayName});

        this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
        })

    } catch(error) {
        console.log('error sign up', error.message)
    }
  }

  handleChangeForm = (event) => {
    const {name, value} = event.target;

    this.setState({
        [name]: value
    })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            label="Name"
            required
            onChange={this.handleChangeForm}
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            label="Email"
            required
            onChange={this.handleChangeForm}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="Password"
            required
            onChange={this.handleChangeForm}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            required
            onChange={this.handleChangeForm}
          />
           <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp