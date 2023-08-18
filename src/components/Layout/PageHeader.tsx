import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import Button from '@mui/joy/Button'

interface PageHeaderProps {
  title: string;
  description: string;
  cta1?: string | null
  cta2?: string | null 
}

const PageHeader = ({
  title = 'Dashboard',
  description = 'Your current email summary and activity',
  cta1 = 'Export Report',
  cta2 = null
}: PageHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end px-6 py-8">
      <div className="flex-auto">
        <h1 className="text-3xl font-semibold text-slate-900 mb-2">{title}</h1>
        <p className="text-slate-500">{description}</p>      
      </div>
      <div className="flex gap-2">
        {cta2 && <Button variant="outlined">{cta2}</Button>}
        {cta1 && <Button>{cta1}</Button>}        
      </div>
    </div>
  )
}

export default PageHeader