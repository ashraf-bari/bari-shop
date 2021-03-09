import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        const { signUpStart } = this.props;

        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        };

        signUpStart({ displayName, email, password }); // this object is the argument for userCredentials

        // try {
        //     const { user } = await auth.createUserWithEmailAndPassword(email, password);

        //     await createUserProfileDocument(user, { displayName });

        //     this.setState({
        //         displayName: '',
        //         email: '',
        //         password: '',
        //         confirmPassword: ''
        //     });

        // } catch (error) {
        //     console.error(error);
        // }
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {

        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have any account</h2>
                <span>Sign up with your email and password.</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        handleChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'> SIGN UP </CustomButton>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    // Both are correct
    // signUpStart: (displayName, email, password) => dispatch(signUpStart({ displayName, email, password })),
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});


export default connect(null, mapDispatchToProps)(SignUp);