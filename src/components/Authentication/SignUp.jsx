import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import { Button, FormHelperText, FormLabel, TextField, useStepContext } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { authStore } from '../../store/authStore';
const SignUp = () => {

    const navigate = useNavigate();
    const {user,setUser}=authStore(state=>state);

    const {register, handleSubmit, formState : {errors}} = useForm({
        defaultValues: {
            "salary":0
        }
    });
    const [loading, setLoading] = useState(false);

    const submit=(data)=> {
        setLoading(true);

        data.salary=parseInt(data.salary);
        if(data.role==='') {
            data.role="Not Preferred"
        }

        if(data.intern==='') {
            data.intern="Not Preferred"
        }

        localStorage.setItem("user",JSON.stringify(data));

        setUser(data);
        
        setTimeout(() => {
            setLoading(false); 
            navigate("/");
        }, 1000);
        
    }

    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, []);

    return (
        <div className="w-[100%] min-h-[90vh] flex justify-center items-end">
            <div className="w-[20rem] space-y-3">
                <div className="text-center py-[15px]">
                    <h1 className='font-bold text-xl mb-[10px]'>SignUp</h1>
                    <p className='text-sm'>Already have account? <Link className='text-blue-500 hover:underline' to="/login">Login</Link></p>
                </div>
                <div className='bg-[#0A66C2] py-[9px] rounded-md text-white relative text-center'>
                    <LinkedInIcon sx={{ position: 'absolute', top: 0, left: 0, fontSize: 40 }} />
                    <h6>SignUp with Linkedin</h6>
                </div>
                <div className='bg-[#DB4437] py-[9px] rounded-md text-white relative text-center'>
                    <GoogleIcon sx={{ position: 'absolute', top: 0, left: 0, fontSize: 40 }} />
                    <h6>SignUp with Google</h6>
                </div>
                <hr />
                <h3 className='text-center'>OR</h3>
                <form className='space-y-3 w-[100%]' onSubmit={handleSubmit(submit)}>
                    <div className='space-y-[2px]'>
                        <FormLabel>Full Name</FormLabel>
                        <TextField
                            type="text"
                            size="small"
                            fullWidth
                            name="fullName"
                            {...register('fullName',{required:"Please fill your full Name"})}
                            error={errors.fullName!=null}
                        />
                        <FormHelperText error={true}>{errors?.fullName&&errors.fullName.message}</FormHelperText>
                    </div>
                    <div className='space-y-[2px]'>
                        <FormLabel>Email</FormLabel>
                        <TextField
                            type="email"
                            size="small"
                            fullWidth
                            name="email"
                            {...register('email',{required:"Email is required"})}
                            error={errors.email!=null}
                        />
                        <FormHelperText error={true}>{errors?.email&&errors.email.message}</FormHelperText>
                    </div>
                    <div className='space-y-[2px]'>
                        <FormLabel>Currently located in</FormLabel>
                        <TextField
                            type="text"
                            size="small"
                            fullWidth
                            name="location"
                            {...register('location',{required:"Please fill your location"})}
                            error={errors.location!=null}
                        />
                        <FormHelperText error={true}>{errors?.location&&errors.location.message}</FormHelperText>
                    </div>
                    <div className='space-y-[2px]'>
                        <FormLabel>Minimum Salary in lpa</FormLabel>
                        <TextField
                            type="number"
                            size="small"
                            fullWidth
                            name="salary"
                            InputProps={{inputProps:{min:"0"}}}
                            {...register('salary')}
                        />
                    </div>
                    <div className='space-y-[2px]'>
                        <FormLabel>Current role is</FormLabel>
                        <TextField
                            type="text"
                            size="small"
                            fullWidth
                            name="role"
                            {...register('role')}
                        />
                    </div>
                    <div className='space-y-[2px]'>
                        <FormLabel>Intern</FormLabel>
                        <TextField
                            type="text"
                            size="small"
                            fullWidth
                            name="intern"
                            {...register('intern')}
                        />
                    </div>
                    <div className='space-y-[2px]'>
                        <FormLabel>Education institution name</FormLabel>
                        <TextField
                            type="text"
                            size="small"
                            fullWidth
                            name="institute"
                            {...register('institute',{required:"Please fill Institution Name"})}
                            error={errors.institue!=null}
                        />
                        <FormHelperText error={true}>{errors?.institute&&errors.institute.message}</FormHelperText>
                    </div>
                    <div className='space-y-[2px]'>
                        <FormLabel>Password</FormLabel>
                        <TextField
                            type="password"
                            size="small"
                            fullWidth
                            name="password"
                            {...register('password', {required:"Please fill password"})}
                            error={errors.password!=null}
                        />
                        <FormHelperText error={true}>{errors?.password&&errors.password.message}</FormHelperText>
                    </div>
                    <Button type="submit" variant="contained" fullWidth sx={{ paddingY: 1, backgroundColor: '#0db092', ":hover": { backgroundColor: '#097561' } }} disabled={loading}>SignUp</Button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;