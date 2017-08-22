import React from 'react';
import { Button, Col } from 'react-bootstrap';
import Layout from './Layout.jsx';
import Carousel from './Carousel.jsx';

export default class Home extends React.Component {

  render() {
    return (
      <Layout route={this.props.route}>
        <Carousel images={[1, 2, 3]}/>
        <hr />
        <p className="lead">
          The <strong>Judith Clark Memorial Fund</strong> was set up in Judith’s name following her death in 2014.
        </p>
        <p>
          The Fund is managed by the{' '}
          <a href="http://www.nikaufoundation.org.nz">Nikau Foundation</a>{' '}
          to provide fellowships to young musicians to allow them to pursue post-graduate study to further their careers.
        </p>
        <blockquote>
          <p>
            &quot;...I am very grateful to the Judith Clark Memorial Fellowship for making my
        Aspen Festival experience possible …&quot;
          </p>
          <footer>Alexa Sangbin Thomson. 2015</footer>
        </blockquote>
        <p>
          Music performance graduates of all instruments, including voice, are encouraged to apply for a Judith Clark Memorial Fellowship. For criteria and application details visit the{' '}
          <a href="http://www.universitiesnz.ac.nz/JudithClark">Universities New Zealand website</a>
        </p>
        <p>
          Judith was grateful for scholarships she received as a young student; the scholarship funds enabled her to further her music studies overseas, where she took every opportunity to study with and observe many of the top professional performing pianists and artists of the day.
        </p>
        <p>
          Projects which will be considered by the selection committee include attendance at a reputable summer school or summer academy or auditions for longer-term postgraduate study program. Applications for other short-term projects will be assessed on their merits.
        </p>
        <p>
          The Fund also provides grants to music related bodies.
        </p>
      </Layout>
    );
  }

}
