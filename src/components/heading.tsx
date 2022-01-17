import { FunctionalComponent, JSX } from 'preact'
import styled, { css } from 'styled-components'

interface Props {
  marginBottom?: boolean
  variant: 'h1' | 'h2' | 'h3'
  children: string | JSX.Element
}

const Heading1 = styled.h1<{ marginBottom?: boolean }>`
  font-size: 1.4rem;
  display: inline-block;
  ${(props?) =>
    props.marginBottom &&
    css`
      margin-bottom: 20px;
    `}
  &::after {
    content: '';
    display: block;
    height: 1px;
    background-color: black;
  }
`

const Heading2 = styled.h2<{ marginBottom?: boolean }>`
  font-size: 1.4rem;
  display: inline-block;
  ${(props?) =>
    props.marginBottom &&
    css`
      margin-bottom: 20px;
    `}
  &::after {
    content: '';
    display: block;
    height: 1px;
    background-color: black;
  }
`

export const Heading: FunctionalComponent<Props> = ({
  marginBottom,
  children,
  variant,
}) => {
  switch (variant) {
    case 'h1': {
      return <Heading1 marginBottom={marginBottom}>{children}</Heading1>
    }
    case 'h2': {
      return <Heading2 marginBottom={marginBottom}>{children}</Heading2>
    }
    default: {
      return <Heading1 marginBottom={marginBottom}>{children}</Heading1>
    }
  }
}
