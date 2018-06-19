import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import Router from 'preact-router';
import customHistory from 'history/createMemoryHistory';

import Block from './block';

export default class BlockSelected extends Component {
  renderBlock(step) {
    return <Block {...step} />;
  }

  render() {
    return (
      <section class='block-selected'>
        <Router
          history={customHistory()}>
          {this.props.steps.map((step) => this.renderBlock(step))}
        </Router>
      </section>
    )
  }
}
