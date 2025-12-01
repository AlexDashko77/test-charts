import { useState } from 'react'
import data from '../data.json'
import VariationsChart from './components/Chart/VariationsChart'
import VariationSelect from './components/VariationSelect/VariationSelect'
import { prepareChartData } from './utils/prepareChartData'
import { groupByWeek } from './utils/selectFormat'
import PeriodSelect from './components/PeriodSelect/PeriodSelect'
import { applyZoom } from './utils/zoom'
import LineStyleSelect from './components/LineStyleSelect/LineStyleSelect'
import { ExportChartAsPng } from './utils/export'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import ExportButton from './components/ExportButton/ExportButton'
import ZoomControls from './components/ZoomControls/ZoomControls'
import { ThemeProvider } from './contexts/ThemeProvider'
import type { RawChartData } from './types/chart'

const App = () => {
  const prepared = prepareChartData(data as RawChartData)
  const [selected, setSelected] = useState<string>('all')
  const [period, setPeriod] = useState<'day' | 'week'>('day')
  const [zoom, setZoom] = useState(1)
  const [lineStyle, setLineStyle] = useState<'line' | 'smooth' | 'area'>("line"); 

  const chartData =
    period === 'day'
      ? prepared
      : groupByWeek(prepared, data.variations)

  const zoomedData = applyZoom(chartData, zoom)
  
  return (
    <ThemeProvider>
    <div className='column'>
      <div className='controls'>
        <div className='raw'>   
        <VariationSelect value={selected} onChange={setSelected} variations={data.variations}/>
        <PeriodSelect period={period} setPeriod={setPeriod}/>
      </div>
      <div className='raw'>
        <LineStyleSelect value={lineStyle} onChange={setLineStyle} />
        <ZoomControls setZoom={setZoom} zoom={zoom}/>
        <ExportButton onExport={ExportChartAsPng}/>
        <ThemeToggle/>
      </div>
      </div>
      

      <VariationsChart selected={selected} lineStyle={lineStyle} variations={data.variations} data={zoomedData}/>

    </div>
    </ThemeProvider>
  )
}

export default App