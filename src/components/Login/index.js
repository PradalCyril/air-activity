import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss';

const mapDispatchToProps = (dispatch) => ({

})

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  updateState = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit = () => {

  }
  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className='login'>
          <input
            className='connexion-input'
            type='email'
            name='email'
            autoComplete='off'
            placeholder='email'
            value={this.state.email}
            onChange={(e) => this.updateState(e)}
          />
          <input
            className='connexion-input'
            type='password'
            name='password'
            placeholder='password'
            value={this.state.password}
            onChange={(e) => this.updateState(e)}
          />
          <button
            className='connexion-btn'
            type='submit'
          >
            Connexion
          </button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Login);