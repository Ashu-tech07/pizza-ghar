
import pizza from '../images/pizza.jpg'
import pizzatext from '../images/pizzaText.jpg'
import React from 'react'
import { Grid, Typography, Button, Tab, Box, Avatar, Stack } from '@mui/material'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Cards from './Cards';
import pizzaData from '../data.json';


const Main = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Grid container
                justifyContent={'center'}
                sx={{
                    backgroundColor: '#cc0000',
                    height: '20%'
                }}
            >
                <Grid item justifyContent={'right'} display={'flex'} alignItems={'center'} xs={6}>
                    <img src={pizza} style={{ width: '50%' }} ></img>
                </Grid>
                <Grid item container xs={6}>
                    <Grid item xs={12} justifyContent={'left'} >
                        <img src={pizzatext} style={{ width: '40%', display: 'block' }} ></img>
                        <Button variant='contained' size='small' sx={{ backgroundColor: 'green', textTransform: 'capitalize' }}>Order Now</Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container justifyContent={'center'}>
                <Grid item container xs={10} >
                    <Grid item xs={1}>
                        <Avatar sx={{ width: 30, height: 30, backgroundColor: 'whitesmoke', color: 'grey', marginTop: 1.5, marginLeft: 1.5 }}>
                            <ArrowBackIcon />
                        </Avatar>
                    </Grid>
                    <Grid item xs={10} container justifyContent={'center'}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList textColor="secondary"
                                    indicatorColor="secondary"
                                    onChange={handleChange}
                                    aria-label="lab API tabs example"
                                >
                                    <Tab label="Italian" sx={{ textTransform: 'capitalize' }} value="1" />
                                    <Tab label="Mexican" sx={{ textTransform: 'capitalize' }} value="2" />
                                    <Tab label="Indian" sx={{ textTransform: 'capitalize' }} value="3" />
                                    <Tab label="Chinese" sx={{ textTransform: 'capitalize' }} value="4" />
                                    <Tab label="American" sx={{ textTransform: 'capitalize' }} value="5" />
                                    <Tab label="French" sx={{ textTransform: 'capitalize' }} value="6" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <Grid container spacing={2} sx={{
                                    height: '55vh',
                                    overflow: 'auto',
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
                                }}>
                                    {
                                        pizzaData.Italian.map((pizzaItem) => {
                                            return (
                                                <Grid item xs={10} md={6} >
                                                    <Cards title={pizzaItem.Name} description={pizzaItem.Description}
                                                        discountPrice={pizzaItem.DiscountedPrice} realPrice={pizzaItem.OriginalPrice} />
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>

                            </TabPanel>
                            <TabPanel value="2">
                                <Grid container spacing={2} sx={{
                                    height: '55vh',
                                    overflow: 'auto',
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
                                }}>

                                    {
                                        pizzaData.Mexican.map((pizzaItem) => {
                                            return (
                                                <Grid item xs={10} md={6}>
                                                    <Cards title={pizzaItem.Name} description={pizzaItem.Description}
                                                        discountPrice={pizzaItem.DiscountedPrice} realPrice={pizzaItem.OriginalPrice} />
                                                </Grid>
                                            )
                                        })
                                    }


                                </Grid>
                            </TabPanel>

                            <TabPanel value="3">
                                <Grid container spacing={2} sx={{
                                    height: '55vh',
                                    overflow: 'auto',
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
                                }}>
                                    {
                                        pizzaData.Indian.map((pizzaItem) => {
                                            return (
                                                <Grid item xs={10} md={6}>
                                                    <Cards title={pizzaItem.Name} description={pizzaItem.Description}
                                                        discountPrice={pizzaItem.DiscountedPrice} realPrice={pizzaItem.OriginalPrice} />
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </TabPanel>
                            <TabPanel value="4">
                                <Grid container spacing={2} sx={{
                                    height: '55vh',
                                    overflow: 'auto',
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
                                }}>
                                    {
                                        pizzaData.Chinese.map((pizzaItem) => {
                                            return (
                                                <Grid item xs={10} md={6}>
                                                    <Cards title={pizzaItem.Name} description={pizzaItem.Description}
                                                        discountPrice={pizzaItem.DiscountedPrice} realPrice={pizzaItem.OriginalPrice} />
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>
                            </TabPanel>
                            <TabPanel value="5">
                                <Grid container spacing={2} sx={{
                                    height: '55vh',
                                    overflow: 'auto',
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
                                }}>
                                    {
                                        pizzaData.American.map((pizzaItem) => {
                                            return (
                                                <Grid item xs={10} md={6}>
                                                    <Cards title={pizzaItem.Name} description={pizzaItem.Description}
                                                        discountPrice={pizzaItem.DiscountedPrice} realPrice={pizzaItem.OriginalPrice} />
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>
                            </TabPanel>
                            <TabPanel value="6">
                                <Grid container spacing={2} sx={{
                                    height: '55vh',
                                    overflow: 'auto',
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
                                }}>
                                    {
                                        pizzaData.French.map((pizzaItem) => {
                                            return (
                                                <Grid item xs={10} md={6}>
                                                    <Cards title={pizzaItem.Name} description={pizzaItem.Description}
                                                        discountPrice={pizzaItem.DiscountedPrice} realPrice={pizzaItem.OriginalPrice} />
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </TabPanel>
                        </TabContext>
                    </Grid>
                    <Grid item xs={1}>
                        <Avatar sx={{ width: 30, height: 30, backgroundColor: 'whitesmoke', color: 'grey', marginTop: 1.5, marginRight: 1.5 }}>
                            <ArrowForwardIcon />
                        </Avatar>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default Main
