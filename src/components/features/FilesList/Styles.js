import styled from 'styled-components';

export const FileListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem 0rem 0rem 2rem;
  gap: 1.5rem;

  width: 20.387rem;
  height: 10.2rem;
`;

export const FileItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem;
  gap: 1.5rem;

  width: 17.987rem;
  height: 2.4rem;
  a {
    width: 13.9rem;
    height: 2.4rem;

    font-family: ${(props) => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.4rem;
    text-align: center;
    text-decoration: none;
    color: #000000;
  }
  a:hover {
    text-decoration: underline;
  }
`;
