import React from 'react'
import { Button, Slider, TextField, Typography } from '@mui/material'

const Product = (props) => {
  return (
    <div style={{marginTop: "15%"}}>
      <TextField variant="outlined" label="Product Name" value={props.name}/> <br /><br />
      <TextField variant="outlined" label="Image" value={props.age}/> <br /><br />
      <TextField variant="outlined" label="Price" value={props.email}/> <br /><br />
      <TextField variant="outlined" label="Category" value={props.father}/> <br /><br />
      <Button variant='contained'>ADD</Button>
    </div>
  )
}

export default Product
