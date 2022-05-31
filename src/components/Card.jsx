import React from 'react';

// function Card() {
//     return (
//         <div className="card">
//             <div className="card-body">
//                 <h4 className="card-title">Card title</h4>
//                 <p className="card-text">Some quick example text to build on the card</p>
//                 <button type={this.props.type} className="btn btn-primary">Go somewhere</button>
//             </div>
//         </div>
//
//     )
// }

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Some quick example text to build on the card</p>
                    <button type={this.props.type} className="btn btn-primary">Go somewhere</button>
                </div>
            </div>
        )
    }
}

Card.defaultProps = {
    type: 'button',
};

export default Card;
