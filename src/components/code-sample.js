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

export default class CodeSample extends Component {
  render() {
    return (
      <section className="code">
        { this.props.code && this.props.code[this.props.language] &&
          <SyntaxHighlighter className="code"
            language={this.props.language}
            style={light} >{this.props.code[this.props.language]}</SyntaxHighlighter>
        }
      </section>
    );
  }
}
