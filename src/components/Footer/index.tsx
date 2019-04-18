import * as React from 'react';
import './style.scss';
import {State, Team} from "../../types";
import {connect} from "../../customRedux";

interface FooterProps {
  currentTeamName: string;
}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {

  const { currentTeamName } = props;

  return (
    <div className="Footer">
      <span className="Footer-Text">{ currentTeamName }</span>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  const currentTeam = state.teams.find((team: Team) => team.id === state.currentTeamId) || {} as Team; //todo

  return {
    currentTeamName: currentTeam.name,
  }
};

export default connect(mapStateToProps)(Footer);
