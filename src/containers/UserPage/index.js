import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../Header';
import { searchUserRequest } from '../../actions/user';

class UserPage extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <Header/>
        Página do usuário
        {user.login}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  user: store.userState,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ searchUserRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
