import styled from "styled-components";

export const EquisStyle = styled.div`
  width: 100px;
  height: 100px;
  margin: auto;
`
export const DiagonalLeft = styled.div`
  box-shadow: 0 0 30px 10px rgb(255, 0, 0);
  border-bottom: 6px solid rgb(255, 0, 0);
  border-radius: 5px;
  transform: rotate(45deg);
  width: calc(100px*1.41);
  transform-origin: left;
  position: relative;
`
export const DiagonalRight = styled.div`
  box-shadow: 0 0 30px 10px rgb(255, 0, 0);
  border-bottom: 6px solid rgb(255, 0, 0);
  border-radius: 5px;
  transform: rotate(-45deg);
  width: calc(100px*1.41);
  transform-origin: right;
  position: relative;
  right: 41px;
  top: -7px;
`
