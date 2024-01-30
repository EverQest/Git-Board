import React from 'react';

interface RepoInfoProps {
  owner: string;
  repo: string;
}

const RepoInfo: React.FC<RepoInfoProps> = ({ owner, repo }) => (
  <div>
    <p>
      <a href={`https://github.com/${owner}`}>{owner}</a>  {' > '}  <a href={`https://github.com/${owner}/${repo}`}>{repo}</a>
    </p>
  </div>
);

export default RepoInfo;