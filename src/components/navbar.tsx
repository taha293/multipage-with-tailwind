import Link from "next/link"
import Image from "next/image"

export default function NavBar() {
    return (
        <div className="w-full h-[91px] text-white flex items-center justify-between px-8">
            <div className=" h-[58px] flex items-center">
                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] leading-8  h-[32px] font-bold tracking-[0.1px]">With-Tailwind</h3>
            </div>
            <div className="md:flex hidden h-[58px] justify-between items-center">
                <div className=" h-[24px] hidden md:block">
                    <ul className="flex  gap-[22px]">
                        <Link href='/'><li><p className="leading-6 font-bold  text-[14px] text-center tracking-[0.2px] hover:text-[#23A6F0]">Home</p></li></Link>
                        <Link href='/about'><li><p className="leading-6 font-bold  text-[14px] text-center tracking-[0.2px] hover:text-[#23A6F0]">About</p></li></Link>
                        <Link href='/contact'><li><p className="leading-6 font-bold  text-[14px] text-center tracking-[0.2px] hover:text-[#23A6F0]">Contact</p></li></Link>
                    </ul>
                </div>
                </div>
                <div className="  h-[52px] hidden md:flex gap-[45px] items-center">
                    <div className="h-[22px]">
                        <a href="#" className="leading-[22px] font-bold  text-[14px] text-right tracking-[0.2px] hover:text-[#23A6F0]">Login</a>
                    </div>
                    <div className="h-[52px]">
                        <button className=" h-[52px] bg-[#23A6F0] rounded-[5px] px-[25px] py-[15px] hover:invert-[.10] transition-all delay-100"><p className="leading-6 font-bold  text-[13px] tracking-[0.2px] w-[60px] h-[22px]">JOIN US</p></button>
                        
                    </div>
                </div>
            
                    <Image className="md:hidden" src="/hamburger.svg" alt="" width={35} height={25}></Image>

        </div>
    )
}