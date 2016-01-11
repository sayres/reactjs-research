
/**
 * Renders participant object with bolded style
 */
class ParticipantNiceView extends BaseParticipantView {
    render() {
        return (<p><b><font color="red">{this.props.participant.name}</font> - {this.props.participant.accessCode} - Level: <font color="blue">{this.props.participant.level}</font></b></p>);
    }
};

window.ParticipantNiceView = ParticipantNiceView;



