import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import IconButton from '@mui/joy/IconButton';
import Dropdown from '@mui/joy/Dropdown'
import MenuButton from '@mui/joy/MenuButton'
import MenuItem from '@mui/joy/MenuItem'
import Menu from '@mui/joy/Menu'
import Chip from '@mui/joy/Chip'

interface KPIProps {
  kpi: number;
  title: string;
  trend: number;
  percentage?: boolean;
}

const KPICard = ({
  kpi = 158098,
  title = 'Your current email summary and activity',
  trend = 0.1,
  percentage = true
}: KPIProps) => {

  const mainKpi = percentage ? kpi * 100 : kpi.toLocaleString('en-US')

  return (
    <div className="border border-slate-200 rounded p-4">
      <div className="flex items-center text-slate-500">
        <p className="flex-auto text-sm">{title}</p>
        <Dropdown>
          <MenuButton
            slots={{ root: IconButton }}
            slotProps={{ root: { variant: 'plain', color: 'neutral' } }}
            sx={{ borderRadius: 40 }}
          >
            <MoreVertOutlinedIcon fontSize="small" />
          </MenuButton>
          <Menu>
            <MenuItem>View Reports</MenuItem>
          </Menu>
        </Dropdown>        
      </div>
      <div className="flex items-center mt-2">
        <p className="text-xl flex-auto font-medium text-slate-900">{mainKpi}{percentage && '%'}</p>
        <Chip color="success" size="sm">{trend * 100}%</Chip>
      </div>
    </div>
  )
}

export default KPICard