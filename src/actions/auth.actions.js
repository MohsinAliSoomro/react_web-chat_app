import {auth,firestore} from 'firebase'
import { authContant } from './authConstant'

export const sginup =(user)=>{
    return async(dispatch)=>{
        const db=firestore()
        dispatch({
            type:`${authContant.USER_LOGIN}_REQUEST`
        })
        auth()
        .createUserWithEmailAndPassword(user.email,user.password)
        .then(res=>{
            
            console.log(res)
        const currentUser = auth().currentUser;
        const name=`${user.firstName} ${user.lastName}`;
        currentUser.updateProfile({
            displayName:name
        }).then(()=>{
            db.collection('users').add({
                firstName:user.firstName,
                lastName:user.lastName,
                uid:res.user.uid,
                createAt: new Date()
            })
            .then(()=>{
                const loggedUser={
                    firstName:user.firstName,
                lastName:user.lastName,
                uid:res.user.uid,
                email:user.email
                }
                localStorage.setItem('user',JSON.stringify(loggedUser))
                console.log('user logged in successfully...')
                dispatch({
                    type:`${authContant.USER_LOGIN}_SUCCESS`,
                    payload:{user:loggedUser}
                })
            }).catch(error=>{
                dispatch({
                    type:`${authContant.USER_LOGIN}_FAILURE`,
                    payload:{error:error}
                })
                console.log(error)})
            console.log(res)
        })
        console.log(name)
        })
        .catch(err=>console.log(err))
    }
}