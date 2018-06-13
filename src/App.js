// DEFAULT STUFF
import React, {Component} from 'react';
import uuid from 'uuid';
import $ from 'jquery';

// MATERIAL DESIGN STUFF


// CUSTOM COMPONENTS
import Tabs from './components/Tabs';




class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: [],
            todos: [],
        }
    }

    getTodos() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            dataType: 'json',
            cache: false,
            success: function (data) {
                console.log(data);
                this.setState({todos: data}, function () {
                    // console.log(this.state);
                });
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }
        })
    }

    getProjects() {
        this.setState({
            projects: [
                {
                    id: uuid.v4(),
                    title: 'Business Website',
                    category: 'Webdesign'
                },
                {
                    id: uuid.v4(),
                    title: 'App',
                    category: 'Mobile Development'
                },
                {
                    id: uuid.v4(),
                    title: 'Web Application',
                    category: 'Web Development'
                }
            ]
        });
    }

    componentWillMount() {
        this.getProjects();
        this.getTodos();
    }

    componentDidMount() {
        this.getTodos();
    }

    handleAddProject(project) {
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects: projects});
    }

    handleDeleteProject(id) {
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1);

        this.setState({projects: projects});
    }

    render() {
        return (
            <div className="App">
                <Tabs todos={this.state.todos} projects={this.state.projects}/>
            </div>
        );
    }
}

export default App;
