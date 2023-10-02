"use client";

import Image from "next/image";

export default function SectionTwo() {
    return (
        <main className="bg-[#FAFAFA] ml-[150px] mr-[150px] flex mt-[100px] mb-[40px] ">
            <div className="left-side p-[50px]">
                <div>
                    <Image
                        src='/bigImage.png'
                        width={700}
                        height={400}
                        alt="bigImage"
                    />
                </div>
                <div className="ml-[20px]">
                    <Image className=" mt-[20px]"
                        src='/costomerFrame.png'
                        width={200}
                        height={200}
                        alt="costomerFrame"
                    />
                    <p className="mt-[20px] text-[18px]">“As soon as the Clarifions arrived I put one in my bedroom. This was late <br /> in the afternoon. When I went to the bedroom in the evening it smelled  <br />clean. When I went to bed I felt I could breathe better. Wonderful.”</p>

                </div>
            </div>
            <div className="right-side p-[50px]">
                <h1 className="text-manrope text-[38px]"><span className="text-[#2C7EF8]">ONE TIME ONLY</span> Special price for 6<br />extra Clarifion for only $14 each<br />($84.00 total!)</h1>
                <Image className=" mt-[40px]"
                    src='/airIonizerFrame.png'
                    width={620}
                    height={100}
                    alt="airIonizerFrame"
                />

                <ul className="">
                    <div className="flex mt-[40px]">
                        <li>
                            <Image className=""
                                src='/tick-circle.png'
                                width={30}
                                height={30}
                                alt="tick-circle"
                            />
                        </li>
                        <p className="ml-[15px] text-manrope font-normal">Negative Ion Technology may <span className="font-bold text-[#2C7EF8]"> help with allergens</span></p>
                    </div>

                    <div className="flex mt-[25px]">

                    <li>
                        <Image className=""
                            src='/tick-circle.png'
                            width={30}
                            height={30}
                            alt="tick-circle"
                        />
                    </li>

                    <p className="ml-[15px] text-manrope font-normal">Designed for<span className="font-bold"> air rejuvenation</span></p>
                    
                    </div>

                    <div className="flex mt-[25px]">

                    <li>
                        <Image className=""
                            src='/tick-circle.png'
                            width={30}
                            height={30}
                            alt="tick-circle"
                        />
                    </li>
                    <p className="ml-[15px] text-manrope font-normal"><span className="font-bold">Perfect for every room </span>in all types of places.</p>
                    </div>
                </ul>
                <div className="coupon-area bg-[#EDF3FD] w-[650px] h-[70px] mt-[20px] rounded-2xl flex">
                <Image className="m-[20px]"
                            src='/percentageSign.png'
                            width={30}
                            height={30}
                            alt="percentageSign"
                        />
                        <p className="mt-[20px] text-manrope font-normal text-[19px]">Save <span className="text-[#2C7EF8]">53%</span> and get <span className="text-[#2C7EF8]">6 extra Clarifision</span> for only <span className="text-[#2C7EF8]">$14 Each</span></p>

                </div>

                <div className="buy-area mt-[20px] ">
                    <h2 className="bg-[#59AE43] text-[white] p-[15px] pl-[170px] rounded-3xl text-[25px] text-manrope font-semibold">Yes - Claim my discount</h2>
                    <Image className="mt-[20px]"
                            src='/buyingFrame.png'
                            width={700}
                            height={100}
                            alt="buyingFrame"
                        />
                        <h2 className="text-[#F82C2C] text-center text-[28px] pt-[20px] underline text-manrope font-normal">No thanks, I don’t want this.</h2>
                </div>
                <div className="guarantee-area flex mt-[20px]">
                <Image className=""
                            src='/stamp.png'
                            width={100}
                            height={100}
                            alt="stamp"
                        />
                        <p className="text-manrope font-light ml-[20px] text-[18px]">If you are not completely thrilled with your Clarifion - We<br/> have a <span className="text-manrope font-semibold">30 day satisfaction guarantee.</span> Please refer to our<br/> return policy at the bottom of the page for more details.<br/> Happy Shopping!</p>
                </div>
            </div>
        </main>
    )
}