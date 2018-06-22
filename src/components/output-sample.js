import { h, Component } from "preact";

// Syntax highlighter
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/light";
import js from "react-syntax-highlighter/languages/hljs/javascript";
import { atomOneDark as dark } from "react-syntax-highlighter/styles/hljs";

// Register supported languages
registerLanguage("js", js);

let sample = "{\n\n\n\n\n\n\n}";

export default class OutputSample extends Component {
  render() {
    return (
      <section className="output">
        <SyntaxHighlighter className="code"
          language="js"
          style={dark} >{this.props.output || sample }</SyntaxHighlighter>
      </section>
    );
  }
}
