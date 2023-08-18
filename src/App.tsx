import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined'

// COMPONENTS
import Dashboard from './pages/dashboard'
import Campaigns from './pages/campaigns'
import Contacts from './pages/contacts'
import TheSidebar from './components/Layout/TheSidebar'

// STYLES
import './assets/App.css'
import tw from "tailwind-styled-components"

const SidebarContainer = tw.div`
  fixed h-full w-64 inset-y-0 left-0 z-10 bg-white border-r border
  hidden lg:inline-block
`

const MobileNavBar = tw.div`
  lg:hidden fixed top-0 inset-x-0 z-10 border-b border-slate-200 w-full
  bg-white h-12 flex px-4 items-center justify-between
`

function App() {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false)

  return (
    <>
      <SidebarContainer>
        <TheSidebar />
      </SidebarContainer>
      {!showMobileSidebar && (
        <MobileNavBar>
          <div className="flex items-center">
            <MenuOutlinedIcon
              className="mr-4 text-slate-500 cursor-pointer hover:text-black"
              onClick={() => setShowMobileSidebar(!showMobileSidebar)}
            />
            <Link to="/">
              <img className="w-32" src="/logo.png" alt="Email APP Logo" />
            </Link>
          </div>
          <div className="text-slate-500 flex gap-2">
            <SettingsOutlinedIcon className="cursor-pointer hover:text-black" />
            <SupportOutlinedIcon className="cursor-pointer hover:text-black" />
          </div>
        </MobileNavBar>
      )}
      {showMobileSidebar && (
        <div className="flex z-30 fixed inset-0">
          <div className="max-w-xs flex-none bg-white">
            <TheSidebar showClose={true} onClick={() => setShowMobileSidebar(!showMobileSidebar)} />
          </div>
          <div
            className="flex-auto h-full bg-black bg-opacity-50 cursor-pointer"
            onClick={() => setShowMobileSidebar(!showMobileSidebar)}
          />
        </div>
      )}
      <div className="mt-12 lg:mt-0 lg:ml-64">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </>
  )
}

export default App
