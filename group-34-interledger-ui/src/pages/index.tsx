import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen px-8 flex flex-col justify-center items-center">
      <main className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-blue-500">Welcome to Our Landing Page</h1>
        <p className="text-gray-800">This is a sample paragraph.</p>
      </main>
      <footer className="w-full p-4 text-center bg-gray-900 text-white">
        <Link href="/profile" passHref>
          <Button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Go to Profile
          </Button>
        </Link>
      </footer>
    </div>
  );
};

export default Home;
