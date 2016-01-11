
class BaseParticipantView extends React.Component {
    constructor(props) {
        super(props);
        this.props.participant.modelChangedDelegate = function(part) {
            this.objectChanged(part);
        }.bind(this);
    }
    
    objectChanged(participant) {
        this.setState({
            participant: participant,
        });
    };
}

window.BaseParticipantView = BaseParticipantView;
    


