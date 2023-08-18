interface ContactProps {
  img?: string;
  name?: string;
  email?: string;
  live?: boolean;
}

export default function Contact({
  img = '/avatars/Avatar-1.png',
  name = 'Olivia Rhye',
  email = 'olivia@email.com',
  live = false,
}: ContactProps) {
  return (
    <div className="flex items-center">
      <img className="w-10 h-10 flex-none" src={img} alt="Email App Avatar" />
      <div className="grid gap-1 flex-auto ml-2">
        <p className="text-sm leading-none text-slate-800 font-medium">{name}</p>
        <span className="text-xs leading-none block text-slate-500">{email}</span>
      </div>
      {live && <div className="w-1.5 h-1.5 rounded-full bg-green-500" />}
    </div>
  )
}