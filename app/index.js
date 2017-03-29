import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Home from '../components/Home.jsx';
import EarlyLife from '../components/EarlyLife.jsx';
import EducationAndTeaching from '../components/EducationAndTeaching.jsx';
import ProfessionalRecognition from '../components/ProfessionalRecognition.jsx';
import Fellowships from '../components/Fellowships.jsx';
import Grants from '../components/Grants.jsx';
require('../css/style.css');

render((
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path='early-life' component={EarlyLife} />
    <Route path='education-and-teaching' component={EducationAndTeaching} />
    <Route path='professional-recognition' component={ProfessionalRecognition} />
    <Route path='fellowships' component={Fellowships} />
    <Route path='grants' component={Grants} />
  </Router>
), document.getElementById('root'));
