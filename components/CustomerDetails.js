import React from 'react'
import { Card, Avatar } from 'components/ui'
import { IconText } from 'components/shared'
import { HiMail, HiPhone, HiExternalLink, HiUser } from 'react-icons/hi'


const CustomerInfo = () => {
    return (
        <Card className="rounded-none">
            <h5 className="mb-4">Customer</h5>
            <div className="group flex items-center justify-between" >
                <div className="flex items-center">
                    <Avatar shape="circle" icon={<HiUser />} />
                    <div className="ltr:ml-2 rtl:mr-2">
                        <div className="font-semibold group-hover:text-gray-900 group-hover:dark:text-gray-100">Atul Yadav</div>

                    </div>
                </div>

            </div>
            <hr className="my-5" />
            <IconText
                className="mb-4"
                icon={<HiMail className="text-xl opacity-70" />}
            >
                <span className="font-semibold">atulyadav@gmail.com</span>
            </IconText>
            <IconText icon={<HiPhone className="text-xl opacity-70" />}>
                <span className="font-semibold">9631156823</span>
            </IconText>


        </Card>
    )
}

export default CustomerInfo