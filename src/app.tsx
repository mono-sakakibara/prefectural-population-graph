import { CheckBox, Heading, Graph } from './components/elements/'
import axios from 'axios'
import { useEffect, useState } from 'preact/hooks'
import { pc } from './media'
import styled from 'styled-components'

export function App() {
  const [prefectures, setPreFectures] = useState<{
    message: null
    result: {
      prefCode: number
      prefName: string
    }[]
  } | null>(null)

  const [prefPopulation, setPrefPopulation] = useState<
    { prefName: string; data: { year: number; value: number }[] }[]
  >([])

  const apiKey = import.meta.env.VITE_RESAS_API_KEY

  // 都道府県一覧を取得
  useEffect(() => {
    axios
      .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: { 'X-API-KEY': apiKey },
      })
      .then((results) => {
        setPreFectures(results.data)
      })
      .catch((error) => {})
  }, [])

  // 都道府県別の人口構成を取得
  const getPrefPopulation: any = (prefName: string, prefCode: number) => {
    let prefPopulationArray = prefPopulation.slice()

    axios
      .get(
        'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear',
        {
          headers: { 'X-API-KEY': apiKey },
          params: {
            prefCode: prefCode,
          },
        }
      )
      .then((results) => {
        prefPopulationArray.push({
          prefName: prefName,
          data: results.data.result.data[0].data,
        })
        setPrefPopulation(prefPopulationArray)
      })
      .catch((error) => {
        return
      })
  }

  const graphTextArray = [
    {
      prefName: '愛知県',
      data: [
        { year: 1980, value: 100000 },
        { year: 1990, value: 100000 },
        { year: 2000, value: 100000 },
        { year: 2010, value: 100000 },
        { year: 2020, value: 100000 },
      ],
    },
    {
      prefName: '東京都',
      data: [
        { year: 1980, value: 200000 },
        { year: 1990, value: 200000 },
        { year: 2000, value: 200000 },
        { year: 2010, value: 200000 },
        { year: 2020, value: 200000 },
      ],
    },
    {
      prefName: '京都',
      data: [
        { year: 1980, value: 300000 },
        { year: 1990, value: 300000 },
        { year: 2000, value: 300000 },
        { year: 2010, value: 300000 },
        { year: 2020, value: 300000 },
      ],
    },
  ]

  const GridLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    place-items: flex-start;
    ${pc`
			grid-template-columns: repeat(4, minmax(0, 1fr));
		`}
  `

  return (
    <>
      <Heading variant='h1'>都道府県</Heading>
      <GridLayout>
        {prefectures?.result.map((prefecture, i) => (
          <span key={i}>
            <CheckBox prefName={prefecture.prefName} />
          </span>
        ))}
      </GridLayout>
      <Graph populationData={graphTextArray} />
    </>
  )
}
