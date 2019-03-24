import React from 'react';
import styled from 'styled-components';

const SearchBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  margin: 20px auto;
`;

const SearchButton = styled.button`

`;

function SearchBlockComponent(props) {
  return (
    <SearchBlock>
      <input placeholder='search query' onChange={props.onChangeHandler} id='queryString' />
      <SearchButton onClick={props.searchButtonClickHandler}>Search!</SearchButton>
    </SearchBlock>
  )
}

export default SearchBlockComponent;