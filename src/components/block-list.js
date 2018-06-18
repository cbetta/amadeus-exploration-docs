import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class BlockList extends Component {
  blockListItem(step, rank) {
    return (
      <Link href={step.path}>{ step.title }</Link>
    )
  }

  render() {
    return (
      <nav>
        {this.props.steps.map((step, rank) => this.blockListItem(step, rank))}
      </nav>
    )
  }
}
