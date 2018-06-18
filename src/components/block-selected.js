import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import Router from 'preact-router';
import customHistory from 'history/createHashHistory';

import Block from './block';

export default class BlockSelected extends Component {
  renderBlock(step) {
    return <Block {...step} />;
  }

  render() {
    return (
      <div class='block-selected'>
        <Router history={customHistory({  hashType: 'noslash' })}>
          {this.props.steps.map((step) => this.renderBlock(step))}
        </Router>
      </div>
    )
  }
}
