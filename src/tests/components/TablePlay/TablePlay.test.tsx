import * as React from "react";
import {render, screen} from "@testing-library/react";
import {TablePlay} from "../../../components/TablePlay/TablePlay";

describe('TablePlay tests', ()=>{
    test('', ()=>{
        const {container, getByText} = render(<TablePlay/>)
        expect(getByText('Restart game')).toBeTruthy()
    });
    test('it should show the restart game in a Button', ()=>{
        render(<TablePlay/>);
        expect(screen.getByRole('button').innerHTML).toBe('Restart game');
    })
})
