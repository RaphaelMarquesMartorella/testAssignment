"use client";

import Image from "next/image";

export default function SectionOne() {
    return (
        <main>
            <div className="pt-[30px]">
                <h1 className="text-manrope text-center text-5xl">Wait ! your order in progress.</h1>
                <h3 className="text-manrope text-center text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing </h3>
            </div>

            <div className="steps flex justify-around mt-[60px]">
                <div className="flex">
                    <Image 
                    className="flex"
                    src='/checkSign.png'
                    width={30}
                    height={30}
                    alt="checkSign" />

                    <p className="font-manrope text-[22px] font-thin pl-[10px]">Step 1 : Cart Review</p>

                </div>
                <div className="flex">
                    <Image 
                    className="flex"
                    src='/checkSign.png'
                    width={30}
                    height={30}
                    alt="checkSign" />

                    <p className="font-manrope text-[22px] font-thin pl-[10px]">Step 2 : Checkout</p>

                </div>
                <div className="flex">
                    <Image 
                    className="flex"
                    src='/3rdStep.png'
                    width={30}
                    height={30}
                    alt="3rdStep" />

                    <p className="font-manrope text-2xl pl-[10px]">Step 3 : Special Offer</p>

                </div>
                <div className="flex">
                    <Image 
                    className="flex"
                    src='/4thStep.png'
                    width={30}
                    height={30}
                    alt="4thStep" />

                    <p className="font-manrope text-[22px] font-thin pl-[10px]">Step 4 : Confirmation</p>

                </div>
            </div>

        </main>
    )
}