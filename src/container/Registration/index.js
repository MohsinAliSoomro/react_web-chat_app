import React,{useState} from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/UI/Card'
import {sginup} from '../../actions'
import { useDispatch } from 'react-redux';

export default function Registration() {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const dispatch =useDispatch();

    const registerUser=(e)=>{
        e.preventDefault();
        const user={
           firstName,lastName, email,password
        }
        dispatch(sginup(user))
    }
    return (
        <Layout>
                <h1>Registration</h1>
                <div className="logincontainer">
        <Card>
            <form onSubmit={registerUser}>
                 <input 
                    type="text"
                    name="firstName"
                    value={firstName}
                    placeholder="First Name"
                    onChange={((e)=>setFirstName(e.target.value))}
                    />
                    <br/>
                     <input 
                    type="text"
                    name="lastName"
                    value={lastName}
                    placeholder="Last Name"
                    onChange={((e)=>setLastName(e.target.value))}
                    />
                    <br/>
                    <input 
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Email Address"
                    onChange={((e)=>setEmail(e.target.value))}
                    />
                
                <br/>
                    <input 
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={((e)=>setPassword(e.target.value))}
                    />
               <div>
                   <button>Sign up</button>
               </div>
            </form>
        </Card>
        </div>
            </Layout>
    )
}
