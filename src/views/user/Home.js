import React from 'react';
import {connect} from 'react-redux';
import { Spin } from 'antd';


class Home extends React.Component {
  state = {
    data: [],
    loading: true
  };
  
  

  render() {
    const {user} = this.props.auth;
    if(!user.role) {
      return <div className='loader' ><Spin size="large"/></div>;
    }

    return (
      <label>Content here!</label>
    );
  }
}

const mapStateToProps = (state) => {
  return {auth: state.auth};
};
export default connect(mapStateToProps)(Home);