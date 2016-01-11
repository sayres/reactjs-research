
window.participants = [
    new Participant('Ivan Dubynets', '5544332211'),
    new Participant('Alexey N', '5544332212'),
    new Participant('Sergey', '5544332213'),
    new Participant('Pavel', '5544332214'),
    new Participant('Ugene', '5544332215'),
    new Participant('Alexey Y', '5544332216'),
    new Participant('Alex Lipanov', '5544332217'),
    new Participant('Alex Chel', '5544332218'),
    new Participant('Felix', '5544332218'),
    new Participant('Tom', '5544332219'),
    new Participant('Makrus', '5544332220'),
    new Participant('John', '5544332221'),
    new Participant('Eric', '5544332222'),
    new Participant('kevin', '5544332223'),
    new Participant('Bart', '5544332224'),
    new Participant('Stive', '5544332225'),
    new Participant('Anna', '5544332226'),
    new Participant('Nick', '5544332227'),
    new Participant('Jin', '5544332228'),
    new Participant('Jane', '5544332229'),
    new Participant('Leo', '5544332230'),
];

/**
 * Switches view from bold to nurmal
 */
var UISwitcher = React.createClass({
    handleChange: function() {
        this.props.onUserInput(
          this.refs.cbNiceView.checked
        );
    },
    render: function() {
        return (
          <form>
            <p>
                <input
                    type="checkbox"
                    checked={this.props.niceView}
                    ref="cbNiceView"
                    onChange={this.handleChange}
                />
                {' '}
                Enable nice view :-)
            </p>
          </form>
        );
    }
});

/**
 * This view combines UISwitcher and ParticipentsView
 */
window.ParticipantsPanelView = React.createClass({
  getInitialState: function() {
    return {
      niceView: true
    };
  },

  switchView: function(niceView) {
    this.setState({
      niceView: niceView,
    });
  },

  render: function() {
    return (
      <div>
        <UISwitcher
          niceView={this.state.niceView}
          onUserInput={this.switchView}
        />
        <ParticipantsView
          participants={this.props.participants} niceView={this.state.niceView}
        />
      </div>
    );
  }
});

//for (var i=0; i<50000;i++) {
//    participants.push(new Participant('User ' + i, "45" + i));
//}

// Render everything here
ReactDOM.render(
    <ParticipantsPanelView participants={participants}/>,
    document.getElementById('content')
);


// interval will update level of random users
setInterval(
    function() {
        var index = Math.floor((Math.random() * participants.length));
        participants[index].setLevel(participants[index].level + 1); 
    },
    50
);



