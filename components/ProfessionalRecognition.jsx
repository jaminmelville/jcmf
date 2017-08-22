import React from 'react';
import { Button, Col } from 'react-bootstrap';
import Layout from './Layout.jsx';
import Carousel from './Carousel.jsx';
import Image from './Image.jsx';

export default class ProfessionalRecognition extends React.Component {

  render() {
    return (
      <Layout route={this.props.route}>
        <p className="lead">
          <Image align="right" number={14}/>
          Judith fought strongly for recognition of music teaching as a profession and did her utmost to foster a professional code of practice.   She was unstinting in her commitment to the New Zealand Institute of Registered Music Teachers, serving as their Wellington Branch vice-president and president, as well as being a long-time member of the New Zealand governing Council.   Her vision and imagination animated so many IRMT projects – study days, competitions, conference themes, commissions, masterclasses.
        </p>
        <p>
          She became a committee member of the NZ Society for Music Education (now MENZA) which conferred on her the status of Life Member, adjudicated dozens of competitions and over the years served on most of the New Zealand Music / Arts panels, mentoring countless musicians throughout New Zealand.   In the early 1980s Judith was invited to join Zonta, in which she served for a time as their president.
        </p>
        <p>
          <Image align="right" number={15}/>
          Judith kept up with what was happening in the musical world.   She listened to radio, to CDs; she stayed abreast of new publications; she had countless clippings of interviews with artists.   But above all, she was always at concerts.   Despite the difficulties of getting around in her later years, she hardly ever missed an NZSO or Chamber Music New Zealand concert.   She would be at St Andrew’s, in the ACR, at the Illott, wherever there was a performance taking place.   She knew exactly what particular strengths our artists and our composers had to offer.
        </p>
        <p>
          <Image align="left" number={16}/>
          Her receiving the award of the CNZM for services to music in 1998 was thoroughly appropriate and well deserved.   It was noted that:
          “Judith was a huge inspiration in her love of beauty which made her home and garden unique.   She cultivated treasured plants in her garden and had gathered tasteful artistic treasures around her in her home – an accomplishment of tranquility, peace, and beauty."
        </p>
        <p>
          Judith could be a stern taskmaster, not only in the work that she expected from her pupils but in her sense of personal standards and decorum.   She valued personal modesty and abhorred anything that smacked of self-promotion.
        </p>
        <p>
          <Image align="right" number={18}/>
          Her dedication to teaching students how to listen to the sounds they produce, her sense of humour, her appreciation of all of the arts, her ability to know exactly how much to expect of students to challenge them to rise to new heights and her commissioning of New Zealand compositions inspired generations of students, professional musicians and teachers throughout New Zealand.
        </p>
      </Layout>
    );
  }

}
