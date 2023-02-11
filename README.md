# [Portal de Ideias](alanserafim.github.io/portaldeideias/)

<fig>
<img src="https://rockcontent.com/br/wp-content/uploads/sites/2/elementor/thumbs/modelo-de-projeto-p2he6clp7uhmwqd16ikv9jgz30a5liixoon908hej0.png" alt="Uma imagem relacionada ao projeto">
</fig>

## Ferramentas

* Spring Boot - IntelliJ (https://spring.io/projects/spring-boot) - IDE para desenvolvimento da camada servidor.
* Visual Studio Code (https://code.visualstudio.com/docs) - Editor de código utilizado no desenvolvimento da camada cliente.
* [Ionic Framework](https://ionicframework.com/) - Framework da camada cliente.

## Introdução

Este projeto possui o objetivo principal **implementar um sistema de gerenciamento de ideias como parte integrante do processo de melhoria contínua de um organização**.  


## Análise técnica

### Descrição do ambiente técnico

O sistema é composto por uma API REST e um banco de dados relacional na camada servidor; uma interface web mobile na camada cliente. Funcionalidades principais:

## Especificação de Requisitos: Estórias de usuário

Requisito 01 – Cadastrar ideia

    •	Como – usuário 
    •	Eu quero – cadastrar uma nova ideia com todos os detalhes necessários 
    •	De maneira que – seja possível a avaliação da ideia por um gestor.

Requisito 02 – Consultar ideia

    •	Como – usuário 
    •	Eu quero – consultar uma ideia por mim cadastrada 
    •	De maneira que – seja possível visualizar o status da ideia e acompanhar o andamento através do histórico da ideia.

Requisito 03 – Avaliar ideia

    •	Como – gestor 
    •	Eu quero – avaliar uma ideia cadastrada 
    •	De maneira que – seja possível incluir um status específico e fazer observações.

Requisito 04 – Notificar ideia

    •	Como – gestor ou usuário
    •	Eu quero – que o sistema gere notificações
    •	De maneira que – ao cadastrar, avaliar ou editar, os envolvidos no processo sejam devidamente notificados. 

Requisito 05 – Consultar quadro geral de ideias

    •	Como – gestor
    •	Eu quero – visualizar o quadro geral de ideias
    •	De maneira que – visualizar o total de ideias e aplicar filtros diversos.


## Diagrama de Classes de Domínio

![Diagrama de Classes](project/Business%20Class%20Diagram.png)
