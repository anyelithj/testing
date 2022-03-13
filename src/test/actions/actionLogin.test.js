import '@testing-library/jest-dom';
import { actionLogin} from "../../redux/actions/actionLogin";
import { types } from "../../redux/types/types";

describe('verificar acciones de Login', () => {
    test('validar login sincronico', () => {
        const id = 1;
        const displayName = 'Lorena';
        
        const loginAction = actionLogin(id, displayName);

        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                id, 
                displayName
            }
        })
    })
   
})