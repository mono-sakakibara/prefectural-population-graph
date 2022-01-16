import { FunctionalComponent } from 'preact'
import styled from 'styled-components'
import { pc } from '../media'

interface Props {
  prefectures:
    | {
        prefCode: number
        prefName: string
      }[]
  // eslint-disable-next-line no-unused-vars
  onChange: (prefName: string, preCode: number, check: boolean) => void
}

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
`

const PrefName = styled.span`
  display: inline-block;
  margin-left: 10px;
  font-size: 1rem;
`

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  place-items: flex-start;
  ${pc`
	gap: 5px 0;
	`}
`

export const CheckBox: FunctionalComponent<Props> = ({
  prefectures,
  onChange,
}) => {
  return (
    <>
      <GridLayout>
        {prefectures.map((prefecture, i) => (
          <Wrapper key={i}>
            <input
              type='checkbox'
              name='Prefecture name'
              onChange={(event: any) =>
                onChange(
                  prefecture.prefName,
                  prefecture.prefCode,
                  event.target.checked
                )
              }
              id={`checkbox${prefecture.prefCode}`}
            />
            <label htmlFor={`checkbox${prefecture.prefCode}`}>
              <PrefName>{prefecture.prefName}</PrefName>
            </label>
          </Wrapper>
        ))}
      </GridLayout>
    </>
  )
}
