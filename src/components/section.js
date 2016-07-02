import React, {PropTypes} from 'react';

import {CardTitle, CardText} from 'material-ui/Card';
import {GridList} from 'material-ui/GridList';

import Video from './video';

const Section = React.createClass({
    propTypes: {
        section: PropTypes.object
    },

    render () {
        var title = <div></div>;
        if (this.props.section.title) {
            title = <CardTitle title={this.props.section.title} />
        }
        var description = this.props.section.description.map((description, index) =>
            <p key={index}>{description}</p>
        );
        var videos = this.props.section.videos.map(video =>
            <Video key={video.key} video={video}/>
        );
        return (
            <div>
                <CardText>
                    {title}
                    {description}
                    <GridList style={{"justifyContent": "center"}} cols="4">
                        {videos}
                    </GridList>
                </CardText>
            </div>
        )
    }
});

export default Section
