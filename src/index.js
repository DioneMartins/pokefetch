import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FetchPokemon from './pokemon/fetchPokemon';
import FetchBerry from './berries/fetchBerry';
import Init from './init/init';
import { isBrowser, isMobile } from 'react-device-detect';

class PageSwitcher extends React.Component {
  constructor() {
    super();
    this.state = { showMessage: 0 }
  }

  _showMessage = (int) => {
    this.setState({
      showMessage: int
    });
  }

  render() {
    if (isBrowser) {
      return (
        <div id="whole">
          <button id="init" className="buttons" onClick={this._showMessage.bind(null, 0)}>Inicío</button>
          <button id="pokemon" className="buttons" onClick={this._showMessage.bind(null, 1)}>Pokemon</button>
          <button id="berries" className="buttons" onClick={this._showMessage.bind(null, 2)}>Berry</button>
          {this.state.showMessage === 0 && (<Init />)}
          {this.state.showMessage === 1 && (<FetchPokemon />)}
          {this.state.showMessage === 2 && (<FetchBerry />)}
        </div>
      );
    }
    else if (isMobile) {
      return (
        <div id="wholem">
          <button id="initm" className="buttonsm" onClick={this._showMessage.bind(null, 0)}>Inicío</button>
          <button id="pokemonm" className="buttonsm" onClick={this._showMessage.bind(null, 1)}>Pokemon</button>
          <button id="berriesm" className="buttonsm" onClick={this._showMessage.bind(null, 2)}>Berry</button>
          {this.state.showMessage === 0 && (<Init />)}
          {this.state.showMessage === 1 && (<FetchPokemon />)}
          {this.state.showMessage === 2 && (<FetchBerry />)}
        </div>
      );
    }
  }
}

ReactDOM.render((
  <React.StrictMode>
    <PageSwitcher />
  </React.StrictMode >
), document.getElementById('root'));

reportWebVitals();
