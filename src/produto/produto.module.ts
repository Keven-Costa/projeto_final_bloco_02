// Exemplo de ProdutoModule.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';
import { ProdutoService } from './services/produto.service';
import { ProdutoController } from './controller/produto.controller';
import { CategoriaModule } from '../categoria/categoria.module'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Produto]),
    CategoriaModule 
  ],
  controllers: [ProdutoController],
  providers: [ProdutoService],
  exports: [TypeOrmModule.forFeature([Produto])] 
})
export class ProdutoModule {}