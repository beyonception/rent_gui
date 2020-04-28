import React, { Component } from 'react';

class LinkButton extends Component{
        render(){
           return (
                <button type="button" className={this.props.className} onClick={this.props.click}>{this.props.children}</button>
           );
        }
}

export default LinkButton;