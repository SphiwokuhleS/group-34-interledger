import { Button } from "@/components/ui/button";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen px-8 flex flex-col justify-center items-center">
      <main className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-blue-500">Welcome to Our Landing Page</h1>
        <p className="text-gray-800">This is a sample paragraph.</p>
      </main>
      <footer className="w-full p-4 text-center bg-gray-900 text-white">
        <Button className="bg-white">Shadcn Button</Button>
      </footer>
    </div>
  );
};

export default Home;
