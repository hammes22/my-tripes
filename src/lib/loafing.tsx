'use client'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

export default function Loading({
  children
}: {
  children: React.ReactElement
}) {
  return (
    <>
      <ProgressBar />
      {children}
    </>
  )
}
