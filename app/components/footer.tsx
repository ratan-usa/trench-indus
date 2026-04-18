import { Button } from '@/components/ui/button'
import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const footer = () => {
  return (
    <div>

      {/* --- FOOTER --- */}
      <footer id="contact" className="bg-black text-white pt-20 pb-10">
        <div className="p-6 md:p-8 lg:p-12 grid md:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-black mb-8 uppercase text-[#c92526]">Contact Us</h3>
            <div className="space-y-6 text-lg">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#c92526] mt-1 shrink-0" />
                <p className="leading-relaxed">
                  <span className="font-bold">Mega Paving Risers</span><br />
                  105 Maxes Road<br />
                  Huntington, NY 11747, USA
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#c92526] shrink-0" />
                <a href="mailto:welcome@pavingrisers.com" className="hover:text-[#c92526] transition font-bold">
                  welcome@pavingrisers.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#c92526] shrink-0" />
                <span className="font-bold">Call Now for Wholesale Pricing</span>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-[#1a1a1a] p-10 border-l-4 border-[#c92526]">
            <h4 className="text-2xl font-bold mb-4">Need a Custom Order?</h4>
            <p className="text-gray-400 mb-8">
              We specialize in custom fabrication. Send us your specs or drawings and we will provide a quote within 24 hours.
            </p>
            <Button size="lg" className="w-full bg-[#c92526] hover:bg-white hover:text-[#c92526] font-black uppercase text-lg h-14 transition-colors">
              Contact Sales Team
            </Button>
          </div>
        </div>

        <div className="p-6 md:p-8 lg:p-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Paving Risers. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default footer