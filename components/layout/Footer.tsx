import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Best Capetown
          </p>
          <div className="flex items-center space-x-6">
            <Link 
              href="/terms" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link 
              href="/privacy" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}