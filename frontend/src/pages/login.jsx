import React from 'react'

export default function Login() {
    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray'>
            <h1 className='text-5xl font-semibold'>Welcome Back</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter your details.</p>
            <div className='mt-8'>
                <div>
                    <label className='text-lg font-medium'>Email</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your email'
                    />
                </div>
                <div>
                    <label className='text-lg font-medium'>Password</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your password'
                    />
                </div>
                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input
                            type='checkbox'
                            id='remember'

                        />
                        <label className='ml-2 font-medium text-base' for="remember">Remember for 30 days </label>
                    </div>
                    <button className='font-medium text-base text-voilet'>Forgot password</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>Sign in</button>
                    <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition ">
                        <svg className="w-5 h-5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#EA4335" d="M24 9.5c3.5 0 6.4 1.2 8.4 3.2l6.2-6.2C34.1 3.1 29.4 1 24 1 14.9 1 7.1 6.5 3.8 14.2l7.2 5.6C12.4 14.1 17.7 9.5 24 9.5z" />
                            <path fill="#34A853" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.6c-.5 2.6-2 4.8-4.3 6.3v5h6.9c4-3.7 6.3-9.2 6.3-15.8z" />
                            <path fill="#FBBC05" d="M10.9 28.4c-1-3-1-6.2 0-9.2v-5H3.8c-2 4-3.2 8.5-3.2 13.2s1.2 9.2 3.2 13.2l7.1-5.6c-.2-.6-.4-1.2-.6-1.8z" />
                            <path fill="#4285F4" d="M24 46c5.4 0 10.1-1.8 13.5-4.9l-6.9-5c-2 1.3-4.5 2-7.2 2-6.3 0-11.6-4.6-13.2-10.6l-7.2 5.6C7.1 41.5 14.9 46 24 46z" />
                            <path fill="none" d="M0 0h48v48H0z" />
                        </svg>
                        <span>Sign in with Google</span>
                    </button>
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>Don't have an account?</p>
                    <button className='text-voilet-500 text-base font-medium ml-2'>Sign up</button>
                </div>
            </div>
        </div>
    )
}

