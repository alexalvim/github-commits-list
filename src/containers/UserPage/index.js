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
import { getRepositoryCommitsRequest } from '../../actions/repository';
import {
  Container,
  ContentHolder,
  RepositoriesList,
  CommitsList,
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

  handleOnClickRepository = (repositoryName) => {
    const { user, getRepositoryCommitsRequest } = this.props;
    getRepositoryCommitsRequest(user.login, repositoryName)
    this.setState({
      openRepositoryModal: true
    })
  }

  handleCloseModalRepository = (evt) => {
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
      handleCloseModalRepository
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
            <CommitsList>
              {repository.commits.map((commit) => 
                <li key={commit.sha}>
                  <SimpleItem
                    title={commit.sha}
                    description={commit.commit.message}/>
                </li>)}
            </CommitsList>
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
    getRepositoryCommitsRequest
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
