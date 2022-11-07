import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { login } from '../api';
import Button from '../components/Shared/Button';
import Input from '../components/Shared/Input/Input';
import { ThemeContext } from '../Context/ThemeContext';
import helper from '../utils/helper';
const Login = () => {
    const { showNotification } = useContext(ThemeContext)
    const { setToLocalStorage, getLocalStorage } = helper;
    const authenticated = getLocalStorage("auth");
    const router = useRouter();
    
    const [credentials, setCredentials] = useState({
        username: "",
        password:""
    })

    useEffect(() => {
        if (authenticated) {
            router.push('/')
        }
    }, [router,authenticated])
    
    const disabled = credentials.username.length < 1 || credentials.password.length < 1;

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
        if (response.success) {
            showNotification(response.message, "success")
            setToLocalStorage("auth",response.result)
        } else {
            showNotification(response.errors.length > 0 ?  response.errors[0] : response.message,"danger")
        }
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
