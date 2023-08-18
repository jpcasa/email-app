import Button from '@mui/joy/Button'
import ButtonGroup from '@mui/joy/ButtonGroup'
import IconButton from '@mui/joy/IconButton'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

import tw from 'tailwind-styled-components'

const GreenDot = tw.div`
  w-2 h-2 rounded-full bg-green-600
`

const Tabs = () => {
  return (
    <ButtonGroup aria-label="outlined primary button group">
      <Button>One</Button>
      <Button startDecorator={<GreenDot />}>
        Two
      </Button>
      <Button>Three</Button>
      <IconButton>
        <AddOutlinedIcon />
      </IconButton>
    </ButtonGroup>
  )
}

export default Tabs