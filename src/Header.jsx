import React, { Component } from "react"

class Header extends Component {

    render() {
        return (
            <nav className="flex items-center justify-between flex-wrap bg-blue-darkest p-6">
                <h1 className="text-white text-3xl">My Portfolio</h1>
            </nav>
        )
    }

}

export default Header