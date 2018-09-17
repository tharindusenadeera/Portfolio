import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';


class LandingPage extends Component {
    state = {}
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png" alt="avatar" className="avatar-img" />
                        <div className="banner-text"><h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>HTML/CSS | JavaScript | React | Angular | Node JS | Express | MySQL</p>

                            <div className="social-links">

                                <a href="http://www.google.com" rel="nooperner noreferrer" target="_balnk">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                <a href="https://github.com/tharindusenadeera" rel="nooperner noreferrer" target="_balnk">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                <a href="http://www.google.com" rel="nooperner noreferrer" target="_balnk">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>

                                <a href="http://www.google.com" rel="nooperner noreferrer" target="_balnk">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;