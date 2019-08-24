import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../Header';
import UserBox from '../../components/UserBox';
import ContentBox from '../../components/ContentBox';
import SimpleItem from '../../components/SimpleItem';
import { searchUserRequest, userRepositoriesRequest } from '../../actions/user';
import {
  Container,
  ContentHolder,
  RepositoriesList,
  contentBoxWrapperStyle
} from './styles';

class UserPage extends React.Component {

  handleClickSeeMore = () => {
    const { user, userRepositoriesRequest } = this.props;
    userRepositoriesRequest(user.login, user.avatarUrl, user.repositoriesPage + 1);
  }

  render() {
    const { user } = this.props;
    const { handleClickSeeMore } = this;
    console.log(user)
    return (
      <Fragment>
        <Header/>
        <Container>
          {user.login && user.login !== '' ?
          <ContentHolder>
            <UserBox
              avatarUrl={user.avatarUrl}
              login={user.login}/>
            <ContentBox
             title='Repositórios'
             wrapperStyles={contentBoxWrapperStyle}>
               {user.repositories &&
                user.repositories.length > 0 ?
                <Fragment>
                  <RepositoriesList>
                    {
                     user.repositories.map((repository) =>
                      <li key={repository.id}>
                        <SimpleItem
                          title={repository.name}
                          description={repository.description}/>
                      </li>
                    )}
                  </RepositoriesList>
                  {user.repositories.length < user.repositoriesCount &&
                    <span onClick={handleClickSeeMore}>ver mais</span>}
                </Fragment>
                : <p>Usuário não possui repositórios</p>}
            </ContentBox>
          </ContentHolder>
          : <p>Aplicação para verificar os repositórios e commits de usuários do Github. <br/>Use o campo acima para buscar um usuário</p>}
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  user: store.userState,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ searchUserRequest, userRepositoriesRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
