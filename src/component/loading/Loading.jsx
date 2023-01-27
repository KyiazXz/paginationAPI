import React from 'react'
import {TailSpin } from 'react-loader-spinner'

export default function Loading() {
  return (
    <div><TailSpin
    height="150"
    width="150"
    color="#4fa94d"
    ariaLabel="tail-spin-loading"
    radius="1"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  /></div>
  )
}
