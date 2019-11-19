import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer py-3">
            <div className="container">
            <div className="row">
            <div className="col-10 mx-auto col-md-6 text-white text-center"> 
            <p> &copy; {new Date().getFullYear().toString()} | The Coffee Hub </p>
            </div>
            </div>
            </div>
            </footer>
        )
    }
}
