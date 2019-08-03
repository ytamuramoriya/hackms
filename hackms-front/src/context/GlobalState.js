import React, {Component} from 'react';
import GlobalContext from './global-context';

export default class GlobalState extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (<GlobalContext.Provider>
      {this.props.children}
    </GlobalContext.Provider>);
  }
}