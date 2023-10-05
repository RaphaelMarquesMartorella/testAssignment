"use client";

import Image from "next/image";

export default function SectionTwo() {
    return (
        <main className="bg-[#FAFAFA] px-4 sm:px-0 md:px-8 lg:px-16 xl:px-32 flex flex-col sm:flex-row sm:mt-5 sm:mt-10 mb-5 sm:mb-10 sm:ml-[80px] sm:mr-[80px]">
            <div className="left-side p-4 sm:p-6 md:p-8 lg:p-10">
                <div>
                    <Image className="hidden md:block"
                        src='/bigImage.png'
                        width={700}
                        height={400}
                        alt="bigImage"
                    />
                </div>
                <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 ml-0 sm:ml-4 md:ml-8 lg:ml-10">
                    <div className="md:w-full xl:w-1/3">
                    <Image className="hidden md:block object-cover w-full h-auto"
                        src='/costomerFrame.png'
                        width={200}
                        height={200}
                        alt="costomerFrame"
                    />
                    </div>
                    
                    <p className="mt-4 text-sm md:text-[9px] md:leading-2 lg:text-[13px] xl:text-[15px] hidden md:block">“As soon as the Clarifions arrived I put one in my bedroom. This was late <br /> in the afternoon. When I went to the bedroom in the evening it smelled  <br />clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
                </div>
            </div>

            <div className="right-side p-4 mt-[-30px] sm:mt-2 sm:p-6 md:p-8 lg:p-10">
                <h1 className="text-manrope text-[15px] sm:text-xl sm:leading-6 md:text-[14px] md:leading-4 lg:text-xl lg:leading-6 xl:text-3xl"><span className="text-[#2C7EF8]">ONE TIME ONLY</span> Special price for 6<br />extra Clarifion for only $14 each<br />($84.00 total!)</h1>
                <Image
                    src='/airIonizerFrame.png'
                    width={600}
                    height={100}
                    alt="airIonizerFrame"
                    className="mt-4 sm:mt-6 md:mt-2 lg:mt-5"
                />
                <ul className="mt-4 sm:mt-6 md:mt-3 lg:mt-5">
                <li className="flex items-center lg:mt-5">
                    <div className="w-1/4 sm:w-1/5 md:w-1/3 lg:w-1/3 xl:w-1/4   ">
                        <Image
                            className="object-cover w-1/4 h-auto"
                            src='/tick-circle.png'
                            width={30}
                            height={30}
                            alt="tick-circle"
                        />
                        </div>
                        <p className="ml-[-35px] sm:ml-[-38px] md:ml-[-33px] lg:ml-[-55px] xl:ml-[-76px] text-manrope text-xs sm:text-[13px] md:text-[10px] lg:text-[14px] xl:text-[19px] xl:leading-7 font-normal">Negative Ion Technology may <span className="font-bold text-[#2C7EF8]">help with allergens</span></p>
                    </li>
                    <li className="flex items-center sm:mt-1 lg:mt-5">
                    <div className="w-1/4 sm:w-1/5 md:w-1/3 lg:w-1/3 xl:w-1/4">
                        <Image
                            className="object-cover w-1/4 h-auto"
                            src='/tick-circle.png'
                            width={30}
                            height={30}
                            alt="tick-circle"
                        />
                        </div>
                        <p className="ml-[-36px] sm:ml-[-39px] md:ml-[-35px] lg:ml-[-60px] xl:ml-[-76px] text-manrope text-xs sm:text-[13px] md:text-[10px] lg:text-[14px] xl:text-[19px] xl:leading-7 font-normal">Perfect for every room <span className="font-bold text-[#2C7EF8]">in all types of places.</span></p>
                    </li>
                    <li className="flex items-center sm:mt-1 lg:mt-5">
                    <div className="w-1/4 sm:w-1/5 md:w-1/3 lg:w-1/3 xl:w-1/4">
                        <Image
                            className="object-cover w-1/4 h-auto"
                            src='/tick-circle.png'
                            width={30}
                            height={30}
                            alt="tick-circle"
                        />
                        </div>
                        <p className="ml-[-36px] sm:ml-[-38px] md:ml-[-33px] lg:ml-[-55px] xl:ml-[-75px] text-manrope text-xs sm:text-[13px] md:text-[10px] lg:text-[14px] xl:text-[19px] xl:leading-7 font-normal">Negative Ion Technology may <span className="font-bold text-[#2C7EF8]"> help with allergens</span></p>
                    </li>
                </ul>
                <div className="coupon-area bg-[#EDF3FD] mt-4 md:mt-4 lg:mt-4 lg:mt-10 rounded-2xl flex">
                    <div className="md:w-1/5 xl:w-1/6">
                    <Image
                        src='/percentageSign.png'
                        width={30}
                        height={30}
                        alt="percentageSign"
                        className="m-2 object-cover w-1/2 h-auto"
                    />
                    </div>
                    <p className="mt-2 sm:mt-3 lg:mt-2 xl:mt-4 text-manrope md:mt-2 font-normal w-[100%] text-xs sm:text-[11px] md:p-0 lg:text-[13px] xl:text-[18px] md:text-[9px] md:leading-4 sm:text-[10px]">Save <span className="text-[#2C7EF8]">53%</span> and get <span className="text-[#2C7EF8]">6 extra Clarifision</span> for only <span className="text-[#2C7EF8]">$14 Each</span></p>
                </div>
                <div className="buy-area mt-4 sm:mt-6 md:mt-4 lg:mt-5 xl:mt-9">
                    <h2 className="bg-[#59AE43] text-center text-white p-2 sm:p-2 md:p-1 lg:p-3 xl:p-4 rounded-3xl text-md sm:text-xl md:text-[11px] lg:text-lg xl:text-2xl text-manrope font-semibold cursor-pointer">Yes - Claim my discount</h2>
                    <Image
                        src='/buyingFrame.png'
                        width={700}
                        height={100}
                        alt="buyingFrame"
                        layout="responsive"
                        className="mt-4 sm:mt-6 md:mt-2 lg:mt-4 xl:mt-6"
                    />
                    <h2 className="text-[#F82C2C] text-center text-md sm:text-md md:text-[14px] lg:text-lg xl:text-2xl mt-4 sm:mt-6 md:mt-2 lg:mt-3 xl:mt-6 underline text-manrope font-normal cursor-pointer">No thanks, I don’t want this.</h2>
                </div>
                <div className="guarantee-area flex mt-4 sm:mt-4 md:mt-2 lg:mt-3 xl:mt-7">

                    <div className="w-1/5 xs:w-full sm:w-1/6 md:w-1/3 lg:w-1/2 xl:w-1/5">
                    <Image
                        className="object-cover w-full h-full"
                        src='/stamp.png'
                        alt="stamp"
                        layout="responsive"
                        width={50}
                        height={50}
                    />
                    </div>
                    <p className="text-manrope font-light ml-2 sm:ml-4 md:ml-6 lg:ml-8 text-[8px] xl:text-[16px] xl:leading-6 sm:text-[7px] sm:leading-4 md:leading-1 md:text-[9px] lg:leading-4 lg:text-[10px] xl:text-[16px] sm:text-base">If you are not completely thrilled with your Clarifion - We<br/> have a <span className="text-manrope font-semibold">30 day satisfaction guarantee.</span> Please refer to our<br/> return policy at the bottom of the page for more details.<br/> Happy Shopping!</p>
                </div>

            </div>
        </main>
    );
}
