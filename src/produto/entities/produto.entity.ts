import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity'; // Ajuste o caminho conforme sua estrutura de pastas
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_produtos' }) 
export class Produto {
 
    @ApiProperty() 
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty() 
    @Column({ length: 255, nullable: false })
    nome: string;

    @ApiProperty() 
    @Column({ length: 1000, nullable: true })
    descricao: string;

    @ApiProperty() 
    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    preco: number;

    @ApiProperty() 
    @Column({ nullable: false })
    quantidade: number;

    @ApiProperty({ type: () => Categoria }) 
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: 'CASCADE' 
    })

    categoria: Categoria;
}