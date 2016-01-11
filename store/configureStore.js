import { createStore, compose } from 'redux'
import { persistState } from 'redux-devtools';
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools';

const finalCreateStore = compose(
    DevTools.instrument(),
    persistState(
        window.location.href.match(
            /[?&]debug_session=([^&]+)\b/
        )
    )
)(createStore);

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState)

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers')
            store.replaceReducer(nextReducer)
        })
    }

    return store
}