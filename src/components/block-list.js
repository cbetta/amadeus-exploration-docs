import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import style from './explorer.scss';

export default class BlockList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dropDownSelected: false
    }
  }

  toggleMenu() {
    this.setState({
      dropDownSelected: !this.state.dropDownSelected
    });
  }

  blockListItem(step, rank, klass) {
    if (this.state.dropDownSelected) { klass = `${klass} selected`; }

    return (
      <Link onclick={this.toggleMenu.bind(this)} class={klass} activeClassName='active' href={step.path}>
        <div class='rank'>{ rank+1 }</div>
        <div class='title'>{ step.title }</div>
        <div class='chevron'>&#9660;</div>
      </Link>
    )
  }

  render() {
    return (
      <nav class={ `block-list ${style.blockList}` }>
        {this.props.steps.map((step, rank) => this.blockListItem(step, rank, 'dropdown'))}
        {this.props.steps.map((step, rank) => this.blockListItem(step, rank, 'list'))}
      </nav>
    )
  }
}
