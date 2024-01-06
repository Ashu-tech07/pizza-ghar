import { Avatar, Box, Button, Card, CardContent, CardMedia, Chip, Divider, Grid, IconButton, Modal, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import pizzaPic from '../images/pizzacard.png'
import egg from '../images/image47.png'
import soy from '../images/image49.png';
import wheat from '../images/image50.png';
import veg from '../images/image67.png';

export default function PizzaModal(props) {
    return (

        <Modal
            open={props.status || false}
            onClose={props.handleClose}
        >
            <Box sx={Styles.modalBox}>
                <IconButton sx={Styles.icon} onClick={props.handleClose}>
                    <CloseIcon />
                </IconButton>

                <Grid container sx={Styles.topContainer}>
                    <Grid item xs={12}>
                        <Card sx={Styles.card}>
                            <CardMedia
                                component="img"
                                sx={Styles.cardMedia}
                                image={pizzaPic}
                                alt="pizza"
                            />
                            <CardContent >
                                <Grid container sx={{ flexDirection: 'column' }}>
                                    <Grid item xs={12} sx={Styles.chipContainer}>
                                        <Chip avatar={<Avatar alt='img' src={veg} />} label='Vegeterian' sx={{ backgroundColor: '#c8e6c9' }} />
                                        <Chip avatar={<Avatar alt='img' src={egg} />} label='Egg' sx={{ backgroundColor: '#fff9c4' }} />
                                        <Chip avatar={<Avatar alt='img' src={wheat} />} label='Wheat' sx={{ backgroundColor: '#c0ca33' }} />
                                        <Chip avatar={<Avatar alt='img' src={soy} />} label='Soy' sx={{ backgroundColor: '#ffe082' }} />
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={Styles.titleText}>
                                            {props.title.substr(0, 20)}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" color="text.secondary">
                                            {props.description.substr(0, 100) + props.description.substr(0, 100)}
                                        </Typography>
                                    </Grid>
                                    <Grid item display={'inline-flex'} justifyContent={'left'}>
                                        <Typography sx={Styles.realPrice}>
                                            ${(props.discountPrice)}
                                        </Typography>
                                        <Typography sx={Styles.discountPrice}>
                                            ${(props.realPrice)}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} >
                        <Grid container justifyContent={'space-evenly'}>
                            <Grid item xs={5} container justifyContent={'right'}>
                                <Box sx={Styles.leftBox}>
                                    <Typography variant='h6' sx={{ marginBottom: '12px' }} >Base Type</Typography>
                                    <Box sx={Styles.outerRoundedBox}>
                                        <Box sx={Styles.innerRoundedBox}>
                                            <Typography sx={Styles.innerBoxText}>Thick Base</Typography>
                                        </Box>
                                        <Typography sx={Styles.outerBoxText}>$12</Typography>
                                    </Box>
                                    <Box sx={Styles.outerRoundedBox}>
                                        <Box sx={Styles.innerRoundedBox}>
                                            <Typography sx={Styles.innerBoxText}>Thin Base</Typography>
                                        </Box>
                                        <Typography sx={Styles.outerBoxText}>$16</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={1}> <Divider orientation='vertical' style={{ height: '250px' }} /> </Grid>
                            <Grid item xs={5} container justifyContent={'left'}>
                                <Box sx={Styles.rightBox}>
                                    <Typography variant='h6' style={{ marginBottom: '12px' }} >Toppings</Typography>
                                    <Box sx={Styles.outerRoundedBox}>
                                        <Box sx={Styles.innerRoundedBox}>
                                            <Typography sx={Styles.innerBoxText} >Mushroom</Typography>
                                        </Box>
                                        <Typography sx={Styles.outerBoxText}>$12</Typography>
                                    </Box>
                                    <Box sx={Styles.outerRoundedBox}>
                                        <Box sx={Styles.innerRoundedBox}>
                                            <Typography sx={Styles.innerBoxText}>Black Olives</Typography>
                                        </Box>
                                        <Typography sx={Styles.outerBoxText}>$16</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid container sx={Styles.bottomContainer}>
                    <Button variant='contained'
                        sx={Styles.btn}> Place Order</Button>
                </Grid>
            </Box>
        </Modal>
    )
}

const Styles = {
    modalBox: {
        position: 'absolute',
        top: '10%',
        left: '30%',
        width: 580,
        height: '75vh',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        pt: 0,
    },
    topContainer: {
        flexGrow: 1,
        height: '85%',
        overflowY: 'auto',
        overflowX: 'hidden',
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': {
            width: '0.4em',
        },
        '&::-webkit-scrollbar-track': {
            background: "#f1f1f1",
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'purple',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            background: 'grey'
        }
    },
    bottomContainer: {
        justifyContent: 'center',
        boxShadow: '0px -2px 5px lightgrey',
        borderRadius: '8px'
    },
    icon: {
        position: 'relative',
        left: '96%',
        color: 'black'
    },

    card: {
        display: 'flex',
        border: 'none',
        boxShadow: 0
    },
    cardMedia: {
        maxWidth: 180,
        maxHeight: 180,
        marginRight: 0,
        objectFit: 'contain',
    },
    chipContainer: {
        display: 'inline-flex',
        justifyContent: 'space-evenly',
    },
    titleText: {
        fontSize: '25px',
        fontWeight: 800,
        textAlign: 'left'
    },
    realPrice: {
        fontWeight: 'bold',
        marginRight: 1
    },
    discountPrice: {
        color: 'grey', 
        textDecorationLine: 'line-through'
    },
    leftBox: {
        width: '80%',
        marginTop: 6,
    },
    rightBox: {
        width: '80%',
        marginTop: 6,
        marginLeft: 2
    },
    outerRoundedBox: {
        borderRadius: '18px',
        border: '1px solid #ede7f6',
        display: 'inline-flex',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        height: '14%',
        marginBottom: 2
    },
    innerRoundedBox: {
        height: '100%',
        width: '75%',
        borderRadius: '18px',
        backgroundColor: '#ede7f6',
        border: '1px solid #ede7f6'
    },
    innerBoxText: {
        fontSize: '15px',
        color: '#424242',
        textAlign: 'center',
        marginTop: .5
    },
    outerBoxText: {
        fontSize: '15px',
        marginLeft: 1,
        fontWeight: 700
    },
    btn: {
        width: '50%', 
        margin: 1.5,
        textTransform: 'capitalize',
        borderRadius: '8px',
        backgroundColor: 'transparent',
        backgroundImage: 'linear-gradient(to right, rgba(110, 8, 252,0.4), rgba(110, 8, 252,1))'
    },
}
