import '@testing-library/jest-dom';
import { loginReducers } from "../../redux/reducers/loginReducers";
import { types } from "../../redux/types/types";

describe('Pruebas en LoginReducer', () => {
    test('debe de realizar el login', () => {
       const initState = {};
       const action = {
           type: types.login,
           payload: {
               id: 1,
               displayname: 'Lorena'
           }
       };
       const state = loginReducers(initState, action);
       expect(state).toEqual({
           id: 1,
           name: 'Lorena'
       })
    })
    test('Cerrar sesión-logout', () => {
        const initState= {
            id: 1,
            name: 'Lorena'
        };
        const action = {
            type: types.logout,
        };
        const state = loginReducers(initState, action);
        expect(state).toEqual({});
    })
    test('state por default', () => {
        const initState ={
            id: 1,
            name: 'Lorena'
        };
        const action = {
            type: types.Hola,
        };
        const state = loginReducers(initState, action);
        expect(state).toEqual(initState)
    })
    
})