import React from 'react';
import SearchBlock from './components/SearchBlockComponent';
import SearchResult from './components/SearchResultComponent';

import axiosInstance from '../../axios';

class SearchView extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      error: null,
      searchQuery: '',
      searchResult: [],
      sortedBy: '',
    };
  }

  searchButtonClickHandler = async e => {
    this.setState({
      isLoading: true,
    });

    try {
      const response = await axiosInstance(`search/repositories?q=${this.state.searchQuery}`);
      this.setState({
        searchResult: response.data.items,
        sortedBy: '',
      })
    } catch (e) {

    }

    this.setState({
      isLoading: false,
    });
  }

  searchInputHandler = e => {
    this.setState({
      searchQuery: e.target.value,
    })
  }

  sortColumn = propName => {
    if (propName === this.state.sortedBy) {
      this.setState({
        searchResult: this.state.searchResult.reverse(),
      });

      return;
    };

    const items = [...this.state.searchResult];
    items.sort((res1, res2) => {
      if (!res1[propName] || !res2[propName]) {
        return 1;
      };

      const sortKey1 = parseInt(res1[propName]) || res1[propName].toLowerCase();
      const sortKey2 = parseInt(res2[propName]) || res2[propName].toLowerCase();

      if (sortKey1 < sortKey2) {
        return -1;
      };

      return 1;
    });

    this.setState({
      searchResult: items,
      sortedBy: propName,
    });
  }

  render() {
    return (
      <div style={{width: '100%'}}>
        <SearchBlock
          onChangeHandler={this.searchInputHandler}
          searchButtonClickHandler={this.searchButtonClickHandler}
        />
        <SearchResult sortColumn={this.sortColumn} searchResult={this.state.searchResult} />
      </div>
    );
  }
}

export default SearchView;