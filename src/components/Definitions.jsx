import React from 'react';

class Definitions extends React.Component {

    renderData() {
        const {data} = this.props

        return data.map(item => {
            return (
                <React.Fragment>
                    <dt key={item.id}>{item.dt}</dt>
                    <dd key={item.id}>{item.dd}</dd>
                </React.Fragment>
            )
        });
    }

    render() {
        return (
            <dl>
                {this.renderData()}
            </dl>
        );
    }
}

export default Definitions;
