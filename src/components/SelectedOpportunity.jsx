import { Badge, Box, Button, Grid, Modal, Rating, Typography } from "@mui/material"
import responsibilties from "../util/responsibilties";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
        xs:'90%',
        md:'80%'
    },
    bgcolor: 'background.paper',
    boxShadow: 24,
    overflowY: 'auto',
    height: '90vh',
    borderRadius:'6px'
};

const SelectedOpportunity = ({ open, handleClose, job,handleNotInterested }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            key={job?.id}
        >
            <Box sx={style}>
                <Grid container spacing={2} sx={{border:'4px solid red'}}>
                    {/* About company */}
                    <Grid item xs={5} md={4}>
                        <div className="bg-gray-100 md:px-[20px] px-[5px] space-y-[12px] py-[20px]">
                            <div className="flex justify-center items-center">
                                <img src='https://instahyre-2.s3-ap-south-1.amazonaws.com/media/CACHE/images/images/profile/base/employer/8847/8799a2db47/RR/8758eb2bda36d6506c3c1cc092ecb0e4.webp' />
                            </div>
                            <div className="space-y-[12px] text-center">
                                <h1>{job?.name}</h1>
                                <p>Founded in 2014</p>
                                <p>50-200 employees</p>
                            </div>
                            <div className="space-y-[12px] text-center">
                                <h1>Your Instantmatch score</h1>
                                <p className="text-sm text-gray-500">Congrats! Your Instantmatch score is High🙂</p>
                                <p className="text-sm text-gray-500">Your chances of being shortlisted for this job are high. The InstantMatch score is calculated by using a large number of data points from your profile, this company's hiring patterns, and this recruiter's preferences for this role.</p>
                            </div>

                            <div>
                                <h1>Employee reviews</h1>
                                <div className="space-y-[20px]">
                                    <div className="space-y-[5px]">
                                        <h1>Overall</h1>
                                        <div className="flex justify-between items-center flex-wrap">
                                            <Rating size="small"  value={4.4} readOnly precision={0.2} />
                                            <p>4.4</p>
                                        </div>
                                    </div>
                                    <div className="space-y-[5px]">
                                        <h1>Work-Life Balance</h1>
                                        <div className="flex justify-between items-center  flex-wrap">
                                            <Rating size="small" value={4} readOnly precision={0.5} />
                                            <p>4</p>
                                        </div>
                                    </div>
                                    <div className="space-y-[5px]">

                                        <h1>Salary and Benefits</h1>
                                        <div className="flex justify-between items-center  flex-wrap">
                                            <Rating size="small" value={4.2} readOnly precision={0.2} />
                                            <p>4.2</p>
                                        </div>
                                    </div>
                                    <div className="space-y-[5px]">

                                        <h1>Company Culture</h1>
                                        <div className="flex justify-between items-center  flex-wrap">
                                            <Rating size="small" value={4.5} readOnly precision={0.5} />
                                            <p>4.5</p>
                                        </div>
                                    </div>
                                    <div className="space-y-[5px]">
                                        <h1>Career Growth</h1>
                                        <div className="flex justify-between items-center  flex-wrap">
                                            <Rating size="small" value={4.4} readOnly precision={0.5} />
                                            <p>4.4</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    {/* About job */}
                    <Grid item xs={7} md={8}>
                        <div className="space-y-[12px] pr-[6px] py-[20px]">
                            <h1 className="text-xl">{job?.post}</h1>
                            <h1 className="text-xl text-gray-500">{job?.name}</h1>
                            <div className="flex justify-start space-x-[15px]">
                                <p className="text-gray-500">{job?.loc}</p>
                                <p className="text-gray-500">0 - 3 years</p>
                            </div>

                            <div className="space-y-[12px]">
                                <h1 className="text-xl">About {job?.name}</h1>
                                <hr />
                                <p className="text-sm">{job?.desc}</p>
                            </div>

                            <div className="space-y-[5px]">
                                <h1>Job Description</h1>
                                <p>Function: {job?.post}</p>
                                <div className="space-x-[4px]">
                                    {
                                        job?.badge.map((b) => (
                                            <Badge sx={{ paddingX: '12px', backgroundColor: '#d8d8d8', paddingY: '3px', borderRadius: '6px', fontSize: 'small' }} key={b.id}>{b.title}</Badge>
                                        ))
                                    }
                                </div>
                            </div>

                            <div>
                                <h1>Responsibilities:</h1>
                                <ul className="list-disc ml-[1rem] text-sm">
                                    {
                                        responsibilties.map((item) => (
                                            <li key={item.id}>
                                                {item.desc}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            <div>
                                <h1>Requirements</h1>
                                <ul className="list-disc ml-[1rem] text-sm">
                                    <li>Problem-solving skills</li>
                                    <li>Proficiency in one of the skills: {
                                        job?.badge.map((item) => (
                                            <span key={item.tid}>{item.title}, </span>
                                        ))
                                    }</li>
                                    <li>Logical reasoning</li>
                                </ul>
                            </div>

                        <div className="space-y-[12px] mt-[14px]">
                            <h1 className="text-xl">Why Explore a Career at {job?.name}</h1>
                            <hr />
                            <p className="text-sm">A team united by the drive to empower lives with connected machines.



                                Learn - Continuous learning is not just a norm it is a necessity.



                                Create - Be part of the creation process of an open ecosystem that will drive innovation in robotics.



                                Empower - Be part of the rewarding journey of empowering human lives!</p>
                        </div>

                        <div className="space-y-[12px]">
                            <h1>{job?.name} Tech stack</h1>
                            <hr />
                            <div className="space-x-[4px]">
                                <Badge sx={{ paddingX: '12px', backgroundColor: '#d8d8d8', paddingY: '3px', borderRadius: '6px', fontSize: 'small' }}>Kubernetes</Badge>
                                <Badge sx={{ paddingX: '12px', backgroundColor: '#d8d8d8', paddingY: '3px', borderRadius: '6px', fontSize: 'small' }}>Linux</Badge>
                                <Badge sx={{ paddingX: '12px', backgroundColor: '#d8d8d8', paddingY: '3px', borderRadius: '6px', fontSize: 'small' }}>C++</Badge>
                            </div>
                        </div>
                        </div>
                    </Grid>
                </Grid>
                <div className="flex justify-center items-center sticky bottom-0 left-0 bg-white py-3 border-t-[1px] border-t-gray-200">
                <div className="flex justify-between items-center space-x-[10%] w-[30%]">
                                    <p className="text-gray-500 hover:underline w-[100%]" onClick={()=>handleNotInterested(job.id)}>Not interested</p>
                                    <Button variant="contained" fullWidth sx={{ paddingY: 1, backgroundColor: '#305fb6', ":hover": { backgroundColor: '#274d94' } }}>View</Button>
                                </div>
                </div>
            </Box>  
        </Modal>
    )
}

export default SelectedOpportunity