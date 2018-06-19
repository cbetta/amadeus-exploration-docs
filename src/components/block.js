import { h, Component } from "preact";

// Styles
import style from "../styles/block.scss";

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
      <div className={ "block".concat(style.this) }>
        <header>
          {this.props.title}
        </header>
        <section>
        </section>
        <section>
        </section>
      </div>
    );
  }
}
