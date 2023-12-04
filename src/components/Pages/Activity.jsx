import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../store/authStore";

const Activity = () => {

    const navigate=useNavigate();
    const {user,loading}=authStore(state=>state);
    
    useEffect(() => {
        if(!loading&&!user) {
            navigate("/");
        }
    }, [loading]);

    return (
        <div className="min-h-[90vh] bg-gray-100 pb-[20px]">
            <div className="text-center md:text-2xl bg-[#6e6d6d] text-white h-[6rem] pt-[10px] text-md">
                <h1>Showing 1 - 1 out of 1</h1>
                <p>1 Recruiter have viewed your Profile</p>
            </div>

            <div className="flex md:space-x-[50px] flex-col-reverse md:flex-row">
                {/* filters */}
                <div className="md:w-[30%] flex md:justify-end">
                <div className="space-y-[60px] mb-[10px] py-[12px] w-[100%] md:w-[auto]">
                    <div className="bg-white px-[20px] py-2 rounded-md">
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Filter by Status</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="Viewed"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="Viewed" control={<Radio />} label="Viewed" />
                                <FormControlLabel value="Contacted" control={<Radio />} label="Contacted" />
                                <FormControlLabel value="Not Shortlisted" control={<Radio />} label="Not Shortlisted" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                </div>

                {/* jobs */}
                <div className="space-y-[30px] mt-[12px] md:w-[60%] w-[95%]">
                            <div className="flex justify-start space-x-4 bg-white rounded-md py-[6px] px-[20px] cursor-pointer">
                                <img src='https://instahyre-2.s3-ap-south-1.amazonaws.com/media/CACHE/images/images/profile/base/employer/8847/8799a2db47/RR/8758eb2bda36d6506c3c1cc092ecb0e4.webp'/>
                                <div className="space-y-[12px] flex-start">
                                    <h1 className="text-xl">Lokal</h1>
                                    <p>Someone from Lokal viewed your profile</p>
                                    <p>For Backend Developer at Lokal</p>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    )
}
export default Activity;