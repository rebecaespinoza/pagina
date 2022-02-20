import { types } from "../types/types";
import {firebase, googleAuthProvider}from "../firebase/firebase-config";
import { finishLoading, startLoading } from "./ui";

export const startLoginEmailContrasena = (email, contrasena)=>{
    return(dispatch)=>{

     dispatch( startLoading());

        firebase.auth().signInWithEmailAndPassword( email, contrasena)
         .then(({ user}) => {
             console.log(user);
            dispatch( login(user.uid, user.nombreMostrado));

            dispatch( finishLoading());
        } )
        .catch(e =>{
            console.log(e);
            dispatch( finishLoading());
        })

    }
}

export const startRegistroEmailContrasenaName =( email, contrasena, name) =>{
     return(dispatch) =>{
         firebase.auth().createUserWithEmailAndPassword( email, contrasena)
         .then( async({ user}) => {
             await user.updateProfile({ displayName: name});
             console.log(user);
            dispatch(
             login(user.uid, user.displayName)
            )
        } )
        .catch(e =>{
            console.log(e);
        })
      }
     }


export const startGoogleLogin = () =>{
    return( dispatch )=> { 

      firebase.auth().signInWithPopup( googleAuthProvider)
      .then(({ user}) =>{
          dispatch(
              login(user.uid, user.nombreMostrado)
          )
      } );
    }
}

export const login= (uid, nombreMostrado) =>({

        type: types.login,
        payload:{
            uid,
            nombreMostrado
        }
    
    })