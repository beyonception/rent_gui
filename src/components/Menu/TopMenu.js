import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import LinkButton from "../common/LinkButton"

class TopMenu extends Component {
    render() {
        return (
            <nav className="main-header navbar navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <LinkButton
                            className="nav-link transparent-bg no-boder"
                        >
                            <FontAwesomeIcon icon={faSignOutAlt} /> &nbsp;Sign Out
                        </LinkButton>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default TopMenu;