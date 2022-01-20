import React from 'react';
import './berryCard.css';
import { BrowserView, MobileView, isBrowser, isMobile, isDesktop } from "react-device-detect";

class BerryCard extends React.Component {
    state = {
        imglink: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/",
        imglink2: "-berry.png"
    }
    render(berryType) {
        const nomes1 = ["cheri", "leppa", "oran", "persim", "lum", "razz", "pinap", "pomeg", "qualot", "hondew",
            "nomel", "belue", "rindo", "shuca", "charti", "apicot", "chople", "figy", "occa", "tamato", "tanga",
            "babiri", "starf", "liechi", "spelon", "petaya", "lansat", "enigma", "rowap"];
        const links1 = [null];

        for (var i = 0; i < nomes1.length; i++) {
            links1[i] = this.state.imglink + nomes1[i] + this.state.imglink2;
        }

        const nomes2 = ["kasib", "babiri", "liechi", "lum", "sitrus", "oran", "razz", "bluk", "kelpsy", "hondew",
            "grepa", "tamato", "enigma", "spelon", "starf", "chesto", "yache", "persim", "coba", "lansat", "passho",
            "wiki", "kebia", "charti", "cornn", "chilan", "apicot", "pamtre", "ganlon", "micle"];
        const links2 = [null];

        for (var i = 0; i < nomes2.length; i++) {
            links2[i] = this.state.imglink + nomes2[i] + this.state.imglink2;
        }

        const nomes3 = ["leppa", "persim", "lum", "sitrus", "micle", "occa", "payapa", "haban", "chilan", "ganlon",
            "bluk", "nanab", "pomeg", "qualot", "grepa", "cornn", "pamtre", "pecha", "mago", "shuca", "wacan",
            "kasib", "magost", "watmel", "liechi", "salac", "lansat", "starf", "custap"];
        const links3 = [null];

        for (var i = 0; i < nomes3.length; i++) {
            links3[i] = this.state.imglink + nomes3[i] + this.state.imglink2;
        }

        const nomes4 = ["lansat", "starf", "custap", "lum", "sitrus", "chople", "colbur", "leppa", "salac", "oran",
            "nanab", "wepear", "pomeg", "kelpsy", "hondew", "magost", "watmel", "rawst", "passho", "aguav", "coba",
            "rindo", "haban", "rabuta", "durin", "ganlon", "petaya", "jaboca"];
        const links4 = [null];

        for (var i = 0; i < nomes4.length; i++) {
            links4[i] = this.state.imglink + nomes4[i] + this.state.imglink2;
        }

        const nomes5 = ["leppa", "oran", "persim", "sitrus", "jaboca", "aspear", "wacan", "kebia", "tanga", "petaya",
            "wepear", "pinap", "kelpsy", "qualot", "qualot", "grepa", "rabuta", "durin", "iapapa", "payapa",
            "yache", "colbur", "nomel", "belue", "salac", "apicot", "lansat", "starf"];
        const links5 = [null];

        for (var i = 0; i < nomes5.length; i++) {
            links5[i] = this.state.imglink + nomes5[i] + this.state.imglink2;
        }
        if (isBrowser)
            switch (berryType) {
                case 1: {
                    return (
                        <div id="berryGeral">
                            <div className="spicy">
                                <p className="spicyName">{nomes1[0]}</p>
                                <img className="spicyBerry" src={links1[0]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[1]}</p>
                                <img className="spicyBerry" src={links1[1]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[2]}</p>
                                <img className="spicyBerry" src={links1[2]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[3]}</p>
                                <img className="spicyBerry" src={links1[3]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[4]}</p>
                                <img className="spicyBerry" src={links1[4]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[5]}</p>
                                <img className="spicyBerry" src={links1[5]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[6]}</p>
                                <img className="spicyBerry" src={links1[6]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[7]}</p>
                                <img className="spicyBerry" src={links1[8]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[9]}</p>
                                <img className="spicyBerry" src={links1[9]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[10]}</p>
                                <img className="spicyBerry" src={links1[10]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[11]}</p>
                                <img className="spicyBerry" src={links1[11]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[12]}</p>
                                <img className="spicyBerry" src={links1[13]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[14]}</p>
                                <img className="spicyBerry" src={links1[14]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[15]}</p>
                                <img className="spicyBerry" src={links1[15]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[16]}</p>
                                <img className="spicyBerry" src={links1[16]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[17]}</p>
                                <img className="spicyBerry" src={links1[17]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[18]}</p>
                                <img className="spicyBerry" src={links1[18]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[19]}</p>
                                <img className="spicyBerry" src={links1[19]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[20]}</p>
                                <img className="spicyBerry" src={links1[20]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[21]}</p>
                                <img className="spicyBerry" src={links1[21]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[22]}</p>
                                <img className="spicyBerry" src={links1[22]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[23]}</p>
                                <img className="spicyBerry" src={links1[23]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[24]}</p>
                                <img className="spicyBerry" src={links1[24]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[25]}</p>
                                <img className="spicyBerry" src={links1[25]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[26]}</p>
                                <img className="spicyBerry" src={links1[26]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[27]}</p>
                                <img className="spicyBerry" src={links1[27]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes1[28]}</p>
                                <img className="spicyBerry" src={links1[28]} />
                            </div>
                        </div>
                    );
                }
                case 2: {
                    return (
                        <div id="berryGeral">
                            <div className="spicy">
                                <p className="spicyName">{nomes2[0]}</p>
                                <img className="spicyBerry" src={links2[0]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[1]}</p>
                                <img className="spicyBerry" src={links2[1]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[2]}</p>
                                <img className="spicyBerry" src={links2[2]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[3]}</p>
                                <img className="spicyBerry" src={links2[3]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[4]}</p>
                                <img className="spicyBerry" src={links2[4]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[5]}</p>
                                <img className="spicyBerry" src={links2[5]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[6]}</p>
                                <img className="spicyBerry" src={links2[6]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[7]}</p>
                                <img className="spicyBerry" src={links2[8]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[9]}</p>
                                <img className="spicyBerry" src={links2[9]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[10]}</p>
                                <img className="spicyBerry" src={links2[10]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[11]}</p>
                                <img className="spicyBerry" src={links2[11]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[12]}</p>
                                <img className="spicyBerry" src={links2[13]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[14]}</p>
                                <img className="spicyBerry" src={links2[14]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[15]}</p>
                                <img className="spicyBerry" src={links2[15]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[16]}</p>
                                <img className="spicyBerry" src={links2[16]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[17]}</p>
                                <img className="spicyBerry" src={links2[17]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[18]}</p>
                                <img className="spicyBerry" src={links2[18]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[19]}</p>
                                <img className="spicyBerry" src={links2[19]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[20]}</p>
                                <img className="spicyBerry" src={links2[20]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[21]}</p>
                                <img className="spicyBerry" src={links2[21]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[22]}</p>
                                <img className="spicyBerry" src={links2[22]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[23]}</p>
                                <img className="spicyBerry" src={links2[23]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[24]}</p>
                                <img className="spicyBerry" src={links2[24]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[25]}</p>
                                <img className="spicyBerry" src={links2[25]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[26]}</p>
                                <img className="spicyBerry" src={links2[26]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[27]}</p>
                                <img className="spicyBerry" src={links2[27]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[28]}</p>
                                <img className="spicyBerry" src={links2[28]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes2[29]}</p>
                                <img className="spicyBerry" src={links2[29]} />
                            </div>
                        </div>
                    );
                }
                case 3: {
                    return (
                        <div id="berryGeral">
                            <div className="spicy">
                                <p className="spicyName">{nomes3[0]}</p>
                                <img className="spicyBerry" src={links3[0]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[1]}</p>
                                <img className="spicyBerry" src={links3[1]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[2]}</p>
                                <img className="spicyBerry" src={links3[2]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[3]}</p>
                                <img className="spicyBerry" src={links3[3]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[4]}</p>
                                <img className="spicyBerry" src={links3[4]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[5]}</p>
                                <img className="spicyBerry" src={links3[5]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[6]}</p>
                                <img className="spicyBerry" src={links3[6]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[7]}</p>
                                <img className="spicyBerry" src={links3[8]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[9]}</p>
                                <img className="spicyBerry" src={links3[9]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[10]}</p>
                                <img className="spicyBerry" src={links3[10]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[11]}</p>
                                <img className="spicyBerry" src={links3[11]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[12]}</p>
                                <img className="spicyBerry" src={links3[13]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[14]}</p>
                                <img className="spicyBerry" src={links3[14]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[15]}</p>
                                <img className="spicyBerry" src={links3[15]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[16]}</p>
                                <img className="spicyBerry" src={links3[16]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[17]}</p>
                                <img className="spicyBerry" src={links3[17]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[18]}</p>
                                <img className="spicyBerry" src={links3[18]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[19]}</p>
                                <img className="spicyBerry" src={links3[19]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[20]}</p>
                                <img className="spicyBerry" src={links3[20]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[21]}</p>
                                <img className="spicyBerry" src={links3[21]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[22]}</p>
                                <img className="spicyBerry" src={links3[22]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[23]}</p>
                                <img className="spicyBerry" src={links3[23]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[24]}</p>
                                <img className="spicyBerry" src={links3[24]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[25]}</p>
                                <img className="spicyBerry" src={links3[25]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[26]}</p>
                                <img className="spicyBerry" src={links3[26]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[27]}</p>
                                <img className="spicyBerry" src={links3[27]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes3[28]}</p>
                                <img className="spicyBerry" src={links3[28]} />
                            </div>
                        </div>
                    );
                }
                case 4: {
                    return (
                        <div id="berryGeral">
                            <div className="spicy">
                                <p className="spicyName">{nomes4[0]}</p>
                                <img className="spicyBerry" src={links4[0]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[1]}</p>
                                <img className="spicyBerry" src={links4[1]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[2]}</p>
                                <img className="spicyBerry" src={links4[2]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[3]}</p>
                                <img className="spicyBerry" src={links4[3]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[4]}</p>
                                <img className="spicyBerry" src={links4[4]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[5]}</p>
                                <img className="spicyBerry" src={links4[5]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[6]}</p>
                                <img className="spicyBerry" src={links4[6]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[7]}</p>
                                <img className="spicyBerry" src={links4[8]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[9]}</p>
                                <img className="spicyBerry" src={links4[9]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[10]}</p>
                                <img className="spicyBerry" src={links4[10]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[11]}</p>
                                <img className="spicyBerry" src={links4[11]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[12]}</p>
                                <img className="spicyBerry" src={links4[13]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[14]}</p>
                                <img className="spicyBerry" src={links4[14]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[15]}</p>
                                <img className="spicyBerry" src={links4[15]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[16]}</p>
                                <img className="spicyBerry" src={links4[16]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[17]}</p>
                                <img className="spicyBerry" src={links4[17]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[18]}</p>
                                <img className="spicyBerry" src={links4[18]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[19]}</p>
                                <img className="spicyBerry" src={links4[19]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[20]}</p>
                                <img className="spicyBerry" src={links4[20]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[21]}</p>
                                <img className="spicyBerry" src={links4[21]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[22]}</p>
                                <img className="spicyBerry" src={links4[22]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[23]}</p>
                                <img className="spicyBerry" src={links4[23]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[24]}</p>
                                <img className="spicyBerry" src={links4[24]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[25]}</p>
                                <img className="spicyBerry" src={links4[25]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[26]}</p>
                                <img className="spicyBerry" src={links4[26]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes4[27]}</p>
                                <img className="spicyBerry" src={links4[27]} />
                            </div>
                        </div>
                    );
                }
                case 5: {
                    return (
                        <div id="berryGeral">
                            <div className="spicy">
                                <p className="spicyName">{nomes5[0]}</p>
                                <img className="spicyBerry" src={links5[0]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[1]}</p>
                                <img className="spicyBerry" src={links5[1]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[2]}</p>
                                <img className="spicyBerry" src={links5[2]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[3]}</p>
                                <img className="spicyBerry" src={links5[3]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[4]}</p>
                                <img className="spicyBerry" src={links5[4]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[5]}</p>
                                <img className="spicyBerry" src={links5[5]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[6]}</p>
                                <img className="spicyBerry" src={links5[6]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[7]}</p>
                                <img className="spicyBerry" src={links5[8]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[9]}</p>
                                <img className="spicyBerry" src={links5[9]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[10]}</p>
                                <img className="spicyBerry" src={links5[10]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[11]}</p>
                                <img className="spicyBerry" src={links5[11]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[12]}</p>
                                <img className="spicyBerry" src={links5[13]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[14]}</p>
                                <img className="spicyBerry" src={links5[14]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[15]}</p>
                                <img className="spicyBerry" src={links5[15]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[16]}</p>
                                <img className="spicyBerry" src={links5[16]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[17]}</p>
                                <img className="spicyBerry" src={links5[17]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[18]}</p>
                                <img className="spicyBerry" src={links5[18]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[19]}</p>
                                <img className="spicyBerry" src={links5[19]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[20]}</p>
                                <img className="spicyBerry" src={links5[20]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[21]}</p>
                                <img className="spicyBerry" src={links5[21]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[22]}</p>
                                <img className="spicyBerry" src={links5[22]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[23]}</p>
                                <img className="spicyBerry" src={links5[23]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[24]}</p>
                                <img className="spicyBerry" src={links5[24]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[25]}</p>
                                <img className="spicyBerry" src={links5[25]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[26]}</p>
                                <img className="spicyBerry" src={links5[26]} />
                            </div>
                            <div className="spicy">
                                <p className="spicyName">{nomes5[27]}</p>
                                <img className="spicyBerry" src={links5[27]} />
                            </div>
                        </div>
                    );
                }
            }
        else if (isMobile)
            switch (berryType) {
                case 1: {
                    return (
                        <div id="berryGeral">
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[0]}</p>
                                <img className="spicyMBerry" src={links1[0]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[1]}</p>
                                <img className="spicyMBerry" src={links1[1]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[2]}</p>
                                <img className="spicyMBerry" src={links1[2]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[3]}</p>
                                <img className="spicyMBerry" src={links1[3]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[4]}</p>
                                <img className="spicyMBerry" src={links1[4]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[5]}</p>
                                <img className="spicyMBerry" src={links1[5]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[6]}</p>
                                <img className="spicyMBerry" src={links1[6]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[7]}</p>
                                <img className="spicyMBerry" src={links1[8]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[9]}</p>
                                <img className="spicyMBerry" src={links1[9]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[10]}</p>
                                <img className="spicyMBerry" src={links1[10]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[11]}</p>
                                <img className="spicyMBerry" src={links1[11]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[12]}</p>
                                <img className="spicyMBerry" src={links1[13]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[14]}</p>
                                <img className="spicyMBerry" src={links1[14]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[15]}</p>
                                <img className="spicyMBerry" src={links1[15]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[16]}</p>
                                <img className="spicyMBerry" src={links1[16]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[17]}</p>
                                <img className="spicyMBerry" src={links1[17]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[18]}</p>
                                <img className="spicyMBerry" src={links1[18]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[19]}</p>
                                <img className="spicyMBerry" src={links1[19]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[20]}</p>
                                <img className="spicyMBerry" src={links1[20]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[21]}</p>
                                <img className="spicyMBerry" src={links1[21]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[22]}</p>
                                <img className="spicyMBerry" src={links1[22]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[23]}</p>
                                <img className="spicyMBerry" src={links1[23]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[24]}</p>
                                <img className="spicyMBerry" src={links1[24]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[25]}</p>
                                <img className="spicyMBerry" src={links1[25]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[26]}</p>
                                <img className="spicyMBerry" src={links1[26]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[27]}</p>
                                <img className="spicyMBerry" src={links1[27]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes1[28]}</p>
                                <img className="spicyMBerry" src={links1[28]} />
                            </div>
                        </div>
                    );
                }
                case 2: {
                    return (
                        <div id="berryGeral">
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[0]}</p>
                                <img className="spicyMBerry" src={links2[0]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[1]}</p>
                                <img className="spicyMBerry" src={links2[1]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[2]}</p>
                                <img className="spicyMBerry" src={links2[2]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[3]}</p>
                                <img className="spicyMBerry" src={links2[3]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[4]}</p>
                                <img className="spicyMBerry" src={links2[4]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[5]}</p>
                                <img className="spicyMBerry" src={links2[5]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[6]}</p>
                                <img className="spicyMBerry" src={links2[6]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[7]}</p>
                                <img className="spicyMBerry" src={links2[8]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[9]}</p>
                                <img className="spicyMBerry" src={links2[9]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[10]}</p>
                                <img className="spicyMBerry" src={links2[10]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[11]}</p>
                                <img className="spicyMBerry" src={links2[11]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[12]}</p>
                                <img className="spicyMBerry" src={links2[13]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[14]}</p>
                                <img className="spicyMBerry" src={links2[14]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[15]}</p>
                                <img className="spicyMBerry" src={links2[15]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[16]}</p>
                                <img className="spicyMBerry" src={links2[16]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[17]}</p>
                                <img className="spicyMBerry" src={links2[17]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[18]}</p>
                                <img className="spicyMBerry" src={links2[18]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[19]}</p>
                                <img className="spicyMBerry" src={links2[19]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[20]}</p>
                                <img className="spicyMBerry" src={links2[20]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[21]}</p>
                                <img className="spicyMBerry" src={links2[21]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[22]}</p>
                                <img className="spicyMBerry" src={links2[22]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[23]}</p>
                                <img className="spicyMBerry" src={links2[23]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[24]}</p>
                                <img className="spicyMBerry" src={links2[24]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[25]}</p>
                                <img className="spicyMBerry" src={links2[25]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[26]}</p>
                                <img className="spicyMBerry" src={links2[26]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[27]}</p>
                                <img className="spicyMBerry" src={links2[27]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[28]}</p>
                                <img className="spicyMBerry" src={links2[28]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes2[29]}</p>
                                <img className="spicyMBerry" src={links2[29]} />
                            </div>
                        </div>
                    );
                }
                case 3: {
                    return (
                        <div id="berryGeral">
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[0]}</p>
                                <img className="spicyMBerry" src={links3[0]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[1]}</p>
                                <img className="spicyMBerry" src={links3[1]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[2]}</p>
                                <img className="spicyMBerry" src={links3[2]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[3]}</p>
                                <img className="spicyMBerry" src={links3[3]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[4]}</p>
                                <img className="spicyMBerry" src={links3[4]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[5]}</p>
                                <img className="spicyMBerry" src={links3[5]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[6]}</p>
                                <img className="spicyMBerry" src={links3[6]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[7]}</p>
                                <img className="spicyMBerry" src={links3[8]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[9]}</p>
                                <img className="spicyMBerry" src={links3[9]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[10]}</p>
                                <img className="spicyMBerry" src={links3[10]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[11]}</p>
                                <img className="spicyMBerry" src={links3[11]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[12]}</p>
                                <img className="spicyMBerry" src={links3[13]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[14]}</p>
                                <img className="spicyMBerry" src={links3[14]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[15]}</p>
                                <img className="spicyMBerry" src={links3[15]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[16]}</p>
                                <img className="spicyMBerry" src={links3[16]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[17]}</p>
                                <img className="spicyMBerry" src={links3[17]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[18]}</p>
                                <img className="spicyMBerry" src={links3[18]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[19]}</p>
                                <img className="spicyMBerry" src={links3[19]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[20]}</p>
                                <img className="spicyMBerry" src={links3[20]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[21]}</p>
                                <img className="spicyMBerry" src={links3[21]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[22]}</p>
                                <img className="spicyMBerry" src={links3[22]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[23]}</p>
                                <img className="spicyMBerry" src={links3[23]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[24]}</p>
                                <img className="spicyMBerry" src={links3[24]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[25]}</p>
                                <img className="spicyMBerry" src={links3[25]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[26]}</p>
                                <img className="spicyMBerry" src={links3[26]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[27]}</p>
                                <img className="spicyMBerry" src={links3[27]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes3[28]}</p>
                                <img className="spicyMBerry" src={links3[28]} />
                            </div>
                        </div>
                    );
                }
                case 4: {
                    return (
                        <div id="berryGeral">
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[0]}</p>
                                <img className="spicyMBerry" src={links4[0]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[1]}</p>
                                <img className="spicyMBerry" src={links4[1]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[2]}</p>
                                <img className="spicyMBerry" src={links4[2]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[3]}</p>
                                <img className="spicyMBerry" src={links4[3]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[4]}</p>
                                <img className="spicyMBerry" src={links4[4]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[5]}</p>
                                <img className="spicyMBerry" src={links4[5]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[6]}</p>
                                <img className="spicyMBerry" src={links4[6]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[7]}</p>
                                <img className="spicyMBerry" src={links4[8]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[9]}</p>
                                <img className="spicyMBerry" src={links4[9]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[10]}</p>
                                <img className="spicyMBerry" src={links4[10]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[11]}</p>
                                <img className="spicyMBerry" src={links4[11]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[12]}</p>
                                <img className="spicyMBerry" src={links4[13]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[14]}</p>
                                <img className="spicyMBerry" src={links4[14]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[15]}</p>
                                <img className="spicyMBerry" src={links4[15]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[16]}</p>
                                <img className="spicyMBerry" src={links4[16]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[17]}</p>
                                <img className="spicyMBerry" src={links4[17]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[18]}</p>
                                <img className="spicyMBerry" src={links4[18]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[19]}</p>
                                <img className="spicyMBerry" src={links4[19]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[20]}</p>
                                <img className="spicyMBerry" src={links4[20]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[21]}</p>
                                <img className="spicyMBerry" src={links4[21]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[22]}</p>
                                <img className="spicyMBerry" src={links4[22]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[23]}</p>
                                <img className="spicyMBerry" src={links4[23]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[24]}</p>
                                <img className="spicyMBerry" src={links4[24]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[25]}</p>
                                <img className="spicyMBerry" src={links4[25]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[26]}</p>
                                <img className="spicyMBerry" src={links4[26]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes4[27]}</p>
                                <img className="spicyMBerry" src={links4[27]} />
                            </div>
                        </div>
                    );
                }
                case 5: {
                    return (
                        <div id="berryGeral">
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[0]}</p>
                                <img className="spicyMBerry" src={links5[0]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[1]}</p>
                                <img className="spicyMBerry" src={links5[1]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[2]}</p>
                                <img className="spicyMBerry" src={links5[2]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[3]}</p>
                                <img className="spicyMBerry" src={links5[3]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[4]}</p>
                                <img className="spicyMBerry" src={links5[4]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[5]}</p>
                                <img className="spicyMBerry" src={links5[5]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[6]}</p>
                                <img className="spicyMBerry" src={links5[6]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[7]}</p>
                                <img className="spicyMBerry" src={links5[8]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[9]}</p>
                                <img className="spicyMBerry" src={links5[9]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[10]}</p>
                                <img className="spicyMBerry" src={links5[10]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[11]}</p>
                                <img className="spicyMBerry" src={links5[11]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[12]}</p>
                                <img className="spicyMBerry" src={links5[13]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[14]}</p>
                                <img className="spicyMBerry" src={links5[14]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[15]}</p>
                                <img className="spicyMBerry" src={links5[15]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[16]}</p>
                                <img className="spicyMBerry" src={links5[16]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[17]}</p>
                                <img className="spicyMBerry" src={links5[17]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[18]}</p>
                                <img className="spicyMBerry" src={links5[18]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[19]}</p>
                                <img className="spicyMBerry" src={links5[19]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[20]}</p>
                                <img className="spicyMBerry" src={links5[20]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[21]}</p>
                                <img className="spicyMBerry" src={links5[21]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[22]}</p>
                                <img className="spicyMBerry" src={links5[22]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[23]}</p>
                                <img className="spicyMBerry" src={links5[23]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[24]}</p>
                                <img className="spicyMBerry" src={links5[24]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[25]}</p>
                                <img className="spicyMBerry" src={links5[25]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[26]}</p>
                                <img className="spicyMBerry" src={links5[26]} />
                            </div>
                            <div className="spicyM">
                                <p className="spicyMName">{nomes5[27]}</p>
                                <img className="spicyMBerry" src={links5[27]} />
                            </div>
                        </div>
                    );
                }
            }
    }

    nothin() {
        {/*
        
        */}
    }
}

export default BerryCard;