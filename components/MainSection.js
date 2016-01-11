import React, { Component, PropTypes } from 'react'
import ParticipantItem from './ParticipantItem'

class MainSection extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = { niceView: false };
    }

    componentDidMount () {
        this.interval = setInterval(() => {
            this.props.actions.changeLevel()
        }, 2000)
    }

    handleNiceView() {
        this.setState({niceView: !this.state.niceView})
    }

    renderNiceView() {
        const { participants } = this.props;
        if (participants.length > 0) {
            return (
                <p>
                    <input className=""
                           type="checkbox"
                           checked={this.state.niceView}
                           onChange={this.handleNiceView.bind(this)} />
                    {' '}
                    Enable nice view :-)
                </p>
            )
        }
    }

    render() {
        const { participants, actions } = this.props;
        const { niceView } = this.state;

        return (
            <section className="main">
                {this.renderNiceView()}
                {participants.map(participant =>
                    <ParticipantItem key={participant.accessCode} participant={participant} niceView={niceView} {...actions} />
                )}
            </section>
        )
    }
}

MainSection.propTypes = {
    participants: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

export default MainSection