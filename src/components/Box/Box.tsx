import React from 'react';
import {RowBox, Turn} from "./styles";
import {TURNS} from "../../constants/constants";
import {Circle} from "../Circle/Circle";
import {Equis} from "../Equis/Equis";

export const Box: React.FC<any>=({position, changeTurn, stateBoxBoard, boardBlocked}) =>{

    const getShape=()=>{
        switch (stateBoxBoard.turn){
            case TURNS.O:
                return <Circle />
            case TURNS.X:
                return <Equis />
        }
    }

    return (
        <RowBox onClick={()=>{
            if(!stateBoxBoard.selected && !boardBlocked){
                changeTurn(position)
            }
        }}>
            {
                (stateBoxBoard.selected) &&
                getShape()
            }
        </RowBox>
    )
}
