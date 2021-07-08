import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import GetList, {listQuery} from './getlist';

const client = new ApolloClient({
    uri: 'https://react-test.atlasconsulting.cz/',
    cache: new InMemoryCache()
});

function App() {
    return (
        <div>
            <h2>Hierarchical list</h2>
            <ul>
                <GetList {...listQuery("")}/>
            </ul>
        </div>
    );
}

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root'),
);