import React, {Component} from 'react';
import PropTypes from 'prop-types';

// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';

import ComplexCard from './material/ComplexCard';

class TodoItem extends Component {

    deleteTodo(id) {
        this.props.onDelete(this.props.id);
    }

    render() {
        return (
            <ComplexCard todos={this.props.todo} />
        );
    }
}

TodoItem.propTypes = {
    todo : PropTypes.object,
    onDelete : PropTypes.func
}


export default TodoItem;
