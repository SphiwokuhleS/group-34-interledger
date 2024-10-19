import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { FileAccessed } from './FileAccessed';


export enum FileTypes {
    Photo = 0,
    Video = 1,
    Document = 2
}

@Entity()
export class FileMetaData {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    FileName: string;

    @Column()
    FileSize: number;

    @Column()
    Email: string;

    @Column({
        type: "enum",
        enum: FileTypes,
        FileTypes: FileTypes.Document
    })
    FileTypes: FileTypes;

    @OneToMany(() => FileAccessed, fileAccessed => fileAccessed.fileMetaData)
    fileAccesses: FileAccessed[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
}