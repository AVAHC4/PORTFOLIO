import React from 'react';

export default function Page() {
    return (
        <section className="h-screen w-full flex justify-center items-center pb-8 px-4">
            <div className="dark:bg-white dark:text-black bg-black text-white px-5 pt-10 pb-16 rounded-lg max-sm:w-full text-center">
                <h1 className="text-2xl font-semibold">Login Disabled</h1>
                <p className="mt-2 opacity-80">This portfolio is a static site. Authentication is not available.</p>
            </div>
        </section>
    )
}