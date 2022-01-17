import styled from 'styled-components'
import { pc } from '../media'

export const Section = styled.section`
  max-width: 350px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 0 10px;
  ${pc`
	max-width:none;;
	width:100%;
	padding: 0 100px;
`}
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${pc`
	flex-direction: row;
	`}
`
export const CheckBoxWrapper = styled.div`
  ${pc`
	width:40%;
	flex-shrink:0;
	`}
`

export const GraphWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  ${pc`
	margin-top: 0px;
	`}
`
