import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;
        const { emailSignInStart } = this.props;

        emailSignInStart(email, password);

        // Before Redux-Saga
        // try {
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({
        //         email: '',
        //         password: ''
        //     });
        // } catch (error) {
        //     console.log(error);
        // }

    };

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { googleSignInStart } = this.props;
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                            {''}
                            Sign in with Google{''}
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});


export default connect(null, mapDispatchToProps)(SignIn);