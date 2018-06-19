import { h, Component } from "preact";
import { Link } from "preact-router/match";

// Styles
import style from "../styles/steps.scss";

/**
 * Create a navigatable list of steps to take
 * the user through.
 */
export default class Steps extends Component {
  /**
   * Initializes the menu isMenuCollapsed
   */
  constructor() {
    super();
    this.state = { isMenuCollapsed: true, stepSelected: 0 };
  }

  /**
   * Toggles the dropdown menu on small screens
   */
  toggleMenu(rank) {
    return () => {
      // toggle collapse state
      let collapse = !this.state.isMenuCollapsed;
      // toggle this back if we are in wide screen mode and directly
      // set a new page
      if (rank !== this.state.stepSelected && this.state.isMenuCollapsed) {
        collapse = !collapse;
      }

      this.setState({
        isMenuCollapsed: collapse,
        stepSelected: rank
      });
    };
  }

  /**
   * Renders a menu item for a step.
   *
   * @param  {Object} step  the data for the step
   * @param  {Number} rank  the sequence number for the step
   * @param  {String} klass a class name to pass to the object
   * @return {Component} a Preact component
   */
  step(step, rank, klass) {
    // Append a isMenuCollapsed state if the menu is isMenuCollapsed
    if (!this.state.isMenuCollapsed) {
      klass = klass.concat(" selected");
    }

    return (
      <Link onclick={this.toggleMenu.bind(this)(rank)}
        className={klass}
        activeClassName="active"
        href={step.path}>

        <div className="rank">{ rank+1 }</div>
        <div className="title">{ step.title }</div>
        <div className="chevron">&#9660;</div>
      </Link>
    );
  }

  /**
   * Renders a menu
   * @return {Component} a Preact component
   */
  render() {
    // We render each item twice, once for on small and
    // once for on large screens
    return (
      <nav className={style.this.concat(" exploration-demo-steps")}>
        {this.props.steps.map((step, rank) =>
          this.step(step, rank, "dropdown"))}
        {this.props.steps.map((step, rank) =>
          this.step(step, rank, "list"))}
      </nav>
    );
  }
}
