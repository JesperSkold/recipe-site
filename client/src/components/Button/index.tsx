import React from 'react'
import { FrontBtn, PushableBtn, Wrapper } from './style'

interface Props {
  children: React.ReactNode
  style?: string
  btnState?: boolean
  errorPage?: any
}

const Button = (props:Props) => {
  return (
    <Wrapper>
      <PushableBtn onClick={() => props.errorPage ? props.errorPage(-1) : null} largerBtn={props.style} disabled={props.btnState}>
        <FrontBtn>{props.children}</FrontBtn>
      </PushableBtn>
      </Wrapper>

  )
}

export default Button