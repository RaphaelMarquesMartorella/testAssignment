"use client";

import Image from "next/image";

export default function Footer() {
    return (
        <main className="bg-[#252F3D] py-3 sm:py-5">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-around">
                <h4 className="text-manrope text-white text-xs sm:text-sm md:text-md lg:text-lg text-center font-light mb-2 sm:mb-0 xl:mr-[500px]">
                    Copyright (c) 2023 | Clarifionsupport@clarifion.com
                </h4>
                <h4 className="text-manrope text-white text-xs sm:text-sm md:text-md lg:text-lg text-center font-light">
                    <div className="flex items-center justify-center">
                        <Image
                            className="object-cover mr-3"
                            src='/locker.png'
                            alt="locker"
                            width={17}
                            height={10}
                        />
                        <span>Secure 256-bit SSL encryption.</span>
                    </div>
                </h4>

            </div>
        </main>
    );
}
