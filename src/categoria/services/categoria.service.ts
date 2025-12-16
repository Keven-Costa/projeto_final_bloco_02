import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Categoria } from "../entities/categoria.entity"; // Certifique-se de que o caminho está correto
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CategoriaService {

    constructor(
        // 1. Injeta o Repositório da Entidade Categoria
        @InjectRepository( Categoria ) 
        private categoriaRepository: Repository< Categoria >,                  
    ) { }

    // 1. Read (All): GET /categoria
    async findAll(): Promise< Categoria[] > {
        // Busca e retorna todas as categorias
        return await this.categoriaRepository.find(); 
    }

    // 2. Read (By ID): GET /categoria/:id
    async findById( id: number ): Promise< Categoria > {

        const categoria = await this.categoriaRepository.findOne( {
            where: { id },
        } );

        if ( !categoria ) {
            throw new HttpException( 'Categoria não encontrada', HttpStatus.NOT_FOUND );
        }

        return categoria;
    }

    // 3. Read (By Attribute): GET /categoria/descricao/:descricao
    // Assumindo que a Entidade Categoria tem o campo 'descricao'
    async findByDescricao( descricao: string ): Promise< Categoria[] > {

        // ILike para busca parcial case-insensitive
        return await this.categoriaRepository.find( {
            where: {
                descricao: ILike( `%${ descricao }%` )
            }
        } );
    }

    // 4. Create: POST /categoria
    async create( categoria: Categoria ): Promise< Categoria > {
        
        // **Validação Opcional:** Verifica se a descrição já existe
        const categoriaExistente = await this.categoriaRepository.findOne({
            where: { descricao: categoria.descricao },
        });

        if (categoriaExistente) {
            throw new HttpException('Categoria já cadastrada!', HttpStatus.BAD_REQUEST);
        }

        return await this.categoriaRepository.save( categoria );
    }

    // 5. Update: PUT /categoria/:id
    async update( categoria: Categoria ): Promise< Categoria > {

        // Verifica se a categoria existe
        let buscaCategoria = await this.findById( categoria.id );

        // Se não encontrou ou o ID não foi fornecido na requisição
        if ( !buscaCategoria || !categoria.id ) {
            throw new HttpException( 'Categoria não encontrada!', HttpStatus.NOT_FOUND );
        }

        // Salva a categoria (o TypeORM sabe que é um update se houver ID)
        return await this.categoriaRepository.save( categoria );
    }

    // 6. Delete: DELETE /categoria/:id
    async delete( id: number ): Promise< DeleteResult > {

        // Verifica se a categoria existe
        let buscaCategoria = await this.findById( id );

        if ( !buscaCategoria ) {
            throw new HttpException( 'Categoria não encontrada!', HttpStatus.NOT_FOUND );
        }

        // Deleta e retorna o resultado da operação
        return await this.categoriaRepository.delete( id );
    }
}