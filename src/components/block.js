import { h, Component } from "preact";

/**
 * Renders the interactive block of code
 */
export default class Block extends Component {
  /**
   * Returns the block rendered in its entirity with all
   * interactivity.
   *
   * @return {Component} a Preact component
   */
  render() {
    return (
      <div className="block">{ this.props.title }</div>
    );
  }
}
