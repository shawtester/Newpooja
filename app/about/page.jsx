import React from 'react'

export default function About() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section with Background Image */}
      <section
        className="relative bg-cover bg-center py-20 text-white"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
        <div className="container mx-auto text-center relative z-10 px-4">
          <h1 className="text-5xl font-semibold mb-4">About Us</h1>
          <p className="text-xl mb-8">
            Learn more about who we are, what we do, and why we do it.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 px-6 md:px-16 text-center">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 mb-4">
            We are a passionate team dedicated to delivering exceptional solutions. Our journey started with a simple mission: to create products and services that make life easier and more enjoyable for people around the world.
          </p>
          <p className="text-lg text-gray-600">
            With years of experience, our team works relentlessly to innovate and solve complex problems. We believe in collaboration, creativity, and driving positive change in everything we do.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gray-100 py-16 px-6 md:px-16 text-center">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-4">
            Our mission is to empower individuals and businesses through innovative solutions that simplify everyday tasks, enhance productivity, and bring positive change to communities around the world.
          </p>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-6 md:px-16 text-center">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-500">CEO & Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <img
                src="https://randomuser.me/api/portraits/women/1.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-500">CTO</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <img
                src="https://randomuser.me/api/portraits/men/2.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">David Lee</h3>
              <p className="text-gray-500">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-16 px-6 md:px-16 text-center">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest standards of honesty, ethics, and transparency in everything we do.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek new and creative solutions to challenges, driving progress and improvement.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We believe that great ideas come from working together and valuing the input of every team member.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 text-white text-center">
        <p className="text-lg">© 2024 Your Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
