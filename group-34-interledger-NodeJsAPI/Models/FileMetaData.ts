import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { FileAccessed } from './FileAccessed';

export enum FileTypes {
    Photo = 0,
    Video = 1,
    Document = 2
}

@Entity()
export class FileMetaData {
    @PrimaryGeneratedColumn()
    Id!: number;

    @Column()
    FileName!: string;

    @Column()
    FileUrl!: string;

    @Column()
    FileSize!: number;

    @Column({
        type: "enum",
        enum: FileTypes,
        default: FileTypes.Document
    })
    FileTypes!: FileTypes;

    @OneToMany(() => FileAccessed, fileAccessed => fileAccessed.fileMetaData)
    fileAccesses!: FileAccessed[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt!: Date;
}
