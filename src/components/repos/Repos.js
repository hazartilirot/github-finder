import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem'
import GithubContext from '../../context/github/githubContext'

const Repos = () => {
  const {repos} = useContext(GithubContext);
  
  return repos.map(repo => <RepoItem key={repo.id} repo={repo}/>)
}
Repos.propTypes = {
  repos: PropTypes.array.isRequired,
}
export default Repos;