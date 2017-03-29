import React from 'react';

export default class Home extends React.Component {

  render() {
    return (
      <div className={'col-md-3 thumbnail pull-' + this.props.align + ' image--' + this.props.align}>
        <img src={'/images/' + this.props.number + '.jpg'} alt="" />
      </div>
    );
  }

}
