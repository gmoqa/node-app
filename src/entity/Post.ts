import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    body: string;

    @Column()
    createdAy: Date;

    @Column()
    isPublished: boolean;
}