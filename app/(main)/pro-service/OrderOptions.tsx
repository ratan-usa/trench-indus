import React from 'react';
import Link from 'next/link';

export default function OrderOptions() {
  return (
    <section className="bg-white font-sans">
      <div className="p-6 md:p-8 lg:p-12">

        {/* --- HEADER --- */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Order Trench Industries your way
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            On the jobsite, in the truck, or at the office—get the heavy-duty adjustment rings and frames you need, exactly how you want to buy them.
          </p>
        </div>

        {/* --- 3-COLUMN LAYOUT BOX --- */}
        <div className="bg-gray-50 p-8 md:p-10 lg:p-12 border border-gray-100 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">

            {/* Column 1: Online */}
            <div className="flex flex-col h-full">
              <h3 className="font-bold text-gray-900 text-lg mb-3">
                Online
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm md:text-base">
                Place orders in a few clicks through your <Link href="#portal" className="text-[#CC0000] hover:underline font-medium">contractor portal</Link>. Save time and have pallets of steel and cast iron risers delivered directly to your staging area so your crew never has to wait.
              </p>
              <div>
                <Link
                  href="#register"
                  className="inline-block bg-white text-[#CC0000] font-bold text-sm px-6 py-2.5 border border-[#CC0000] hover:bg-[#CC0000] hover:text-white transition-colors rounded-sm"
                >
                  Register for account
                </Link>
              </div>
            </div>

            {/* Column 2: Over the phone */}
            <div className="flex flex-col h-full">
              <h3 className="font-bold text-gray-900 text-lg mb-3">
                Over the phone
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm md:text-base">
                Give us a call to place an order with expert help from our dedicated pro sales team. Tell us your specs—whether it's standard rounds or custom rectangular frames—and we'll handle the rest.
              </p>
              <div>
                <Link
                  href="tel:+18005550199"
                  className="inline-block bg-white text-[#CC0000] font-bold text-sm px-6 py-2.5 border border-[#CC0000] hover:bg-[#CC0000] hover:text-white transition-colors rounded-sm"
                >
                  Call your local rep
                </Link>
              </div>
            </div>

            {/* Column 3: In store / Warehouse */}
            <div className="flex flex-col h-full">
              <h3 className="font-bold text-gray-900 text-lg mb-3">
                At the warehouse
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm md:text-base">
                Your local <Link href="#locations" className="text-[#CC0000] hover:underline font-medium">supply counter</Link> has everything you need to keep your paving crew moving. Pull up the truck and pick from thousands of standard adjustment risers and extensions guaranteed to be in stock.
              </p>
              <div>
                <Link
                  href="#locations"
                  className="inline-block bg-white text-[#CC0000] font-bold text-sm px-6 py-2.5 border border-[#CC0000] hover:bg-[#CC0000] hover:text-white transition-colors rounded-sm"
                >
                  Find your warehouse
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}