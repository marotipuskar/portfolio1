// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-primary text-white text-center py-4">
//       <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react'

function Footer() {
  return (
    <>
    <div class="bg-gray-900 text-white p-8 mt-4">
    <div class="container mx-auto text-center">
        {/* <!-- Social Media Links --> */}
        <div class="mb-6">
            <h3 class="text-2xl font-bold mb-4">Stay Connected</h3>
            <div class="flex justify-center space-x-6">
                <a href="https://www.linkedin.com/in/maroti-puskar/" target="_blank" class="text-blue-500 hover:text-blue-400 transition duration-300">
                    <i class="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://www.instagram.com/marotitechnics11/" target="_blank" class="text-pink-500 hover:text-pink-400 transition duration-300">
                    <i class="fab fa-instagram fa-2x"></i>
                </a>
                <a href="https://www.youtube.com/@marotitechnics" target="_blank" class="text-red-500 hover:text-red-400 transition duration-300">
                    <i class="fab fa-youtube fa-2x"></i>
                </a>
                <a href="https://x.com/marotipuskar" target="_blank" class="text-blue-400 hover:text-blue-300 transition duration-300">
                    <i class="fab fa-twitter fa-2x"></i>
                </a>
            </div>
        </div>

        {/* <!-- Email Subscription --> */}
        <div class="mb-6">
            <p class="text-lg">Stay informed with our updates:</p>
            <a href="mailto:adinath@gmail.com" class="inline-flex items-center text-teal-400 hover:text-teal-300 transition duration-300 mt-2">
                <i class="fas fa-envelope fa-lg mr-2"></i> 
                <span>adinath@gmail.com</span>
            </a>
        </div>

        {/* <!-- Links --> */}
        <div class="mb-6 space-x-6">
            <a href="PrivacyPolicy.jsx" class="text-sm hover:text-teal-300 transition duration-300">Privacy Policy</a>
            <a href="TermsAndConditions.jsx" class="text-sm hover:text-teal-300 transition duration-300">Terms & Conditions</a>
            <a href="AboutUs.jsx" class="text-sm hover:text-teal-300 transition duration-300">About Us</a>
        </div>

        {/* <!-- Copyright --> */}
        <div>
            <p class="text-xs text-gray-400">copyright &copy; 2024 <a href='/' className='hover:text-white'>Facemash.</a> All rights reserved.</p>
            <p class="text-xs text-gray-400 mt-1">This website is designed by <strong className=' text-white hover:text-sm hover:text-cyan-400'><a href='https://www.linkedin.com/in/maroti-puskar/'>Maroti Puskar</a> </strong></p>
        </div>
    </div>
    {/* aa */}
</div>

      
    </>
  )
}

export default Footer