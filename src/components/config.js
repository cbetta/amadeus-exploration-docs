/**
 * An object that handles the loading of remote files and config, and
 * storing it on the explorer component.
 */
export default class Config {
  /**
   * Store the explorer object so we can write config back to the props and
   * state
   */
  constructor(explorer) {
    this.explorer = explorer;
  }

  /**
   * Load the basic config.json
   */
  load() {
    return fetch(this.explorer.props.url.concat("/config.json"))
      .then(data => data.json())
      .then(config => Object.assign(this.explorer.props, config))
      .then(this.showExplorer.bind(this));
  }

  /**
   * Show the explorer once we loaded the basic config
   */
  showExplorer() {
    this.explorer.setState({ loaded: true });
  }

  /**
   * Load the code samples and output for a step
   */
  loadStep(stepId) {
    this.fetchCodeSamples(stepId);
    this.fetchCodeOutput(stepId);
  }

  /**
   * Fetch the code samples in all programming languages for a step
   */
  fetchCodeSamples(stepId) {
    for (var lang in this.explorer.props.languages) {
      this.fetchCodeSample(stepId, lang);
    }
  }

  /**
   * Fetch a code sample for a programming language for a step
   */
  fetchCodeSample(stepId, lang) {
    fetch(this.explorer.props.url.concat(`/code/${stepId}.${lang}`))
      .then(this.handleErrors.bind(this))
      .then(data => data.text())
      .then(this.storeCodeSample(stepId, lang).bind(this))
      .catch(() => {});
  }

  /**
   * Fetch the sample output for a step
   */
  fetchCodeOutput(stepId) {
    fetch(this.explorer.props.url.concat(`/code/${stepId}.out.json`))
      .then(this.handleErrors.bind(this))
      .then(data => data.text())
      .then(this.storeCodeOutput(stepId).bind(this))
      .catch(() => {});
  }

  /**
   * If the response was not a 200 we just raise an error that is silently
   * caught.
   */
  handleErrors(response) {
    if (!response.ok) { throw Error(response.statusText); }
    return response;
  }

  /**
   * Store the fetched code sample on the config object.
   */
  storeCodeSample(stepId, lang) {
    return (code) => {
      this.explorer.props.steps[stepId].code
        = this.explorer.props.steps[stepId].code || {};
      this.explorer.props.steps[stepId].code[lang] = code;
      this.explorer.forceUpdate();
    };
  }

  /**
   * Store the fetched output sample on the config object.
   */
  storeCodeOutput(stepId) {
    return (json) => {
      this.explorer.props.steps[stepId].output = json;
      this.explorer.forceUpdate();
    };
  }
}
