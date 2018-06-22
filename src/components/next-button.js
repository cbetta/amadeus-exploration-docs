import { h, Component } from "preact";
import { Link } from "preact-router";

export default class NextButton extends Component {
  linkExternal() {
    if (this.props.next.path == undefined &&
      this.props.next.url) {
      document.location.href = this.props.next.url;
    }
  }

  render() {
    return (
      <Link
        href={this.props.next.path}
        onClick={this.linkExternal.bind(this)}
        className="nextButton">
        {this.props.next.text} &rsaquo;
      </Link>
    );
  }
}
