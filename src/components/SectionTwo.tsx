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
                    <Image className="hidden md:block"
                        src='/costomerFrame.png'
                        width={200}
                        height={200}
                        alt="costomerFrame"
                    />
                    <p className="mt-4 text-sm md:text-[12px] lg:text-[16px] hidden md:block">“As soon as the Clarifions arrived I put one in my bedroom. This was late <br /> in the afternoon. When I went to the bedroom in the evening it smelled  <br />clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
                </div>
            </div>

            <div className="right-side p-4 sm:p-6 md:p-8 lg:p-10">
                <h1 className="text-manrope text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl"><span className="text-[#2C7EF8]">ONE TIME ONLY</span> Special price for 6<br />extra Clarifion for only $14 each<br />($84.00 total!)</h1>
                <Image
                    src='/airIonizerFrame.png'
                    width={600}
                    height={100}
                    alt="airIonizerFrame"
                    className="mt-4 sm:mt-6 md:mt-8 lg:mt-10"
                />
                <ul className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                    <li className="flex items-center">
                        <Image
                            src='/tick-circle.png'
                            width={30}
                            height={30}
                            alt="tick-circle"
                        />
                        <p className="ml-2 sm:ml-4 md:ml-6 lg:ml-8 text-manrope text-xs sm:text-[15px] lg:text-lg font-normal">Negative Ion Technology may <span className="font-bold text-[#2C7EF8]"> help with allergens</span></p>
                    </li>
                    <li className="flex items-center mt-2 sm:mt-3 md:mt-4 lg:mt-5">
                        <Image
                            src='/tick-circle.png'
                            width={30}
                            height={30}
                            alt="tick-circle"
                        />
                        <p className="ml-2 sm:ml-4 md:ml-6 lg:ml-8 text-manrope text-xs sm:text-[15px] lg:text-lg font-normal">Designed for<span className="font-bold"> air rejuvenation</span></p>
                    </li>
                    <li className="flex items-center mt-2 sm:mt-3 md:mt-4 lg:mt-5">
                        <Image
                            src='/tick-circle.png'
                            width={30}
                            height={30}
                            alt="tick-circle"
                        />
                        <p className="ml-2 sm:ml-4 md:ml-6 lg:ml-8 text-manrope text-xs sm:text-[15px] lg:text-lg font-normal"><span className="font-bold">Perfect for every room </span>in all types of places.</p>
                    </li>
                </ul>
                <div className="coupon-area bg-[#EDF3FD] mt-4 sm:mt-6 md:mt-8 lg:mt-10 rounded-2xl flex">
                    <Image
                        src='/percentageSign.png'
                        width={30}
                        height={30}
                        alt="percentageSign"
                        className="m-2"
                    />
                    <p className="mt-2 text-manrope font-normal w-[100%] text-xs sm:text-base lg:text-[14px] xl:text-[17px] md:text-[10px] sm:text-[10px]">Save <span className="text-[#2C7EF8]">53%</span> and get <span className="text-[#2C7EF8]">6 extra Clarifision</span> for only <span className="text-[#2C7EF8]">$14 Each</span></p>
                </div>
                <div className="buy-area mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                    <h2 className="bg-[#59AE43] text-center text-white p-2 sm:p-2 md:p-3 lg:p-4 rounded-3xl text-lg sm:text-xl md:text-1xl lg:text-2xl xl:text-2xl text-manrope font-semibold cursor-pointer">Yes - Claim my discount</h2>
                    <Image
                        src='/buyingFrame.png'
                        width={700}
                        height={100}
                        alt="buyingFrame"
                        layout="responsive"
                        className="mt-4 sm:mt-6 md:mt-8 lg:mt-10"
                    />
                    <h2 className="text-[#F82C2C] text-center text-md sm:text-md md:text-lg lg:text-xl xl:text-3xl mt-4 sm:mt-6 md:mt-8 lg:mt-10 underline text-manrope font-normal cursor-pointer">No thanks, I don’t want this.</h2>
                </div>
                <div className="guarantee-area flex mt-4 sm:mt-6 md:mt-8 lg:mt-10">

                    <div className="w-1/6 xs:w-full sm:w-1/5 md:w-full lg:w-1/6">
                    <Image
                        className="object-cover w-full h-full"
                        src='/stamp.png'
                        alt="stamp"
                        layout="responsive"
                        width={50}
                        height={50}
                    />
                    </div>
                    <p className="text-manrope font-light ml-2 sm:ml-4 md:ml-6 lg:ml-8 text-xs sm:text-[8px] sm:leading-3 md:leading-4 md:text-[10px] lg:leading-5 lg:text-[15px] xl:text-[17px] sm:text-base">If you are not completely thrilled with your Clarifion - We<br/> have a <span className="text-manrope font-semibold">30 day satisfaction guarantee.</span> Please refer to our<br/> return policy at the bottom of the page for more details.<br/> Happy Shopping!</p>
                </div>

            </div>
        </main>
    );
}
