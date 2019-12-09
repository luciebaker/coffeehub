import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer py-3">
            <div className="container">
            <div className="row">
            <div className="col-10 mx-auto text-white text-center footer-text"> 
            <p> &copy; {new Date().getFullYear().toString()} | The Coffee Hub | A concept website by <a href="https://lbmedia.netlify.com" target="_blank" rel="noopener noreferrer">LB Media</a></p>
            </div>
            </div>
            </div>
            </footer>
        )
    }
}
