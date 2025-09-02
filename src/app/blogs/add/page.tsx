import React from 'react'

const Page = () => {
    return (
        <div className='mt-32 flex flex-col items-center pb-8'>
            <div className="dark:bg-white dark:text-black bg-black text-white px-5 pt-10 pb-16 rounded-lg max-sm:w-full text-center">
                <h1 className="text-2xl font-semibold">Create Blog Disabled</h1>
                <p className="mt-2 opacity-80">This is a static portfolio. Blog publishing is not available.</p>
            </div>
        </div>
    )
}

export default Page