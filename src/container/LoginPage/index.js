import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/UI/Card'
import './style.css'
export default function LoginPage() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    return (
        <Layout>
            <div className="logincontainer">
        <Card>
            <form>
                
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
                   <button>Sign in</button>
               </div>
            </form>
        </Card>
        </div>
    </Layout>
    )
}
