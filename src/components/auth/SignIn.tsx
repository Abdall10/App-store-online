"use client";
import React, { useActionState, useState } from 'react'
import Form from "next/form"
import { Loader2 ,Eye, EyeOff } from 'lucide-react';

const initialState ={
    message: '',
}

type SignInProps = {
    action: (prevState: any, formData: FormData) => Promise<{message: string} | undefined>
 }
const SignIn = ({action}: SignInProps) => {

    const [state, formAction, isPending] = useActionState(action, initialState);
    const [showPassword, setShowPassword] = useState(false);

  return (
    <Form action={formAction} className='max-w-md mx-auto my-16 p-8 bg-white rounded-lg shadow-sm'>
      <h1 className='text-2xl font-bold text-center md-2'>
        Welcome Back to Super Value 
      </h1>
      <p className='text-sm text-center text-red-600 font-semibold mb-2'>
        🔥 MEMBER EXCLUSIVE 🔥
      </p>
      <p className='text-sm text-center text-gray-600 font-semibold mb-6'>
       Sign in to access your exclusive member in Super Value! 
      </p>

        <div className='space-y-6'>
          {/* Email */}
        <div className='space-y-2'>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email:</label>
          <input
           type='email'
           name='email'
           id='email'
           autoComplete='email'
           required
           className='w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:border-black focus:border-transparent transition-colors'
           placeholder='Enter your email address'
          />
        </div>
         {/* Password */}
         <div className='relative'>
      <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
        Password:
      </label>
      <input
        type={showPassword ? 'text' : 'password'}
        name='password'
        id='password'
        autoComplete='new-password'
        required
        className='w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:border-black focus:border-transparent transition-colors pr-10' // Add padding to prevent overlap
        placeholder='Create a password'
      />
      <button
        type='button'
        onClick={() => setShowPassword(!showPassword)}
        className='absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none'
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
         {/* Copy Password */}
        <div className='text-center'>
          <p className="text-xs text-gray-500 mb-2">🚀 Members save an extra 15% an all orders! 🚀</p>
          <p className="text-xs text-gray-500 mb-4">⏱️ Plug get free shipping on orders over $15.00 ⏱️</p>
        </div>
         {/* Sign Up Button */}
         <button 
         type='submit'
         disabled={isPending}
         className={
          `w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-colors font-medium flex items-center justify-center gap-2 ${isPending ? ' cursor-not-allowed rounded' : '' }`
         } 
         >
          {isPending ? (
              <React.Fragment>
                <Loader2 className='h-4 w-4 text-white animate-spin'/>
                SIGNING IN....
              </React.Fragment>
            ) : (
            'SIGN IN 🚀'
            )}
        </button>
        {state?.message && state.message.length > 0 && (
           <p className='text-center text-sm text-red-600'>
           {state.message}
          </p>
        )}
        </div>
    </Form>
  )
}

export default SignIn
