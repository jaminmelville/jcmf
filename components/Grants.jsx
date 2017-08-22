import React from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import Layout from './Layout.jsx';
import heightify from 'heightify';
const $ = require("jquery");

const data = [
  {
    year: 2014,
    amount: 5000,
    recipient: 'The Institute of Registered Music Teachers of New Zealand',
    website: 'http://www.irmt.org.nz ',
  },
  {
    year: 2015,
    amount: 5000,
    recipient: 'The Institute of Registered Music Teachers of New Zealand',
    website: 'http://www.irmt.org.nz',
  },
  {
    year: 2016,
    amount: 5000,
    recipient: 'The Institute of Registered Music Teachers of New Zealand',
    website: 'http://www.irmt.org.nz',
  },
  {
    year: 2016,
    amount: 20000,
    recipient: 'Chamber Music New Zealand',
    website: 'http://www.chanbermusic.co.nz',
  },
  {
    year: 2017,
    amount: 10000,
    recipient: 'The Institute of Registered Music Teachers of New Zealand',
    website: 'http://www.irmt.org.nz',
  },
  {
    year: 2017,
    amount: 50000,
    recipient: 'Chamber Music New Zealand',
    website: 'http://www.chanbermusic.co.nz',
  }
];

data.reverse();

export default class Grants extends React.Component {

  componentDidMount() {
    // heightify({
    //   element: $('.resize__title'),
    // });
    // heightify({
    //   element: $('.resize__row'),
    // });
    // heightify({
    //   element: $('.resize__panel'),
    // });
  }

  render() {
    const grants = data.map((info, key) => {
      return (
      <tr>
        <td>{info.recipient}</td>
        <td>{info.year}</td>
        {/* <td>${info.amount.toLocaleString()}</td> */}
        <td className="text-center"><a bsStyle="info" target="_blank" href={info.website}>{info.website}</a></td>
      </tr>
      );
    });
    return (
      <Layout route={this.props.route} background={true}>
        <p className="lead">
          The Judith Clark Memorial Fund provides one-off grants to New Zealand institutions that provide for the musical education of New Zealanders, with a particular emphasis on musical education for children and young adults where the financial circumstances may otherwise make musical education difficult or impossible.
        </p>
        <p>
          Recent grants have been awarded to the <a href="www.irmt.org.nz" target="_blank">Institute of Registered Music Teachers of New Zealand</a>, to assist in developing a strategic planning conference in Wellington and to support the engagement of internationally recognized musicians in the provision of education and professional development for music teachers in New Zealand.
        </p>
        <p>
          Recent grants have been awarded to <a href="http://www.chanbermusic.co.nz" target="_blank">Chamber Music New Zealand</a>, to assist Chamber Music New Zealand celebrate the 50th jubilee of the Schools Chamber Music Contest, to provide coaching sessions for the NZCT Chamber Music Contest and for the provision of educational visual aids to give informed access to Chamber Music New Zealand audiences.
        </p>
        <p>
          Further information on the grants can be obtained from the Trustees of the Judith Clark Memorial Fund, through enquiry to <a href="http://www.nikaufoundation.org.nz" target="_blank">Nikau Foundation</a> who are the manager of the Fund.
        </p>
        <hr />
      </Layout>
    );
  }

}
