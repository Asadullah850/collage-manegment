import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Authntication/useAuth';
import { updateProfile } from 'firebase/auth';


const Register = () => {
    const navigate = useNavigate();

    const { newUser } = useAuth()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        const userName = data.name;
        const phoneNumber = data.phoneNumber;
        const imageLink = data.ImageLink;
        const email = data.email;
        const password = data.password;
        const allData ={
            userName, phoneNumber, imageLink, email
        }
        console.log( allData)
        newUser(email, password )
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    };

    return (
        <div className='text-center mx-10 border-2 border-black p-2 rounded-xl'>
            <h1 className=' text-xl my-2 pt-5'>Register</h1>
            <form className='lg:w-[60%] mx-auto my-2' onSubmit={handleSubmit(onSubmit)}>
                
                <p className=' text-left mt-1 text-lg font-semibold lg:ml-7'>Your Name</p>
                <input className='border-4 text-black w-full lg:w-[90%] p-1 rounded-md font-semibold' type="text" placeholder="name" {...register("name", { required: true })} />
                {errors.name?.type === 'required' && <p role="alert">Name is required</p>}

                <p className=' text-left mt-1 text-lg font-semibold lg:ml-7'>Phone Number</p>
                <input className='border-4 text-black w-full lg:w-[90%] p-1 rounded-md font-semibold' type="tel" placeholder="name" {...register("phoneNumber", { required: true })} />
                {errors.phoneNumber?.type === 'required' && <p role="alert">Phone Number is required</p>}

                <p className=' text-left mt-1 text-lg font-semibold lg:ml-7'>Your Image Url</p>
                <input className='border-4 text-black w-full lg:w-[90%] p-1 rounded-md font-semibold' type="url" placeholder="Image-Link" {...register("ImageLink")} />

                <p className=' text-left mt-1 text-lg font-semibold lg:ml-7'>Your Email</p>
                <input className='border-4 text-black w-full lg:w-[90%] p-1 rounded-md font-semibold' type="email" placeholder="email@email.com" {...register("email", { required: true })} />
                {errors.email?.type === 'required' && <p role="alert">Phone Number is required</p>}


                {/* <input className=' text-black hidden' type="number" defaultValue={} {...register("code")} /> */}
                <p className=' text-left mt-1 text-lg font-semibold lg:ml-7'>Password</p>
                <input className='border-4 text-black w-full lg:w-[90%] p-1 rounded-md font-semibold' type="password" {...register("password", {
                    required: true,
                    min: 8,
                    maxLength: 20,
                    pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}/
                })}
                    placeholder='Password' />
                {errors.password?.type === 'required' && <p className='' role="alert">Password is required</p>}
                {errors.password?.type === 'min' && <p className='' role="alert">Password is upper 8</p>}
                {errors.password?.type === 'maxLength' && <p className='' role="alert">Password is less then 20</p>}
                {errors.password?.type === 'pattern' && <p className='' role="alert">Password are pattern (Aa123@.com)</p>}
                <div className='text-left lg:mx-7'>
                    <Link to={'/login'}>
                        <small className=''>Have Account</small>
                    </Link>
                </div>
                {/* to do have accoun possing change */}
                <p>123@Aaaa</p>
                <input className='btn btn-sm btn-success mt-2' type="submit" />
            </form>
        </div>
    );
};

export default Register;