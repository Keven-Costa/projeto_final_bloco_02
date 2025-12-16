import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Produto } from '../../produto/entities/produto.entity';
import { ApiProperty } from '@nestjs/swagger';



@Entity({ name: 'tb_categorias' })
export class Categoria {

  @PrimaryGeneratedColumn()
  @ApiProperty() 
  id: number;

  @IsNotEmpty({ message: 'O nome da categoria não pode estar vazio.' })
  @Column({ nullable: false, unique: true })
  @ApiProperty() 
  nome: string;

  @IsNotEmpty({ message: 'A descrição não pode estar vazia.' })
  @Column({ nullable: false })
  @ApiProperty() 
  descricao: string;

  @ApiProperty({ type: () => Produto, isArray: true }) 
  @OneToMany(() => Produto, (produto) => produto.categoria)
  produto: Produto[];


}
