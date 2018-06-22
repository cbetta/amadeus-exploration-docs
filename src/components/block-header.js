import { h, Component } from "preact";

// Styles
import style from "../styles/block-header.scss";

export default class BlockHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { languageDropdownCollapsed: true };
  }

  showLanguageDropdown() {
    this.setState({
      languageDropdownCollapsed: false
    });
  }

  hideLanguageDropdown() {
    this.setState({
      languageDropdownCollapsed: true
    });
  }

  languagesDropdownClass() {
    let className = "languages";
    if (!this.state.languageDropdownCollapsed) {
      className += " hover";
    }
    return className;
  }

  changeLanguage(id) {
    return () => {
      this.props.changeLanguage(id);
      this.hideLanguageDropdown();
    };
  }

  renderLanguage(id, language) {
    return (
      <p onClick={ this.changeLanguage(id).bind(this) }>
        {language}
      </p>
    );
  }

  render() {
    return (
      <header
        className={style.this}>
        <div className='description'>{this.props.description.text}</div>
        <div
          onMouseEnter={ this.showLanguageDropdown.bind(this) }
          onMouseUp={ this.showLanguageDropdown.bind(this) }
          onMouseLeave={ this.hideLanguageDropdown.bind(this) }
          className={ this.languagesDropdownClass() }>
          <span>
            &#9662; { this.props.languages[this.props.language] }
          </span>
          <div className='content'>
            {Object.keys(this.props.languages).map((id) =>
              this.renderLanguage(id, this.props.languages[id]))}
          </div>
        </div>
      </header>
    );
  }
}
