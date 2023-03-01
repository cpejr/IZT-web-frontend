export const Files = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin: 10px 0;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;

    a {
      text-decoration: none;
      color: #333;
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        color: #fff;
        background-color: #333;
      }
    }
  }
`;
