import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="project-grids">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center/cover' }}>React Project #1</CardTitle>
                        <CardText>My react projects</CardText>
                        <CardActions border>
                            <Button>GITHUB</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>

            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div>
                    <h1>This is Angular</h1>
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div>
                    <h1>This is Laravel</h1>
                </div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <div>
                    <h1>This is Spring Boot</h1>
                </div>
            )
        }
        else if (this.state.activeTab === 4) {
            return (
                <div>
                    <h1>This is .NET</h1>
                </div>
            )
        }
        else
            return (
                <div>
                    <h1>This is Node</h1>
                </div>
            )
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>Laravel</Tab>
                    <Tab>Spring Boot</Tab>
                    <Tab>.NET</Tab>
                    <Tab>Node</Tab>
                </Tabs>

                <section className="project-grids">
                    <Grid>
                        <Cell col={12}><div className="content"> {this.toggleCategories()}</div></Cell>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default Projects;