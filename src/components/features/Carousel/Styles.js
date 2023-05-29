import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  max-height: ${(props) => props.maxHeight};
  max-width: ${(props) => props.maxWidth};

  aspect-ratio: ${(props) => props.aspectRatio};
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
  gap: 0.8rem;
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  padding: 0.2rem 0.8rem;

  svg {
    height: 5rem;
    width: 5rem;
    filter: drop-shadow(0rem 0.4rem 0.4rem rgb(0 0 0 / 0.25));

    @media (max-width: 450px) {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const Dots = styled.button`
  all: unset;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  color: black;
  width: 1rem;
  height: 1rem;
  border: 0.1rem solid black;
  border-radius: 50%;

  @media (max-width: 450px) {
    width: 1rem;
    height: 1rem;
  }

  ${({ active }) => active && 'background: black;'}
`;

export const MiniImageContainer = styled.button`
  all: unset;
  display: inline-block;
  width: 5rem;
  height: 5rem;
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
    width: 4rem;
    height: 4rem;
  }
`;
