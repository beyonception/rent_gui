import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MenuItem extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <li className="nav-item">
                <Link to={this.props.routePath} className="nav-link">
                    <p>
                        {this.props.menuText}
                    </p>
                </Link>
            </li>
        )
    }
}

export default MenuItem;
