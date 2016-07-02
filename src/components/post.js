import React, {PropTypes} from 'react';

import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import Section from './section';

const Post = React.createClass({
    propTypes: {
        post: PropTypes.object
    },

    render () {
        var sections = this.props.post.sections.map(section =>
            <Section key={section.key} section={section}/>
        );
        return (
            <div>
                <Card style={{"marginBottom": "20px"}}>
                    <CardHeader
                        title={this.props.post.title}
                        subtitle={"Posté le " + this.props.post.date}
                        avatar={this.props.post.logo}
                    />
                    {sections}
                    <CardActions>
                        <FlatButton label="Like" />
                        <FlatButton label="Dislike" />
                    </CardActions>
                </Card>
            </div>
        )
    }
});

export default Post
