import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Block extends Component {
  render() {
    return (
      <div class='block'>{ this.props.title }</div>
    )
  }
}
