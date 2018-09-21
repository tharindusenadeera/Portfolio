import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div>
                    <h1>This is React</h1>
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
                    <Grid className="project-grids">
                        <Cell col={12}><div className="content"> {this.toggleCategories()}</div></Cell>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default Projects;