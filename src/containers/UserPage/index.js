import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { IoMdSearch } from 'react-icons/io'

import Header from '../Header';
import UserBox from '../../components/UserBox';
import ContentBox from '../../components/ContentBox';
import SimpleItem from '../../components/SimpleItem';
import ModalBox from '../../components/ModalBox';
import ModalError from '../../components/ModalError';
import TextField from '../../components/TextField';
import TextButton from '../../components/TextButton';
import IconButton from '../../components/IconButton'
import { searchUserRequest, getUserRepositoriesRequest } from '../../actions/user';
import {
  getRepositoryCommitsRequest,
  clearRepository,
  searchCommitRequest
} from '../../actions/repository';
import { clearErrorMessage } from '../../actions/common';
import {
  Container,
  ContentHolder,
  RepositoriesList,
  CommitsList,
  CommitsListWrapper,
  CommitsForm,
  contentBoxWrapperStyle,
  commitTextFieldStyle,
  clearFilterButtonStyle
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


  handleSeeMoreCommits = () => {
    const { user, repository, getRepositoryCommitsRequest } = this.props;
    getRepositoryCommitsRequest(user.login, repository.name, repository.commitsPage + 1);
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
    const { clearRepository } = this.props;
    clearRepository();
    this.setState({
      openRepositoryModal: false,
      commitSearchField: '',
    })
  }

  handleCloseModalError = () => {
    const { clearErrorMessage } = this.props;
    clearErrorMessage();
  }

  handleChangeCommitSearchField = (evt) => {
    const value = evt.currentTarget.value;
    this.setState({
      commitSearchField: value
    });
  }

  handleSubmitCommitSearch = (evt) => {
    evt.preventDefault();
    const { searchCommitRequest, user, repository } = this.props;
    const { commitSearchField } = this.state;
    if(commitSearchField.trim().length > 0) {
      searchCommitRequest(user.login, repository.name, commitSearchField);
      this.setState({
        showClearFilter: true
      });
    }
  }

  handleClearCommitFilters = () => {
    const { user, repository, getRepositoryCommitsRequest } = this.props;
    getRepositoryCommitsRequest(user.login, repository.name, 1)
    this.setState({
      showClearFilter: false,
      commitSearchField: ''
    });
  }

  render() {
    const { user, repository } = this.props;
    const {
      openRepositoryModal,
      commitSearchField,
      showClearFilter
    } = this.state;
    const {
      handleSeeMoreRepositories,
      handleOnClickRepository,
      handleCloseModalRepository,
      handleSeeMoreCommits,
      handleCloseModalError,
      handleChangeCommitSearchField,
      handleSubmitCommitSearch,
      handleClearCommitFilters
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
          isOpen={!user.errorMessage && !repository.errorMessage && openRepositoryModal}
          closeModal={handleCloseModalRepository}>
          <React.Fragment>
            <CommitsForm
              onSubmit={handleSubmitCommitSearch}>
              <TextField
                value={commitSearchField}
                placeholder='Digite aqui um termo para filtrar os commits'
                onChange={handleChangeCommitSearchField}
                wrapperStyle={commitTextFieldStyle}/>
              <IconButton
                onClick={handleSubmitCommitSearch}
                Icon={IoMdSearch}/>
            </CommitsForm>
            {showClearFilter &&
              <TextButton
                wrapperStyle={clearFilterButtonStyle}
                onClick={handleClearCommitFilters}
                label='Limpar Filtros'/>}
            {repository.commits && repository.commits.length > 0 ?
              <CommitsListWrapper id='commits-list-wrapper'>
                <InfiniteScroll
                  scrollableTarget='commits-list-wrapper'
                  dataLength={repository.commits && repository.commits.length}
                  next={handleSeeMoreCommits}
                  hasMore={repository.hasNextPage}
                  loader={<span>Carregando Commits...</span>}>
                  {repository.isLoadingCommits ?
                    <span>Carregando Commits...</span>:
                    <CommitsList>
                      {repository.commits.map((commit) => 
                        <li key={commit.sha}>
                        <SimpleItem
                          title={commit.commit.message}
                          description={commit.sha}/>
                        </li>)}
                    </CommitsList>
                  }
                </InfiniteScroll>
              </CommitsListWrapper>
            : <span>Commits não encontrados</span>}
          </React.Fragment>
        </ModalBox>
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
    clearRepository,
    clearErrorMessage,
    searchCommitRequest
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
