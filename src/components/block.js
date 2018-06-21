import { h, Component } from "preact";
import { HighLight, THEME } from "preact-highlight";

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
        <section className='code'>
          { this.props.code && this.props.code.rb &&
            <HighLight className='code'
              code={this.props.code.rb}
              language="ruby"
              theme={THEME.atomOneLight} />
          }
        </section>
        <section className='output'>
          { this.props.output &&
            <HighLight className='code'
              code={this.props.output}
              language="json"
              theme={THEME.atomOneDark} />
          }
        </section>
      </div>
    );
  }
}
