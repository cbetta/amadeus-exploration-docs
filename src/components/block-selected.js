import { h, Component } from "preact";
import Router from "preact-router";
import customHistory from "history/createMemoryHistory";

// Local imports
import Block from "./block";

/**
 * Renders all the blocks, with a router to ensure
 * we can only see the selected one
 */
export default class BlockSelected extends Component {
  /**
   * Renders a single block of the docs
   *
   * @param  {Object} step all the data for the step
   * @return {Component} a Preact component
   */
  renderBlock(step) {
    return <Block {...step} />;
  }

  /**
   * Renders a router with every block for the docs
   * as children.
   *
   * @return {Component} a Preact component
   */
  render() {
    // We use a custom history that does not affect the URL.
    return (
      <section className="block-selected">
        <Router
          history={customHistory()}>
          {this.props.steps.map((step) => this.renderBlock(step))}
        </Router>
      </section>
    );
  }
}
