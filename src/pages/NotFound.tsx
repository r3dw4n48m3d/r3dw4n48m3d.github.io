import { Link } from "react-router-dom";
import MatrixRain from "../components/MatrixRain";

const NotFound = () => {
  return (
    <div className="bg-black min-h-screen text-green-400 relative flex items-center justify-center">
      <MatrixRain />
      <div className="relative z-10 text-center px-4">
        <div className="font-mono text-green-600 mb-4">$ cat /error.log</div>

        <h1 className="text-8xl md:text-9xl font-bold mb-4">
          <span className="text-red-500">4</span>
          <span className="text-cyan-400">0</span>
          <span className="text-red-500">4</span>
        </h1>

        <div className="bg-black/50 border border-red-900/50 rounded-lg p-6 max-w-md mx-auto mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            <span className="text-red-400 text-xs font-mono ml-2">
              error.log
            </span>
          </div>
          <div className="text-left font-mono text-sm space-y-2">
            <p className="text-red-400">[ERROR] Page not found</p>
            <p className="text-yellow-400">
              [WARN] The requested resource does not exist
            </p>
            <p className="text-green-400">[INFO] Redirecting to home...</p>
          </div>
        </div>

        <p className="text-green-500 mb-8 font-mono">
          The page you're looking for has been moved or doesn't exist
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-gradient-to-r from-green-600 to-cyan-600 text-black font-bold rounded hover:from-green-500 hover:to-cyan-500 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,0,0.3)]"
          >
            cd ~/home
          </Link>
          <Link
            to="/blog"
            className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded hover:bg-cyan-500/10 transition-all duration-300"
          >
            ./blog --all
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
