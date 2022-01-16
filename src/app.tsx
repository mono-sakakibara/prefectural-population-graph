import axios from 'axios'
import { useEffect, useState } from 'preact/hooks'
import { CheckBox, Graph, Header, Layout } from './components/elements/'

export function App() {
  const [prefectures, setPrefectures] = useState<{
    message: null
    result: {
      prefCode: number
      prefName: string
    }[]
  } | null>(null)

  const [prefPopulation, setPrefPopulation] = useState<
    { prefName: string; data: { year: number; value: number }[] }[]
  >([])

  // 本番環境と開発環境で環境変数を出し分ける
  let apiKey = ''
  if (import.meta.env.DEV) {
    apiKey = import.meta.env.VITE_RESAS_API_KEY
  } else {
    apiKey = process.env.RESAS_API_KEY as string
  }

  // 都道府県一覧を取得
  useEffect(() => {
    axios
      .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: { 'X-API-KEY': apiKey },
      })
      .then((results) => {
        setPrefectures(results.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleClickCheck = (
    prefName: string,
    prefCode: number,
    check: boolean
  ) => {
    let prefPopulationArray = prefPopulation.slice()

    const checkPrefName = prefPopulationArray.findIndex(
      (v) => v.prefName === prefName
    )

    if (check) {
      if (checkPrefName !== -1) return
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
          console.log(error)
        })
    } else {
      if (checkPrefName == -1) return
      prefPopulationArray.splice(checkPrefName, 1)
      setPrefPopulation(prefPopulationArray)
    }
  }

  return (
    <>
      <Header />
      <main>
        <Layout.Section>
          <Layout.Container>
            <Layout.CheckBoxWrapper>
              {prefectures && (
                <CheckBox
                  prefectures={prefectures.result}
                  onChange={handleClickCheck}
                />
              )}
            </Layout.CheckBoxWrapper>
            <Layout.GraphWrapper>
              <Graph populationData={prefPopulation} />
            </Layout.GraphWrapper>
          </Layout.Container>
        </Layout.Section>
      </main>
    </>
  )
}
