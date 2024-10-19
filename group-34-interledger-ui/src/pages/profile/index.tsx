import { Button } from "@/components/button";
import Layout from "@/layout";
import Link from "next/link";
import React from "react";

const UserProfile: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-center mt-4">John Doe</h2>
          <p className="text-gray-600 text-center mt-2">
            A brief description about the user goes here. This can be a bio or
            other relevant information.
          </p>
          <div className="mt-6 text-center">
            <Link href="/" passHref>
              <Button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                Go back
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
