"use client";

import Image from "next/image";

export default function SectionOne() {
    return (
        <main className="bg-[#FAFAFA] sm:bg-[white] mt-[15px] sm:mt-0 xl:mt-[-20px]">
            <div className="pt-5 sm:pt-10">
                <h1 className="text-manrope text-center text-3xl sm:text-3xl md:text-4xl lg:text-[40px]">Wait! Your order is in progress.</h1>
                <h3 className="text-manrope text-center text-md sm:text-xl md:text-2xl lg:text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing.</h3>
            </div>

            <div className="steps flex text-[12px] sm:flex-row justify-around sm:justify-around mt-5 sm:mt-10">
                <div className="sm:flex flex-column items-center sm:mb-0">
                    <div className="w-1/4 sm:w-1/4 md:w-1/5 lg:w-1/6 ml-[35px]">
                        <Image
                            className="object-cover w-full h-full"
                            src='/checkSign.png'
                            alt="checkSign"
                            layout="responsive"
                            width={30}
                            height={30}
                        />
                    </div>

                    <p className="font-manrope text-[8px] sm:text-[10px] md:text-[16px] font-thin pl-2 sm:pl-5">Step 1: Cart Review</p>
                </div>
                <div className="sm:flex flex-column items-center sm:mb-0">
                    <div className="w-1/4 sm:w-1/4 md:w-1/5 lg:w-1/6 ml-[35px]">
                        <Image
                            className="object-cover w-full h-full"
                            src='/checkSign.png'
                            alt="checkSign"
                            layout="responsive"
                            width={30}
                            height={30}
                        />
                    </div>

                    <p className="font-manrope text-[8px] sm:text-[10px] md:text-[16px] font-thin pl-2 sm:pl-5 mt-[2px]">Step 2: Checkout</p>
                </div>
                <div className="sm:flex flex-column items-center sm:mb-0">
                    <div className="w-1/4 sm:w-1/4 md:w-1/5 lg:w-1/6 ml-[35px]">
                        <Image
                            className="object-cover w-full h-full"
                            src='/3rdStep.png'
                            alt="3rdStep"
                            layout="responsive"
                            width={30}
                            height={30}
                        />
                    </div>

                    <p className="font-manrope text-[8px] sm:text-[10px] md:text-[16px] font-thin pl-2 sm:pl-5">Step 3: Special Offer</p>
                </div>
                <div className="sm:flex flex-column items-center">
                    <div className="w-1/4 sm:w-1/4 md:w-1/5 lg:w-1/6 ml-[35px]">
                        <Image
                            className="object-cover w-full h-full"
                            src='/4thStep.png'
                            alt="4thStep"
                            layout="responsive"
                            width={30}
                            height={30}
                        />
                    </div>

                    <p className="font-manrope text-[8px] sm:text-[10px] md:text-[16px] font-thin pl-2 sm:pl-5">Step 4: Confirmation</p>
                </div>
            </div>
        </main>
    );
}
