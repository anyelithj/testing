import '@testing-library/jest-dom'
import { types } from '../../redux/types/types'

describe('verificar types', () => {
    test('comparar objetos', () => {
        expect(types).toEqual({
            login: "login",
            logout: "logout",
            register: 'register',

        })
    })
})