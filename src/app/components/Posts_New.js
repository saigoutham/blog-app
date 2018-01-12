import React, {Component} from "react";
import {Field, reduxForm} from 'redux-form';
import {addPost} from '../actions';
import {connect} from 'react-redux';

class PostsNew extends Component
{
    renderForm(field)
    {
        return(
            <div className = 'form-group'>
                <label>{field.label}</label>
                <input
                    type = 'text'
                    className = 'form-control' 
                    {...field.input}
                />
                {field.meta.error}
            </div>
        );
    }
    onSubmit(values)
    {
        this.props.addPost(values);
    }
    render()
    {
        const {handleSubmit} = this.props;
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name='title'
                    label='Title'
                    component={this.renderForm} 
                />
                <Field
                    name='content'
                    label='Content'
                    component={this.renderForm} 
                />
                <button className = "btn btn-info">Submit</button>
            </form>
        );
    }
}

function validate(values)
{
    const errors={};
    if(!values.title)
    {
        errors.title="Please give a title";
    }
    if(!values.content)
    {
        errors.content="Please give content";
    }
    return errors;

}

export default reduxForm(
    {
        validate,
        form:"PostsNewForm"
    }
)(
    connect(null,{addPost})(PostsNew));