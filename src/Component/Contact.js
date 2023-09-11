import React from 'react'
import contactSVG from '../Assest/img.svg'
import { useForm } from "react-hook-form";


function Contact() {
    const host = "http://localhost:5000"
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "all" });
    const onSubmit = async (data) => {
        const response = await fetch(`${host}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: data.name, email: data.email, message: data.message })
        });
        const json = await response.json()
        console.log(json)
    }
    return (
        <div class="px-2 md:px-8 grid gap-8 grid-cols-1 md:grid-cols-2 py-3 text-gray-100 rounded-lg shadow-lg overflow-y-scroll h-full">
            <div class="flex flex-col justify-evenly">
                <div>
                    <h2 class="text-3xl lg:text-4xl font-bold mb-2">Lets talk about everything!</h2>
                    <div class="text-gray-200 text-sm md:text-base">
                        Hate forms? Send me an <span class="underline">email</span> instead.
                    </div>
                </div>
                <div class="mt-10 text-center">
                    <img className='' src={contactSVG} alt="" />
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <div className='min-h-[15vh]'>
                    <label htmlFor="name" className="uppercase text-sm text-gray-300 font-bold" >Full Name</label>
                    <input
                        id="name"
                        className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text"
                        {...register("name",
                            {
                                required: "Please enter a valid name",
                                pattern:{
                                    value: new RegExp("[A-Za-z]{3,}"),
                                    message: "Name must be atleast 3 characters long"
                                },
                            },)} />

                    {errors["name"] && <span className="inline-block w-full text-red-600 text-xs ml-1">{errors["name"].message}</span>}
                </div>
                <div className='min-h-[15vh]'>
                    <label htmlFor="email" className="uppercase text-sm text-gray-300 font-bold" >Email</label>
                    <input
                        id="email"
                        className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="email"
                        {...register("email",
                            {
                                required: "Please enter a valid email address",
                                pattern:{
                                    value: new RegExp("^[\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$"),
                                    message: "Please enter a valid email address"
                                },
                            },)} />

                    {errors["email"] && <span className="inline-block w-full text-red-600 text-xs ml-1">{errors["email"].message}</span>}
                </div>
                <div className='min-h-[29vh]'>
                    <label htmlFor="message" className="uppercase text-sm text-gray-300 font-bold" >Message</label>
                    <textarea
                        id="message"
                        className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text"
                        {...register("message",
                            {
                                required: "Message cannot be empty",
                                pattern:{
                                    value: new RegExp("[A-Za-z]{10,}"),
                                    message: "Message should be atleast 10 characters long."
                                },
                            },)} />

                    {errors["message"] && <span className="inline-block w-full text-red-600 text-xs ml-1">{errors["message"].message}</span>}
                </div>
                <div>
                <input className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline cursor-pointer" type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Contact
