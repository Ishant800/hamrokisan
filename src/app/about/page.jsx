"use client";


export default function Profile() {
  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111827] p-6 flex flex-col space-y-6">
        <div className="text-2xl font-bold text-green-400">MediSaas</div>
        <nav className="flex flex-col space-y-4 text-gray-300">
          <a href="#" className="hover:text-white">Dashboard</a>
          <a href="#" className="hover:text-white">Find a Doctor</a>
          <a href="#" className="hover:text-white">My Appointments</a>
          <a href="#" className="text-green-400 font-semibold">Medical History</a>
          <a href="#" className="hover:text-white">Medication</a>
          <a href="#" className="hover:text-white">Billing</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-gray-900">
        <h1 className="text-2xl font-semibold mb-6">My Profile</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="col-span-1 bg-[#1f2937] rounded-2xl p-6 flex flex-col items-center">
            <img
              src="https://i.pravatar.cc/100"
              alt="John Doe"
              width={80}
              height={80}
              className="rounded-full mb-4"
            />
            <h2 className="text-lg font-semibold">John Doe</h2>
            <p className="text-sm text-gray-400">Email: john.doe@medisaas.com</p>
          </div>

          {/* Medical History */}
          <div className="col-span-1 bg-[#1f2937] rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3">Medical History</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span>Liver disorder detected & treated</span>
                <span className="text-green-400">✔</span>
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span>Neurological test initiated</span>
                <span className="text-green-400">✔</span>
              </li>
              <li className="flex justify-between">
                <span>Back pain after old accident</span>
                <span className="text-green-400">✔</span>
              </li>
            </ul>
          </div>

          {/* Billing */}
          <div className="col-span-1 bg-[#1f2937] rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3">Billing Methods</h3>
            <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg mb-3">
              <div className="flex items-center space-x-2">
                <img src="/stripe.png" alt="Stripe" width={24} height={24} />
                <img src="/razorpay.png" alt="Razorpay" width={24} height={24} />
              </div>
              <span className="text-gray-400 text-sm">5069 XXXX 0848</span>
            </div>

            <h3 className="text-lg font-semibold mb-3">Payment Control</h3>
            <div className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
              <span>Stripe live enabled</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Personal Info */}
        <div className="mt-6 bg-[#1f2937] rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div>
              <label className="block mb-1 text-gray-400">Name</label>
              <input
                type="text"
                value="John Doe"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2"
                readOnly
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-400">Date of Birth</label>
              <input
                type="text"
                value="02/04/1990"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2"
                readOnly
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-400">Blood Group</label>
              <input
                type="text"
                value="A+"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2"
                readOnly
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-400">Emergency Contact</label>
              <input
                type="text"
                value="+91 9999999999"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2"
                readOnly
              />
            </div>
          </div>

          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg">
            Save Changes
          </button>
        </div>
      </main>
    </div>
  );
}
