import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import './SearchForm.css';

interface Props {}

const SearchForm: React.SFC<Props> = props => {
    return (
        <form className="search-form">
            Search posts:
            <Field className="field" name="phrase" component="input" type="text" placeholder="title of a post"/>
        </form>
    );
};

export default reduxForm({form: 'postsSearch'})(SearchForm);
