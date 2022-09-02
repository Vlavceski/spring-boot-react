import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer navbar-expand-md navbar-dark bg-secondary" >
                    <span className="navbar-brand">NV 2022</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
