import { h, Component } from "preact";

// Local imports
import Steps from "./steps";
import Blocks from "./blocks";

// CSS Styles
import style from "../styles/explorer.scss";

/**
 * An interactive documentation explorer.
 */
export default class Explorer extends Component {
  /**
   * Renders a menu and a list of steps that can
   * be navigated to using the menu.
   *
   * @return {Component} a Preact component
   */
  render() {
    return (
      <div className={style.this.concat(" exploration-demo")}>
        <Steps {...this.props} />
        <Blocks {...this.props} />
      </div>
    );
  }
}
