import React from 'react';
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

function CardComponent(props) {
  return (
    <Card>
      <CardHeader>{props.title}</CardHeader>
      <CardBody>{props.content}</CardBody>
    </Card>
  );
}

export default CardComponent;