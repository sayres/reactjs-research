
window.ParticipantsView = React.createClass({
    render: function() {
        var rows = [];
        var that = this;
        this.props.participants.forEach(function(participant) {
            if (that.props.niceView) {
                rows.push(<ParticipantNiceView participant={participant} />);
            } else {
                rows.push(<ParticipantView participant={participant} />);
            }
        });
        return (
          <div>
            {rows}
          </div>
        );
    }
});


