import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { authType } from '../../model/responseType'
import Avatar from '../Shared/Avatar'
import Button from '../Shared/Button'
type propType = {
    user:authType["result"]
}
const User = ({ user }: propType) => {
    const [openDetails, setDetails] = useState(false);
    const router = useRouter();
    const logOut = () => {
        localStorage.clear()
        router.push('/login')
    }
  return (
      <div
          className="relative">
          <Avatar title={user.name} onClick={() => setDetails(!openDetails)} />
          <div className={`w-auto left-1/2 px-4 py-2 -translate-x-1/2 shadow-md bg-slate-100 dark:bg-secondaryDark absolute z-10 transition-all rounded-md mt-1 ${openDetails ? 'block' : 'hidden'}`}>
              <div className='flex justify-center'>  
                <Avatar size='large' title={user.name} />
              </div>
              <div className='my-2'>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.phone}</p>
              </div>
              <Button onClick={logOut} text='Log out' className='w-full' />
          </div>
    </div>
  )
}

export default User