// import React from 'react'
// import { Input } from "@/components/input"
// import { Label } from "@/components/label"
// import { CloudUpload } from 'lucide-react'

// export const FileUpload = ({ onFileUpload , files }) => (
//   <div className="space-y-4">
//     <div>
//       <Label htmlFor="file-upload">Upload Files</Label>
//       <div className="mt-2">
//         <Input 
//           id="file-upload" 
//           type="file" 
//           onChange={onFileUpload} 
//           multiple 
//           className="hidden"
//         />
//         <Label htmlFor="file-upload" className="cursor-pointer">
//           <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center">
//             <CloudUpload className="h-12 w-12 text-gray-400" />
//             <span className="mt-2 text-sm text-gray-500">Click to upload files</span>
//           </div>
//         </Label>
//       </div>
//     </div>
//     {files.length > 0 && (
//       <div>
//         <p className="font-semibold">Uploaded Files:</p>
//         <ul className="list-disc pl-5">
//           {files.map((file, index) => (
//             <li key={index}>{file.name}</li>
//           ))}
//         </ul>
//       </div>
//     )}
//   </div>
// )