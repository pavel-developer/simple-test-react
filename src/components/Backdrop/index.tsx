import * as React from "react";
import { Transition } from 'react-transition-group';
import './style.scss';
import {hideSidebar} from "../../actions";
import {connect} from "../../customRedux";

interface BackdropProps {
  show: boolean,
  hideSidebar: Function,
}

const duration = 300;

const defaultStyle = {
  transaction: `opacity ${duration}ms`,
  opacity: 0,
  display: 'none',
};

const transitionStyles: {[key: string]: object} = {
  entering: { opacity: 0.4, display: 'block' },
  entered: { opacity: 0.4, display: 'block' },
  exiting: { opacity: 0, display: 'none' },
  exited: { opacity: 0, display: 'none' },
};

const Backdrop: React.FC<BackdropProps> = (props: BackdropProps) => {
  const { show, hideSidebar } = props;

  return (
    <Transition in={show} timeout={duration}>
      {state => <div style={{...defaultStyle, ...transitionStyles[state]}} className="Backdrop" onClick={() => hideSidebar()} />}
    </Transition>
  );
};

const mapStateToProps = (state: any) => ({ show: state.showSidebar });
const mapDispatchToProps = (dispatch: Function) => ({ hideSidebar: () => dispatch(hideSidebar()) });

export default connect(mapStateToProps, mapDispatchToProps)(Backdrop);
