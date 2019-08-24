import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import Header from '../Header';
import UserBox from '../../components/UserBox';
import ContentBox from '../../components/ContentBox';
import SimpleItem from '../../components/SimpleItem';
import ModalBox from '../../components/ModalBox';
import { searchUserRequest, getUserRepositoriesRequest } from '../../actions/user';
import { getRepositoryCommitsRequest, clearRepository } from '../../actions/repository';
import {
  Container,
  ContentHolder,
  RepositoriesList,
  CommitsList,
  CommitsListWrapper,
  contentBoxWrapperStyle
} from './styles';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openRepositoryModal: false,
    }
  }

  handleSeeMoreRepositories = () => {
    const { user, getUserRepositoriesRequest } = this.props;
    getUserRepositoriesRequest(user.login, user.avatarUrl, user.repositoriesPage + 1);
  }


  handleSeeMoreCommits = () => {
    const { user, repository, getRepositoryCommitsRequest } = this.props;
    getRepositoryCommitsRequest(user.login, repository.name, repository.commitsPage + 1);
  }

  handleOnClickRepository = (repositoryName) => {
    const { user, getRepositoryCommitsRequest } = this.props;
    getRepositoryCommitsRequest(user.login, repositoryName, 1)
    this.setState({
      openRepositoryModal: true
    })
  }

  handleCloseModalRepository = (evt) => {
    const { clearRepository } = this.props;
    clearRepository();
    this.setState({
      openRepositoryModal: false
    })
  }

  render() {
    const { user, repository } = this.props;
    const { openRepositoryModal } = this.state;
    const {
      handleSeeMoreRepositories,
      handleOnClickRepository,
      handleCloseModalRepository,
      handleSeeMoreCommits
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
        <ModalBox
          title={repository.name}
          isOpen={openRepositoryModal}
          closeModal={handleCloseModalRepository}>
          <CommitsListWrapper id='commits-list-wrapper'>
            <InfiniteScroll
              scrollableTarget='commits-list-wrapper'
              dataLength={repository.commits.length}
              next={handleSeeMoreCommits}
              hasMore={repository.hasNextPage}
              loader={<span>Carregando Commits...</span>}>
              <CommitsList>
                {repository.commits.map((commit) => 
                  <li key={commit.sha}>
                    <SimpleItem
                      title={commit.commit.message}
                      description={commit.sha}/>
                  </li>)}
              </CommitsList>
            </InfiniteScroll>
          </CommitsListWrapper>
        </ModalBox>
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
    clearRepository
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
