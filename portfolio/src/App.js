import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends Component {
    render() {
        return (<div style={{ height: '700px', position: 'relative' }}>
            <Layout>
                <Link to="/"><Header className="header-color" transparent title="Portfolio" style={{ color: 'white' }} >
                    <Navigation>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/resume">Resume</Link>
                    </Navigation>
                </Header>
                </Link>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/resume">Resume</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className='page-content' />
                    <Main />


                </Content><br />


            </Layout>

        </div>);
    }
}

export default App;