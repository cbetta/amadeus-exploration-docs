import { h, Component } from "preact";

// Syntax highlighter
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/light";
import js from "react-syntax-highlighter/languages/hljs/javascript";
import rb from "react-syntax-highlighter/languages/hljs/ruby";
import java from "react-syntax-highlighter/languages/hljs/java";
import py from "react-syntax-highlighter/languages/hljs/python";
import { atomOneLight as light } from "react-syntax-highlighter/styles/hljs";

// Register supported languages
registerLanguage("js", js);
registerLanguage("rb", rb);
registerLanguage("py", py);
registerLanguage("java", java);

// Sample code
let sample = "amadeus.shopping.flight_destinations.get(\n  origin: 'PAR'\n)\n";

export default class CodeSample extends Component {
  code() {
    let code = sample;
    if (this.props.code &&  this.props.code[this.props.language]) {
      code = this.props.code[this.props.language];
    }
    return code;
  }

  render() {
    return (
      <section className="code">
        <SyntaxHighlighter className="code"
          language={this.props.language}
          style={light} >{this.code()}</SyntaxHighlighter>
      </section>
    );
  }
}
