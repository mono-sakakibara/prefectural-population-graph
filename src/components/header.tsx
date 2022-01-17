import { FunctionalComponent } from 'preact'
import styled from 'styled-components'

const Wrapper = styled.header`
  background-color: blue;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

const Title = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
  color: white;
`

export const Header: FunctionalComponent = () => {
  return (
    <>
      <Wrapper>
        <Title>都道府県別 総人口推移グラフ</Title>
      </Wrapper>
    </>
  )
}
