import React, { useState, useEffect } from 'react';

interface RepoInfoProps {
  owner: string;
  repo: string;
}

const RepoInfo: React.FC<RepoInfoProps> = ({ owner, repo }) => {
  const [stars, setStars] = useState<number | null>(null);

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
    <div>
    <div>
      <a href={`https://github.com/${owner}`}>{owner}</a>  {' > '}  <a href={`https://github.com/${owner}/${repo}`}>{repo}</a>
    </div>
    <div>
      {stars !== null && <p>⭐{stars} star</p>}
    </div>
  </div>
  );
};

export default RepoInfo;
