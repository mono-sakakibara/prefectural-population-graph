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

export const Header: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Title>都道府県別 人口構成グラフ</Title>
      </Wrapper>
    </>
  )
}
