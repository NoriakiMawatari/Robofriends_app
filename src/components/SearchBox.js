import React from "react";
import 'tachyons';

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2 tc">
            <input
            className='pa3 ba b--green bg-lightest-blue'
            type='search'
            placeholder='search robot'
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;