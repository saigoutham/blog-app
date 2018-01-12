import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router-dom';
class PostsIndex extends Component
{
    componentDidMount() {
        console.log(this.props.fetchPosts);
        this.props.fetchPosts();
    }
    
    render()
    {
        return(
            <div>
                <div>Posts!!</div>
                <Link to="/new" className="btn btn-primary">Add Post</Link>
            </div>
        );
    }
}

export default connect(null,{fetchPosts})(PostsIndex);