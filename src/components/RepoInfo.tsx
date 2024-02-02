import React, { useState, useEffect } from 'react';
import { Flex } from 'antd';
import "./index.css"

interface RepoInfoProps {
  owner: string;
  repo: string;
}

const RepoInfo: React.FC<RepoInfoProps> = ({ owner, repo }) => {
  const [stars, setStars] = useState<number | null>(null);

  function ucFirst(str: string | any[]) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  let ownertxt = ucFirst(owner);
  let repotxt = ucFirst(repo);

  useEffect(() => {
    const fetchRepoInfo = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error('Error fetching repository information:', error);
      }
    };

    fetchRepoInfo();
  }, [owner, repo]);

  return (
  <Flex gap='small' align="center" className='font'>
    <span>
      <a href={`https://github.com/${owner}`}>{ownertxt}</a>
    </span>
    <p className='blue'>{'>'}</p>
    <span>
      <a href={`https://github.com/${owner}/${repo}`}>{repotxt}</a>
    </span>
    <span>
      {stars !== null && <p>⭐{stars} stars</p>}
    </span>
  </Flex>
  );
};

export default RepoInfo;