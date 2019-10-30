import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import { inputPhoneNumber, inputName, inputEmail } from '../../../Generic/Form';

const mapDispatchToProps = (dispatch) => ({

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

  }
  render() {
    const { firstName, lastName, email, phoneNumber } = this.state;
    const { playerNumber } = this.props;
    const inputFirstName = inputName(firstName, this.updateState, 'firstName')
    const inputLastName = inputName(lastName, this.updateState, 'lastName');
    const inputMail = inputEmail(email, this.updateState);
    const inputPhone = inputPhoneNumber(phoneNumber, this.updateState);
    return (
      <div className='player'>
        {`Player ${playerNumber+1}: `}
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

export default connect(
  null,
  mapDispatchToProps
)(Player);