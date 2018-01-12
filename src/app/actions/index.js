import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const ADD_POST='add_post';
export function fetchPosts()
{
    return{
        type: FETCH_POSTS,
        payload: []
    };
};

export function addPost(values)
{
    console.log(values);
    return{
        type:ADD_POST,
        payload:{...values}
    }
}