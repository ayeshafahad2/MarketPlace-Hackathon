import { FaFacebook, FaGoogle } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';


export default function Login() {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative">
        <Image src="/blog.png" alt="Hero Image" width={400} height={200} className="w-full h-[400px] object-cover" />
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={400}
            height={200}
            className="w-20 h-20 object-contain cursor-pointer"
          />
          <div className="mt-4">
            <h1 className="text-4xl font-bold text-gray-800">Login</h1>
            <p className="text-gray-600 text-lg">Home &gt; Login</p>
          </div>
        </div>
      </div>

      {/* Login Form Container */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

          <form action="#" method="POST">
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="johndoe@example.com" 
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="********" 
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Login Button */}
            <button type="submit" className="w-full bg-selfcolors-darkBrown text-selfcolors-customCream py-3 rounded-lg mb-4 hover:bg-selfcolors-lightCream hover:text-selfcolors-darkBrown transition-200">
              Login
            </button>

            {/* Social Login Options */}
            <div className="flex items-center justify-between mb-4">
              <button className="w-full bg-selfcolors-darkBrown text-selfcolors-lightCream py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-selfcolors-lightCream hover:text-selfcolors-darkBrown transition-200">
                <FaFacebook />
                <span>Continue with Facebook</span>
              </button>
            </div>

            <div className="flex items-center justify-between mb-6">
              <button className="w-full bg-selfcolors-darkBrown text-selfcolors-lightCream py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-selfcolors-lightCream hover:text-selfcolors-darkBrown transition-200">
                <FaGoogle />
                <span>Continue with Google</span>
              </button>
            </div>

            {/* Account Signup Link */}
            <div className="text-sm text-center">
              {`Don't have an account?`}{' '}
              <Link href="/signup" className="bg-selfcolors-darkBrown text-selfcolors-lightCream hover:text-black hover:bg-selfcolors-lightCream">
                Sign up here
              </Link>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
}
