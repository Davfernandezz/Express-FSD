import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Author } from "./Author"
import { Favourite } from "./Favourite"

@Entity('books')
export class Book extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: "tittle" })
    tittle!: string

    @Column({ name: "description" })
    description!: string

    @Column({ name: "author_id" })
    author_id!: number

    @ManyToOne(() => Author, author => author.books)
    @JoinColumn({ name: "author_id" })
    author!: Author

    @OneToMany(() => Favourite, favourite => favourite.book)
    book_favs!: Favourite[]
}
