/*
Cria o banco, se o banco já existe, não cria.
Seleciona o tasko como banco a ser usado.
*/
CREATE DATABASE IF NOT EXISTS tasko;
USE tasko;

/*
Cria a tabela de usuario, cada usuário vai ter
id: Para ser encontrado no sistema.
login: Nome que ele usará para entrar no sistema.
senha: Senha para ser usada para logar no sistema, vai ser salva em hash para mais segurança.
nome: Nome ou apelido que o usuário vai usar no programa e para ser mostrado no ranking.
pontos: Quantidade de pontos que o usuário tem no momento.
*/
CREATE TABLE usuario (
id_usuario INT AUTO_INCREMENT PRIMARY KEY,
login VARCHAR(100) NOT NULL UNIQUE,
senha VARCHAR(255) NOT NULL,
nome VARCHAR(255) NOT NULL,
pontos INT DEFAULT 0
);

/*
Cria a tabela de tarefas, nela vai ter:
id: id da tarefa, para controle.
id_usuario: O id do usuário que criou essa tarefa.
nome: Nome da tarefa.
pontos: Quantos pontos essa tarefa vale
*/
CREATE TABLE tarefa (
id_tarefa INT AUTO_INCREMENT PRIMARY KEY,
id_usuario INT NOT NULL,
nome VARCHAR(255),
pontos INT,
FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

/*
Cria a tabela de dia, nela vai ter:
id: id do dia, para controle.
id_usuario: O id do usuário que está criando esse dia.
data: data do dia criado.
*/

CREATE TABLE dia (
id_dia INT AUTO_INCREMENT PRIMARY KEY,
id_usuario INT,
data DATE,
FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

/*
Cria a tabela intermediaria dia_tarefa, nela vai ter:
id_dia: id do dia, para atribuir um dia.
id_tarefa: id da tarefa a ser atribuida naquele dia.
Dessa forma podemos fazer com que uma tarefa seja usada em vários dias
*/

CREATE TABLE dia_tarefa(
id_dia INT,
id_tarefa INT,
FOREIGN KEY (id_dia) REFERENCES dia(id_dia),
FOREIGN KEY (id_tarefa) REFERENCES tarefa(id_tarefa)
);