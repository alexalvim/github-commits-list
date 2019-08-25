import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import Header from '../Header';
import ModalRepository from '../ModalRepository';
import UserBox from '../../components/UserBox';
import ContentBox from '../../components/ContentBox';
import SimpleItem from '../../components/SimpleItem';
import ModalError from '../../components/ModalError';
import { searchUserRequest, getUserRepositoriesRequest } from '../../actions/user';
import { getRepositoryCommitsRequest } from '../../actions/repository';
import { clearErrorMessage } from '../../actions/common';
import {
  Container,
  ContentHolder,
  RepositoriesList,
  contentBoxWrapperStyle,
} from './styles';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openRepositoryModal: false,
      commitSearchField: '',
      showClearFilter: false
    }
  }

  handleSeeMoreRepositories = () => {
    const { user, getUserRepositoriesRequest } = this.props;
    getUserRepositoriesRequest(user.login, user.avatarUrl, user.repositoriesPage + 1);
  }

  handleOnClickRepository = (repositoryName) => {
    const { user, getRepositoryCommitsRequest } = this.props;
    getRepositoryCommitsRequest(user.login, repositoryName, 1)
    this.setState({
      openRepositoryModal: true,
      showClearFilter: false
    })
  }

  handleCloseModalRepository = () => {
    this.setState({
      openRepositoryModal: false,
    })
  }

  handleCloseModalError = () => {
    const { clearErrorMessage } = this.props;
    clearErrorMessage();
  }

  render() {
    const { user, repository } = this.props;
    const { openRepositoryModal } = this.state;
    const {
      handleSeeMoreRepositories,
      handleOnClickRepository,
      handleCloseModalRepository,
      handleCloseModalError,
    } = this;
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
               {!user.loadingRepositories ?
                user.repositories &&
                 user.repositories.length > 0 ?
                 <InfiniteScroll
                   dataLength={user.repositories.length}
                   next={handleSeeMoreRepositories}
                   hasMore={user.repositories.length < user.repositoriesCount}
                   loader={<span>Carregando Repositórios...</span>}>
                   <RepositoriesList>
                     {
                       user.repositories.map((repository) =>
                         <li key={repository.id}>
                           <SimpleItem
                              onClick={() => handleOnClickRepository(repository.name)}
                              title={repository.name}
                              description={repository.description}/>
                         </li>)
                     }
                   </RepositoriesList>
                 </InfiniteScroll>
                 : <span>Usuário não possui repositórios</span>
                : <span>Carregando Repositórios...</span>}
            </ContentBox>
          </ContentHolder>
          : <p>Aplicação para verificar os repositórios e commits de usuários do Github. <br/>Use o campo acima para buscar um usuário</p>}
        </Container>
        <ModalRepository
          closeModal={handleCloseModalRepository}
          isOpen={!user.errorMessage && !repository.errorMessage && openRepositoryModal}/>
        <ModalError
          errorMessage={user.errorMessage || repository.errorMessage}
          isOpen={user.errorMessage || repository.errorMessage}
          closeModal={handleCloseModalError}/>
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  repository: store.repositoryState,
  user: store.userState,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    searchUserRequest,
    getUserRepositoriesRequest,
    getRepositoryCommitsRequest,
    clearErrorMessage
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
