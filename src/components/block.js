import { h, Component } from "preact";

export default class Block extends Component {
  render() {
    return (
      <div className="block">{ this.props.title }</div>
    );
  }
}
