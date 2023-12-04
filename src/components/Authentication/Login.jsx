import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import { Button, FormHelperText, FormLabel, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const submit = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }

    useEffect(() => {
        if (localStorage.getItem("user")) {
            navigate("/opportunities")
        }
    }, []);

    return (
        <div className="w-[100%] min-h-[90vh] flex justify-center items-end">
            <div className="w-[20rem] space-y-3">
                <div className="text-center py-[15px]">
                    <h1 className='font-bold text-xl mb-[10px]'>Login</h1>
                    <p className='text-sm'>Don't have account? <Link className='text-blue-500 hover:underline' to="/signup">SignUp</Link></p>
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
                        <FormLabel>Email</FormLabel>
                        <TextField
                            type="email"
                            size="small"
                            name='email'
                            fullWidth
                            {...register('email', { required: "Please fill your email id" })}
                            error={errors.email!=null}
                        />
                        <FormHelperText error={true}>{errors?.email&&errors.email.message}</FormHelperText>
                    </div>
                    <div className='space-y-[2px]'>
                        <FormLabel>Password</FormLabel>
                        <TextField
                            type="password"
                            size="small"
                            name='password'
                            fullWidth
                            {...register('password', { required: "Please fill your password" })}
                            error={errors.password!=null}
                        />
                        <FormHelperText error={true}>{errors?.password&&errors.password.message}</FormHelperText>
                    </div>
                    <Button variant="contained" fullWidth sx={{ paddingY: 1, backgroundColor: '#0db092', ":hover": { backgroundColor: '#097561' } }} type="submit" disabled={loading}>Login</Button>
                </form>
            </div>
        </div>
    )
}

export default Login;