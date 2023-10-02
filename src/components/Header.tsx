"use client";

import Image from "next/image";

export default function Header() {
    return (
        <main className="">
            <div className="Title flex justify-around">
                <Image className="mt-[50px] mr-[700px]"
                    src='/image1.png'
                    width={220}
                    height={100}
                    alt="image1" />
                <Image className="mt-[50px] ml-[200px]"
                    src='/frame.png'
                    width={220}
                    height={90}
                    alt="frame" />
            </div>

        </main>
    )
}