import { Box, Button, Grid, Typography, useTheme } from '@mui/material';

import { FaArrowRight } from 'react-icons/fa';
const AboutAndDetails = () => {
    const theme = useTheme();
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={6} sm={8} md={6}>
                <Box>
                    <Box
                        sx={{ width: '100%' }}
                        component="img"
                        alt="The house from the offer."
                        src="https://qawamiuniversity.nyc3.digitaloceanspaces.com/4727487.jpg"
                    />
                </Box>
            </Grid>
            <Grid item xs={6} sm={8} md={6}>
                <Box>
                    <Box sx={{ my: 4 }}>
                        <Typography variant="h1" color={theme.palette.text.heading}>
                            কওমি ইউনিভার্সিটিতে
                        </Typography>
                        <Typography variant="h1" color={theme.palette.text.heading}>
                            তোমাকে স্বাগতম
                        </Typography>
                    </Box>

                    <Typography variant="body1">
                        আমরা যত্নশীল শিক্ষার্থীদের প্রতি। দ্বীন শিখার যাত্রাকে সহজ থেকে সহজতর করে দিতে চাই। শুধু টিচার না তুমি পাবে অভিভাবক
                        যারা তোমার কেয়ার করবে। আমরা বিশ্বাস করি দ্বীন শিখা কঠিন না, প্রয়োজন মানসম্মত শিক্ষা তাই আমরা তোমাকে দিচ্ছি মানসম্মত
                        শিক্ষা।
                    </Typography>
                    <div>
                        <ul>
                            <li style={{ listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img
                                    src="https://www.scheuten.com/_asset/_private/portfolio/212/ING-HQ-Amsterdam-2.jpg"
                                    alt="Nature"
                                    style={{ maxWidth: ' 40px', marginRight: '1rem' }}
                                />
                                <Box style={{ textAlign: 'justify' }} variant="body2">
                                    দিন কে দ্বীন বানাতে আমরা আছি তোমার পাশে। তুমি পারবে। পথকে তো প্রভুই সহজ করবেন তোমাকে তো তোমার চেষ্টা
                                    করতে হবে। একটি বৃক্ষের বড় হওয়া ও সেখানে ফল আসে মোটেও সহজ পথ বা প্রক্রিয়া না। কিন্তু প্রভু এটা আমাদের
                                    জন্য কত সহজ করে রিজিক হিসাবে আমাদের দিয়েছেন।
                                </Box>
                            </li>
                        </ul>
                    </div>
                    <Typography variant="body1">
                        পড় তোমার প্রভুর মানে। জীবনের সূচনা ,জ্ঞানের সূচনা ,দিনের সূচনা ,দ্বীনের সূচনা সব কিছুতে প্রভু তুমি। তুমি মালিক ,
                        তুমি মালিক আমার অস্তিত্বের। আমি তোমার কাছে আরো কাছে যেতে চাই, আরো কাছে, তোমার সাথে ভালো সম্পর্ক তৈরী করতে চাই।
                        প্রতিটি নিঃশ্বাসে রব তোমার রহমত অনুভব করতে চাই । প্রভু আমাকে পথ দেখাও।
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default AboutAndDetails;
