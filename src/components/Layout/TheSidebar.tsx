import { Link } from 'react-router-dom'
import Input from '@mui/joy/Input'
import SearchIcon from '@mui/icons-material/Search'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined'
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import Promo from '~/components/General/Promo'
import Profile from '~/components/General/Profile'
import tw from "tailwind-styled-components"

const Sidebar = tw.div`
  flex flex-col h-full
`

const MenuItem = tw.div`
  flex items-center h-8 rounded hover:bg-cyan-50 px-4 gap-1
`

export default function Header({ showClose = false, onClick }: {
  showClose?: boolean
  onClick?: () => void
}) {
  const menus = [
    [
      { icon: DashboardCustomizeOutlinedIcon, title: 'Dashboard', link: '/'},
      { icon: CampaignOutlinedIcon, title: 'Campaigns', link: '/campaigns'},
      { icon: GroupOutlinedIcon, title: 'Contacts', link: '/contacts'},
    ],
    [
      { icon: SupportOutlinedIcon, title: 'Support', link: '/support'},
      { icon: SettingsOutlinedIcon, title: 'Settings', link: '/settings'},    
    ]
  ]

  return (
    <Sidebar>
      <div className="flex-none flex justify-between">
        <div className="flex-auto grid p-4">
          <Link to="/">
            <img className="w-32" src="/logo.png" alt="Email APP Logo" />
          </Link>
          <Input
            className="mt-4"
            size="sm"
            placeholder="Search email and contacts..."
            startDecorator={<SearchIcon fontSize='small' />}
          />
        </div>
        {showClose && (
          <CloseOutlinedIcon
            className="text-slate-500 cursor-pointer mt-4 mr-4"
            onClick={onClick}
          />
        )}
      </div>
      <div className="flex-auto flex flex-col">
        {menus.map((menu, i) => (
          <div key={i} className={`flex flex-col gap-1 ${i == 0 ? 'flex-auto' : 'flex-none'}`}>
            {menu.map((item, j) => (
              <Link key={j} to={item.link}>
                <div className={`menu-item ${location.pathname == item.link ? 'active' : null}`}>
                  <item.icon fontSize="small" />
                  <p>{item.title}</p>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="m-4">
        <Promo />
      </div>
      <Profile />
    </Sidebar>
  )
}