import React from 'react';
import { Button, Col } from 'react-bootstrap';
import Layout from './Layout.jsx';
import Carousel from './Carousel.jsx';

export default class EarlyLife extends React.Component {

  render() {
    return (
      <Layout route={this.props.route}>
        <Carousel images={[4, 5, 6, 7]}/>
        <hr />
        <p className="lead">
          Judith was born in Wellington in 1931. Three of her grandparents were West Indian. Her maternal grandmother was English, but had grown up in Dumfries in Scotland.
        </p>
        <p>
          Judith grew up in Roseneath in Maida Vale Road, attending St Mark’s School and then Wellington Girls’ College.
        </p>
        <p>
          Early photographs show Judith as a happy, mischievous child.
        </p>
        <p>
          Judith began learning the piano with the nuns at the Brougham Street Convent on Mount Victoria.   Then, after gaining distinction in Grade VIII, she moved to study with Mrs Gertrude Johnston before commencing study at Victoria University.
        </p>
      </Layout>
    );
  }

}
