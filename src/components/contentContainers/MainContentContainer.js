import React, { Component } from "react";

class MainContentContainer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                            {this.props.children}
                    </div>
                </section>
            </div>
        )
    }
}

export default MainContentContainer;