import { h, render } from 'preact';
import Explorer from './components/explorer';

class Builder {
  fetchConfig(url) {
    return fetch(url).then(response => response.json());
  }

  setup({ element, url }) {
    this.fetchConfig(url).then((config) => {
      let container = document.querySelector(element);
      render(<Explorer steps={config.steps} />, container)
    });
  }
}

export default new Builder();
