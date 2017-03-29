import React from 'react';
import { Button, Col, Carousel as BSCarousel } from 'react-bootstrap';
import Layout from './Layout.jsx';

export default class Carousel extends React.Component {

  render() {
    const carouselItems = this.props.images.map((image, key) => {
        return (
          <BSCarousel.Item key={key}>
            <img src={'/images/cropped/' + image + '.jpg'} />
          </BSCarousel.Item>
        );
    });
    return (
      <div className="thumbnail">
        <BSCarousel>
          {carouselItems}
        </BSCarousel>
      </div>
    );
  }

}
