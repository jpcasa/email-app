import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined'
import { Link } from 'react-router-dom'
import PageHeader from '~/components/Layout/PageHeader'
import Tabs from '~/components/General/Tabs'
import KPICard from '~/components/DataDisplay/KPICard'
import ChartCard from '~/components/DataDisplay/ChartCard'
import Contact from '~/components/DataDisplay/Contact'
import Input from '@mui/joy/Input'
import Button from '@mui/joy/Button'

export default function Dashboard() {
  const kpis = [
    { title: 'Emails Sent', kpi: 158850, trend: 0.1, percentage: false },
    { title: 'Avg. Open Rate', kpi: 0.0954, trend: 0.1, percentage: true },
    { title: 'Avg. Click Rate', kpi: 0.045, trend: 0.1, percentage: true },
  ]

  const emailsChartData = {
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

  const clickChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Avg. Open Rate',
        data: [10.1, 15.4, 16.8, 12.7, 13.0, 13.5, 14.2, 11.4, 15.9, 15.1, 14.8, 13.9],
        borderColor: '#67E3F9',
        backgroundColor: '#67E3F9',
      },
      {
        label: 'Avg. Click Rate',
        data: [1.5, 2.5, 2.9, 3.2, 2.8, 2.9, 3.8, 1.4, 2.1, 2.9, 3.5, 3.9],
        borderColor: '#088AB2',
        backgroundColor: '#088AB2',
      },
    ],
  }

  const contacts = [
    { img: '/avatars/Avatar-1.png', name: 'Demi Wikinson', email: 'demi@email.com', live: true },
    { img: '/avatars/Avatar-2.png', name: 'Aliah Lane', email: 'aliah@email.com' },
    { img: '/avatars/Avatar-3.png', name: 'Lana Steiner', email: 'lana@email.com' },
    { img: '/avatars/Avatar-4.png', name: 'Candice Wu', email: 'candice@email.com', live: true },
    { img: '/avatars/Avatar-5.png', name: 'Ava Wright', email: 'ava@email.com', live: true },
    { img: '/avatars/Avatar-6.png', name: 'Koray Okumus', email: 'koray@email.com' },
    { img: '/avatars/Avatar-7.png', name: 'Andi Lane', email: 'adni@email.com' },
    { img: '/avatars/Avatar-8.png', name: 'Drew Cano', email: 'drew@email.com' },
    { img: '/avatars/Avatar-9.png', name: 'Rene Wells', email: 'rene@email.com' },
    { img: '/avatars/Avatar-10.png', name: 'Joshua Wilson', email: 'joshua@email.com', live: true },
    { img: '/avatars/Avatar.png', name: 'Demi Wikinson', email: 'demi@email.com', live: true },
    { img: '/avatars/Avatar-2.png', name: 'Aliah Lane', email: 'aliah@email.com' },
    { img: '/avatars/Avatar-3.png', name: 'Lana Steiner', email: 'lana@email.com', live: true },
    { img: '/avatars/Avatar-4.png', name: 'Candice Wu', email: 'candice@email.com' },
    { img: '/avatars/Avatar-5.png', name: 'Ava Wright', email: 'ava@email.com' },
  ]

  return (
    <div>
      <PageHeader />
      <div className="container grid gap-6">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-auto">
            <Tabs />
          </div>
          <div className="flex items-center gap-2">
            <Input
              type="date"
              slotProps={{
                input: {
                  min: '2018-06-07T00:00',
                  max: '2018-06-14T00:00',
                },
              }}
            />
            <Button variant="outlined" endDecorator={<FilterListOutlinedIcon fontSize="small" />}>
              Filters
            </Button>
          </div>
        </div>
        <div className="md:flex gap-8">
          <div className="flex-auto flex flex-col gap-4">
            <div className="grid md:grid-cols-3 gap-4">
              {kpis.map((kpi, i) => (
                <KPICard key={i} {...kpi} />
              ))}
            </div>
            <ChartCard data={emailsChartData} chartType="line" />
            <ChartCard data={clickChartData} title="Open vs. Click Rate" chartType="bar" options={{
              plugins: {
                legend: { display: false },
                title: { display: false },
              },
              responsive: true,
              scales: {
                x: { stacked: true },
                y: { stacked: true, display: false },
              },
            }} />
          </div>
          <div className="contacts md:flex-none md:w-64 mt-6 md:mt-0">
            <div className="flex items-center">
              <h3 className="flex-auto text-slate-900 font-medium text-lg">
                Latest Contacts
              </h3>
              <Link className="text-sm text-slate-500 hover:underline" to="/contacts">
                View All
              </Link>
            </div>
            <div className="grid gap-4 mt-4">
              {contacts.map((contact, i) => (
                <Contact
                  key={i}
                  img={contact.img}
                  name={contact.name}
                  email={contact.email}
                  live={contact.live}
                />
              ))}           
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}