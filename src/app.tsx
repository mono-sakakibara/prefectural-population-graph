import { Logo } from './components/elements/logo'
import styled from 'styled-components'

const Text = styled.p`
  color: red;
  font-size: 2rem;
`

export function App() {
  return (
    <>
      <Logo />
      <Text>Hello Vite + Preact!</Text>
      <p>
        <a
          className='link'
          href='https://preactjs.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn Preact
        </a>
      </p>
    </>
  )
}
