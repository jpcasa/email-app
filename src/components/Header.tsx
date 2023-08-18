import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div>
      <header className="bg-black">
        <p>Logo</p>
        <Link to="/">App</Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </header>
    </div>
  )
}