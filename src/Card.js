import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        var photoURL = `https://farm${this.props.data.farm}.staticflickr.com/${this.props.data.server}/${this.props.data.id}_${this.props.data.secret}_n.jpg`;
        var divStyle = {
            background: `url('${photoURL}') center / cover`
        };
        return (
            <div className="demo-card-image mdl-card mdl-shadow--2dp" style={divStyle}>
                <div className="mdl-card__title mdl-card--expand"></div>
                <div className="mdl-card__actions">
                    <span className="demo-card-image__filename">{this.props.data.title}</span>
                </div>
            </div>
        );
    };
};

export default Card;
