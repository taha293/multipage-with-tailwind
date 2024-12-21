import Link from "next/link"
export default function Homehero() {
    return (
        <div className=" py-16 px-7 gap-20 text-white flex items-center flex-col">
            <div className=" ">
                <div className="  py-10 gap-10 flex flex-col justify-center items-center">
                    <h5 className=" h-[24px] font-bold text-[16px] leading-6 tracking-[0.1px] text-[#23A6F0]">Welcome</h5>
                    <h1 className="  font-bold lg:text-[58px] lg:leading-[80px] leading-[60px] text-[36px] sm:leading-[66px] sm:text-[40px] md:leading-[70px] md:text-[44px]    text-center ">Selling on the internet like a pro</h1>
                    <h4 className="  text-[16px] sm:text-[18px] lg:text-[20px] leading-[30px] tracking-[0.2px] text-center ">We know how large objects will act, but things on a
                        small scale just do not act that way.</h4>
                    <div className="h-[52px] gap-[10px] flex">
                       <Link href='/contact'> <button className=" h-[52px] rounded-[5px] py-[15px] px-[40px] gap-[10px] bg-[#23A6F0]  text-[14px] font-bold text-center hover:invert-[.10] transition-all delay-100">
                            Contact US
                        </button></Link>
                        <Link href='/about'> <button className=" h-[52px] rounded-[5px] border border-[#23A6F0] py-[15px] px-[38px] gap-[10px] text-[14px] text-[#23A6F0] font-bold text-center hover:bg-[#23A6F0] hover:text-white transition-all delay-100">
                            About US
                        </button></Link>
                    </div>
                </div>
            </div>
            {/* <div className=" h-[292px] gap-[30px] flex w-full">
                <div className=" h-[292px] hover:scale-110 transition-all delay-200 ease-in-out">
                    <div className="w-[328px] h-[292px] px-10 py-[35px] shadow-[0_13px_19px_0_#00000012] gap-5 bg-white flex flex-col">
                        <div className="w-[76px] h-[76px] rounded-[10px] py-[22px] px-[19px] gap-[10px] bg-[#FFDCD1]">
                        </div>
                        <h3 className="h-[24px] font-bold text-[16px] text-[#252B42] tracking-[0.1px] leading-6">training Courses</h3>
                        <div className="w-[50px] h-[2px] bg-[#e74040]"></div>
                        <p className=" h-[60px] leading-5 tracking-[0.2px] text-[#737373]">The gradual accumulation of
                            information about atomic and
                            small-scale behaviour...</p>
                    </div>
                </div>
                <div className="w-[328px] h-[292px] hover:scale-110 transition-all delay-200 ease-in-out">
                    <div className="w-[328px] h-[292px] px-10 py-[35px] shadow-[0_13px_19px_0_#00000012] gap-5 bg-white flex flex-col">
                        <div className="w-[76px] h-[76px] rounded-[10px] py-[22px] px-[19px] gap-[10px] bg-[#B9EAA8]">
                        </div>
                        <h3 className="h-[24px] font-bold text-[16px] text-[#252B42] tracking-[0.1px] leading-6">2,769 online courses</h3>
                        <div className="w-[50px] h-[2px] bg-[#e74040]"></div>
                        <p className=" h-[60px] leading-5 tracking-[0.2px] text-[#737373]">The gradual accumulation of
                            information about atomic and
                            small-scale behaviour...</p>
                    </div>
                </div>
                <div className="w-[328px] h-[292px] hover:scale-110 transition-all delay-200 ease-in-out">
                    <div className="w-[328px] h-[292px] px-10 py-[35px] shadow-[0_13px_19px_0_#00000012] gap-5 bg-[#23a6f0] flex flex-col">
                        <div className="w-[76px] h-[76px] rounded-[10px] py-[22px] px-[19px] gap-[10px] bg-[#ffffff]">
                        </div>
                        <h3 className="h-[24px] font-bold text-[16px] text-[#ffffff] tracking-[0.1px] leading-6">training Courses</h3>
                        <div className="w-[50px] h-[2px] bg-[#ffffff]"></div>
                        <p className=" h-[60px] leading-5 tracking-[0.2px] text-[#ffffff]">The gradual accumulation of
                            information about atomic and
                            small-scale behaviour...</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}