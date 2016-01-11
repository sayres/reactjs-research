
/**
 * Default participant view
 */
class ParticipantView extends BaseParticipantView {
    render() {
        return (<p>{this.props.participant.name} - {this.props.participant.accessCode} - Level: {this.props.participant.level}</p>);
    }
};

window.ParticipantView = ParticipantView;

