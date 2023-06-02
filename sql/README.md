# SQL Script - EsgTeste

Este é um script SQL para criar um banco de dados chamado `esgTeste` e definir várias tabelas relacionadas a pedidos e produtos.

## Criação do Banco de Dados

```sql
CREATE DATABASE esgTeste;
USE esgTeste;
```

## DDL
```sql
CREATE TABLE pedidos ( 
    pedidoId int IDENTITY(1,1) PRIMARY KEY,
    nomeCliente varchar(255),
    dataHora DATETIME,
    valorTotal money
);

CREATE TABLE produtos ( 
    produtoId int IDENTITY(1,1) PRIMARY KEY,
    nomeProduto varchar(255),
    valorProduto money
);

CREATE TABLE pedido_produtos (
    produtoId INT FOREIGN KEY (produtoId) REFERENCES produtos(produtoId),
    pedidoId INT FOREIGN KEY (pedidoId) REFERENCES pedidos(pedidoId),
    quantidade int
);
```

## DML

```sql
INSERT INTO produtos (nomeProduto, valorProduto)
VALUES 
    ('TV 4k', 6000.00),
    ('TV 8k', 16000.00),
    ('Mouse gamer', 650.58),
    ('PS5', 7000.00);

UPDATE produtos
SET valorProduto = 7599.65
WHERE nomeProduto = 'TV 4k';

DELETE FROM produtos WHERE produtoId = 2;

INSERT INTO pedidos (nomeCliente, dataHora, valorTotal)
VALUES 
  ('João Silva', GETDATE(), 100.00),
  ('Maria Santos', GETDATE(), 150.00),
  ('Pedro Almeida', GETDATE(), 75.50),
  ('Ana Oliveira', GETDATE(), 200.00);

UPDATE pedidos
SET dataHora = '1995-06-15T08:22:15.199Z'
WHERE pedidoId = 3;

DELETE FROM pedidos WHERE pedidoId = 2;

INSERT INTO pedido_produtos (produtoId, pedidoId, quantidade)
VALUES (1, 1, 5);
```

## DQL

```sql
SELECT * FROM pedidos ORDER BY dataHora DESC;

SELECT * FROM produtos ORDER BY valorProduto ASC;
```
## Documentação

- [SQL-Server](https://learn.microsoft.com/pt-br/sql/sql-server/?view=sql-server-ver16)
- [SQL](https://www.w3schools.com/sql/)

## Contato

- email: [juliano.pedraca@gmail.com](mailto:juliano.pedraca@gmail.com)
- Linkedin: [linkedin.com/juliano-pedraça](https://www.linkedin.com/in/juliano-pedra%C3%A7a-9b3387144/)