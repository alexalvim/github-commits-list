import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchUserRequest } from '../../actions/user';

class UserPage extends React.Component {
  render() {
    return (
      <div>
        Página do usuário
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
