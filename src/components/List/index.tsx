import * as React from 'react';
import './style.scss';
import {State, Team, TeamMember} from "../../types";
import {connect} from "../../customRedux";

interface ListProps {
  members: Array<TeamMember>
}

const List: React.FC<ListProps> = (props: ListProps) => {
  const { members } = props;

  return (
    <div className="List-Wrapper">
      <div className="List">
        {members.map(member => {
          return (
            <div className="Item" key={member.id}>
              <span className="Item-Title">{ member.name }</span>
              <span className="Item-Desc">{ member.description }</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  const currentTeam = state.teams.find((team: Team) => team.id === state.currentTeamId) || {} as Team; //todo

  return {
    members: currentTeam.members || [],
  }
};

export default connect(mapStateToProps)(List);
