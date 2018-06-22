import { h, Component } from "preact";
import { Link } from "preact-router";

/**
 * The button that allows a user to skip to the next step
 */
export default class NextButton extends Component {
  /**
   * Check if the button has a URL instead of PATH and then redirect
   * the user if needed.
   */
  linkExternal() {
    if (this.props.next.path == undefined &&
      this.props.next.url) {
      document.location.href = this.props.next.url;
    }
  }

  /**
   * Render a button
   */
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
