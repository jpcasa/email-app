import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import IconButton from '@mui/joy/IconButton'

interface PaginationProps {
  pageActive: number;
  totalPages: number;
}

const PageHeader = ({ pageActive, totalPages}: PaginationProps) => {
  return (
    <div className="flex items-center py-2">
      <IconButton size="sm" variant="outlined">
        <ArrowBackOutlinedIcon fontSize="small" />
      </IconButton>
      <div className="flex justify-center flex-auto gap-1">
        {[...Array(totalPages).keys()].map((x, i) =>
          <div
            key={i}
            className={`cursor-pointer w-8 h-8 rounded flex items-center justify-center text-slate-500 hover:bg-slate-100 ${i == pageActive ? 'bg-slate-100 text-slate-900' : null}`}
          >
            <p>{x + 1}</p>
          </div>
        )}
      </div>
      <IconButton size="sm" variant="outlined">
        <ArrowForwardOutlinedIcon fontSize="small" />
      </IconButton>
    </div>
  )
}

export default PageHeader