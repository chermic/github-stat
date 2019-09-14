import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.section`
  border: 1px solid #ccc;
  border-radius: 2px;
  flex-basis: 40%;
  overflow: auto;
  height: 300px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  color: #fff;
`;

const CardBody = styled.div`
  padding: 10px 0;
  color: #fff;
`;

const CardComponent = ({ title, content }) => (
  <Card>
    <CardHeader>{title}</CardHeader>
    <CardBody>{content}</CardBody>
  </Card>
);

CardComponent.propTypes = {
  title: propTypes.string.isRequired,
  content: propTypes.element.isRequired,
};

export default CardComponent;