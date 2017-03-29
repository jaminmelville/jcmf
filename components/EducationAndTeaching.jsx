import React from 'react';
import { Button, Col, Clearfix } from 'react-bootstrap';
import Layout from './Layout.jsx';
import Image from './Image.jsx';
import Carousel from './Carousel.jsx';

export default class EducationAndTeaching extends React.Component {

  render() {
    return (
      <Layout route={this.props.route}>
        <p className="lead">
          Judith started her degree studies at Victoria University, but her studies were interrupted when she was awarded a New Zealand Government scholarship to study at the Royal Academy of Music in London.
        </p>
        <p>
          <Image align="right" number={9}/>
          Her time in London was followed by study in Geneva with Bela Siki (who remained a close friend for years afterwards), then lessons with Alfred Cortot at the Ecole Normale in Paris.   Judith then studied with Professor Carlo Zecchi at both the Accademia Santa Cecilia in Rome and at the summer academy that he held at the Mozarteum in Salzburg.   Professor Zecchi wrote a reference for Judith: “La Signora Judith Clark . . . possiede un bellissimo talento musicale ed ha dimostrato . . . di essere all’altezza del suo compito.”
        </p>
        <p>
          <Image align="left" number={11}/>
          In 1963, “At the height of her accomplishment” – as Professor Zecchi put it – Judith returned to Wellington.   She recorded for what is now Radio New Zealand Concert and gave occasional distinguished public performances.   Judith’s playing of Schubert’s late, great Bb Sonata in the old Music Room at Victoria was noted as being memorable for its sensitivity, its fine control of colour and, above all, for the sense of integrity that came through in her approach.   These values were central to what Judith communicated in her teaching.
        </p>
        <p>
          Judith’s extensive knowledge of repertoire meant that she always knew exactly what works her pupil’s should be tackling next.   She adored Bach, Mozart, Haydn and Beethoven, but knew all the remotest corners of the romantic era and was determined her pupils should explore the avant-garde and pieces by New Zealand composers.
        </p>
        <p>
          <Image align="right" number={13}/>
          Judith joined the School of Music at Victoria University in 1974 as a lecturer, to become a senior lecturer and then Head of Piano Studies, holding that position until her retirement in 1996.   In her retirement she continued her undergraduate teaching and was one of the main piano tutors in the New Zealand School of Music’s Young Musicians Program.
        </p>
      </Layout>
    );
  }

}
