import * as React from 'react';
import './style.scss';
import { showSidebar } from "../../actions";
import {connect} from "../../customRedux";
import {State, Team} from "../../types";

interface HeaderProps {
  showSidebar: Function,
  currentTeamName: string,
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { showSidebar, currentTeamName } = props;

  return (
    <div className="Header" onClick={() => showSidebar()}>
      <div className="Header-Avatar" />
      <span className="Header-Text">{ currentTeamName }</span>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  const currentTeam = state.teams.find((team: Team) => team.id === state.currentTeamId) || {} as Team; //todo;

  return {
    currentTeamName: currentTeam.name
  };
};
const mapDispatchToProps = (dispatch: Function) => ({ showSidebar: () => dispatch(showSidebar()) });

export default connect(mapStateToProps, mapDispatchToProps)(Header);
