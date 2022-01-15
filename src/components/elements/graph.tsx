import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

interface Props {
  populationData: {
    prefName: string
    data: { year: number; value: number }[]
  }[]
}

export const Graph: React.FC<Props> = ({ populationData }) => {
  let series: Highcharts.SeriesOptionsType[] = []

  let categories = []

  for (let i = 0; i < populationData.length; i++) {
    let data = []
    const populationArray = populationData[i].data

    for (let i = 0; i < populationArray.length; i++) {
      const population = populationArray[i]

      data.push(population.value)
      categories.push(String(population.year))
    }
    series.push({
      type: 'line',
      name: populationData[i].prefName,
      data: data,
    })
  }

  const options: Highcharts.Options = {
    title: {
      text: '総人口推移',
    },
    xAxis: {
      title: {
        text: '年度',
      },
      categories: categories,
    },
    yAxis: {
      title: {
        text: '人口数',
      },
    },
    series:
      series.length === 0
        ? [{ type: 'line', name: '都道府県名', data: [] }]
        : series,
  }

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
