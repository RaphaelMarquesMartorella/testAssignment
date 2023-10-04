"use client";

import Image from "next/image";

export default function Header() {
    return (
        <main className="">
            <div className="Title flex flex-row justify-around sm:flex-row sm:justify-between sm:mr-[100px] sm:ml-[100px] sm:mt-[40px]">
                <div className="w-1/3 h-auto sm:w-1/3 md:w-1/3 mr-[20px] lg:w-1/6 aspect-w-4 aspect-h-3 mt-[15px]">
                    <Image
                        className="object-cover w-full h-full sm:w-4/5 md:w-3/4 lg:w-full"
                        src='/image1.png'
                        alt="image1"
                        layout="responsive"
                        width={220}
                        height={100}
                    />
                </div>

                <div className="w-1/3 h-auto sm:w-1/2 md:w-1/3 lg:w-1/6 aspect-w-4 aspect-h-3  mt-2">
                    <Image
                        className="object-cover w-full h-full sm:w-4/5 md:w-3/4 lg:w-full mt-2 sm:mt-0"
                        src='/frame.png'
                        alt="frame"
                        layout="responsive"
                        width={220}
                        height={90}
                    />
                </div>
            </div>
        </main>


    )
}
