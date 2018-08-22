import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA_EniFGSstGFXVxOj2ZP6OdCxfviNnoew';

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('.container'));
