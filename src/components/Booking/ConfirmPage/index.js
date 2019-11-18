
import React, { Component } from 'react';
import './index.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Lottie from 'react-lottie'
import animationData from './asset/ok.json'


const routes = {
  '/booking/confirm': { message: "Votre réservation est enregistrée!", path: "/home", button: 'Accueil' },
  '/contact/confirm': { message: "Votre message est enregistrée!", path: "/contact", button: 'Contact' }
}

class ConfirmPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
    }

  }

  componentDidMount() {

    this.setState(
      { message: routes[this.props.location.pathname].message, }
    )
  }

  routeChange() {
    this.props.history.push(routes[this.props.location.pathname].path);
  }

  render(prevState) {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      }
    }

    return (
      <div>
        <div className="confirm_container">

          <div>
            <Lottie options={defaultOptions}
              className='confirm-ok'
              height={200}
              width={200} />
          </div>

          <h2>
            {this.state.message}
          </h2>
          <p>
            Merci et bon voyage.
        </p>
          <button className="confirm_button" type="submit" onClick={() => this.routeChange()}>{routes[this.props.location.pathname].button}</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  players: state.players
});
export default withRouter(connect(mapStateToProps)(ConfirmPage));