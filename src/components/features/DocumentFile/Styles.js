import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1em;
`;

export const FileLink = styled.a`
  font-size: 1.3em;
  color: 'white';

  flex: 1;

  white-space: nowrap;
  overflow: hidden;

  text-overflow: ellipsis;
`;

export const Arrows = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2px;
`;