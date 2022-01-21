import React from 'react';
import './fetchBrowser.css';
import './fetchMobile.css';
import { isMobile, isDesktop } from 'react-device-detect';

class FetchPokemon extends React.Component {
    state = {
        link: "https://pokeapi.co/api/v2/pokemon/",
        nspritelink: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
        sspritelink: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/",
        evolutionlink: "https://pokeapi.co/api/v2/evolution-chain/",
        loading: true,
        poke: null,
        nome: null,
        idp: null
    };

    check() {
        if (this.state.poke.includes(' '))
            this.splitHifen();
        else {
            this.fetchIt();
        }
    }

    async fetchIt() {
        if (this.state.poke === null) { }
        const url = this.state.link + this.state.poke;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ nome: data.forms[0], idp: data.id, loading: false })
    }

    async splitHifen() {

        const split1 = this.state.poke.split(' ');
        switch (split1.length) {
            default:
                this.fetchIt();
            break;
            case 2:
                this.setState({ poke:  split1[0] + "-" + split1[1]});
                this.fetchIt();
            break;
            case 3:
                this.setState({ poke: split1[0] + "-" + split1[1] + "-" + split1[2] })
                this.fetchIt();
            break;
        }
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ loading: true })
        var ptemp = event.target.value.toLowerCase();
        this.setState({ poke: ptemp });
    }

    handleSubmit(event) {
        if (this.state.poke === null) {

        } else if (this.state.poke === 0) {

        } else if (this.state.poke > 898) {

        }
        else
            this.check();
        event.preventDefault();
    }

    render() {
        if (isDesktop)
            return (
                <div id="geralB">
                    <div id="srchB">
                        <form onSubmit={this.handleSubmit}>
                            <t id="SearchBarB">Insira o número do Pokemon: </t>
                            <label>
                                <input id="SearchBarB" type="text" value={this.state.poke} onChange={this.handleChange} />
                            </label>
                        </form>
                    </div>

                    <div id="loadngotB">{
                        (this.state.loading) ?
                            <div id="loadingB">Carregando...</div>
                            :
                            <div id="gotB" className="pokecardB">
                                <div>
                                    <t id="n" className="caption">Normal</t>
                                    <t id="s" className="caption">Shiny</t>
                                    <img alt="normal sprite" id="imgB" src={this.state.nspritelink + this.state.idp + ".png"} />
                                    <img alt="shiny sprite" id="imgB" src={this.state.sspritelink + this.state.idp + ".png"} />
                                </div>
                                <p id="PokeNameB">{this.state.nome.name}</p>
                                <p id="PokeIDB"> ID: {this.state.idp}</p>
                            </div>

                    }</div>
                </div>
            )
        else if (isMobile)
            return (
                <div id="geralM">
                    <div id="srchM">
                        <form onSubmit={this.handleSubmit}>
                            <t id="SearchBarM">Insira o número do Pokemon: </t>
                            <label>
                                <input id="SearchBarM" type="text" value={this.state.poke} onChange={this.handleChange} />
                            </label>
                        </form>
                    </div>

                    <div id="loadngotM">{
                        (this.state.poke === 0) ?
                            <div className="pokecardM">
                                <img alt="nenhum pokemon" id="imgM" src={this.state.spritelink + "0.png"} />
                                <p id="PokeZeroM">Sem pokemon</p>
                            </div>
                            :
                            (this.state.loading) ?
                                <div id="loadingM">Carregando...</div>
                                :
                                <div id="gotM" className="pokecardM">
                                    <img alt="normal sprite" id="imgM" src={this.state.nspritelink + this.state.idp + ".png"} />
                                    <img alt="shiny sprite" id="imgB" src={this.state.sspritelink + this.state.idp + ".png"} />
                                    <p id="PokeNameM">{this.state.nome.name}</p>
                                    <p id="PokeIDM"> ID: {this.state.idp}</p>
                                </div>

                    }</div>
                </div>
            )
        else <h2>O site não é compatível com sua plataforma</h2>
    }

}
export default FetchPokemon;