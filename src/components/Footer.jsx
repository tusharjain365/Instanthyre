import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer=()=> {
    return (
        <div className='w-[100%] h-[15rem] pt-[30px] pb-0'>
        <hr/>
        <div className="flex justify-evenly items-start md:items-center bg-white">
            <div className='hidden md:block'>
                <h3>Jobs by location</h3>
                <div className="text-gray-500">
                    <h3>Jobs in Delhi</h3>
                    <h3>Jobs in Mumbai</h3>
                    <h3>Jobs in Chennai</h3>
                    <h3>Jobs in Banglore</h3>
                </div>
            </div>

            <div className='hidden md:block mt-2'>
                <h3>Jobs by function</h3>
                <div className="text-gray-500">
                    <h3>Software Engineering jobs</h3>
                    <h3>Market jobs</h3>
                    <h3>Sales jobs</h3>
                    <h3>Internships</h3>
                </div>
            </div>

            <div className='hidden md:block'>
                <h3>For Employers</h3>
                <div className="text-gray-500 mt-2">
                    <h3>Post your jobs</h3>
                    <h3>Success stories</h3>
                    <h3>Resources</h3>
                </div>
            </div>

            <div className='hidden md:block'>
                <h3>Instanthyre</h3>
                <div className="text-gray-500 mt-2">
                    <h3>About </h3>
                    <h3>Privacy</h3>
                    <h3>Terms</h3>
                </div>
            </div>

            <div>
                <h3 className='hidden md:block'>Connect</h3>
                <div className="text-gray-500">
                    <h3 className='hidden md:block'>Help Center</h3>
                    <div className='flex flex-row md:flex-col items-center space-x-2 md:space-y-2'>
                        <h3>Contact us</h3>
                        <div className='flex justify-evenly items-center'>
                            <FacebookIcon/>
                            <LinkedInIcon/>
                            <TwitterIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer;