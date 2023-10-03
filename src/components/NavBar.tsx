"use client";

export default function NavBar() {
    return (
        <main>
        <div className="bg-[#252F3D] h-[60px] flex justify-around pt-[20px] sm:pt-[25px] sm:text-[9px] md:text-[11px] lg:text-[15px]">
            <h4 className="text-white font-manrope">30-DAY SATISFACTION GUARANTEE</h4>
            <h4 className="text-white font-manrope hidden sm:inline">FREE DELIVERY ON ORDER OVER $40.00</h4>
            <h4 className="text-white font-manrope hidden sm:inline">50.000+ HAPPY CUSTOMERS</h4>
            <h4 className="text-white font-manrope hidden sm:inline">100% Money Back Guarantee</h4>
        </div>
    </main>
    
    );
}
