import React, { Component } from 'react';
import './App.css';
import cx from "classnames"
import {Link} from "react-router-dom"

class SideNav extends Component {

    constructor(props){
        super(props);
        this.onToggle = this.onToggle.bind(this)
        this.state = {
            expanded:false
        }
    }

    onToggle(){
        const { expanded } = this.state
        this.setState({expanded: !expanded})
    }

    renderSubnavItem(props){
        const {href, icon, label} = props
        return (
            <Link className="sidenav-route" to={href}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <img alt="" style={{padding:"20px"}} width="30px" height="30px" src={icon}/>
                    <span className="sidenav-route-label">{label}</span>
                </div>
            </Link>
        )
    }

    render() {
        const {expanded} = this.state
        return (
            <div className={cx("sidenav",expanded?"expanded":"")}>
                {this.renderSubnavItem({
                    href:"/",
                    icon: "https://cdn1.iconfinder.com/data/icons/freeline/32/home_house_real_estate-512.png",
                    label: "Home"
                })}
                {this.renderSubnavItem({
                    href:"/mucho",
                    label: "Mucho",
                    icon: "http://icons.iconarchive.com/icons/icons8/windows-8/256/Food-Taco-icon.png"
                })}
                <button onClick={this.onToggle}>{expanded? "Collapse!": "Expand!"}</button>
            </div>
        );
    }
}

export default SideNav;