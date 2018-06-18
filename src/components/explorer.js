import { h, Component } from 'preact';

import BlockList from './block-list';
import BlockSelected from './block-selected';

import style from './explorer.scss';

export default class Explorer extends Component {
  render() {
    return (
      <div class={ `exploration-demo ${style.explorer}` }>
        <BlockList {...this.props} />
        <BlockSelected {...this.props} />
      </div>
    )
  }
}
