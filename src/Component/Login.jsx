import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="h-[100vh] w-[100%]">
      <div className="h-[90vh] w-[100%] flex justify-center items-center gap-10">
        <div className="h-[80vh] w-[22%] border border-solid bg-red-400">
          <img
            className="h-[80vh] w-[100%] object-cover"
            src="https://images.pexels.com/photos/5474282/pexels-photo-5474282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="login-visual"
          />
        </div>
        <div className="h-[80vh] w-[22%] flex flex-col gap-4">
          <div className="h-[60vh] w-[100%] border-[1px] border-solid flex flex-col justify-center items-center gap-7">
            <h1 className="text-[30px] w-[50%]">LOGIN</h1>
            <input
              className="h-[4vh] w-[70%] border-[1px] outline-none border-solid border-[gray] pl-[10px] text-[14px]"
              type="email"
              placeholder="Phone number, username, or email"
            />
            <input
              className="h-[4vh] w-[70%] border-[1px] outline-none border-solid border-[gray] pl-[10px] text-[14px]"
              type="password"
              placeholder="Password"
            />
            <button
              className="h-[5vh] w-[70%] border border-solid rounded-[8px] bg-blue-400 font-bold text-white"
            >
              Log in
            </button>
            <div className="flex justify-center items-center gap-3">
              <div className="h-[1px] w-[90px] bg-black"></div>
              <h1>OR</h1>
              <div className="h-[1px] w-[90px] bg-black"></div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="fa fa-facebook-official" aria-hidden="true"></i>
              <h1 className="font-bold text-blue-950">Log in with Facebook</h1>
            </div>
            <label className="cursor-pointer">Forget password?</label>
          </div>
          <div className="h-[10vh] w-[100%] flex justify-center items-center border-[1px] border-solid">
            <p>
              Don't have an account?{' '}
              <Link to="/signup">
                <span className="text-blue-600 font-bold">Sign up</span>
              </Link>
            </p>
          </div>
          <label className="text-center">Get the app.</label>
          <div className="h-[10vh] w-[100%] flex gap-4 justify-center items-center">
            <img
              className="h-[6vh] w-[40%]"
              src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
              alt="App Store"
            />
            <img
              className="h-[6vh] w-[40%]"
              src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
              alt="Google Play"
            />
          </div>
        </div>
      </div>
      <div className="h-[3vh] w-[100%] flex justify-center items-center gap-4 text-[13px] text-gray-600 flex-wrap">
        {[
          'Meta', 'About', 'Blog', 'Jobs', 'Help', 'API', 'Privacy',
          'Terms', 'Locations', 'Instagram Lite', 'Treads',
          'Contact uploading & non-users', 'Meta Verify',
        ].map((item, index) => (
          <button key={index} className="text-[13px] hover:underline">
            {item}
          </button>
        ))}
      </div>
      <div className="text-[13px] text-gray-600 flex justify-center items-center mt-2 gap-2">
        <select className="border p-1 rounded">
          <option>English</option>
          <option>Hindi</option>
          <option>Italian</option>
        </select>
        <label>© 2024 Instagram from Meta</label>
      </div>
    </div>
  )
}

export default Login
