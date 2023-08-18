import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import IconButton from '@mui/joy/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import Chip from '@mui/joy/Chip'
import Input from '@mui/joy/Input'
import Button from '@mui/joy/Button'
import tw from 'tailwind-styled-components'

const FilterButton = tw.button`
  flex items-center gap-2 px-4 py-1 rounded border border-slate-200
  text-sm hover:border-cyan-600 text-slate-500 hover:text-cyan-600
`

const TableHeader = tw.div`
  grid grid-cols-9 bg-slate-100 h-10 items-center text-sm
  text-slate-700 font-medium px-4 rounded-t border-b border-slate-200
`

const TableRow = tw.div`
  grid grid-cols-9 bg-white h-12 items-center text-sm
  px-4 border-b border-slate-200 last:border-b-0 last:rounded-b
`

const Campaigns = () => {
  const columns = [
    { title: 'Campaign ID', cols: '2' },
    { title: 'Date', cols: '2' },
    { title: 'Status', cols: '2' },
    { title: 'Stats', cols: '2' },
    { title: '', cols: '1' },
  ]

  const campaignData = [
    { id: '#3066', date: 'Jan 6, 2022. 10:35am', status: 'sent', kpis: { click: 0.0105, open: 0.0915 }},
    { id: '#3066', date: 'Jan 6, 2022. 10:35am', status: 'sent', kpis: { click: 0.0105, open: 0.0915 }},
    { id: '#3066', date: 'Jan 6, 2022. 10:35am', status: 'cancelled', kpis: { click: 0.0105, open: 0.0915 }},
    { id: '#3066', date: 'Jan 6, 2022. 10:35am', status: 'sent', kpis: { click: 0.0105, open: 0.0915 }},
    { id: '#3066', date: 'Jan 6, 2022. 10:35am', status: 'sent', kpis: { click: 0.0105, open: 0.0915 }},
    { id: '#3066', date: 'Jan 6, 2022. 10:35am', status: 'sent', kpis: { click: 0.0105, open: 0.0915 }},
    { id: '#3066', date: 'Jan 6, 2022. 10:35am', status: 'bounced', kpis: { click: 0.0105, open: 0.0915 }},
    { id: '#3066', date: 'Jan 6, 2022. 10:35am', status: 'cancelled', kpis: { click: 0.0105, open: 0.0915 }},
    { id: '#3066', date: 'Jan 6, 2022. 10:35am', status: 'sent', kpis: { click: 0.0105, open: 0.0915 }},
    { id: '#3066', date: 'Jan 6, 2022. 10:35am', status: 'sent', kpis: { click: 0.0105, open: 0.0915 }},
    { id: '#3066', date: 'Jan 6, 2022. 10:35am', status: 'bounced', kpis: { click: 0.0105, open: 0.0915 }}
  ]

  const getStatusColor = (status: string) => {
    if (status == 'sent') return 'success'
    if (status == 'cancelled') return 'danger'
    return 'neutral'
  }

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h2 className="text-slate-900 font-semibold text-xl">My Campaigns</h2>
        <Button size="sm" variant="outlined">View All Campaigns</Button>
      </div>
      <div className="mt-4 md:mt-0 md:flex md:items-end md:justify-between">
        <div className="flex flex-wrap flex-auto gap-2">
          <FilterButton>            
            <span className="relative bottom-[1px]">All time</span>
            <CloseOutlinedIcon fontSize="small" className="text-cyan-700" />
          </FilterButton>
          <FilterButton>            
            <span className="relative bottom-[1px]">US, AU, +4</span>
            <CloseOutlinedIcon fontSize="small" className="text-cyan-700" />
          </FilterButton>
          <FilterButton>
          <FilterListOutlinedIcon fontSize="small" className="text-slate-700" />
            <span className="relative bottom-[1px]">More filters</span>            
          </FilterButton>
        </div>
        <Input
          size="sm"
          className="mt-4"
          placeholder="Search email and contacts..."
          startDecorator={<SearchIcon fontSize='small' />}
        />
      </div>
      <div className="hidden md:block mt-4 border border-slate-200 rounded">
        <TableHeader>
          {columns.map((item, i) => (
            <div key={i} className={`col-span-${item.cols}`}>
              <p>{item.title}</p>
            </div>
          ))}
        </TableHeader>
        <div>
          <div>
            {campaignData.map((item, i) => (
              <TableRow key={i}>
                <div className="col-span-2">
                  <p className="text-slate-800 font-medium">{item.id}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-slate-500">{item.date}</p>
                </div>
                <div className="col-span-2">
                  <Chip className="capitalize" size="sm" color={getStatusColor(item.status)}>{item.status}</Chip>
                </div>
                <div className="col-span-2 flex flex-col gap-1 text-[0.8rem]">
                  <p className="text-slate-800">Open Rate: {item.kpis.open * 100}%</p>
                  <p className="text-slate-500">Click Rate: {item.kpis.click * 100}%</p>
                </div>
                <div className="flex justify-end">
                  <button className="text-cyan-600 font-medium text-[0.8rem] hover:underline">
                    Edit
                  </button>
                </div>
              </TableRow>
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden mt-4 grid gap-2">
        {campaignData.map((item, i) => (
          <div className="border border-slate-200 rounded p-4">
            <div className="text-sm flex items-start justify-between">
              <div className="grid gap-2">
                <Chip className="capitalize" size="sm" color={getStatusColor(item.status)}>
                  {item.status}
                </Chip>
                <p className="text-slate-800 inline-flex gap-1">
                  {item.id}
                  <span className="text-slate-500">{item.date}</span>
                </p>
                <p className="text-slate-800 font-medium">Open Rate: {item.kpis.open * 100}%</p>
                <p className="text-slate-500 font-medium">Click Rate: {item.kpis.click * 100}%</p>
              </div>
              <IconButton size="sm" variant="outlined">
                <MoreVertOutlinedIcon fontSize='small' />
              </IconButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Campaigns