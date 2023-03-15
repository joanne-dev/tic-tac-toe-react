import styled from "styled-components";

interface IStylesProps{
    top_st?: string
    left_st?: string
}
export const DiagonalLeftLine = styled.div`
  border-bottom: 3px solid rgb(255, 0, 0);
  transform: rotate(45deg);
  width: calc(498px*1.41);
  transform-origin: left;
  position: relative;
  top: -4px;
`
export const VerticalLine = styled.div`
  border-bottom: 3px solid rgb(0, 0, 300);
  transform: rotate(90deg);
  transform-origin: left;
  position: relative;
  left: ${({ left_st }: IStylesProps) => left_st};
  top: ${({ top_st }: IStylesProps) => top_st};
`
export const DiagonalRightLine = styled.div`
  border-bottom: 3px solid rgb(0, 100, 0);
  transform: rotate(-45deg);
  width: calc(498px*1.41);
  transform-origin: right;
  position: relative;
  right: 204px;
`
export const HorizontalLine = styled.div`
  border-bottom: 3px solid rgb(120, 230, 70);
  transform-origin: left;
  position: relative;
  top: ${({ top_st }: IStylesProps) => top_st}
`
