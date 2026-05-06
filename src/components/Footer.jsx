 
export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 px-6 py-12 border-t">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-black text-xl font-bold">Logo</h2>
          <p className="mt-3 text-sm">
            Clean and modern web experiences built with Next.js.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-black font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">Careers</li>
            <li className="hover:text-black cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-black font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer">Help Center</li>
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
            <li className="hover:text-black cursor-pointer">Terms</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-black font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm mb-3">
            Get latest updates and news.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="border px-3 py-2 w-full rounded-l focus:outline-none"
            />
            <button className="bg-black text-white px-4 rounded-r">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2026 Your Company. All rights reserved.</p>

        <div className="flex gap-4 mt-3 md:mt-0">
          <span className="hover:text-black cursor-pointer">Facebook</span>
          <span className="hover:text-black cursor-pointer">Twitter</span>
          <span className="hover:text-black cursor-pointer">LinkedIn</span>
        </div>
      </div>

    </footer>
  );
}
 
