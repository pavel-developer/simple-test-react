import { Action, State } from "../types";

export function reducer (state: State, action: Action) {
  switch (action.type) {
    case 'SHOW_SIDEBAR':
      return Object.assign(state, { showSidebar: true });
    case 'HIDE_SIDEBAR':
      return Object.assign(state, { showSidebar: false });
    case 'PICK_TEAM':
      return Object.assign(state, { currentTeamId: action.payload });
    default:
      return state;
  }
}