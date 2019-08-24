import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../Header';
import UserBox from '../../components/UserBox';
import ContentBox from '../../components/ContentBox';
import SimpleItem from '../../components/SimpleItem';
import { searchUserRequest } from '../../actions/user';
import {
  Container,
  ContentHolder,
  RepositoriesList,
  contentBoxWrapperStyle
} from './styles';

class UserPage extends React.Component {
  render() {
    const { user } = this.props;
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
              <RepositoriesList>
                {user.repositories.map((repository) =>
                  <li>
                    <SimpleItem
                      title={repository.name}
                      description={repository.description}/>
                  </li>
                )}
              </RepositoriesList>
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
  bindActionCreators({ searchUserRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
