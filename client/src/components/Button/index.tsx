import React from 'react'
import { FrontBtn, PushableBtn, Wrapper } from './style'

interface Props {
  children: React.ReactNode
  style?: string
}

const Button = (props:Props) => {
  return (
    <Wrapper>
      <PushableBtn largerBtn={props.style}>
        <FrontBtn>{props.children}</FrontBtn>
      </PushableBtn>
      </Wrapper>

  )
}

export default Button