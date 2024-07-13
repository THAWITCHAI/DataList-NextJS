import React from 'react'

type Props = {}

export default function NotFound({}: Props) {
  return (
    <div className='flex justify-center items-center mx-auto h-screen'>
        <div className='text-3xl text-red-600'>
            ERROR NOT FOUND 404!!
        </div>
    </div>
  )
}