import { Avatar, Button, Card, CardContent, CardMedia, Chip, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import image1 from '../images/pizzacard.png'
import image2 from '../images/image62.png';
import image3 from '../images/image49.png';
import image4 from '../images/image50.png';
import image5 from '../images/image67.png';
import PizzaModal from './PizzaModal';

const Cards = (props) => {
  const discount = 'Save ' + Math.round((props.realPrice - props.discountPrice) / props.realPrice * 100) + '%';
  const realPrice=props.realPrice;
  const discountPrice=props.discountPrice;
  const [open,setOpen]=useState(false);
  const handleOpen=()=>{
    setOpen(true);
  }
  const handleClose=(event, reason)=>{
    if(reason!=='backdropClick'){
      setOpen(false);
    }    
  }
  return (
    <Card sx={{ display: 'flex', width:'100%' }}>
     
      <CardMedia
        component="img"
        sx={{ maxWidth: 120, paddingTop: 4 }}
        image={image1}
        width={'50%'}
        height={'50%'}
        alt="pizza"
      />
      <CardContent >
        <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" textAlign={'left'}>
            {props.title.substr(0, 10)}...
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description.substr(0, 45) + "..."}
          </Typography>
          <Grid item sx={{ display: 'inline-flex', marginBottom: 1 }}>
            <Avatar alt="a" src={image2} sx={{ width: 24, height: 24, marginX: .5 }} />
            <Avatar alt="a" src={image3} sx={{ width: 24, height: 24, marginX: .5 }} />
            <Avatar alt="a" src={image4} sx={{ width: 24, height: 24, marginX: .5 }} />
            <Avatar alt="a" src={image5} sx={{ width: 24, height: 24, marginX: .5 }} />
          </Grid>
          <Grid item container justifyContent={'space-between'}>
            <Grid item display={'inline-flex'}>
              <Typography sx={{ fontWeight: 'bold', marginRight: 1 }}>${Math.round(props.discountPrice)}</Typography>
              <Typography sx={{ color: 'grey', textDecorationLine: 'line-through' }}>${Math.round(props.realPrice)}</Typography>
            </Grid>
            <Grid item >
              <Chip size='small' label={discount} sx={{ color: 'purple', fontWeight: 'bold', fontSize: 18, fontStyle: 'italic' }} />
            </Grid>
            <Grid item> 
              <Button size='small' color='secondary' variant='contained' 
              sx={{textTransform:'none', borderRadius:'10px'}} onClick={handleOpen}>Order</Button>
              <PizzaModal status={open} handleClose={handleClose} title={props.title.substr(0, 20)}
              description={props.description.substr(0,100)}
               realPrice={realPrice} discountPrice={discountPrice}/>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      
    </Card>
  )
}

export default Cards
