import React from 'react';
import './fetchBerry.css';
import BerryCard from './berryCard';
import { isMobile, isDesktop } from 'react-device-detect';

class FetchBerry extends React.Component {
    state = {
        clicked: null,
        nomesA: [0, 1, 2],
        nomes: null
    }

    _showMessage = (int) => {
        this.setState({
            clicked: int
        });
    }

    render() {
        if (isDesktop) {
            return (
                <div>
                    <div id="geral">
                        <button className="buttonsberries" id="firstbutton"
                            onClick={this._showMessage.bind(null, 1)}>Apimentada</button>
                        <button className="buttonsberries"
                            onClick={this._showMessage.bind(null, 2)}>Seca</button>
                        <button className="buttonsberries"
                            onClick={this._showMessage.bind(null, 3)}>Doce</button>
                        <button className="buttonsberries"
                            onClick={this._showMessage.bind(null, 4)}>Amarga</button>
                        <button className="buttonsberries"
                            onClick={this._showMessage.bind(null, 5)}>Azeda</button>
                    </div>
                    {this.state.clicked != null ?
                        <div>
                            {this.state.clicked === 1 &&
                                (<div id="spicy">
                                    {new BerryCard().render(this.state.clicked)}
                                </div>)}
                            {this.state.clicked === 2 &&
                                (<div id="dry">
                                    {new BerryCard().render(this.state.clicked)}
                                </div>)}
                            {this.state.clicked === 3 &&
                                (<div id="sweet">
                                    {new BerryCard().render(this.state.clicked)}
                                </div>)}
                            {this.state.clicked === 4 &&
                                (<div id="bitter">
                                    {new BerryCard().render(this.state.clicked)}
                                </div>)}
                            {this.state.clicked === 5 &&
                                (<div id="sour">
                                    {new BerryCard().render(this.state.clicked)}
                                </div>)}
                        </div> :
                        <div>
                            {/*não exibir*/}
                        </div>
                    }
                </div>
            );
        }
        else if (isMobile) {
            return (
                <div>
                    <div id="geralm">
                        <button className="buttonsberriesm" id="firstbuttonm"
                            onClick={this._showMessage.bind(null, 1)}>Apimentada</button>
                        <button className="buttonsberriesm"
                            onClick={this._showMessage.bind(null, 2)}>Seca</button>
                        <button className="buttonsberriesm"
                            onClick={this._showMessage.bind(null, 3)}>Doce</button>
                        <button className="buttonsberriesm" id="thirdbuttonm"
                            onClick={this._showMessage.bind(null, 4)}>Amarga</button>
                        <button className="buttonsberriesm"
                            onClick={this._showMessage.bind(null, 5)}>Azeda</button>
                    </div>
                    {this.state.clicked != null ?
                        <div>
                            {this.state.clicked === 1 &&
                                (<div id="spicyM">
                                    {new BerryCard().render(this.state.clicked)}
                                </div>)}
                            {this.state.clicked === 2 &&
                                (<div id="dryM">
                                    {new BerryCard().render(this.state.clicked)}
                                </div>)}
                            {this.state.clicked === 3 &&
                                (<div id="sweetM">
                                    {new BerryCard().render(this.state.clicked)}
                                </div>)}
                            {this.state.clicked === 4 &&
                                (<div id="bitterM">
                                    {new BerryCard().render(this.state.clicked)}
                                </div>)}
                            {this.state.clicked === 5 &&
                                (<div id="sourM">
                                    {new BerryCard().render(this.state.clicked)}
                                </div>)}
                        </div> :
                        <div>
                            {/*não exibir*/}
                        </div>
                    }
                </div>
            );
        }
        else {
            return (
                <t>Browser não suportado pelo site</t>
            );
        }
    }
}

export default FetchBerry;