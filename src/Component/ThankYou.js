import React from 'react'

function ThankYou() {
    return (
        <div class="flex justify-center items-center h-full">
            <div class="p-8 rounded-lg shadow-md flex flex-col items-center">
                <img src="./photos/greenTick.png" alt="Green Checkmark" class="h-52 mb-4"/>
                    <h1 class="text-3xl font-semibold text-gray-100 mb-4">Thank You!</h1>
                    <p class="text-gray-300 text-xl mb-2">I appreciate your message and will get back to you as soon as possible.</p>
                    <p class="text-gray-300 text-xl mb-4">In the meantime, feel free to explore more of my website.</p>
                    <p class="text-gray-300 text-xl">Have a great day!</p>
            </div>
        </div>
    )
}

export default ThankYou