import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Block extends Component {
  render() {
    return (
      <Link href="/">{ this.props.title }</Link>
    )
  }
}
