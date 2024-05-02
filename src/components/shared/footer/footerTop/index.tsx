import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
    return (
        <div className="bg-[#f3f3f3] py-10">
            <div className='flex mx-10'>
            <div className='w-1/3'>
                <h2 className="text-2xl font-bold"><span className="text-red-500">RAF</span>CART</h2>
                <p className='my-3 text-sm '>Lorem ipsum, or lipsum as it is sometimes <br /> kno wn, is dummy text used in laying out <br /> print, gra phic or web designs the passage.</p>
                <h4 className='my-3 text-md text-black font-bold'>NEWSLETTER</h4>
                <div className="flex w-full max-w-sm items-center">
                    <Input className='border-2 w-48' type="email" placeholder="Email" />
                    <Button className='bg-red-500' type="submit">Subscribe</Button>
                </div>
            </div>
            <div className='w-1/3 flex'>
                <div className="w-1/2">
                    <h4 className='text-md font-bold mt-2 mb-4'>MY ACCOUNT</h4>
                    <ul>
                        <li className='my-3 text-sm'>Orders</li>
                        <li className='my-3 text-sm'>Wishlist</li>
                        <li className='my-3 text-sm'>Track Order</li>
                        <li className='my-3 text-sm'>Manage Account</li>
                        <li className='my-3 text-sm'>Return Order</li>
                    </ul>
                </div>
                <div className="w-1/2">
                    <h4 className='text-md font-bold mt-2 mb-4'>INFORMATION</h4>
                    <ul>
                        <li className='my-3 text-sm'>About Us</li>
                        <li className='my-3 text-sm'>Return Policy</li>
                        <li className='my-3 text-sm'>Terms & condition</li>
                        <li className='my-3 text-sm'>Privacy Policy</li>
                        <li className='my-3 text-sm'>FAQ</li>
                    </ul>
                </div>
            </div>
            <div className='w-1/3'>
                <h4 className='text-md font-bold mt-2 mb-4'>CONTACT</h4>
                <ul>
                    <li className="flex gap-2 justify-start items-start my-3 text-sm">
                        <span className="mt-1"><FaMapMarkerAlt /></span>
                        <p>7895 Dr New Albuquerue, NM 19800, <br />
                        United States Of America</p>
                    </li>
                    <li className="flex gap-2 justify-start items-start my-3 text-sm">
                        <span className="mt-1"><FaPhoneAlt /></span>
                        <p>+566 477 256, +566 254 575</p>
                    </li>
                    <li className="flex gap-2 justify-start items-start my-3 text-sm">
                        <span className="mt-1"><CiMail /></span>
                        <p>info@domain.com</p>
                    </li>
                </ul>
                <div className="flex gap-2">
                    <span className='p-2 bg-[#3b5998] text-white rounded-full'><FaFacebookF /></span>
                    <span className='p-2 bg-[#00acee] text-white rounded-full'><FaTwitter /></span>
                    <span className='p-2 bg-[#d53982] text-white rounded-full'><CiInstagram /></span>
                </div>
            </div>

        </div>
        </div>
    );
};

export default Footer;