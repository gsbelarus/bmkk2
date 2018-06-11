import * as React from 'react';

const maxWrappedLength = 90;

export interface WrapTextProps {
  text: string;
}

export interface WrapTextState {
  wrapped: boolean;
}

export class WrapText extends React.Component<WrapTextProps, WrapTextState> {

  state: WrapTextState = {
    wrapped: true
  }

  render () {
    const { text } = this.props;

    if (text.length <= maxWrappedLength) {
      return (
        <div>
          {text}
        </div>
      );
    } else {
      if (this.state.wrapped) {
        const wrappedText = text.slice(0, maxWrappedLength);
        return (
          <div className="WrappedText"> 
            {wrappedText}
            <span onClick={ () => this.setState({ wrapped: false }) }>...</span>
          </div> 
        );
      } else {
        return (
          <div className="WrappedText">
            {text}
            <span onClick={ () => this.setState({ wrapped: true }) }>{'\u21c7'}</span>
          </div>
        );
      }  
    }
  }
}