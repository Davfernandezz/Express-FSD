import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('books')
export class Book extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column({name: "tittle"})
    tittle!: string
    
    @Column({name: "description"})
    description!: string

    @Column({name: "author_id"})
    author_id!: number

}
