# Configuração de ambiente

## Passos para configuração do Angular:
- Abrir um prompt de comandos na pasta “frontend-obelisco” e executar o comando npm install;

- Executar o comando ng serve para executar a aplicação.

## Configurações para o PHP:

- Adicionar no arquivo .env as strings de conexão para o banco.

Em ambiente Linux:

- Acessar a pasta “backend-obelisco” e executar o comando:
```bash
php -s localhost:8080
```

Em ambiente Windows:

- Necessária a instalação do XAMPP;

- Adicionar a model.php na pasta “htdocs” do XAMPP;

- Iniciar o XAMPP.


## Configurações MySQL:

- Instalar o MySQL Workbench.

# Desenvolvimento
Para o desenvolvimento em ambiente local, realizar a alteração do valor da variável “obeliscoServiceUrl”, no arquivo environment.ts (caminho: “frontend-obelisco/src/environment”);

## Comando para gerar arquivos no Angular:
Para a geração de componentes, serviços ou módulos. Basta a execução do comando:
```bash
ng generate {c/s/m} [nome_do_arquivo]
```

## Workflow de desenvolvimento:
- Um componente é referente a uma página da aplicação, composto por um HTML, CSS e Typescript.

- Cada componente tem um service.

- O service se conecta com o back-end para fazer as requisições HTTP.

- O back-end recebe o objeto e realiza as regras de negócio, salvando, deletando, atualizando e lendo do banco de dados.
	
## License
[MIT](https://choosealicense.com/licenses/mit/)
