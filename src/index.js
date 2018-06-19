import { h, render } from "preact";

// Local imports
import Explorer from "./components/explorer";

/**
 * The entry point for our widget, allowing for the browser
 * to call `explorer.setup()` to bind a new widget to the
 * browser.
 */
class Builder {
  /**
   * Fetches the config for this widget from a remote JSON file,
   * which includes the steps, the code samples, and more.
   *
   * @param  {String} url the URL for the JSON file.
   * @return {Object}     the configuration for this widget
   */
  fetchConfig(url) {
    return fetch(url).then(response => response.json());
  }

  /**
   * Sets up the widget and binds it to an element in the browser.
   *
   * @param  {String} element a query string describing the target element by
   *   ID or class name.
   * @param  {String} url     the URL for the config JSON file.
   */
  setup({ element, url }) {
    this.fetchConfig(url).then((config) => {
      let container = document.querySelector(element);
      render(<Explorer class="exploration-demo" steps={config.steps} />, container);
    });
  }
}

export default new Builder();
