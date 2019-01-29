import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

import NewsSearch from './news_search';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('main');
  ReactDOM.render(<NewsSearch />, root);
});
