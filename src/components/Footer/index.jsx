import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.footer`
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  color: #666;;
  background-color: #222;
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
`;

function FooterComponent() {
  return (
    <FooterBlock>
        <i>Created by Mikhail Chernyshenko, 2019</i>
    </FooterBlock>
  )
}

export default FooterComponent;