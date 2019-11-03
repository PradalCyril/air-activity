import React, {Component} from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
// import logoJPG from './svg/IMG_2025.JPG'
import logoSVG from './svg/air-activity-slim.svg'
import HomePage from './components/HomePage';
import Booking from './components/Booking';
import Navbar from './components/NavBar';
import * as userActions from './actions/userActions';
import { translate } from './translate/translate';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className='header-container'>
                    {/* <img src={logoJPG} className="App-logo" alt="logo" />*/}
                    <img src={logoSVG} className="App-logo" alt="logo" />
                    <div>
                        <button
                            type='language'
                            className='language-btn'
                            onClick={() => this.props.userActions.changeLanguage(this.props.language)}
                        >
                            <p className='language-text'>{`France-${this.props.language.toUpperCase()}`}</p>
                        </button>
                        <Link to='/' className='link-btn'>{translate(this.props.language, 'contactUs')}</Link>
                    </div>
                </div>
                <Navbar language={this.props.language}/>
                <Switch>
                    <Route
                        exact
                        path='/'
                        render={() => (
                            <Redirect
                                to='/home'
                            />
                        )}
                    />
                    <Route path='/home' component={HomePage} />
                    <Route path='/booking' component={Booking} />
                </Switch>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    language: state.user.language
});

const mapDispatchToProps = dispatch => ({
    userActions: bindActionCreators(userActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
