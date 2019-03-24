import React from 'react';
import styled from 'styled-components';

const ResultTabe = styled.table`
  margin-top: 15px;
  font-size: 13px;
  color: #fff;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;

  & th,
  & td {
    word-break: break-word;
    text-align: center
    border: 1px solid #ccc;
    padding: 5px 0;
  }

  & th {
    cursor: pointer;
    text-decoration: underline;
    transition: .4s ease;

    &:hover {
      color: #728bd4;
    }
  }
`;

const ResultTableRow = styled.tr`
  
`;

const tableData = ['name', 'html_url', 'description', 'homepage', 'stargazers_count', 'language'];
const snakeToNormal = str => str[0].toUpperCase() + str.slice(1).replace('_', ' ');
const createRow = resultItem => tableData.map((propName, index) => (
  <td key={index}>
    {resultItem[propName]}
  </td>)
);

export default function SearchResultComponent(props) {
  let headerRow, resultData;
  const result = props.searchResult;
  if (result.length) {
    headerRow = tableData.map((propName, index) => (
      <th key={index} onClick={() => props.sortColumn(propName)}>{snakeToNormal(propName)}</th>
    ));

    resultData = result.map(item => (
      <ResultTableRow key={item.id}>
        {createRow(item)}
      </ResultTableRow>
    ));
  }

  return (
    <ResultTabe>
      <thead>
        <ResultTableRow>{headerRow}</ResultTableRow>
      </thead>
      <tbody>
        {resultData}
      </tbody>
    </ResultTabe>
  );
}