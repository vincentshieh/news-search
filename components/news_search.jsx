import React from 'react';
import * as queryString from 'query-string';

import axiosInstance from '../helpers/client';
import Articles from './articles';
import SearchForm from './search_form';

class NewsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      sortBy: '',
      articles: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const urlQueryString = queryString.stringify({
      q: this.state.query,
      sortBy: this.state.sortBy || 'publishedAt'
    });
    axiosInstance.get(`?${urlQueryString}`)
      .then(res => {
        this.setState({ articles: res.data.articles });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="search-bar">
          <SearchForm handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit} />
        </div>
        <Articles articles={this.state.articles} />
      </div>
    );
  }
}

export default NewsSearch;
