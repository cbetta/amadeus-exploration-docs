import { h, Component } from "preact";

// Local imports
import Steps from "./steps";
import Blocks from "./blocks";

// CSS Styles
import style from "../styles/explorer.scss";

/**
 * An interactive documentation explorer.
 */
export default class Explorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.fetchConfig();
  }

  fetchConfig() {
    return fetch(this.props.url.concat("/config.json"))
      .then(data => data.json())
      .then(config => Object.assign(this.props, config))
      .then(this.setLoaded.bind(this));
  }

  setLoaded() {
    this.setState({
      loaded: true
    });
  }

  loadPage(id) {
    this.fetchCode(id);
  }

  fetchCode(id) {
    for (var ext in this.props.languages) {
      this.fetchLanguage(id, ext);
    }
  }

  fetchLanguage(id, ext) {
    fetch(this.props.url.concat(`/code/${id}.${ext}`))
      .then(this.handleErrors.bind(this))
      .then(data => data.text())
      .then(this.storeLanguage(id, ext).bind(this))
      .catch(() => {});

  }

  handleErrors(response) {
    if (!response.ok) { throw Error(response.statusText); }
    return response;
  }

  storeLanguage(id, ext) {
    return (code) => {
      this.props.steps[id].code = this.props.steps[id].code || {};
      this.props.steps[id].code[ext] = code;
      this.forceUpdate();
    };
  }

  /**
   * Renders a menu and a list of steps that can
   * be navigated to using the menu.
   *
   * @return {Component} a Preact component
   */
  render() {
    return (
      <div className={style.this.concat(" exploration-demo")}>
        {this.state.loaded && <Steps {...this.props} />}
        {this.state.loaded &&
          <Blocks {...this.props} loadPage={this.loadPage.bind(this)} />}
      </div>
    );
  }
}
