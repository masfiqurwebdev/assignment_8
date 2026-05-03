import Image from "next/image";

export default function ProfilePage() {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* LEFT SIDE - PROFILE */}
        <div className="bg-white p-6 rounded-2xl shadow col-span-1 text-center">
          <Image
            src={user.image}
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full mx-auto"
          />

          <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>

          <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Update Profile
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-2 space-y-6">
          
          {/* COURSE ACCESS (2 COLUMN) */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-4">Course Access</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium">Enrolled Courses</h4>
                <p className="text-2xl font-bold mt-2">5</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium">Completed Courses</h4>
                <p className="text-2xl font-bold mt-2">2</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium">Ongoing Courses</h4>
                <p className="text-2xl font-bold mt-2">3</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium">Certificates</h4>
                <p className="text-2xl font-bold mt-2">1</p>
              </div>
            </div>
          </div>

          {/* USER ACTIVITY */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>

            <ul className="space-y-3 text-gray-600">
              <li>Completed React Basics</li>
              <li>Started Next.js Advanced</li>
              <li>Rated JavaScript Mastery</li>
              <li>Updated profile info</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}