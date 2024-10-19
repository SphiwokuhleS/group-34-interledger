import { FileModel } from "@/models/file-model";

export const getFiles = async (): Promise<FileModel[]> => {
  //   const res = await fetch("https://api.example.com/files");
  //   if (!res.ok) {
  //     throw new Error("Failed to fetch files");
  //   }
  //   return res.json();
  return [
    { id: 1, name: "URC", size: 125, uploaded: new Date(), type: ".png" },
    { id: 2, name: "Stormers", size: 77, uploaded: new Date(), type: ".jpg" },
  ];
};
