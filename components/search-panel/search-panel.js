import React from "react";

import './search-panel.css';
import ItemStatusFilter from "../item-status-filter/item-status-filter";

const SearchPanel = () => {
    return (
        <div className='search'>
            <input className='search-input' placeholder="seacrh to type" />
            <ItemStatusFilter />
        </div>
    );
};

export default SearchPanel;
