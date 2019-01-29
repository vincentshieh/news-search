import React from 'react';

const SearchForm = ({ handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group align-middle">
      <input type="text"
             name="query"
             onChange={handleChange}
             className="form-control query-field"
             placeholder="Search query"/>
      <select name="sortBy"
              onChange={handleChange}
              className="form-control sort-by-field">
        <option default>Sort Articles</option>
        <option value="publishedAt">Date Published</option>
        <option value="relevancy">Relevance</option>
        <option value="popularity">Popularity</option>
      </select>
      <input type="submit"
             value="Search"
             className="btn btn-danger search-button" />
    </div>
  </form>
);

export default SearchForm;
