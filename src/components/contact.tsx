import Link from "next/link"
export default function Contacthero() {
    return (
        <div className=" py-16 px-7 gap-20 text-white flex items-center flex-col">
            <div className=" ">
                <div className="  py-10 gap-10 flex flex-col justify-center items-center">
                    <h5 className=" h-[24px] font-bold text-[16px] leading-6 tracking-[0.1px] text-[#23A6F0]">Contact Page</h5>
                    <h1 className="  font-bold lg:text-[58px] lg:leading-[80px] leading-[60px] text-[36px] sm:leading-[66px] sm:text-[40px] md:leading-[70px] md:text-[44px]    text-center ">Simple Tailwind Contact Page</h1>
                    <h4 className="  text-[16px] sm:text-[18px] lg:text-[20px] leading-[30px] tracking-[0.2px] text-center ">We know how large objects will act, but things on a
                        small scale just do not act that way.</h4>
                    <div className="h-[52px] gap-[10px] flex">
                       <Link href='/'> <button className=" h-[52px] rounded-[5px] py-[15px] px-[40px] gap-[10px] bg-[#23A6F0]  text-[14px] font-bold text-center hover:invert-[.10] transition-all delay-100">
                            Home
                        </button></Link>
                        <Link href='/about'> <button className=" h-[52px] rounded-[5px] border border-[#23A6F0] py-[15px] px-[38px] gap-[10px] text-[14px] text-[#23A6F0] font-bold text-center hover:bg-[#23A6F0] hover:text-white transition-all delay-100">
                            About US
                        </button></Link>
                    </div>
                </div>
            </div>
           
        </div>
    )
}