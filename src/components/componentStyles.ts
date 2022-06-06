import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 20px 70px;
  font-size: 20px;
  font-weight: 800;
  border: 1px solid hsl(0, 0%, 95%);
  box-shadow: 0px 2px 4px hsl(0, 0%, 88%);
  text-align: left;
`;

export const StyledCountryCard = styled.div`
  width: 320px;
  height: 500px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid hsl(0, 0%, 95%);
  box-shadow: 0px 0px 6px hsl(0, 0%, 88%);
  background-color: hsl(0, 0%, 100%);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
  img {
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 213px;
    filter: drop-shadow(0 4px 4px hsl(0, 0%, 88%));
  }
  .body {
    width: 100%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    h3 {
      margin-bottom: 10px;
    }
  }
`;

export const StyledSearchBar = styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid hsl(0, 0%, 95%);
  box-shadow: 0px 0px 6px hsl(0, 0%, 88%);
  background-color: hsl(0, 0%, 100%);
  border-radius: 10px;
  input {
    flex-grow: 1;
    margin-left: 30px;
    border: none;
    outline: none;
    font-size: 16px;
    height: 25px;
  }
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const StyledDropdown = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

interface TriggerProps {
  isOpen: boolean;
}

export const DropdownTrigger = styled.button<TriggerProps>`
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  border: 1px solid hsl(0, 0%, 95%);
  box-shadow: 0px 0px 6px hsl(0, 0%, 88%);
  background-color: hsl(0, 0%, 100%);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  outline: none;
  ${({ isOpen }) =>
    isOpen &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `}
`;

export const DropdownOverlay = styled.div`
  position: absolute;
  top: 120%;
  z-index: 1;
  background-color: hsl(0, 0%, 100%);
  border-radius: 10px;
  box-shadow: 0px 0px 6px hsl(0, 0%, 88%);
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  & > div {
    width: 100%;
    text-align: left;
    cursor: pointer;
    border-radius: 5px;
    padding: 10px;
    &:hover {
      background-color: hsl(0, 0%, 88%);
    }
  }
`;

export const StyledLoading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: hsl(0, 0%, 80%);
  opacity: 0.6;
  z-index: 1;
  svg {
    animation-name: spin;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const StyledButton = styled.button`
  width: 9rem;
  height: 2rem;
  position: relative;
  padding: 5px 30px;
  margin: 0.4rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 2rem;
  border: 1px solid hsl(0, 0%, 95%);
  box-shadow: 0px 0px 6px hsl(0, 0%, 80%);
  background-color: hsl(0, 0%, 100%);
  border-radius: 5px;
  cursor: pointer;
  & > :first-child {
    margin-right: 10px;
  }
`;
