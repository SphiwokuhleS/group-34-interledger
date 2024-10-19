export interface FileModel {
  id: number;
  name: string;
  size: number;
  uploaded: Date;
  type: FileTypes;
}

export type FileTypes = ".png" | ".jpg" | ".heic";
