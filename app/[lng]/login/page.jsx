'use client';

import Link from 'next/link';
import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handlEmailChange = e => {
        const email = e.target.value;
        setEmail(email);
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Email invalid');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = e => {
        const password = e.target.value;
        setPassword(password);

        if (password.length < 8) {
            setPasswordError('Password min 8 char')
        } else {
            setPasswordError('');
        }
    };

    const handleSubmit = async e => {
        e.preventDefault();
        console.log('email:', email, 'password:', password);
    };

    return (
        <section className='w-[328px] md:w-[688px] xl:w-[1160px] xlr:w-[1280px] mx-auto'>
            <div>
                <h2>Welcome to Ljubimac</h2>
                <h1>Sign In</h1>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email"
                        id="email"
                        value={email}
                        onChange={handlEmailChange}
                        placeholder="example@email.com"
                        className="px-6 py-3 border rounded-full outline-none focus:border-black-300 border-black-100"
                    />
                    <div>{emailError && <p>{emailError}</p>}</div>
                </div>
                <div className='relative flex flex-col gap-1'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        id='password'
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Your password"
                        className='px-6 py-3 border rounded-full outline-none border-black-100 focus:border-black-300'
                    />
                    <div>{passwordError && <p className='text-red-900'>{passwordError}</p>}</div>
                    <button type='button' className='absolute top-11 right-3' onClick={togglePasswordVisibility}>
                        {passwordVisible ? <IoMdEyeOff size={24} /> : <IoMdEye size={24} />}
                    </button>
                </div>
                <div>
                    <button className='w-full h-12 px-6 py-3 mt-2 font-semibold text-white duration-500 border rounded-full border-black-1000 hover:bg-black-900 active:bg-black-800 bg-black-1000'>
                        Sign In
                    </button>
                    <Link 
                        href="/registration"
                        className='block w-full h-12 px-6 py-3 mt-2 font-semibold text-center duration-500 bg-white border rounded-full hover:bg-black-100 active:bg-black-200 text-black-1000 border-black-1000'
                    >
                        Create an account
                    </Link>
                </div>
            </form>
            <div>
                <Link href="/">
                    Back to <span>Ljubimac</span>
                </Link>
            </div>
        </section>
    );
};