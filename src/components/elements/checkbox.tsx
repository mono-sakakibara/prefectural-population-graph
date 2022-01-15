import styled from 'styled-components'

interface Props {
  prefName: string
}

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
`

const PrefName = styled.span`
  display: inline-block;
  margin-left: 10px;
`

export const CheckBox: React.FC<Props> = ({ prefName }) => {
  return (
    <>
      <Wrapper>
        <input type='checkbox' name='Prefecture name' />
        <PrefName>{prefName}</PrefName>
      </Wrapper>
    </>
  )
}
