import { h, render } from 'preact';
import Explorer from './components/explorer';

class Builder {
  setup({ element }) {
    render(<Explorer />, document.querySelector(element))
  }
}

export default new Builder();
