import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  padding: 0;
  overflow: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`;
export const Data = styled.ul`
  width: ${(props) => `calc(100% * ${props.slidesCount})`};
  height: 100%;
  display: flex;
`;
export const ImageContainer = styled.li`
  scroll-snap-align: start;
  /* opacity: 0;
  transition: opacity 300ms;

  &:target {
    opacity: 1;
  } */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const NavLinks = styled.nav`
  text-align: center;
`;
export const Dots = styled.a`
  text-decoration: none;

  display: inline-block;
  margin: 20px;
  color: black;

  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 50%;
  background: inherit;
`;
