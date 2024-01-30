'use client'
import React from 'react'
import { Carregando } from './style'
import AnimatedLoader from '@/components/AnimatedLoader'

interface Props {
  width?: string
  height?: string
  mensagem?: string
}

export default function LoadingTemplate({
  height = '100%',
  width = '100%',
  mensagem = ''
}: Props) {
  return (
    <Carregando style={{ width: width, height: height }}>
      <AnimatedLoader />
      <h1>{mensagem}</h1>
    </Carregando>
    // </div>
  )
}
