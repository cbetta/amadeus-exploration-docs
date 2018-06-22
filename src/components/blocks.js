import { h, Component } from "preact";
import Router from "preact-router";
import customHistory from "history/createMemoryHistory";

// Local imports
import Block from "./block";

/**
 * Renders all the blocks, with a router to ensure
 * we can only see the selected one
 */
export default class Blocks extends Component {
  /**
   * Renders a single block of the docs
   *
   * @param  {Object} step all the data for the step
   * @return {Component} a Preact component
   */
  renderBlock(id, step) {
    return <Block
      id={id}
      defaultLanguage={ this.props.defaultLanguage }
      languages={this.props.languages}
      {...step} />;
  }

  /**
   * Lazy loads the code for this page
   *
   * @param  {Object} e the route change event
   */
  handleRoute(e) {
    let stepId = e.current.attributes.id;
    this.props.loadStep(stepId);
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
      <section className="exploration-demo-blocks">
        <Router
          onChange={this.handleRoute.bind(this)}
          history={customHistory()}>
          {Object.keys(this.props.steps).map((id) =>
            this.renderBlock(id, this.props.steps[id]))}
        </Router>
      </section>
    );
  }
}
