# Configuração de ambiente

## Passos para configuração do Angular:
Abrir um prompt de comandos na pasta “frontend-obelisco” e executar o comando npm install;

executar o comando ng serve para executar a aplicação.

## Configurações para o PHP:

Em ambiente Linux:

acessar a pasta “backend-obelisco” e executar o comando php -s localhost:8080.

Em ambiente Windows:

necessária a instalação do XAMPP;

adicionar a model.php na pasta “htdocs” do XAMPP;

iniciar o XAMPP.

## Configurações MySQL:

Instalar o MySQL Workbench.

# Desenvolvimento
Para o desenvolvimento em ambiente local, realizar a alteração do valor da variável “obeliscoServiceUrl”, no arquivo environment.ts (caminho: “frontend-obelisco/src/environment”);

## Comando para gerar arquivos no Angular:
Para a geração de componentes, serviços ou módulos. Basta a execução do comando ng generate {c/s/m} [nome_do_arquivo].

## Workflow de desenvolvimento:
Um componente é referente a uma página da aplicação, composto por um HTML, CSS e Typescript.
Cada componente tem um service.

O service se conecta com o back-end para fazer as requisições HTTP.

O back-end recebe o objeto e realiza as regras de negócio, salvando, deletando, atualizando e lendo do banco de dados.
	
## License
[MIT](https://choosealicense.com/licenses/mit/)
