import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  width: 543.75px;
  height: 537.17px;

  max-height: ${(props) => props.maxHeight};
  aspect-ratio: 16 / 9;

  @media (max-width: 700px) {
    width: 360px;
    height: 323px;
  }
`;

export const ImagesContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
export const Inner = styled.div`
  height: 100%;
  white-space: nowrap;
  transform: translateX(
    -${({ currentImageIndex }) => currentImageIndex * 100}%
  );
  transition: transform 0.8s ease-out;
`;

export const ImageContainer = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const NavButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  padding: 2px 8px;
  border: 1px solid black;
  &:hover {
    background: green;
    color: white;
  }
  @media (max-width: 450px) {
    font-size: 10px;
  }
`;

export const Dots = styled.button`
  all: unset;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  color: black;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 50%;
  ${({ active }) => active && 'background: green;'}
  &:hover {
    background: green;
    color: white;
    opacity: 0.5;
  }
`;

export const MiniImageContainer = styled.button`
  all: unset;
  display: inline-block;
  width: 50px;
  height: 50px;
  opacity: ${({ active }) => (active ? 1 : 0.7)};
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 450px) {
    width: 30px;
    height: 30px;
  }
`;
