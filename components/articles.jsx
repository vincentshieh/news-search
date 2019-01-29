import React from 'react';

import Article from './article';

const Articles = ({ articles }) => {
  const articlePairs = [];
  for(let i = 0, len = Math.ceil(articles.length / 2); i < len; i++) {
    articlePairs.push([articles[2 * i], articles[2 * i + 1]]);
  }
  return (
    <div className="container">
      {
        articlePairs.map((pair, idx) => {
          return (
            <div className="row"
                 key={idx}>
              <Article article={pair[0]} />
              {pair[1] ? <Article article={pair[1]} /> : null}
            </div>
          );
        })
      }
    </div>
  )
};

export default Articles;
