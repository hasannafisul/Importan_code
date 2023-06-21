import React from 'react'
import Order from './components/order'
import CustomerInfo from './components/CustomerDetails'
import DeviceDetails from './components/DeviceDetails'
import Remark from './components/Remark'

const Thirdindex = () => {
    return (
        <div >
            <div className='w-full'><Order /></div>
            <div className="xl:flex gap-4">
                <div className="w-full bg-slate-200 border p-5">
                    <div className=''><DeviceDetails /></div>

                    <div className='my-10'> <Remark /></div>

                </div>
                <div className="xl:max-w-[360px] w-full">
                    <CustomerInfo />
                </div>
            </div>
        </div>
    )
}

export default Thirdindex