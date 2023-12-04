import { Avatar, Button} from "@mui/material";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authStore } from "../../store/authStore";

const Profile = () => {

    const {user,loading}=authStore(state=>state);
    
    const navigate=useNavigate();

    useEffect(()=> {
        if(!loading&&user===null) {
            navigate("/");
        }
    },[]);

    if(loading) {
        return <h1>Loading</h1>
    }
    
    return (
        <div className="min-h-[90vh] bg-gray-100">
            <div className="bg-[#6e6d6d] h-[10rem] pt-[10px]">
            </div>
            <div className="flex justify-center items-center -translate-y-[13%]">
                <div className="space-y-[30px] px-[20px]">
                    <div className="flex justify-center items-center flex-col">
                        <Avatar sx={{ width: 75, height: 75 }} />
                        <h1 className="text-xl text-white">{user.fullName}</h1>
                    </div>
                    <p>No Longer a Student? <span className="text-blue-500 hover:underline">Update your Profile type</span></p>
                    <div className="space-y-3">
                        <h1 className="font-bold">Job Preferences</h1>
                        <hr />
                        <div className="space-y-2">
                            <p>Currently located in {user.location}</p>
                            <p>Only willing to work in Anywhere in India</p>
                            <p>Minimum salary Rs. {user.salary} LPA</p>
                            <p>Can start work immediately</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h1 className="font-bold">Skills</h1>
                        <hr />
                        <div className="space-y-2">
                            <p>Current role is {user.role}</p>
                            <p>Main skills are Express.js, HTML, Hibernate, JavaScript, NoSQL, Node.js, React.js, SQL, Spring, Spring Boot</p>
                            <p>Languages known are English, Hindi</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h1 className="font-bold">Internships</h1>
                        <hr />
                        <div className="space-y-2">
                            <p>Interned at {user.intern}</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h1 className="font-bold">Education</h1>
                        <hr />
                        <div className="space-y-2">
                            <p>{user.institute}</p>
                            <p>BTech / BE in Computer Science, 2023</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h1 className="font-bold">Diversity information</h1>
                        <hr />
                        <div className="space-y-2">
                            <p>Gender is Male</p>
                            <p>Disability status not specified</p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block space-y-[30px] self-start">
                    <div className="h-[15rem] w-[23rem] bg-white flex justify-around items-center flex-col px-[32px]">
                        <h1>Select Companies</h1>
                        <p className="text-sm">We have 2 active companies who look like very good fits based on your profile and preferences.
                            <br />
                            Just select companies you're interested in to share your profile with them!</p>
                        <Link to="/opportunities">
                            <Button variant="contained" fullWidth sx={{ paddingY: 1, backgroundColor: '#0db092', ":hover": { backgroundColor: '#097561' } }}>
                                Select Companies Now
                            </Button>
                        </Link>
                    </div>

                    <div className="h-[15rem] w-[23rem] bg-white flex justify-around items-center flex-col px-[32px]">
                        <h1>What companies look for</h1>
                        <p className="text-sm text-gray-500">Most companies look for people who are serious about new opportunities. Create an updated resume that highlights all the work you have done.
                            <br />
                            Respond quickly once a company reaches out, and try to wrap up the interview process as soon as possible.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;