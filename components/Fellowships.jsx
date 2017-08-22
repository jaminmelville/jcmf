import React from 'react';
import { Button, Col, Row, Panel, Table, Thumbnail } from 'react-bootstrap';
import Layout from './Layout.jsx';
const $ = require("jquery");

const data = [
  {
    year: 2015,
    amount: 6677,
    recipient: 'Alexa Thomson',
    discipline: 'Viola',
    purpose: 'to attend the Aspen Music Festival',
    report: '2015 Alexa Thomson.pdf',
    image: 'Alexa Thomson.jpg',
  },
  {
    year: 2015,
    amount: 2100,
    recipient: 'Kate Oswin',
    discipline: 'Violin',
    purpose: 'to attend the Sinaia Summer Academy',
    report: '2015 Kate Oswin.pdf',
    image: 'Kate Oswin.jpg',
  },
  {
    year: 2016,
    amount: 3927,
    recipient: 'Benson Wilson',
    discipline: 'Baritone',
    purpose: 'to attend the International Vocal Arts Institute summer program',
    report: '2016 Benson Wilson.pdf',
    image: 'Benson Wilson.jpg',
  },
  {
    year: 2016,
    amount: 3436,
    recipient: 'Isabella Moore',
    discipline: 'Soprano',
    purpose: 'to attend the Georg Solti Accademia Summer School',
    report: '2016 Isabella Moore.pdf',
    image: 'Isabella Moore.jpg',
  },
  {
    year: 2016,
    amount: 2473,
    recipient: 'Alexa Thomson',
    discipline: 'Viola',
    purpose: 'to record a CD of New Zealand viola music',
    report: '2016 Alexa Thomson.pdf',
    image: 'Alexa Thomson.jpg',
  },
  {
    year: 2017,
    amount: 6500,
    recipient: 'Bradley Wood',
    discipline: 'Piano',
    purpose: 'for an audition trip',
    report: '',
    image: 'blank.jpg',
  },
  {
    year: 2017,
    amount: 6500,
    recipient: 'Matthias Balzat',
    discipline: 'Cello',
    purpose: 'for an audition trip',
    report: '',
    image: 'blank.jpg',
  },
  {
    year: 2017,
    amount: 6500,
    recipient: 'Katherine McIndoe',
    discipline: 'Soprano',
    purpose: 'for an audition trip',
    report: '',
    image: 'blank.jpg',
  },
  {
    year: 2017,
    amount: 6500,
    recipient: 'Laura Bennett',
    discipline: 'Violin',
    purpose: 'for an audition trip',
    report: '',
    image: 'blank.jpg',
  },
];

data.reverse();

export default class Fellowships extends React.Component {

  render() {
    const fellowships = data.map((info, key) => {
      return (
        <tr className="fellowships__row">
          <td><strong>{info.recipient}</strong></td>
          <td>{info.year}</td>
          <td>{info.discipline}</td>
          <td>{info.purpose}</td>
          {/* <td></td>
          <td>${info.amount.toLocaleString()}</td> */}
          <td>
            <a
              target="_blank"
              href={'/reports/' + info.report}
              alt="profile image"
            >
              <button
                className="btn btn-default"
                disabled={!info.report}
              >
                <span className="text-primary glyphicon glyphicon-download-alt" aria-hidden="true"></span>
                {' '}Report
              </button>
            </a>
          </td>
          <td>
            <Thumbnail
              className="pull-right thumbnail--fellowship"
              src={`/images/profile/${info.image}`}
            />
          </td>
        </tr>
      );
    });
    return (
      <Layout route={this.props.route}>
        <h2>Recent Fellowships</h2>
        <hr />
        <p className="lead">
          The <strong>Judith Clark Memorial Fund</strong> provides financial support for short-term projects that will have long term benefits in the professional career of a young musician.   Recent Fellowships have been awarded to:
        </p>
        <div className="table-responsive">
          <table className="table">
            <tr>
              <th>Recipient</th>
              <th>Year</th>
              <th>Discipline</th>
              <th>Purpose</th>
              <th></th>
              <th></th>
            </tr>
            {fellowships}
          </table>
        </div>
        <p>
          More information about the Fellowships is given on the <a href="http://www.universitiesnz.ac.nz/JudithClark" target="_blank">Universities New Zealand website</a>.
        </p>
      </Layout>
    );
  }

}
