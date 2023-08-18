import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <Link
      className="flex items-center p-4 border-t border-slate-200 hover:bg-slate-50"
      to="/profile"
    >
      <img className="w-10 h-10 flex-none" src="/avatar.png" alt="Email App Avatar" />
      <div className="grid gap-1 flex-auto ml-2">
        <p className="text-sm leading-none">Olivia Rhye</p>
        <span className="text-xs leading-none block">olivia@untitledui.com</span>
      </div>
    </Link>
  )
}