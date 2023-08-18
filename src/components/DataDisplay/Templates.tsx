import Button from '@mui/joy/Button'

const Templates = () => {
  const templates = [
    { thumb: '/templates/template-1.png', title: 'Back to School', subtitle: 'Minimal, Clean' },
    { thumb: '/templates/template-2.png', title: 'Back to School', subtitle: 'Timer, Promos' },
    { thumb: '/templates/template-3.png', title: 'World Tourism Day', subtitle: 'Dark, Cool' },
    { thumb: '/templates/template-4.png', title: 'Coffee Promo', subtitle: 'Discount, yellow' },
    { thumb: '/templates/template-5.png', title: 'Super Bowl', subtitle: 'Minimal, Football' },
  ]

  return (
    <>
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h2 className="text-slate-900 font-semibold text-xl">Latest Templates</h2>
        <Button size="sm">View All Templates</Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {templates.map((template, i) => (
          <div key={i}>
            <img src={template.thumb} alt={template.title} />
            <p className="mt-2 text-sm font-semibold text-slate-900">{template.title}</p>
            <span className="text-xs text-slate-500">{template.subtitle}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default Templates