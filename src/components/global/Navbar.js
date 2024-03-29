import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo.svg'
// import { FaShoppingCart } from 'react-icons/fa'



export default class Navbar extends Component {
    state = {
        navbarOpen: false,
        css: "collapse navbar-collapse",
        links: [
            {
                id: 1,
                path: '/#info',
                text: 'about'
            },
            {
                id: 2,
                path: '/#menu',
                text: 'menu'
            },
            {
                id: 3,
                path: '/#events',
                text: 'events'
            },
            {
                id: 4,
                path: '/#contact',
                text: 'contact'
            }
       ]
   }

   navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({
          navbarOpen: false,
          css: "collapse navbar-collapse"
        })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show"
        });
  };

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <Link to='/' className="navbar-brand">
            <img src={logo} alt="Coffee Hub Logo"/>
            {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/webalys */}
            </Link>
            <button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
            <span className="navbar-toggler-icon text-green" />
            </button>
            <div className={this.state.css}>
            <ul className="navbar-nav mx-auto text-green">
            {this.state.links.map(link => {
                return (
                    <li key={link.id} className="nav-item text-green">
                    <Link to={link.path} className="nav-link text-capitalize text-green">
                    {link.text}
                    </Link>
                    </li>
                )     
            })}
            </ul>
            </div>
            </nav>
        )
    }
}
