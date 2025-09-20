// @ts-nocheck
import { Link } from "react-router-dom";
import Lucide from "../../base-components/Lucide";
import footerImg from "../../assets/images/footer_banner.jpg";

const Footer = (props)=>{
 
    return (
        <>
           <div className="footer_section bg-slate-950 px-4 py-6 md:pt-10 lg:pt-14">
               <div className="container">
                  <div className="footer_top_section pb-10">
                     <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2">
                        <div>
                           <img
                              alt=""
                              className="rounded-lg w-full"
                              src={footerImg}
                           />
                        </div>
                        <div>
                           <h2 className="text-2xl text-neutral-400 font-semibold pb-3 md:text-3xl">Feedbacks from Travellers</h2>
                           <ul>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Darjeeling</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Dooars</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Sundarbans</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Purulia & Bankura</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Digha</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Gangtok</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Puri</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Rajasthan</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Himachal Pradesh</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Kerala</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Uttarakhand</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Bhutan</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Varanasi</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Ayodhya</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Vrindavan</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Mathura</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Delhi</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Pilgrimage</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Student Group</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Student & Corporate Tours Package</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Holiday package</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Hotel Booking</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Chain Hotel & own Hotel</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Guide Services</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Bus / Car/ Railway Pick-up & Drop Facility</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Couple Tours package</Link></li>
                              <li className="float-left"><Link className="text-sm text-neutral-400 bg-zinc-700 py-1.5 px-2.5 rounded mr-1.5 mb-1.5 inline-block hover:bg-orange-500 hover:text-white" to="/">Honeymoon Tour Package</Link></li>
                              
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="footer_middle_section pb-5">
                     <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div>
                           <h3 className="text-lg text-neutral-400 font-semibold uppercase pb-3">Singdha Srijon Tours Pvt. Ltd.</h3>
                           <p className="text-sm text-neutral-500">Tour and travels Booking website based on North East India. Over 5,000+ packages all over India.</p>
                        </div>
                        <div>
                           <h3 className="text-lg text-neutral-500 font-semibold uppercase pb-3">ADDRESS & CONTACT INFO</h3>
                           <p className="text-sm text-neutral-500">89, R.N. Tagore Road, Laldighi, Berhampore, Murshidabad, India, 742101</p>
                        </div>
                        <div>
                           <h3 className="text-lg text-neutral-500 font-semibold uppercase pb-3">SUPPORT & HELP</h3>
                           <ul>
                              <li className="w-1/2 float-left"><Link className="text-sm text-neutral-500 hover:text-orange-500" to="/about-us">About Us</Link></li>
                              <li className="w-1/2 float-left"><Link className="text-sm text-neutral-500 hover:text-orange-500" to="/">FAQ</Link></li>
                              <li className="w-1/2 float-left"><Link className="text-sm text-neutral-500 hover:text-orange-500" to="/">Feedbacks</Link></li>
                              <li className="w-1/2 float-left"><Link className="text-sm text-neutral-500 hover:text-orange-500" to="/">Blog</Link></li>
                              <li className="w-1/2 float-left"><Link className="text-sm text-neutral-500 hover:text-orange-500" to="/">Use Cases</Link></li>
                              <li className="w-1/2 float-left"><Link className="text-sm text-neutral-500 hover:text-orange-500" to="/">Advertise</Link></li>
                              <li className="w-1/2 float-left"><Link className="text-sm text-neutral-500 hover:text-orange-500" to="/">Discount</Link></li>
                              <li className="w-1/2 float-left"><Link className="text-sm text-neutral-500 hover:text-orange-500" to="/">Vacations</Link></li>
                              <li className="w-1/2 float-left"><Link className="text-sm text-neutral-500 hover:text-orange-500" to="/">Branding Offers</Link></li>
                              <li className="w-1/2 float-left"><Link className="text-sm text-neutral-500 hover:text-orange-500" to="/contact-us">Contact Us</Link></li>
                           </ul>
                        </div>
                        <div>
                           <h3 className="text-lg text-neutral-500 font-semibold uppercase pb-3">FOLLOW US</h3>
                           <p className="text-sm text-neutral-500">Join us to expand your horizon and make others comfortable too through sharing knowledge.</p>
                           <div className="header_social_area flex mt-4">
                              <Link className="pl-0 text-neutral-500 hover:text-orange-500" to="https://www.facebook.com/srijontour/" target="_blank"><Lucide icon="Facebook" className="block mx-auto" /></Link>
                              <Link className="pl-2.5 text-neutral-500 hover:text-orange-500" to="https://twitter.com/SrijonTours" target="_blank"><Lucide icon="Twitter" className="block mx-auto" /></Link>
                              <Link className="pl-2.5 text-neutral-500 hover:text-orange-500" to="/" target="_blank"><Lucide icon="Linkedin" className="block mx-auto" /></Link>
                              <Link className="pl-2.5 text-neutral-500 hover:text-orange-500" to="https://www.youtube.com/channel/UCpbIwiDH1QN7o9uzIL7U0JA" target="_blank"><Lucide icon="Youtube" className="block mx-auto" /></Link>
                              <Link className="pl-2.5 text-neutral-500 hover:text-orange-500" to="https://www.instagram.com/srijontour/" target="_blank"><Lucide icon="Instagram" className="block mx-auto" /></Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="footer_bottom_section py-5 border-t border-neutral-500 border-solid">
                     <p className="text-sm text-center text-neutral-500"> © 2019–2025 Singdha Srijon Tours Pvt. Ltd. All Rights Reserved.</p>
                  </div>
               </div>
            </div>
        </>
    )


}

export default Footer;