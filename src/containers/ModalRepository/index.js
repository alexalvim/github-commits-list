import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { IoMdSearch } from 'react-icons/io'

import {
  clearRepository,
  searchCommitRequest,
  getRepositoryCommitsRequest
} from '../../actions/repository';
import SimpleItem from '../../components/SimpleItem';
import ModalBox from '../../components/ModalBox';
import TextField from '../../components/TextField';
import TextButton from '../../components/TextButton';
import IconButton from '../../components/IconButton'
import {
  CommitsList,
  CommitsListWrapper,
  CommitsForm,
  commitTextFieldStyle,
  clearFilterButtonStyle
} from './styles';

class ModalRepository extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commitSearchField: '',
      showClearFilter: false
    }
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

  handleCloseModal = () => {
    const { closeModal, clearRepository } = this.props;
    this.setState({
      commitSearchField: '',
    })
    clearRepository();
    closeModal()
  }

  handleChangeCommitSearchField = (evt) => {
    const value = evt.currentTarget.value;
    this.setState({
      commitSearchField: value
    });
  }

  handleClearCommitFilters = () => {
    const { user, repository, getRepositoryCommitsRequest } = this.props;
    getRepositoryCommitsRequest(user.login, repository.name, 1)
    this.setState({
      showClearFilter: false,
      commitSearchField: ''
    });
  }

  handleSeeMoreCommits = () => {
    const { user, repository, getRepositoryCommitsRequest } = this.props;
    getRepositoryCommitsRequest(user.login, repository.name, repository.commitsPage + 1);
  }

  render() {
    const { repository, isOpen } = this.props
    const { commitSearchField, showClearFilter } = this.state;
    const {
      handleCloseModal,
      handleSubmitCommitSearch,
      handleChangeCommitSearchField,
      handleClearCommitFilters,
      handleSeeMoreCommits
    } = this;
    return (
      <ModalBox
        title={repository.name}
        isOpen={isOpen}
        closeModal={handleCloseModal}>
        <Fragment>
          <CommitsForm
            onSubmit={handleSubmitCommitSearch}>
            <TextField
              value={commitSearchField}
              placeholder='Digite aqui um termo para filtrar'
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
          {repository.isLoadingCommits ?
            <span>Carregando Commits...</span>:
            repository.commits && repository.commits.length > 0 ?
              <CommitsListWrapper id='commits-list-wrapper'>
                <InfiniteScroll
                  scrollableTarget='commits-list-wrapper'
                  dataLength={repository.commits && repository.commits.length}
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
            : <span>Commits não encontrados</span>
          }
        </Fragment>
      </ModalBox>
    )
  }
}

const mapStateToProps = store => ({
  repository: store.repositoryState,
  user: store.userState,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    clearRepository,
    searchCommitRequest,
    getRepositoryCommitsRequest
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalRepository);