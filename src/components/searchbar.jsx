import { useState } from 'react';


function SearchBar({ setResults }) {
    const [inputVal, setInputVal] = useState('')
    function handleClick() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://localhost:8000/multisearch/?q=${inputVal}`);
        xhr.onload = function() {
            if (xhr.status === 200) {
                setResults(JSON.parse(xhr.responseText).top_hits);
            }
        };
        xhr.send();
    }

    return (
        <div>
            <input type='text' id='search' value={inputVal} onInput={e => setInputVal(e.target.value)}/>
            <button onClick={handleClick}>Search</button>
        </div>
    )
}


export default SearchBar;
