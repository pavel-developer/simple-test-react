import React from 'react';
import classnames from 'classnames';
import { Transition } from 'react-transition-group';
import './style.scss';
import { connect } from "../../customRedux";
import {pickTeam} from "../../actions";
import {State, Team} from "../../types";

interface SidebarProps {
  show: boolean,
  teams: Array<Team>,
  currentTeamId: number,
  pickTeam: Function,
}

const duration = 300;

const defaultStyle = {
  transition: `left ${duration}ms`,
  left: '-260px',
};

const transitionStyles: {[key: string]: object} = {
  entering: { left: 0 },
  entered: { left: 0 },
  exiting: { left: '-260px' },
  exited: { left: '-260px' },
};

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const { show, teams, currentTeamId, pickTeam } = props;

  return (
    <Transition in={show} timeout={duration}>
      {state => (
        <div style={{...defaultStyle, ...transitionStyles[state] }} className={"Sidebar"}>
          <span className="Sidebar-Title">Choose your side</span>
          {teams.map((team) => {
            return (
              <div
                key={team.id}
                className={classnames("Item", { "Item_active": team.id === currentTeamId })}
                onClick={() => pickTeam(team.id)}>
                <div className="Item-Avatar" />
                <span className="Item-Text">{team.name}</span>
              </div>
            );
          })}
        </div>
      )}
    </Transition>
  );
};

const mapStateToProps = (state: State) => ({ show: state.showSidebar, teams: state.teams, currentTeamId: state.currentTeamId });
const mapDispatchToProps = (dispatch: Function) => ({ pickTeam: (id: number) => dispatch(pickTeam(id)) });

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
