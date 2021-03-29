import React from "react";

import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {
    render() {
        return (
            <div className="btn-group">
                <button type="type" className="btn btn-info">All</button>
                <button type="type" className="btn btn-outline-secondary">Active</button>
                <button type="type" className="btn btn-outline-secondary">Done</button>
            </div>
        );
    }
}

