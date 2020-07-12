import React, {Component} from 'react';
import logoWhite from './logo-white.svg'
import './navbar.css';

class Navbar extends Component {

    state = {
        links: [
            {name: 'Home', to: '#', special: false, id: 1}, 
            {name: 'About', to: '#', special: false, id: 2}, 
            {name: 'Contact', to: '#', special: false, id: 4}, 
            {name: 'Button', to: '#', special: true, id: 3}
        ]
    }
    render() {

        const navLinks = this.state.links.map(link => {
            if (link.special) {
                return(<a className="navLink button white" key={link.id} href={link.to}>{link.name}</a>);
            } else return(<a className="navLink plain" key={link.id} href={link.to}>{link.name}</a>)
        })

        return (
            <div className="navbar">
                <div id="logoSmall"><img src={logoWhite} alt="white number five" /></div>
                <div className="navLinks"><div className="navlinksInner">{navLinks}</div></div>
            </div>
        )
    }
    
}

export default Navbar