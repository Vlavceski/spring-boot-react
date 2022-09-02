import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header >
                    <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
                    <div><a href="/" className="navbar-brand">Company</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
