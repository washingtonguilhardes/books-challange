import styled from 'styled-components';

export const BookListGrid = styled.div`
  display: grid;
  gap: 24px;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

export const BookListLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
