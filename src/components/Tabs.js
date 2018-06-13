// DEFAULT STUFF
import React from 'react';
import PropTypes from 'prop-types';

// MATERIAL DESIGN STUFF
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import MatTabs from '@material-ui/core/Tabs';
import MatTab from '@material-ui/core/Tab';

// CUSTOM COMPONENTS
import TabContainer from './TabContainer';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class Tabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        console.log(this.props.todos);

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <MatTabs value={value} onChange={this.handleChange}>
                        <MatTab label="Wo" href="#stuff" />
                        <MatTab label="Was" href="#places" />
                    </MatTabs>
                </AppBar>
                {value === 0 && <TabContainer todos={this.props.todos} name="one">Item One</TabContainer>}
                {value === 1 && <TabContainer projects={this.props.projects} name="two">Item Two</TabContainer>}
            </div>
        );
    }
}

Tabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tabs);