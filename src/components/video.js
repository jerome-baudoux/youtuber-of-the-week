import React, {PropTypes} from 'react';

import {GridTile} from 'material-ui/GridList';

const Video = React.createClass({
    propTypes: {
        video: PropTypes.object
    },

    render () {
        return (
            <a target="_blank" href={this.props.video.link}>
                <GridTile title={this.props.video.title}>
                    <img src={this.props.video.image} alt={this.props.video.title}></img>
                </GridTile>
            </a>
        )
    }
});

export default Video
