import styled from 'styled-components';

export const SliderButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  position: relative;
  width: 75px;
  padding: ${p => p.theme.spacing(2)};
  color: ${p => p.theme.colors.white};
  background-color: transparent;
  border: 1px solid;
  border-image: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
  border-image-slice: 1;
  /* border-radius: ${p => p.theme.spacing(2)}; */
  z-index: 2;
  cursor: pointer;
  overflow: hidden;
  transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 0;
    width: 100%;
    z-index: -1;
    color: ${p => p.theme.colors.white};
    background: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
    transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover {
    background: rgba(255, 255, 255, 0);
  }

  &:hover::before {
    bottom: 0%;
    top: auto;
    height: 100%;
  }
`;
