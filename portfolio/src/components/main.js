import React from 'react';
import Switch from 'react-router-dom/Switch';
import { Route } from 'react-router-dom';
import LandingPage from './LandigPage';
import AboutMe from './Aboutme';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';





const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />



    </Switch>
)

export default Main;