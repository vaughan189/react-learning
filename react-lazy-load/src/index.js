import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Artists = React.lazy(() => import('./Artists'));
const Performers = lazy(() => import('./performers'))

class App extends React.Component {
    render(){
        return(
            <div className="App">
            <Suspense fallback={<h1>Still Loading…</h1>}>
                <Artists />
                <Performers />
            </Suspense>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
