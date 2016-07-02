import 'whatwg-fetch';

import React from 'react';
import AppBar from 'material-ui/AppBar';

import Post from './post';

const YotwApp = React.createClass({

    getInitialState() {
        return {
            posts: [],
            loading: true,
            error: undefined
        };
    },

    componentDidMount() {
        fetch("resources/posts.json")
            .then(r => r.json())
            .then(data => {
                this.addPosts(data);
            })
            .catch(error => {
                this.addError(error);
            });
    },

    addPosts(data) {
        try {
            this.setState({posts: data.posts, loading: false});
        } catch (error) {
            this.addError(error);
        }
    },

    addError(error) {
        this.setState({error: "Erreur: " + error.message, loading: false});
        console.log(error);
    },

    render () {
        if (this.state.loading) {
            return <div>Chargement...</div>
        } else if (this.state.error) {
            return <div>{this.state.error}</div>
        }
        var posts = this.state.posts.map(post =>
            <Post key={post.key} post={post}/>
        );
        return (
            <div>
                <AppBar
                    title="Youtuber of the Week"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    style={{"marginBottom": "20px"}}
                />
                {posts}
            </div>
        )
    }
});

export default YotwApp
