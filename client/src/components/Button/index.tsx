import React from 'react'
import { FrontBtn, PushableBtn, Wrapper } from './style'

interface Props {
  children: React.ReactNode
  style?: string
  btnState?: boolean
}

const Button = (props:Props) => {
  console.log(props.btnState);
  
  return (
    <Wrapper>
      <PushableBtn largerBtn={props.style} disabled={props.btnState}>
        <FrontBtn>{props.children}</FrontBtn>
      </PushableBtn>
      </Wrapper>

  )
}

export default Button