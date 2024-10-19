import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileIcon, UploadIcon } from "lucide-react";
import UploadModal from "./upload-modal";
import { getFiles } from "./data/use-user-files";
import { useEffect, useState } from "react";
import { FileModel } from "@/models/file-model";

export default function DashboardPage() {
  const [files, setData] = useState<FileModel[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFiles();
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !files) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">File Dashboard</h1>
          <UploadModal>
            <Button>
              <UploadIcon className="mr-2 h-4 w-4" /> Upload File
            </Button>
          </UploadModal>
        </div>

        {files.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center h-64">
              <FileIcon className="h-16 w-16 text-gray-400 mb-4" />
              <p className="text-xl text-gray-600">No files uploaded yet</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {files.map((file) => (
              <Card key={file.id}>
                <CardHeader>
                  <CardTitle>{file.name}</CardTitle>
                  <CardDescription>{file.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Size: {file.size} bytes
                  </p>
                  <p className="text-sm text-gray-500">
                    Uploaded on: {new Date(file.uploaded).toLocaleDateString()}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
