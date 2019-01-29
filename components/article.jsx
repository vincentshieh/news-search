import React from 'react';

const onClickHandler = url => {
  return () => window.open(url, "_blank")
};

const Article = ({ article }) => (
  <div className="col-6 article">
    <img src={article.urlToImage} />
    <div className="article-content">
      <h3>{article.title}</h3>
      {article.description}
      <br />
      <br />
      <button className="btn btn-dark"
        onClick={onClickHandler(article.url)}>
        Read More
      </button>
    </div>
  </div>
);

export default Article;
