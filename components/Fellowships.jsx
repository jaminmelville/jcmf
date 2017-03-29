import React from 'react';
import { Button, Col, Row, Panel, Table, Thumbnail } from 'react-bootstrap';
import Layout from './Layout.jsx';
import heightify from 'heightify';
const $ = require("jquery");

const data = [
  {
    year: 2015,
    amount: 6677,
    recipient: 'Alexa Thomson',
    discipline: 'Viola',
    purpose: 'to attend the Aspen Music Festival',
    report: '2015 Alexa Thomson.docx',
  },
  {
    year: 2015,
    amount: 2100,
    recipient: 'Kate Oswin',
    discipline: 'Violin',
    purpose: 'to attend the Sinaia Summer Academy',
    report: '2015 Kate Oswin.docx',
  },
  {
    year: 2016,
    amount: 3927,
    recipient: 'Benson Wilson',
    discipline: 'Baritone',
    purpose: 'to attend the International Vocal Arts Institute summer program',
    report: '2016 Benson Wilson.docx',
  },
  {
    year: 2016,
    amount: 3436,
    recipient: 'Isabella Moore',
    discipline: 'Soprano',
    purpose: 'to attend the Georg Solti Accademia Summer School',
    report: '2016 Isabella Moore.pdf',
  },
  {
    year: 2016,
    amount: 2473,
    recipient: 'Alexa Thomson',
    discipline: 'Viola',
    purpose: 'to record a CD of New Zealand viola music',
    report: '2015 Alexa Thomson.docx',
  },
  {
    year: 2017,
    amount: 6500,
    recipient: 'Bradley Wood',
    discipline: 'Piano',
    purpose: 'for an audition trip',
    report: '',
  },
  {
    year: 2017,
    amount: 6500,
    recipient: 'Matthias Balzat',
    discipline: 'Cello',
    purpose: 'for an audition trip',
    report: '',
  },
  {
    year: 2017,
    amount: 6500,
    recipient: 'Katherine McIndoe',
    discipline: 'Soprano',
    purpose: 'for an audition trip',
    report: '',
  },
  {
    year: 2017,
    amount: 6500,
    recipient: 'Laura Bennett',
    discipline: 'Violin',
    purpose: 'for an audition trip',
    report: '',
  },
];

export default class Fellowships extends React.Component {

  componentDidMount() {
    heightify({
      element: $('.resize__title'),
    });
    heightify({
      element: $('.resize__row'),
    });
    heightify({
      element: $('.resize__panel'),
    });
  }

  render() {
    const fellowships = data.reverse().map((info, key) => {

      return (
        <div>
          <strong>{info.recipient}</strong> - {info.discipline} - {info.purpose}
          {/* <td>{info.year}</td>
          <td>${info.amount.toLocaleString()}</td> */}
          <Thumbnail className="pull-right thumbnail--fellowship" target="_blank" disabled={!info.report} href={'/reports/' + info.report} alt="profile image" src="/images/profilepic.jpg" />
          <div className="clearfix" />
          <hr />
        </div>
      );
    });
    return (
      <Layout route={this.props.route}>
        <p className="lead">
          The <strong>Judith Clark Memorial Fund</strong> provides financial support for short-term projects that will have long term benefits in the professional career of a young musician.   Recent Fellowships have been awarded to:
        </p>
        <hr />
        {fellowships}
        <p>
          More information about the Fellowships is given on the <a href="http://www.universitiesnz.ac.nz/JudithClark" target="_blank">Universities New Zealand website</a>.
        </p>
      </Layout>
    );
  }

}
