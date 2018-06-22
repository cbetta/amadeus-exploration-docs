import { h, Component } from "preact";

// Local imports
import BlockHeader from "./block-header.js";
import CodeSample from "./code-sample.js";
import OutputSample from "./output-sample.js";

// Styles
import style from "../styles/block.scss";


/**
 * Renders the interactive block of code
 */
export default class Block extends Component {
  constructor(props) {
    super(props);
    this.state = { language: "js" };
  }

  changeLanguage(id) {
    this.setState ({ language: id });
  }

  /**
   * Returns the block rendered in its entirity with all
   * interactivity.
   *
   * @return {Component} a Preact component
   */
  render() {
    return (
      <div className={ style.this.concat(" exploration-demo-block") }>
        <BlockHeader {...this.props}
          language={this.state.language}
          changeLanguage={this.changeLanguage.bind(this) }/>
        <CodeSample {...this.props} language={this.state.language} />
        <section className="bar">
          <span className='active'>Output</span>
        </section>
        <OutputSample {...this.props} language={this.state.language} />
      </div>
    );
  }
}
