import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  max-height: ${(props) => props.maxHeight};
  max-width: ${(props) => props.maxWidth};

  aspect-ratio: 16 / 9;
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
  svg {
    height: 50px;
    width: 50px;
    filter: drop-shadow(0px 4px 4px rgb(0 0 0 / 0.25));
    @media (max-width: 450px) {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Dots = styled.button`
  all: unset;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  color: black;
  width: 15px;
  height: 15px;
  border: 1px solid black;
  border-radius: 50%;
  @media (max-width: 450px) {
    width: 10px;
    height: 10px;
  }
  ${({ active }) => active && 'background: black;'}
`;

export const MiniImageContainer = styled.button`
  all: unset;
  display: inline-block;
  width: 80px;
  height: 80px;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  border: ${({ active, theme }) =>
    active ? `2px solid ${theme.colors.darkBlue}` : 'none'};
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
