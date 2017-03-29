import React from 'react';
import { Col, Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
const $ = window.jQuery = require("jquery");
require('jssocials');
require('jssocials/dist/jssocials.css');
require('jssocials/dist/jssocials-theme-flat.css');
require('jssocials/bower_components/font-awesome/css/font-awesome.css');

const menuItems = [
  {
    link: '/',
    name: 'About',
  },
  {
    link: 'early-life',
    name: 'Early life',
  },
  {
    link: 'education-and-teaching',
    name: 'Education & teaching',
  },
  {
    link: 'professional-recognition',
    name: 'Professional recognition',
  },
  {
    link: 'fellowships',
    name: 'Fellowships',
  },
  {
    link: 'grants',
    name: 'Grants',
  },
];

export default class Layout extends React.Component {

  componentDidMount() {
    $(this.refs.share).jsSocials({
      shares: ["email", "twitter", "facebook"],
    });
  }

  render() {
    const navItems = menuItems.map((menuItem) => {
      return (
        <li role="presentation" key={menuItem.link} className={this.props.route.path === menuItem.link ? 'active': null}>
          <Link role="button" to={menuItem.link}>{menuItem.name}</Link>
        </li>
      );
    });
    return (
      <div className={this.props.background ? 'background' : ''}>
        <div className="container">
          <hr />
            <h1>Judith Clark Memorial Fund</h1>
          <hr />
        </div>
        <div className="container-fullwidth">
          <Navbar>
            <Navbar.Header>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <ul className="nav navbar-nav">
                {navItems}
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="container">
          {this.props.children}
        </div>
        <hr />
        <div className="container">
          <div ref="share" className="pull-right"></div>
        </div>
      </div>
    );
  }

}
