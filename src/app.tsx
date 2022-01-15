import { CheckBox } from './components/elements/'
import axios from 'axios'
import { useEffect, useState } from 'preact/hooks'

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
  const getPrefPopulation = (prefName: string, prefCode: number) => {
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

  // テスト表示（北海道）
  // prefectures &&
  //   getPrefPopulation(
  //     prefectures.result[0].prefName,
  //     prefectures.result[0].prefCode
  //   )
  // console.log(prefPopulation)
  // console.log(prefectures)
  // テスト表示（北海道）

  return (
    <>
      {prefectures?.result.map((prefecture, i) => (
        <span key={i}>
          <CheckBox prefName={prefecture.prefName} />
        </span>
      ))}
    </>
  )
}
