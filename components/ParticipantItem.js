import React, { Component, PropTypes } from 'react';

class ParticipantItem extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { participant, niceView } = this.props;
        if(niceView) {
            return (
                <p>
                    <b>
                        <font color="red">
                            {participant.name}
                        </font> - {participant.accessCode} - Level: <font color="blue">{participant.level}</font>
                    </b>
                </p>
            );
        } else {
            return (
                <p>{participant.name} - {participant.accessCode} - Level: {participant.level}</p>
            );
        }
    }
}

ParticipantItem.propTypes = {
    participant: PropTypes.object.isRequired,
    changeLevel: PropTypes.func.isRequired
};

export default ParticipantItem