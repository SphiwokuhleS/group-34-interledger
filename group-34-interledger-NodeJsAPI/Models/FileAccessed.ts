import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { FileMetaData } from './FileMetaData';


@Entity()
export class FileAccessed {
    @PrimaryGeneratedColumn()
    Id!: number;

    
    @ManyToOne(() => FileMetaData, fileMetaData => fileMetaData.fileAccesses)
    fileMetaData!: FileMetaData;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt!: Date;
}