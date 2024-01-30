import { LoaderOutline } from '@styled-icons/evaicons-outline'
import React from 'react'
import styled, { IStyledComponent, keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Loader = styled(LoaderOutline)`
  color: var(--background);
  animation: ${rotate} 2s linear infinite;
`

interface Props {
  size?: string | number
  color?: string
}

export default function AnimatedLoader({ size = 40, color }: Props) {
  return <Loader size={size} color={color} />
}
