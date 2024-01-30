import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (repoUrl: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [repoUrl, setRepoUrl] = useState('');

  const handleSearch = () => {
    onSearch(repoUrl);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter repo URL"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
      />
      <button onClick={handleSearch}>Load issues</button>
    </div>
  );
};

export default SearchBar;