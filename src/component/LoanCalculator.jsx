import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Slider,
    Button,
    Link,
    Container,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TextField,
   
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@mui/system';

const slideInLeft = keyframes`
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

const LoanCalculator = () => {
    const [loanAmount, setLoanAmount] = useState(5000);
    const [loanTenure, setLoanTenure] = useState(1);
    const [interestRate, setInterestRate] = useState(5);
    const [totalAmount, setTotalAmount] = useState(51000);
    const [dailyPayment, setDailyPayment] = useState(0);
    const [showDialog, setShowDialog] = useState(false); // State for dialog visibility

    const handleLoanAmountChange = (event, newValue) => {
        setLoanAmount(newValue);
    };

    const handleLoanTenureChange = (event, newValue) => {
        setLoanTenure(newValue);
    };

    const handleInterestRateChange = (event, newValue) => {
        setInterestRate(newValue);
    };

    const calculateTotalAmount = () => {
        const totalInterest = (loanAmount * interestRate * loanTenure) / 100;
        const total = loanAmount + totalInterest;
        setTotalAmount(total);
        setDailyPayment((total / loanTenure).toFixed(2)); // Calculate daily payment
    };

    useEffect(() => {
        calculateTotalAmount();
    }, [loanAmount, loanTenure, interestRate]);

    const { ref: calculatorRef, inView: calculatorInView } = useInView({ triggerOnce: false });
    const { ref: detailsRef, inView: detailsInView } = useInView({ triggerOnce: false });

    
    const handleCloseDialog = () => {
        setShowDialog(false);
    };


    return (
        <Box
            sx={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                background: '#f9f9f9', 

                paddingY:{xs:1,md:4} , // Adds vertical padding
              
            }}
        >
            <Box sx={{ marginTop: 4, marginBottom: 4 }}>
                <Container>
                                       <Grid 
                            container 
                            id="calculator-grid-container" 
                            spacing={0} 
                            justifyContent="center"
                            >                      
                              <Grid item xs={12} md={12}>
                            <Paper
                                elevation={12}
                                sx={{
                                    mt:5,
                                    padding: 3,
                                    borderRadius: 10,
                                    borderright:'none',

                                    textAlign: 'center',
                                    background: 'white', // Transparent background to see blur effect
                                    color: 'black',
                                    minHeight: '400px',
                                    animation: calculatorInView ? `${slideInLeft} 0.5s ease` : 'none',
                                    display: 'flex',
                                    flexDirection:{xs:'column',md:'row'} ,
                                }}
                                ref={calculatorRef}
                            >
<Box sx={{ width: { xs: '100%', sm: '50%' }, padding: { xs: 3, sm: 5 } }}>
    <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ marginBottom: 1, textAlign: 'left' }}>
                Loan Amount (₹)
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                type="number"
                value={loanAmount || ''}
                onChange={(e) => {
                    const value = Number(e.target.value);
                    if (value <= 100000) {
                        setLoanAmount(value);
                    } else if (value > 100000) {
                        setLoanAmount(100000);
                    } else if (value < 5000) {
                        setLoanAmount(5000);
                    } else {
                        setLoanAmount(value);
                    }
                }}
                variant="outlined"
                fullWidth
                sx={{
                    marginBottom: 2,
                    background: 'transparent',
                    borderRadius: '16px',
                    width: '100%',
                    maxWidth: 200, // Reduced width to make the input smaller
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '16px',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(0, 0, 0, 0.23)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#1976d2',
                    },
                }}
            />
        </Grid>
    </Grid>

    <Slider
        value={loanAmount}
        min={5000}
        max={100000}
        onChange={(_, newValue) => setLoanAmount(newValue)}
        valueLabelDisplay="auto"
        marks={[{ value: 5000, label: '5K' }, { value: 100000, label: '100K' }]}
        sx={{
            color: 'black',
            height: 8,
            marginBottom: 2,
            '& .MuiSlider-markLabel[data-index="0"]': {
                transform: 'translateX(5%)',
            },
            '& .MuiSlider-markLabel[data-index="1"]': {
                transform: 'translateX(-90%)',
            },
        }}
    />

    <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ marginBottom: 1, textAlign: 'left' }}>
                Loan Tenure (Months)
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                type="number"
                value={loanTenure || ''}
                onChange={(e) => {
                    const value = Number(e.target.value);
                    if (value <= 90) {
                        setLoanTenure(value);
                    } else if (value < 1) {
                        setLoanTenure(1);
                    } else if (value > 90) {
                        setLoanAmount(90);
                    } else {
                        setLoanTenure(value);
                    }
                }}
                variant="outlined"
                fullWidth
                sx={{
                    marginBottom: 2,
                    background: 'transparent',
                    borderRadius: '16px',
                    width: '100%',
                    maxWidth: 200, // Reduced width to make the input smaller
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '16px',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(0, 0, 0, 0.23)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#1976d2',
                    },
                }}
            />
        </Grid>
    </Grid>

    <Slider
        value={loanTenure}
        min={1}
        max={90}
        onChange={handleLoanTenureChange}
        valueLabelDisplay="auto"
        marks={[{ value: 1, label: '1 day' }, { value: 90, label: '90 days' }]}
        sx={{
            color: 'black',
            height: 8,
            marginBottom: 2,
            '& .MuiSlider-markLabel[data-index="0"]': {
                transform: 'translateX(5%)',
            },
            '& .MuiSlider-markLabel[data-index="1"]': {
                transform: 'translateX(-90%)',
            },
        }}
    />

<Grid container alignItems="center" justifyContent="space-between">
    <Grid item xs={12} sm={6}>
        <Typography variant="h6" sx={{ marginBottom: 1, textAlign: 'left' }}>
            Interest Rate (%)
        </Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
        <TextField
            type="number"
            value={interestRate || ''}
            onChange={(e) => {
                const value = Number(e.target.value);
                if (value <= 2.75) {
                    setInterestRate(value);
                } else if (value < 0.5) {
                    setInterestRate(0.5);
                } else if (value > 2.75) {
                    setInterestRate(2.75);
                }
            }}
            variant="outlined"
            fullWidth
            sx={{
                marginBottom: 2,
                background: 'transparent',
                borderRadius: '16px',
                width: '100%',
                maxWidth: 200, // Reduced width to make the input smaller
                '& .MuiOutlinedInput-root': {
                    borderRadius: '16px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(0, 0, 0, 0.23)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#1976d2',
                },
            }}
        />
    </Grid>
</Grid>

    <Slider
        value={interestRate}
        min={0.5}
        max={2.75}
        step={0.1}
        onChange={handleInterestRateChange}
        valueLabelDisplay="auto"
        marks={[{ value: 0.5, label: '0.5%' }, { value: 2.75, label: '2.75%' }]}
        sx={{
            color: 'black',
            height: 8,
            marginBottom: 2,
            '& .MuiSlider-markLabel[data-index="0"]': {
                transform: 'translateX(5%)',
            },
            '& .MuiSlider-markLabel[data-index="1"]': {
                transform: 'translateX(-90%)',
            },
        }}
    />
   

    
</Box>



                             <Box sx={{ width: { xs: '100%', sm: '80%', md: '50%' }, borderLeft: '2px solid #000', padding: { xs: 2, sm: 4, md: 5 } }}>
                            
                            
                            <Typography variant="h5">
                                Detailed information to help you understand your financial commitment.
                            </Typography>
                            <Typography sx={{ marginTop: 3, fontSize: '1.5rem', fontWeight: 'bold' }}>
                                You have to pay    
                            </Typography>

                            <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                                ₹{totalAmount}
                            </Typography>

                            <TableContainer>
                                <Table>
                                    <TableBody>
                                        <TableRow
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                gap: '20px', // Adjusted gap for responsiveness
                                                padding: '16px 0',
                                            }}
                                        >
                                            <TableCell
                                                align="center"
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    borderBottom: 'none',
                                                    fontFamily: 'Inter, sans-serif',
                                                    fontWeight: 500,
                                                }}
                                            >
                                                <Typography variant="subtitle1">Interest Rate:</Typography>
                                                <Typography variant="h6">{interestRate}%</Typography>
                                            </TableCell>

                                            {/* Divider line */}
                                            <div
                                                sx={{
                                                    borderLeft: '2px solid black',
                                                    height: '50px',
                                                    margin: '0 16px',
                                                }}
                                            ></div>

                                            <TableCell
                                                align="center"
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    borderBottom: 'none',
                                                }}
                                            >
                                                <Typography variant="subtitle1">Loan Tenure:</Typography>
                                                <Typography variant="h6">{loanTenure} month</Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <Button
                                component={Link}
                                href="/apply-now"
                                variant="contained"
                                sx={{
                                    marginTop:{xs:5,md:5} ,
                                    backgroundColor: '#4D0F4A',
                                    borderRadius: '16px',
                                    paddingY: 2,
                                    paddingX:{xs:10,md:20},
                                    color: 'white',
                                    textTransform: 'none',
                                    width: { xs: '100%', sm: 'auto' }, // Make the button full width on small screens
                                }}
                            >
                                Apply Now
                            </Button>
                            </Box>

                            </Paper>
                            </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default LoanCalculator;
