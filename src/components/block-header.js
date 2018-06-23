import { h, Component } from "preact";

// Styles
import style from "../styles/block-header.scss";

/**
 * The header of a block. Contains the title and the
 * language selector.
 */
export default class BlockHeader extends Component {
  /**
   * Starts off a block with the language selector closed
  */
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }

  /**
   * Changes the collapse state of the language dropdown
   */
  setCollapsed(state) {
    return () => {
      this.setState({ collapsed: state });
    };
  }

  toggleCollapsed() {
    console.log(this.state); // eslint-disable-line
    this.setCollapsed(!this.state.collapsed)();
  }

  /**
   * Sets the state of the language dropdown using a dynamic
   * CSS class
   */
  languagesDropdownClass() {
    let className = "languages";
    if (!this.state.collapsed) { className += " hover"; }
    return className;
  }

  /**
   * Changes the selected language
   */
  setLanguage(id) {
    return () => {
      this.props.setLanguage(id);
      this.setCollapsed(true)();
    };
  }

  /**
   * Renders a language element in the dropdown
   */
  renderLanguage(id, language) {
    return (
      <p onClick={ this.setLanguage(id).bind(this) }>{language}</p>
    );
  }

  /**
   * Renders a Block
   */
  render() {
    return (
      <header className={style.this}>
        <div className='description'>{this.props.description.text}</div>
        <div
          className={ this.languagesDropdownClass() }>

          <span className='selected'
            onClick={ this.toggleCollapsed.bind(this) }>
              &#9662; { this.props.languages[this.props.language] }
          </span>

          <div className='selection content'>
            {Object.keys(this.props.languages).map((id) =>
              this.renderLanguage(id, this.props.languages[id]))}
          </div>

        </div>
      </header>
    );
  }
}
