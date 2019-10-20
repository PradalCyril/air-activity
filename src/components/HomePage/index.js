import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 500, paddingRight: 500 }}>
        <h1 style={{ marginLeft: 20 }}>Air Activity</h1>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          Nos Partenaires :
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <button style={{ width: 200, height: 50, marginTop: 20, marginRight: 5 }}>Aéroport Montpellier Méditerranée</button>
            <button style={{ width: 200, height: 50, marginTop: 20, marginRight: 5  }}>Aéroport Marseille Provence</button>
            <button style={{ width: 200, height: 50, marginTop: 20, marginRight: 5  }}>Paris-Charles De Gaulle</button>
            <button style={{ width: 200, height: 50, marginTop: 20 }}>Brussels South Charleroi Airport</button>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;
