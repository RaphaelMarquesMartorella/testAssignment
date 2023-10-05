"use client";

import Image from "next/image";

export default function NavBar() {
    return (
        <main>
            <div className="bg-[#252F3D] h-[60px] flex justify-around pt-[20px] sm:pt-[25px] sm:text-[7px] md:text-[9px] lg:text-[13px]">
                <h4 className="text-white font-manrope">
                    <div className="flex items-center">
                        <Image
                            className="object-cover"
                            src='/opaceCheck.png'
                            alt="checkSign"
                            width={18}
                            height={10}
                        />
                        <span className="ml-2">30-DAY SATISFACTION GUARANTEE</span>
                    </div>
                </h4>
                <h4 className="text-white font-manrope hidden sm:inline">
                    <div className="flex items-center">
                        <Image
                            className="object-cover"
                            src='/littleTruck.png'
                            alt="littleTruck"
                            width={18}
                            height={10}
                        />
                        <span className="ml-2">FREE DELIVERY ON ORDERS OVER $40.00</span>
                    </div>
                </h4>
                <h4 className="text-white font-manrope hidden sm:inline">
                    <div className="flex items-center">
                        <Image
                            className="object-cover"
                            src='/opaceHeart.png'
                            alt="opaceHeart"
                            width={18}
                            height={10}
                        />
                        <span className="ml-2">50,000+ HAPPY CUSTOMERS</span>
                    </div>
                </h4>
                <h4 className="text-white font-manrope hidden sm:inline">
                    <div className="flex items-center">
                        <Image
                            className="object-cover"
                            src='/weirdCheck.png'
                            alt="weirdCheck"
                            width={18}
                            height={10}
                        />
                        <span className="ml-2">100% Money Back Guarantee</span>
                    </div>
                </h4>

            </div>
        </main>

    );
}
