import { h, Component } from "preact";
import { Link } from "preact-router/match";

import style from "../styles/block-list.scss";

export default class BlockList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dropDownSelected: false
    };
  }

  toggleMenu() {
    this.setState({
      dropDownSelected: !this.state.dropDownSelected
    });
  }

  blockListItem(step, rank, klass) {
    if (this.state.dropDownSelected) { klass = `${klass} selected`; }

    return (
      <Link onclick={this.toggleMenu.bind(this)} className={klass} activeClassName="active" href={step.path}>
        <div className="rank">{ rank+1 }</div>
        <div className="title">{ step.title }</div>
        <div className="chevron">&#9660;</div>
      </Link>
    );
  }

  render() {
    return (
      <nav className={ `block-list ${style.this}` }>
        {this.props.steps.map((step, rank) => this.blockListItem(step, rank, "dropdown"))}
        {this.props.steps.map((step, rank) => this.blockListItem(step, rank, "list"))}
      </nav>
    );
  }
}
