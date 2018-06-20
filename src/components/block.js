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
      <div className={ style.this.concat(" exploration-demo-block") }>
        <header>
          {this.props.description.text}
        </header>
        <section>
          { this.props.code && this.props.code.rb &&
            <code>{this.props.code.rb}</code>
          }
        </section>
        <footer>
        Footer
        </footer>
      </div>
    );
  }
}
