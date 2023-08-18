import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import SearchIcon from '@mui/icons-material/Search'
import Pagination from '~/components/DataDisplay/Pagination'
import Contact from '~/components/DataDisplay/Contact'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import Button from '@mui/joy/Button'
import IconButton from '@mui/joy/IconButton'
import Input from '@mui/joy/Input'
import Chip from '@mui/joy/Chip'
import tw from 'tailwind-styled-components'
import contactData from '~/utils/contactData'

const FilterButton = tw.button`
  flex items-center gap-2 px-4 py-1 rounded border border-slate-200
  text-sm hover:border-cyan-600 text-slate-500 hover:text-cyan-600
`

const TableHeader = tw.div`
  hidden md:grid grid-cols-9 bg-slate-100 h-10 items-center text-sm
  text-slate-700 font-medium px-4 border-b border-slate-200
`

const TableRow = tw.div`
  grid grid-cols-9 bg-white py-2 items-center text-sm
  px-4 border-b border-slate-200
`

const Campaigns = () => {
  const columns = [
    { title: 'Name', cols: '4' },
    { title: 'Status', cols: '1' },
    { title: 'Category', cols: '2' },
    { title: 'Company', cols: '1' },
    { title: '', cols: '1' },
  ]

  const contacts = contactData

  const getStatusColor = (status: string) => {
    if (status == 'sent') return 'success'
    if (status == 'cancelled') return 'danger'
    return 'neutral'
  }

  return (
    <div className="">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
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
          placeholder="Search email and contacts..."
          startDecorator={<SearchIcon fontSize='small' />}
        />
      </div>
      <div className="hidden md:block mt-4 border border-slate-200 rounded">
        <div className="p-4 flex gap-6 items-end">
          <div className="flex-auto flex flex-col lg:flex-row gap-2 lg:gap-4">
            <div className="flex-auto">
              <label className="text-sm text-slate-600 mb-1">Search</label>
              <Input
                placeholder="Search contacts..."
                startDecorator={<SearchIcon fontSize='small' />}
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1 lg:flex-none lg:w-40">
                <label className="text-sm text-slate-600 mb-1">Status</label>
                <Select defaultValue="dog">
                  <Option value="dog">Active</Option>
                  <Option value="cat">Offline</Option>
                </Select>
              </div>
              <div className="flex-1 lg:flex-none lg:w-40">
                <label className="text-sm text-slate-600 mb-1">Category</label>
                <Select defaultValue="dog">
                  <Option value="dog">VIP</Option>
                  <Option value="cat">Interested</Option>
                  <Option value="cat">Not Interested</Option>
                  <Option value="cat">Potential Client</Option>
                </Select>
              </div>
            </div>
          </div>
          <Button className="h-10" variant="outlined">Clear All</Button>
        </div>
        <TableHeader>
          {columns.map((item, i) => (
            <div key={i} style={{ 'grid-column': `span ${item.cols} / span ${item.cols}` }}>
              <p>{item.title}</p>
            </div>
          ))}
        </TableHeader>
        <div>
          {contacts.map((contact, i) => (
            <TableRow key={i}>
              <div className="col-span-4">
                <Contact img={contact.profile.img} name={contact.profile.name} email={contact.profile.email} />
              </div>
              <div className="col-span-1">
                <Chip size="sm" color={contact.active ? 'success' : 'warning'}>
                  {contact.active ? 'Active' : 'Offline'}
                </Chip>
              </div>
              <div className="col-span-2">
                <p className="text-slate-500">{contact.category}</p>
              </div>
              <div className="col-span-1 flex flex-col gap-1 text-[0.8rem]">
                <p className="text-slate-500">{contact.company}</p>
              </div>
              <div className="flex justify-end">
                <IconButton size="sm" variant="outlined">
                  <MoreVertOutlinedIcon fontSize='small' />
                </IconButton>
              </div>
            </TableRow>
          ))}
        </div>
        <div className="py-2 px-4">
          <Pagination totalPages={5} pageActive={1} />
        </div>
      </div>
      <div className="grid gap-2 mt-4">
        {contacts.map((contact, i) => (
          <div className="border border-slate-200 rounded p-4">
            <div className="flex justify-between">
              <Contact img={contact.profile.img} name={contact.profile.name} email={contact.profile.email} />
              <div className="flex items-center gap-2">
                <Chip size="sm" color={contact.active ? 'success' : 'warning'}>
                  {contact.active ? 'Active' : 'Offline'}
                </Chip>
                <IconButton size="sm" variant="outlined">
                  <MoreVertOutlinedIcon fontSize='small' />
                </IconButton>
              </div>
            </div>
            <div className="text-xs ml-12 gap-1 grid">
              <p className="text-slate-500">{contact.category}</p>
              <p className="text-slate-500">{contact.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Campaigns