import { h, Component } from "preact";
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/light";
import js from "react-syntax-highlighter/languages/hljs/javascript";
import rb from "react-syntax-highlighter/languages/hljs/ruby";
import java from "react-syntax-highlighter/languages/hljs/java";
import py from "react-syntax-highlighter/languages/hljs/python";

import { atomOneLight as light } from "react-syntax-highlighter/styles/hljs";
import { atomOneDark as dark } from "react-syntax-highlighter/styles/hljs";

// Styles
import style from "../styles/block.scss";

// Register supported languages
registerLanguage("js", js);
registerLanguage("rb", rb);
registerLanguage("py", py);
registerLanguage("java", java);

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
        <section className="code">
          { this.props.code && this.props.code.rb &&
            <SyntaxHighlighter className="code"
              language="rb"
              style={light} >{this.props.code.rb}</SyntaxHighlighter>
          }
        </section>
        <section className="bar">
          <span className='active'>Output</span>
        </section>
        <section className="output">
          { this.props.output &&
            <SyntaxHighlighter className="code"
              language="js"
              style={dark} >{this.props.output}</SyntaxHighlighter>
          }
        </section>
      </div>
    );
  }
}
