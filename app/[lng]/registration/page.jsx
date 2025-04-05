'use client';

import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Link from 'next/link';

export default function Registration() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section className='w-[328px] md:w-[688px] xl:w-[1160px] xlr:w-[1280px] mx-auto'>
            <h2>Welcome to <span className="text-red-900">Ljubimac</span></h2>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor='first'>First Name</label>
                    <input
                        type="text"
                        id='first'
                        {...register('first', {
                            required: 'First name is required',
                        })}
                        placeholder='John'
                        className="px-6 py-3 border rounded-full outline-none focus:border-black-300 border-black-100"
                    />
                    <div>
                        {errors.first && <p className="text-red-900">{errors.first.message}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="last">Last Name</label>
                        <input
                            type="text"
                            id="last"
                            {...register('last', {
                            required: 'Last name is required',
                            })}
                            placeholder="Smith"
                            className="px-6 py-3 border rounded-full outline-none focus:border-black-300 border-black-100"
                        />
                        <div>
                            {errors.last && <p className="text-red-900">{errors.last.message}</p>}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Invalid email address',
                            },
                            })}
                            placeholder="example@email.com"
                            className="px-6 py-3 border rounded-full outline-none focus:border-black-300 border-black-100"
                        />
                        <div>
                            {errors.email && <p className="text-red-900">{errors.email.message}</p>}
                        </div>
                    </div>
                    <div className="relative flex flex-col gap-1">
                        <label htmlFor="password">Password</label>
                        <input
                            className="px-6 py-3 border rounded-full outline-none focus:border-black-300 border-black-100"
                            placeholder="Minimum 8 characters"
                            type={passwordVisible ? 'text' : 'password'}
                            {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters',
                            },
                            })}
                        />
                        <button type="button" className="absolute right-3 top-10" onClick={togglePasswordVisibility}>
                            {passwordVisible ? <IoMdEye size={24} /> : <IoMdEyeOff size={24} />}
                        </button>
                        <div>
                            {errors.password && <span className="text-red-500 ">{errors.password.message}</span>}
                        </div>
                    </div>
                    <div className="relative flex flex-col gap-1">
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <input
                            className="px-6 py-3 border rounded-full outline-none focus:border-black-300 border-black-100"
                            placeholder="Minimum 8 characters"
                            type={confirmPasswordVisible ? 'text' : 'password'}
                            {...register('confirmPassword', {
                            required: 'Password confirmation required',
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters',
                            },
                            validate: value => value === watch('password') || 'Passwords do not match',
                            })}
                        />
                        <button
                            type="button"
                            className="absolute text-light-gray right-3 top-10"
                            onClick={toggleConfirmPasswordVisibility}
                        >
                            {confirmPasswordVisible ? <IoMdEye size={24} /> : <IoMdEyeOff size={24} />}
                        </button>
                        <div>
                            {errors.confirmPassword && <span className="text-red-500 ">{errors.confirmPassword.message}</span>}
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="h-12 px-6 py-3 mt-2 font-semibold text-white duration-500 border rounded-full border-black-1000 hover:bg-black-900 active:bg-black-800 bg-black-1000"
                        >
                            Create an account
                        </button>
                        <Link
                            href="/login"
                            className="block w-full h-12 px-6 py-3 mt-2 font-semibold text-center duration-500 bg-white border rounded-full hover:bg-black-100 active:bg-black-200 text-black-1000 border-black-1000"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            </form>
        </section>
    );
};