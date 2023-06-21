import { Avatar } from 'components/ui'
import React from 'react'

const DeviceDetails = () => {
    return (
        <div className='bg-white w-full h-full  border relative mt-5  '>
            <p className='absolute -top-4 left-3 border px-2 py-1 bg-white font-semibold'>About Device</p>
            <div className='p-3 xl:flex gap-4'>
                <div className='my-2'>
                    <p className='font-semibold'>Mobile Phone</p>
                    <p>Samsung Galaxy S23 5G (Green, 8GB, 256GB Storage)</p>
                    <p className='font-semibold'>Complaint</p>
                    <p>your device's display has been lost during repair. We apologize for the inconvenience caused. Estimated repair time is 2 days. Thank you.</p>

                    <p className='font-semibold'>Submited On</p>
                    <p>12/06/2023</p>
                </div>
                <div className='xl:max-w-[280px] w-full bg-white h-full my-2'>
                    <div className='flex flex-wrap justify-center gap-2'>
                        <Avatar size={60} className="mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyjYbyllgcq4b3sdMrDdVhDpyJbtdbufcI7g&usqp=CAU" />
                        <Avatar size={60} className="mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyjYbyllgcq4b3sdMrDdVhDpyJbtdbufcI7g&usqp=CAU" />
                        <Avatar size={60} className="mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyjYbyllgcq4b3sdMrDdVhDpyJbtdbufcI7g&usqp=CAU" />
                        <Avatar size={60} className="mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyjYbyllgcq4b3sdMrDdVhDpyJbtdbufcI7g&usqp=CAU" />
                        <Avatar size={60} className="mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyjYbyllgcq4b3sdMrDdVhDpyJbtdbufcI7g&usqp=CAU" />
                        <Avatar size={60} className="mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyjYbyllgcq4b3sdMrDdVhDpyJbtdbufcI7g&usqp=CAU" />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default DeviceDetails