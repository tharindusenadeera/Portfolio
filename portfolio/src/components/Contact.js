import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";


class Contact extends Component {
    state = {}
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Tharindu Senadeera</h2>
                        <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{ height: '250px' }} />

                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                    </Cell>
                    <Cell col={6}>
                        <h1>Second half</h1>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;