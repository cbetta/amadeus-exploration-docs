import { h, Component } from "preact";

// Local imports
import BlockList from "./block-list";
import BlockSelected from "./block-selected";

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
      <div className={ `exploration-demo ${style.this}` }>
        <BlockList {...this.props} />
        <BlockSelected {...this.props} />
      </div>
    );
  }
}
