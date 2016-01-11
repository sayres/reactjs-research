import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainSection from '../components/MainSection'
import DevTools from './DevTools';
import * as ParticipantsActions from '../actions/participants'

class App extends Component {
    render() {
        const { participants, actions } = this.props
        return (
            <div>
                <MainSection participants={participants} actions={actions} />
                <DevTools />
            </div>
        )
    }
}

App.propTypes = {
    participants: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(level) {
    return {
        participants: level.participants
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ParticipantsActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)