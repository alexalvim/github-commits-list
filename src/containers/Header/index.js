import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Autocomplete from 'react-autocomplete';

import UserListItem from '../../components/UserListItem'
import logo from '../../imgs/light-logo.png';
import {
  searchUserRequest,
  userRepositoriesRequest,
  getUserRequest
} from '../../actions/user';
import {
  ContentWrapper,
  Container,
  Logo,
  autocompleteInputStyle,
  autocompleteWrapperStyle
} from './styles';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userField: '',
    }
  }

  handleChangeUserInput = (evt) => {
    const { searchUserRequest } = this.props;
    const user = evt.currentTarget.value;
    searchUserRequest(user);
    this.setState({
      userField: user
    });
  }

  handleOnClickUserListItem = (login, avatarUrl) => {
    const { userRepositoriesRequest, getUserRequest } = this.props;
    this.setState({
      userField: ''
    });
    userRepositoriesRequest(login, avatarUrl, 1);
    getUserRequest(login);
  }

  render() {
    const { searchedUsers } = this.props;
    const { userField } = this.state;
    const { handleChangeUserInput, handleOnClickUserListItem } = this;
    return (
      <ContentWrapper>
        <Container>
          <Logo src={logo} />
          <Autocomplete
            getItemValue={(user) => user.login}
            items={searchedUsers}
            renderItem={(user) =>
              <div key={user.id}>
                <UserListItem
                 title={user.login}
                 imgUrl={user.avatar_url}/>
              </div>
            }
            value={userField}
            onChange={handleChangeUserInput}
            inputProps={{...autocompleteInputStyle, placeholder: 'Digite o usuário a ser buscado'}}
            wrapperStyle={autocompleteWrapperStyle}
            onSelect={(_, user) => handleOnClickUserListItem(user.login, user.avatar_url)}
          />
        </Container>
      </ContentWrapper>
    );
  }
}

const mapStateToProps = store => ({
  searchedUsers: store.userState.searchedUsers,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ searchUserRequest, userRepositoriesRequest, getUserRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);