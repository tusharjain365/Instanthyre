import { Avatar, Button, Grid } from "@mui/material";
import { reviews } from "../util/reviews";

const Review=()=> {
    return (
        <div className="flex justify-center items-center flex-col space-y-[30px]">
            <div className="w-[100%] md:w-[80%]">
            <Grid container spacing={2}>
                {
                    reviews.map((item)=> (
                        <Grid item md={6} xs={12}>
                            <div className="flex justify-center items-center">
                            <div className="space-y-[20px] px-[10px] py-[10px] sm:w-[80%]">
                                <div className="bg-[#cfdcba] px-[20px] py-[20px] rounded-md min-h-[10rem]">
                                    <p>{item.review}</p>
                                </div>
                                <div className="flex justify-start items-center space-x-2 text-sm">
                                <Avatar sx={{height:65, width:65}}/>
                                <div>
                                    <h3>{item.name}, Hired by {item.hired}</h3>
                                    <h3 className="text-gray-500">as {item.position}</h3>
                                </div>
                                </div>
                            </div>
                            </div>
                        </Grid>
                    ))
                }
            </Grid> 
            </div>  

            <Button variant='contained' sx={{backgroundColor:'#0db092', ":hover":{backgroundColor:'#097561'}}}>Your Dream job</Button>         
        </div>
    )
}

export default Review;