import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class ProjectItem extends Component {

    deleteProject(id) {
        this.props.onDelete(this.props.id);
    }

    render() {
        const styles = {
            card: {
                minWidth: 275,
            },
            bullet: {
                display: 'inline-block',
                margin: '0 2px',
                transform: 'scale(0.8)',
            },
            title: {
                marginBottom: 16,
                fontSize: 14,
            },
            pos: {
                marginBottom: 12,
            },
        };

        return (

            <Card className={styles.card}>
                <CardContent>
                    <Typography variant="headline" component="h2">
                        {this.props.project.title}
                    </Typography>
                    <Typography className={styles.pos} color="textSecondary">
                        {this.props.project.category}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={this.deleteProject.bind(this, this.props.project.id)} size="small">x</Button>
                </CardActions>
            </Card>
        );
    }
}

ProjectItem.propTypes = {
    project : PropTypes.object,
    onDelete : PropTypes.func
}


export default ProjectItem;
