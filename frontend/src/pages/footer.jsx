import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#66fc7f] text-white py-1">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-lg font-bold">TrashClassifier</h1>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
