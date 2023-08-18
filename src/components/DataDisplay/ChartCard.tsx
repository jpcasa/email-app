import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line, Bar } from 'react-chartjs-2'
import tw from 'tailwind-styled-components'

interface ChartProps {
  title?: string;
  chartType?: string;
  data?: object;
  options?: object;
}

const mockdata = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Emails Sent',
      data: [140, 250, 321, 301, 268, 299, 360, 377, 315, 450, 284, 396],
      borderColor: '#088AB2',
      backgroundColor: '#088AB2',
    },
  ],
}

const mockOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false },
  },
  scales: {
    y: {
      display: false,
    }
  },
}

const ButtonSubtle = tw.button`
  text-sm border border-slate-200 rounded px-4 py-2 text-slate-800 font-medium
  hover:bg-slate-100
`
const TabButton = tw.button`
  text-sm rounded px-4 py-2 hover:bg-slate-100 text-slate-500 hover:text-slate-800
  font-medium
`

const ChartCard = ({
  title = 'Emails Sent',
  chartType = 'Line',
  data = mockdata,
  options = mockOptions
}: ChartProps) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  )
  
  return (
    <div className="bg-white rounded border border-slate-200 p-5">
      <div className="flex items-center justify-between">
        <p>{title}</p>
        <ButtonSubtle>View Report</ButtonSubtle>
      </div>
      <div className="my-4 flex flex-wrap gap-1">
        <TabButton className="bg-slate-100 text-slate-800">One</TabButton>
        <TabButton>Two</TabButton>
        <TabButton>Three</TabButton>
      </div>
      <div>
        {chartType == 'line' && <Line options={options} data={data} width="100%" height="40" />}
        {chartType == 'bar' && <Bar options={options} data={data} width="100%" height="40" />}
      </div>
    </div>
  )
}

export default ChartCard