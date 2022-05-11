import React from 'react'
import { FrontBtn, PushableBtn, Wrapper } from './style'

const Button = (props:any) => {
  return (
    <Wrapper>
      <PushableBtn largerBtn={props.style}>
        <FrontBtn>{props.children}</FrontBtn>
      </PushableBtn>
      </Wrapper>

  )
}

export default Button