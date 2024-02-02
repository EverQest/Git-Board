import React, { useState } from 'react';
import { Button, Input, Flex } from 'antd';
import "./index.css"

interface SearchBarProps {
  onSearch: (repoUrl: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [repoUrl, setRepoUrl] = useState('https://github.com/facebook/react');

  const handleSearch = () => {
    onSearch(repoUrl);
  };

  return (
    <Flex gap="middle" align="start">
        <Input value={repoUrl} onChange={(e) => setRepoUrl(e.target.value)} placeholder="Enter repo URL" />
        <Button type="primary" onClick={handleSearch}>Load issues</Button>  
    </Flex>
  );
};

export default SearchBar;