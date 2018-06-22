import { h, Component } from "preact";
import Cookie from "js-cookie";

// Local imports
import BlockHeader from "./block-header";
import CodeSample from "./code-sample";
import OutputSample from "./output-sample";
import NextButton from "./next-button";

// Styles
import style from "../styles/block.scss";


/**
 * Renders the interactive block of code
 */
export default class Block extends Component {
  constructor(props) {
    super(props);
    let defaultLanguage =
      Cookie.get("exploration-demo:language") ||
      props.defaultLanguage;
    this.state = { language: defaultLanguage };
  }

  changeLanguage(id) {
    this.setState ({ language: id });
    Cookie.set("exploration-demo:language", id);
  }

  className() {
    let klass = style.this.concat(" exploration-demo-block");
    if (this.props.code != undefined) { klass += " loaded"; }
    return klass;
  }

  /**
   * Returns the block rendered in its entirity with all
   * interactivity.
   *
   * @return {Component} a Preact component
   */
  render() {
    return (
      <div className={ this.className() }>
        <BlockHeader {...this.props}
          language={this.state.language}
          changeLanguage={this.changeLanguage.bind(this) }/>
        <CodeSample {...this.props} language={this.state.language} />
        <section className="bar">
          <span className='active'>Output</span>
        </section>
        <NextButton {...this.props} />
        <OutputSample {...this.props} language={this.state.language} />
      </div>
    );
  }
}
