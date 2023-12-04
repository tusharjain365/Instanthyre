import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from 'react-router-dom';
import Services from '../Services';
import Review from '../Review';
import { useEffect } from 'react';
import { authStore } from '../../store/authStore';

const Home=()=> {

    const user=authStore(state=>state.user);
    const navigate=useNavigate();

    useEffect(()=> {
        if(user) {
            navigate("/opportunities");
        }
    },[]);

    return( 
        <div className="min-h-[90vh] space-y-[30px]">
            <div className="h-[30rem] w-[100%] bg-cover bg-center bg-no-repeat bg-[url('https://www.orielstat.com/blog/wp-content/uploads/2019/04/business-people-working-on-a-plan_Resized-1104W736H.jpg')] flex justify-center items-center">
                <div className="flex justify-center items-center flex-col h-[20rem] w-[40rem] bg-white space-y-[15px] px-[10px] text-center rounded-md">
                    <h1 className='text-4xl'>Your Dream Job. Now.</h1>
                    <div className='bg-[#0A66C2] py-[9px] rounded-md text-white relative text-center w-[100%] lg:w-[60%]'>
                    <LinkedInIcon sx={{position:'absolute', top:0, left:0, fontSize:40}}/>
                    <h6>SignUp with Linkedin</h6>
                    </div>
                    <div className='bg-[#DB4437] py-[9px] rounded-md text-white relative text-center w-[100%] lg:w-[60%]'>
                    <GoogleIcon sx={{position:'absolute', top:0, left:0, fontSize:40}}/>
                    <h6>SignUp with Google</h6>
                    </div>
                    <Link className="text-[#097561] hover:underline" to='/signup'>Or Sign up using email</Link>
                    <p>Showcase yourself to a curated list of top companies <br/>Complete privacy and no spam</p>
                </div>
            </div>

            <Services/>

            <hr/>

            <Review/>
        </div>
    )
}

export default Home;