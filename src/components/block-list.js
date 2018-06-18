import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import style from './explorer.scss';

export default class BlockList extends Component {
  blockListItem(step, rank) {
    return (
      <Link activeClassName='active' href={step.path}>
        <div class='rank'>{ rank }</div>
        <div class='title'>{ step.title }</div>
      </Link>
    )
  }

  render() {
    return (
      <nav class={ `block-list ${style.blockList}` }>
        {this.props.steps.map((step, rank) => this.blockListItem(step, rank))}
      </nav>
    )
  }
}
