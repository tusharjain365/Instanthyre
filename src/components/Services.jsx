import { services } from "../util/services";

const Services=()=> {
    return (
        <div className="w-[100%] flex justify-center items-center">
            <div className="w-[90%] md:w-[80%] lg:w-[60%] space-y-[60px] mt-[30px]">
                {
                    services.map((item)=> (
                        <div key={item.id} className='flex justify-between items-center'>
                            <div className="space-y-2 w-[100%] md:w-[70%]">
                                <h1 className="text-xl font-bold">{item.heading}</h1>
                                <p>{item.content}</p>
                            </div>
                            <img src={item.img} alt="service" className="hidden md:block"/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services;