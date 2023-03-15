import React from "react";
import {DiagonalLeftLine, VerticalLine, HorizontalLine, DiagonalRightLine} from "./styles";


export const getLineWinner= (winnerLine: number) =>{
    const renderLineWinner=()=>{
        switch (winnerLine) {
            case 0:
                return <HorizontalLine
                    top_st={'69px'}>
                </HorizontalLine>
            case 1:
                return <HorizontalLine
                    top_st={'232px'}>
                </HorizontalLine>
            case 2:
                return <HorizontalLine
                    top_st={'395px'}>
                </HorizontalLine>
            case 3:
                return <VerticalLine
                    left_st={'85px'}
                    top_st={'-7px'}>
                </VerticalLine>
            case 4:
                return <VerticalLine
                    left_st={'250px'}
                    top_st={'-9.5px'}>
                </VerticalLine>
            case 5:
                return <VerticalLine
                    left_st={'416px'}
                    top_st={'-12px'}>
                </VerticalLine>
            case 6:
                return <DiagonalLeftLine>
                </DiagonalLeftLine>
            case 7:
                return <DiagonalRightLine>
                </DiagonalRightLine>
        }
    }
    return renderLineWinner();
}
