import * as React from "react";
import {Box} from "../../../components/Box/Box";
import {render, screen} from "@testing-library/react";


describe('Box test', ()=>{
    test('should display box with turn ❌', ()=>{
       const {container, getByText, getByTestId} = render(<Box boardBlocked={false}
                    stateBoxBoard = {{selected: true, turn: "❌"}}
                    changeTurn ={()=>{console.log('testing Box')}}
                    position ={1} />)

        expect(getByText('❌')).toBeTruthy();
        expect(getByTestId('turn-div').innerHTML).toBe('❌');
    });
    test('It should display box with turn ⚪', ()=>{
        const {container, getByText, getByTestId} = render(<Box boardBlocked={false}
                    stateBoxBoard = {{selected: true, turn: "⚪"}}
                    changeTurn ={()=>{console.log('testing Box')}}
                    position ={1} />)
        expect(getByText("⚪")).toBeTruthy();
    })
    test('It should not display the turn in the box', ()=>{
        const {container, getByText, getByTestId} =render(<Box boardBlocked={false}
                    stateBoxBoard = {{selected: false, turn: "⚪"}}
                    changeTurn ={()=>{console.log('testing Box')}}
                    position ={1} />)
        expect(container.firstChild?.hasChildNodes()).toBeFalsy();
    })
})
