// DEFAULT STUFF
import React, {Component} from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Todos from './Todos';
import Projects from "./Projects";

// CUSTOM COMPONENTS


// import ComplexCard from './material/ComplexCard';

class TabContainer extends Component {

    render() {

        if (this.props.todos) {
            return (
                <Todos todos={this.props.todos}/>
            );
        }else{
            return (
                <Projects projects={this.props.projects}/>
            );
        }


    }
}

export default TabContainer;
