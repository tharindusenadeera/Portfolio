import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';

class App extends Component {
    render() {
        return (<div style={{ height: '150px', position: 'relative' }}>
            <Layout style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' }}>
                <Header transparent title="Title" style={{ color: 'white' }}>
                    <Navigation>
                        <a href="/">Link</a>
                        <a href="/">Link</a>
                        <a href="/">Link</a>
                        <a href="/">Link</a>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <a href="/">Link</a>
                        <a href="/">Link</a>
                        <a href="/">Link</a>
                        <a href="/">Link</a>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className='page-content'></div>
                </Content>
                <Footer size="mini">
                    <FooterSection type="left" logo="Title">
                        <FooterLinkList>
                            <a href="/">Help</a>
                            <a href="/">Privacy & Terms</a>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>
            </Layout>

        </div>);
    }
}

export default App;