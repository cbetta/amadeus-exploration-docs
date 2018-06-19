import { h, Component } from "preact";

import BlockList from "./block-list";
import BlockSelected from "./block-selected";

import style from "../styles/explorer.scss";

export default class Explorer extends Component {
  render() {
    return (
      <div className={ `exploration-demo ${style.this}` }>
        <BlockList {...this.props} />
        <BlockSelected {...this.props} />
      </div>
    );
  }
}
