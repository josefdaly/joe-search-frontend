import { useState } from 'react';
import SearchBar from './searchbar.jsx';
import Results from './results.jsx';


function Container() {
    const [results, setResults] = useState([]);

    return (
        <div>
            <SearchBar setResults={setResults} />
            <Results results={results} />
        </div>
    )
}


export default Container;
