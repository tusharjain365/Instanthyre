import { Badge, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../store/authStore";
import { listStore } from "../../store/listStore";
import SelectedOpportunity from "../SelectedOpportunity";

const Opportunity = () => {

    const {jobs,remove}=listStore(state=>state);
    const [open, setOpen] = useState(false);
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(false);

    const { user } = authStore(state => state);
    const navigate = useNavigate();
    
    const handleOpen = (item) => {
        setOpen(true);
        setJob(item);
    }
    const handleClose = () => {
        setOpen(false);
        setJob(null);
    }

    const handleNotInterested=(id)=> {
        remove(id);
        handleClose();
    }

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
        setLoading(true);
        // setCurJobs(jobs);
        setTimeout(() => {
            setLoading(false);
        }, 1000);

    }, []);

    return (
        <div className="min-h-[90vh] bg-gray-100 pb-[20px]">
            <div className="text-center md:text-2xl bg-[#6e6d6d] text-white h-[6rem] pt-[10px] text-md">
                {loading ?
                    <h1>Fetching...</h1>
                    :
                    <>
                        <h1>Showing 1 - 2 out of 2</h1>
                        <p>Recommended jobs for you</p>
                    </>
                }
            </div>

            <div className="flex md:space-x-[50px] flex-col-reverse md:flex-row">
                {/* filters */}
                <div className="md:w-[30%] flex md:justify-end">
                    <div className="space-y-[60px] mb-[10px] py-[12px] w-[100%] md:w-[auto]">
                        <div className="bg-white px-[20px] py-2 rounded-md">
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">Filter by Location</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="All"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="All" control={<Radio />} label="All" />
                                    <FormControlLabel value="Chennai" control={<Radio />} label="Chennai" />
                                    <FormControlLabel value="Banglore" control={<Radio />} label="Banglore" />
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <div className="bg-white px-[20px] py-2 rounded-md">
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">Filter by Job Type</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="All"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="All" control={<Radio />} label="All" />
                                    <FormControlLabel value="Full-time" control={<Radio />} label="Full-time" />
                                    <FormControlLabel value="Internship" control={<Radio />} label="Internship" />
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <div className="bg-white px-[20px] py-2 rounded-md">
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">Filter by company size</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="All"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="All" control={<Radio />} label="All" />
                                    <FormControlLabel value="Small" control={<Radio />} label="Small" />
                                    <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>

                {/* jobs */}
                <div className="space-y-[30px] py-[12px] w-[100%]">
                    {
                        jobs.map((item, idx) => (
                            <div className="flex flex-wrap md:flex-nowrap space-x-4 bg-white rounded-md py-[20px] px-[20px] cursor-pointer w-[100%] md:w-[90%]" key={item ? item.id : idx} onClick={() => handleOpen(item)}>
                                {!loading ? <img src='https://instahyre-2.s3-ap-south-1.amazonaws.com/media/CACHE/images/images/profile/base/employer/8847/8799a2db47/RR/8758eb2bda36d6506c3c1cc092ecb0e4.webp' /> :
                                    <Skeleton variant="rounded" width="100%" height={100} animation="wave" />
                                }
                                <>
                                    {!loading ?
                                        <div className="space-y-[12px] flex-start mt-[3px] md:mt-0">
                                            <h1 className="text-xl">{item.name}</h1>
                                            <p>Job available in {item.loc}</p>
                                            <p className="hidden md:block">{item.desc.substring(0, 100)}...</p>
                                            <p className="block md:hidden">{item.post}</p>
                                            <div className="space-x-[5px] hidden md:block">
                                                {
                                                    item.badge.map((b) => (
                                                        <Badge sx={{ paddingX: '12px', backgroundColor: '#d8d8d8', paddingY: '3px', borderRadius: '6px', fontSize: 'small' }} key={b.id}>{b.title}</Badge>
                                                    ))
                                                }
                                            </div>
                                        </div> :
                                        <div className="space-y-[12px] flex-start mt-[3px] md:mt-0 w-[100%]">
                                            <Skeleton variant="rounded" width="100%" animation="wave" />
                                            <Skeleton variant="rounded" width="100%" animation="wave" />
                                            <Skeleton variant="rounded" width="100%" animation="wave" />
                                        </div>
                                    }
                                </>

                                <div className="space-y-[10px] self-center w-[20%]">
                                    {!loading ? <>
                                        <Button variant="contained" fullWidth sx={{ paddingY: 1, backgroundColor: '#0db092', ":hover": { backgroundColor: '#097561' } }}>View</Button>
                                        <p className="text-gray-500 hover:underline" onClick={()=>handleNotInterested(item.id)}>Not interested</p>
                                    </> :
                                        <Skeleton variant="rounded" width="100%" animation="wave" />
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <SelectedOpportunity open={open} handleClose={handleClose} job={job} handleNotInterested={handleNotInterested} />
        </div>
    )
}
export default Opportunity;