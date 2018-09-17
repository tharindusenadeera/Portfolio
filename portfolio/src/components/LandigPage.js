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
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;