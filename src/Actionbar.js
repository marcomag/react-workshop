import React from 'react';

import './Actionbar.css'

class Actionbar extends React.Component {
    render() {
        var inputStyle = {
            width: '30px',
            padding: '10px 20px',
            margin: '0 15px',
            fontSize: '14px'
        };

        return <div className="actionbar">
                    <label>
                        Page:
                        <input style={inputStyle} id="page_selector" onChange={this.props.pageSelectorChange} type="text" />
                    </label>
                    <label>
                        Page Size:
                        <input style={inputStyle} id="pageSize_selector" onChange={this.props.pageSizeSelectorChange} type="text" />
                    </label>    
                    <a className="actionbar__update-button" onClick={() => this.props.changeCurrentPage()}>Update page</a>
                </div>
    };
};

export default Actionbar;