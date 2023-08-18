interface PromoProps {
  title: string;
  description: string;
  image: string;
}

const Promo = ({
  title = 'New features available!',
  description = 'Check out the new dashboard view. Pages now load faster.',
  image = '/feature-promo.png'
  }: PromoProps) => {
  return (
    <div className="bg-slate-50 p-4 rounded">
      <p className="text-slate-900 text-sm font-medium mb-2">{title}</p>
      <span className="text-slate-600 text-sm leading-tight block mb-2">{description}</span>
      <img src={image} alt="Email App Promo" className="rounded" />
    </div>
  )
}

export default Promo