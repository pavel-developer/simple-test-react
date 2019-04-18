import * as React from 'react';
import {Action} from "./types";
import {reducer} from "./reducers";

const initialState = {
  showSidebar: false,
  teams: [
    {
      id: 1,
      name: 'Jedi Council',
      members: [
        { id: 1, name: 'Obi-Wan Kenobi', description: 'A legendary Jedi Master' },
        { id: 2, name: 'Shaak Ti', description: 'A wise and patient Jedi Master' },
      ],
    },
    {
      id: 2,
      name: 'Sith Lords',
      members: [
        { id: 1, name: 'Darth Vader', description: 'Dark Lord of the Sith' },
        { id: 2, name: 'Darth Tyranus', description: 'Another Dark Lord of the Sith' },
        { id: 3, name: 'Darth Maul', description: 'Cool boy' },
        { id: 4, name: 'Darth Vader', description: 'Dark Lord of the Sith' },
        { id: 5, name: 'Darth Tyranus', description: 'Another Dark Lord of the Sith' },
        { id: 6, name: 'Darth Maul', description: 'Cool boy' },
        { id: 7, name: 'Darth Vader', description: 'Dark Lord of the Sith' },
        { id: 8, name: 'Darth Tyranus', description: 'Another Dark Lord of the Sith' },
        { id: 9, name: 'Darth Maul', description: 'Cool boy' },
        { id: 10, name: 'Darth Vader', description: 'Dark Lord of the Sith' },
        { id: 21, name: 'Darth Tyranus', description: 'Another Dark Lord of the Sith' },
        { id: 31, name: 'Darth Maul', description: 'Cool boy' },
        { id: 11, name: 'Darth Vader', description: 'Dark Lord of the Sith' },
        { id: 22, name: 'Darth Tyranus', description: 'Another Dark Lord of the Sith' },
        { id: 36, name: 'Darth Maul', description: 'Cool boy' },
      ],
    },
  ],
  currentTeamId: 1
};

function createStore(reducer: Function, initialState = {}) {
  let currentReducer = reducer;
  let currentState = initialState;
  let listeners: Array<Function> = [];

  return {
    getState() {
      return currentState;
    },
    dispatch(action: Action) {
      currentState = currentReducer(currentState, action);
      listeners.forEach(listener => listener());
      return action;
    },
    subscribe(newListener: Function) {
      listeners.push(newListener);
    }
  }
}

const store = createStore(reducer, initialState);

const stub = () => {};

export function connect(mapStateToProps: Function = stub, mapDispatchToProps: Function = stub) {
  return function (WrappedComponent: React.FC<any>) {
    return class extends React.Component<{}> {
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(store.getState(), this.props)}
            {...mapDispatchToProps(store.dispatch, this.props)}
          />
        );
      }

      componentDidMount() {
        store.subscribe(this.handleChange.bind(this));
      }

      handleChange() {
        this.forceUpdate();
      }
    }
  }
}
