"use client";

import Image from "next/image";

export default function SectionOne() {
    return (
        <main className="bg-[#FAFAFA] sm:bg-[white] mt-[15px]">
            <div className="pt-5 sm:pt-10">
                <h1 className="text-manrope text-center text-3xl sm:text-3xl md:text-4xl lg:text-[40px]">Wait! Your order is in progress.</h1>
                <h3 className="text-manrope text-center text-md sm:text-xl md:text-2xl lg:text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing.</h3>
            </div>


            <div className="steps flex flex text-[12px] sm:flex-row justify-center sm:justify-around mt-5 sm:mt-10">
                <div className="flex items-center mb-3 sm:mb-0">
                    <Image
                        className="flex w-auto max-h-[30px] sm:w-auto sm:max-h-[40px] md:w-auto md:max-h-[50px] lg:w-auto lg:max-h-[60px]"
                        src='/checkSign.png'
                        width={30}
                        height={30}
                        alt="checkSign"
                    />

                    <p className="font-manrope text-[9px] sm:text-md md:text-lg font-thin pl-2 sm:pl-5">Step 1: Cart Review</p>
                </div>
                <div className="flex items-center mb-3 sm:mb-0">
                    <Image
                        className="flex w-auto max-h-[30px] sm:w-auto sm:max-h-[40px] md:w-auto md:max-h-[50px] lg:w-auto lg:max-h-[60px]"
                        src='/checkSign.png'
                        width={30}
                        height={30}
                        alt="checkSign"
                    />

                    <p className="font-manrope text-[9px] sm:text-md md:text-lg font-thin pl-2 sm:pl-5">Step 2: Checkout</p>
                </div>
                <div className="flex items-center mb-3 sm:mb-0">
                    <Image
                        className="flex w-auto max-h-[30px] sm:w-auto sm:max-h-[40px] md:w-auto md:max-h-[50px] lg:w-auto lg:max-h-[60px]"
                        src='/3rdStep.png'
                        width={30}
                        height={30}
                        alt="3rdStep"
                    />

                    <p className="font-manrope text-[9px] sm:text-md md:text-lg font-thin pl-2 sm:pl-5">Step 3: Special Offer</p>
                </div>
                <div className="flex items-center">
                    <Image
                        className="flex w-auto max-h-[30px] sm:w-auto sm:max-h-[40px] md:w-auto md:max-h-[50px] lg:w-auto lg:max-h-[60px]"
                        src='/4thStep.png'
                        width={30}
                        height={30}
                        alt="4thStep"
                    />

                    <p className="font-manrope text-[9px] sm:text-md md:text-lg font-thin pl-2 sm:pl-5">Step 4: Confirmation</p>
                </div>
            </div>


        </main>
    );
}
