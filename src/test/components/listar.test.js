import '@testing-library/jest-dom';
import React from "react";
import {shallow} from 'enzyme';
import Listar from '../../components/Listar';

describe('Pruebas en <Listar/>', () => {
    test('Debe mostrarse correctamente ', () => {
      const wrapper = shallow(<Listar />)
      expect(wrapper).toMatchSnapshot()
    })
    test('Debe mostrarse una lista de libros', () => {
    //preparar mesa de trabajo
    const libros = ['El Principito', 'El gato negro', 'Cien años de soledad']
    //pruebas
    const wrapper = shallow(<Listar/>)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('Listar').length).toBe(libros.length)
    })
    
})