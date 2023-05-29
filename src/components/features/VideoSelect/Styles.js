import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 1rem;

  padding: 0.5rem 1rem;
  margin-bottom: 1rem;

  background-color: ${({ active }) => (active ? '#f5f5f5' : 'none')};

  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 1rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  width: 100%;
`;

export const ScrollIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const Title = styled.p`
  font-weight: ${({ active }) => (active ? '700' : '500')};
  font-size: 1.8rem;
  line-height: 2.4rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: inherit;

  color: #202020;

  :hover {
    cursor: pointer;
  }

  max-width: 20rem;

  @media (max-width: 970px) {
    color: #595959;
    font-size: 1.6rem;

    max-width: none;
  }
`;

export const Duration = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: 400;
  font-size: 1.1em;
  line-height: 2.4rem;

  color: #a5a5a5;
`;
