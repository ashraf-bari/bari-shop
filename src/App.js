import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { checkUserSession } from './redux/user/user.actions';
// import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
// import { selectShopCollectionsForPreview } from './redux/shop/shop.selectors';

// import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {

  // unsubscribeFromAuth = null;

  componentDidMount() {

    const { checkUserSession } = this.props;
    checkUserSession();

    // Before Redux-Saga
    // ==========================================================================
    // const { setCurrentUser } = this.props;

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       })

    //     });
    //   }

    //   setCurrentUser(userAuth);
    // =================================================================================
    // addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items })));

    //});
  }


  componentWillUnmount() {
    // this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectShopCollectionsForPreview,
});

// We are not actually using the mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
  // setCurrentUser: (user) => dispatch(setCurrentUser(user))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
