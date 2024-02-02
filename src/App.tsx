import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import SearchBar from './components/SearchBar';
import RepoInfo from './components/RepoInfo';
import Board from './components/Board';
import githubReducer from './features/github/githubSlice';

const store = configureStore({
  reducer: {
    github: githubReducer,
  },
});

const App: React.FC = () => {
  const [owner, setOwner] = useState('facebook');
  const [repo, setRepo] = useState('react');

  function getOwnerAndRepoFromUrl(url: string): { owner: string; repo: string } | null {
    const match = url.match(/github\.com\/([^/]+)\/([^/]+)$/);
    if (match) {
      const [, owner, repo] = match;
      setOwner(owner);
      setRepo(repo);
      return { owner, repo };
    } else {
      return null;
    }
  }

  return (
    <Provider store={store}>
      <div>
        <SearchBar onSearch={getOwnerAndRepoFromUrl} />
        <RepoInfo owner={owner} repo={repo} />
        <Board issues={[]} />
      </div>
    </Provider>
  );
};

export default App;