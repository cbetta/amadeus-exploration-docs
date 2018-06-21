/**
 * An object that handles the loading of remote files and config, and
 * storing it on the explorer component.
 */
export default class Config {
  constructor(explorer) {
    this.explorer = explorer;
  }

  load() {
    return fetch(this.explorer.props.url.concat("/config.json"))
      .then(data => data.json())
      .then(config => Object.assign(this.explorer.props, config))
      .then(this.showExplorer.bind(this));
  }

  showExplorer() {
    this.explorer.setState({ loaded: true });
  }

  loadStep(stepId) {
    this.fetchCodeSamples(stepId);
    this.fetchCodeOutput(stepId);
  }

  fetchCodeSamples(stepId) {
    for (var lang in this.explorer.props.languages) {
      this.fetchCodeSample(stepId, lang);
    }
  }

  fetchCodeSample(stepId, lang) {
    fetch(this.explorer.props.url.concat(`/code/${stepId}.${lang}`))
      .then(this.handleErrors.bind(this))
      .then(data => data.text())
      .then(this.storeCodeSample(stepId, lang).bind(this))
      .catch(() => {});
  }

  fetchCodeOutput(stepId) {
    fetch(this.explorer.props.url.concat(`/code/${stepId}.out.json`))
      .then(this.handleErrors.bind(this))
      .then(data => data.text())
      .then(this.storeCodeOutput(stepId).bind(this))
      .catch(() => {});
  }

  handleErrors(response) {
    if (!response.ok) { throw Error(response.statusText); }
    return response;
  }

  storeCodeSample(stepId, lang) {
    return (code) => {
      this.explorer.props.steps[stepId].code
        = this.explorer.props.steps[stepId].code || {};
      this.explorer.props.steps[stepId].code[lang] = code;
      this.explorer.forceUpdate();
    };
  }

  storeCodeOutput(stepId) {
    return (json) => {
      this.explorer.props.steps[stepId].output = json;
      this.explorer.forceUpdate();
    };
  }
}
