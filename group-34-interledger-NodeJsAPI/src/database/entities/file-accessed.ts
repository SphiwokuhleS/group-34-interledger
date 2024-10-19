import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { FileMetaData } from './file-meta-data';


@Entity()
export class FileAccessed {
    @PrimaryGeneratedColumn()
    Id!: number;

    
    @ManyToOne(() => FileMetaData, fileMetaData => fileMetaData.fileAccesses)
    fileId!: FileMetaData;

    @CreateDateColumn({ type: 'timestamp' })
    accessedDate!: Date;
}