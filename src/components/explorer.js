import { h, Component } from 'preact';

import BlockList from './block-list';
import BlockSelected from './block-selected';


export default class Explorer extends Component {
  render() {
    return (
      <div>
        <BlockList {...this.props} />
        <BlockSelected {...this.props} />
      </div>
    )
  }
}
