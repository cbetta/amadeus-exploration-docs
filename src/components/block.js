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
  /**
   * Initializes a Block
   */
  constructor(props) {
    super(props);
    this.state = {};
    this.initState(props);
  }

  /**
   * Initializes the state of this block by determining the
   * prefered language from a cookie, or from the default setting
   */
  initState(props) {
    let language =
      Cookie.get("exploration-demo:language") || props.defaultLanguage;
    this.setState({ language: language });
  }

  /**
   * Changes the selected language and stores it as a cookie
   */
  setLanguage(language) {
    this.setState ({ language: language });
    Cookie.set("exploration-demo:language", language);
  }

  /**
   * Returns the block rendered in its entirity with all
   * interactivity.
   */
  render() {
    return (
      <div className={ style.this.concat(" exploration-demo-block") }>
        <BlockHeader {...this.props}
          language={this.state.language}
          setLanguage={this.setLanguage.bind(this) }/>
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
