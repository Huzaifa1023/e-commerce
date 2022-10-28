import React, { useState } from 'react';
import { login } from '../api';
import Button from '../components/Shared/Button';
import Input from '../components/Shared/Input/Input';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password:""
    })

    const disabled = credentials.username.length < 1 || credentials.password.length < 1;

    console.log(credentials)
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setCredentials((prevState) => {
            return {
                ...prevState,
                [(e.target as HTMLInputElement).name]:(e.target as HTMLInputElement).value
            }
        })
    }   

    const handleLogin = async () => {
        const {username,password} = credentials
        const response = await login(username, password)
        console.log(response);
    }

    return (
        <div className='w-full h-screen bg-slate-100 flex justify-center items-center'>
            <div className='w-1/3 h-72 bg-white shadow-md rounded-md px-4 py-4'>
                <h1 className="text-2xl text-center text-primary cursor-pointer">E-Shop</h1>
                <div className='flex flex-col mt-4'>
                    <Input onChange={handleChange} type='text' placeholder='username' name='username' className='my-2' />
                    <Input onChange={handleChange} type='password' placeholder='password' name='password' className='my-2'  />
                </div>
                <Button onClick={handleLogin} text='Login' disabled={disabled} className='w-full mt-8' />
            </div>
        </div>
    )
}

export default Login;
