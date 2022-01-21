import React from 'react';
import './init.css';
import { isBrowser, isMobile } from 'react-device-detect';
/*
Removing unused imports, but keeping refference to help tracking improvement
import { Component } from 'react';
import { BrowserView, MobileView, isDesktop } from "react-device-detect";
NOTE: Imports with "" instead of ''
*/
/*
Fixing console errors and warnings, but keeping refference to help tracking improvement
<t> não é reconhecido. substituindo por <p>
*/

class Init extends React.Component {
    state = {}
    render() {
        if (isBrowser) {
            return (
                <div id="geralInit">
                    <p className="p" id="welcome">Olá! Bem-vindos à Pokefetch, a (inacabada) Wikia de Pokemon!</p>
                    <p className="p" id="páginas">Clique nos botões para mudar de página:</p>
                    <p className="p" id="páginas1">A página "Início" te retorna para essa página.</p>
                    <p className="p" id="páginas2">A página "Pokemon" permite que você pesquise por nomes e números de Pokemon
                        e te retorna nome, id, sprite comum e sprite Shiny.</p>
                    <p className="p" id="páginas3">A página "Berry" exibe uma lista de Berries filtradas por sabor.</p>
                    <p className="p" id="disclaimer">Todos os dados da Pokefetch são puxados da PokeAPI.</p>
                </div>
            );
        }
        else if (isMobile) {
            return (
                <div id="geralInitm">
                    <p className="pm" id="welcome">Olá! Bem-vindos à Pokefetch, a (inacabada) Wikia de Pokemon!</p>
                    <p className="pm" id="páginas">Clique nos botões para mudar de página:</p>
                    <p className="pm" id="páginas1">A página "Início" te retorna para essa página.</p>
                    <p className="pm" id="páginas2">A página "Pokemon" permite que você pesquise por nomes e números de Pokemon
                        e te retorna nome, id, sprite comum e sprite Shiny.</p>
                    <p className="pm" id="páginas3">A página "Berry" - no momento da escrita dessa parte, ainda inacabada -
                        exibe uma lista de Berries filtradas por sabor.</p>
                    <p className="pm" id="disclaimer">Todos os dados da Pokefetch são puxados da PokeAPI.</p>
                </div>
            );
        }
        else
            return (<p>Browser não suportado</p>);
    }
}

export default Init;