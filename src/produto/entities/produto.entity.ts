import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity'; // Ajuste o caminho conforme sua estrutura de pastas

@Entity({ name: 'tb_produtos' }) 
export class Produto {
 
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255, nullable: false })
    nome: string;

    @Column({ length: 1000, nullable: true })
    descricao: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    preco: number;

    @Column({ nullable: false })
    quantidade: number;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: 'CASCADE' 
    })

    categoria: Categoria;
}