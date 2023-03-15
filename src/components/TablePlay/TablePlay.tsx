import React, {useState} from 'react';
import {
    ButtonReset,
    Rows,
    Table,TableBoxes
} from "./styles";
import {Box} from "../Box/Box";
import {
    cells,
    getBoardFromSessionStorage,
    restartBoard,
    TURNS,
    validateWinnerLines,
    WINNER_LINES
} from "../../constants/constants";
import {getLineWinner} from "../LineWinner/getLineWinner";

export const TablePlay: React.FC<any> =() =>{

    const [turn, setTurn] = useState('');
    const [board, setBoard] = useState(getBoardFromSessionStorage());
    const [boardBlocked, setBoardBlocked] = useState(false);
    const [winnerLine, setWinnerLine] = useState(-1);


    const changeTurn=(actualPos: number)=>{
        board[actualPos].selected = true;
        if(turn === TURNS.X) {
            setTurn(TURNS.O);
            board[actualPos].turn = TURNS.O;
        }else{
            setTurn(TURNS.X);
            board[actualPos].turn = TURNS.X;
        }
        setBoard(board);
        sessionStorage.setItem('board', JSON.stringify(board));
        const indexWin = validateWinnerLines(board);
        if(indexWin>-1){
            setTimeout(()=>{
                setWinnerLine(indexWin)
                console.log('GANO LA LINEA: ',indexWin, WINNER_LINES[indexWin]);
                setBoardBlocked(true);
            }, 100)
        }
    }

    const restartGame =()=>{
        restartBoard();
        setBoard(getBoardFromSessionStorage());
        setBoardBlocked(false);
    }

    return (
        <>
            <Table>
                {
                    boardBlocked &&
                        getLineWinner(winnerLine)
                }
                <TableBoxes
                    zIndex={boardBlocked?-1:1}
                >
                    {
                        cells.map((rows: number[], index: number)=>(
                            <Rows key={'row_'+index}>
                                {
                                    rows.map((box: number, indexBox:number)=>(
                                        <div key={'box_'+indexBox}>
                                            <Box
                                                boardBlocked = {boardBlocked}
                                                stateBoxBoard = {board[box]}
                                                changeTurn={changeTurn}
                                                position={box}
                                            />
                                        </div>
                                    ))
                                }
                            </Rows>
                        ))
                    }
                </TableBoxes>
            </Table>
            <ButtonReset onClick={restartGame}>
                Restart game
            </ButtonReset>
        </>
    )
}
