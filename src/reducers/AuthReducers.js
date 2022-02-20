import React from 'react';
import { types } from '../types/types';

/*Esta funciòn sirve para redux que sirve para realizar algo dependiendo 
de la accion que se envie, por ejemplo
quiero añadir un usuario entonces en la funcion usaria estas variables
datosUsuario = {...aqui van los datos del usuario}
action="añadir usuario" -> esta es la accion que es una oracion string

entonces se los pasa a la funcion esa manera
añadirUsuario(datosUsuario, action)

lo que hace la funcion es recibir el objeto o los datos del usuario para 
usarla segun la accion que hemos especificado
Buscar: useReducer, Redux

*/


export const AuthReducers = ( state = {}, action ) => {
  switch(action.type){
      case types.login:
          return{
              uid: action.payload.uid,
              name: action.payload.nombreMostrado
          }
          
        case types.logout:
            return {}
            
        default:
            return state;
  }
}

export default AuthReducers;
