import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Produto } from "../entities/produto.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriaService } from "../../categoria/services/categoria.service"; // Ajuste o caminho

@Injectable()
export class ProdutoService {

    constructor(
        @InjectRepository( Produto ) 
        private produtoRepository: Repository< Produto >,
        
        private categoriaService: CategoriaService                   
    ) { }

    private readonly relationsOptions = {
        relations: {
            categoria: true
        }
    };

    async findAll(): Promise< Produto[] > {
        return await this.produtoRepository.find(this.relationsOptions);
    }

    async findById( id: number ): Promise< Produto > {

        const produto = await this.produtoRepository.findOne( {
            where: { id },
            ...this.relationsOptions 
        } );

        if ( !produto ) {
            throw new HttpException( 'Produto não encontrado', HttpStatus.NOT_FOUND );
        }

        return produto;
    }

    async findByNome( nome: string ): Promise< Produto[] > {

        return await this.produtoRepository.find( {
            where: {
                nome: ILike( `%${ nome }%` )
            },
            ...this.relationsOptions 
        } );
    }

    async create( produto: Produto ): Promise< Produto > {

        if ( produto.categoria ) {
            let categoria = await this.categoriaService.findById( produto.categoria.id );

            if ( !categoria ) {
                throw new HttpException( 'Categoria não encontrada!', HttpStatus.NOT_FOUND );
            }
        } else {
             throw new HttpException( 'Obrigatório informar a Categoria!', HttpStatus.BAD_REQUEST );
        }

        return await this.produtoRepository.save( produto );
    }

    async update( produto: Produto ): Promise< Produto > {

        let buscaProduto = await this.findById( produto.id );

        if ( !buscaProduto || !produto.id ) {
            throw new HttpException( 'Produto não encontrado!', HttpStatus.NOT_FOUND );
        }
        
        if ( produto.categoria ) {
            let categoria = await this.categoriaService.findById( produto.categoria.id );

            if ( !categoria ) {
                throw new HttpException( 'Categoria não encontrada!', HttpStatus.NOT_FOUND );
            }
        } else {
             throw new HttpException( 'Obrigatório informar a Categoria!', HttpStatus.BAD_REQUEST );
        }
        
        return await this.produtoRepository.save( produto );
    }
    
    async delete( id: number ): Promise< DeleteResult > {

        let buscaProduto = await this.findById( id );

        if ( !buscaProduto )
            throw new HttpException( 'Produto não encontrado!', HttpStatus.NOT_FOUND );

        return await this.produtoRepository.delete( id );
    }
}