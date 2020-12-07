import * as React from 'react';
import './App.css';
import PostsList from '../posts/components/PostsList';
import SearchForm from '../posts/components/SearchForm';

const logo = require('./logo.svg');

class App extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <img className="logo" src={logo} alt="Logo"/>
                    <h1>Example React Redux API Fetch</h1>
                </header>

                <SearchForm/>
                <PostsList/>
            </div>
        );
    }
}

export default App;
