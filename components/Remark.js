import React from 'react'
import RemarkForm from './RemarkForm'

const Remark = () => {
    return (
        <div className='bg-white w-full h-full  border relative  '>
            <p className='absolute -top-4 left-3 border px-2 py-1 bg-white font-semibold'>Engineering Remark</p>
            <div className='p-3'>
                <div className='my-2'>
                    <RemarkForm />
                </div>


            </div>
        </div>
    )
}

export default Remark