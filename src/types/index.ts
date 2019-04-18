export interface Action {
  type: string;
  payload?: any;
}

export interface State {
  showSidebar: boolean;
  teams: Array<Team>;
  currentTeamId: number;
}

export interface Team {
  id: number;
  name: string;
  members: Array<TeamMember>;
}

export interface TeamMember {
  id: number;
  name: string;
  description: string;
}