import { CHANGE_LEVEL } from '../constants/ActionTypes'

const initialState = [
    {
        accessCode: 5544332211,
        name: 'Ivan Dubynets',
        level: 1
    },
    {
        accessCode: 5544332212,
        name: 'Alexey N',
        level: 0
    },
    {
        accessCode: 5544332213,
        name: 'Sergey',
        level: 0
    },

    {
        accessCode: 5544332214,
        name: 'Pavel',
        level: 0
    },
    {
        accessCode: 5544332215,
        name: 'Ugene',
        level: 0
    },
    {
        accessCode: 5544332216,
        name: 'Alexey Y',
        level: 0
    },
    {
        accessCode: 5544332217,
        name: 'Alex Lipanov',
        level: 0
    },
    {
        accessCode: 5578332218,
        name: 'Alex Chel',
        level: 0
    },
    {
        accessCode: 5544332218,
        name: 'Felix',
        level: 0
    },
    {
        accessCode: 5544332219,
        name: 'Tom',
        level: 0
    },
    {
        accessCode: 5544332220,
        name: 'Makrus',
        level: 0
    },
    {
        accessCode: 5544332221,
        name: 'John',
        level: 0
    },
    {
        accessCode: 5544332222,
        name: 'Eric',
        level: 0
    },
    {
        accessCode: 5544332223,
        name: 'kevin',
        level: 0
    },
    {
        accessCode: 5544332224,
        name: 'Bart',
        level: 0
    },
    {
        accessCode: 5544332225,
        name: 'Stive',
        level: 0
    },
    {
        accessCode: 5944332226,
        name: 'Anna',
        level: 0
    },
    {
        accessCode: 5504332227,
        name: 'Nick',
        level: 0
    },
    {
        accessCode: 5544330214,
        name: 'Pavel',
        level: 0
    },
    {
        accessCode: 5244332228,
        name: 'Jin',
        level: 0
    },
    {
        accessCode: 5444332229,
        name: 'Jane',
        level: 0
    },
    {
        accessCode: 5344332230,
        name: 'Leo',
        level: 0
    }
];

export default function participants(state = initialState, action) {
    switch (action.type) {

        case CHANGE_LEVEL:
            let index = Math.floor((Math.random() * state.length));
            return state.map(participant =>
                participant.accessCode === state[index].accessCode ?
                    Object.assign({}, participant, { level: participant.level += 1 }) :
                    participant
            );


        default:
            return state
    }
}

