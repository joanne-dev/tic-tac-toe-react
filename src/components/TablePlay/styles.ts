import styled from "styled-components";

interface IStyleProps {
    zIndex: number
}

export const Table = styled.div`
  width:  498px;
  height: 498px;
  border: 3px solid white;
  position: relative;
  top: -20px;
`
export const TableBoxes = styled.div`
  z-index:  ${({ zIndex }: IStyleProps) => zIndex};
  top: -3px;
  position: relative;
`
export const Rows = styled.div`
  display: flex;
`
export const ButtonReset = styled.button`
    background-color: blueviolet;
    color: white;
    border-radius: 5px;
    font-size: 13px;
`
