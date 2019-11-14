import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import './index.scss';
import { inputPhoneNumber, inputName, inputEmail } from '../../../Generic/Form';
import { translate } from '../../../../translate/translate';
import * as playersActions from '../../../../actions/playersActions';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = (dispatch) => ({
  playersActions: bindActionCreators(playersActions, dispatch)
})

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: ''
    }
  }
  updateState = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit = () => {
    this.props.playersActions.setUserList(this.state, this.props.playerNumber)
  }
  render() {
    const { firstName, lastName, email, phoneNumber } = this.state;
    const { playerNumber, isCreated } = this.props;
    if(isCreated){
      this.handleSubmit();
    }
    const inputFirstName = inputName(firstName, this.updateState, 'firstName', this.props.language)
    const inputLastName = inputName(lastName, this.updateState, 'lastName', this.props.language);
    const inputMail = inputEmail(email, this.updateState, this.props.language);
    const inputPhone = inputPhoneNumber(phoneNumber, this.updateState, this.props.language);
    return (
      <div className='player'>
        {`${translate(this.props.language, 'Player')} ${playerNumber+1}: `}
        <div className='inputs' >
          {inputFirstName}
          {inputLastName}
        </div>
        {this.props.playerNumber === 0 && <div className='inputs more-inputs' >
          {inputMail}
          {inputPhone}
        </div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  language: state.user.language
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Player));