<?php
    class Info
    {//date('l jS \of F Y h:i:s A');
        private $nome;
        private $email;
        private $idade;
        private $curso;
        private $telefone;
        private $cep;
        private $logradouro;
        private $bairro;
        private $localidade;
        private $numero;

        ##CONSTRUTOR
        function __construct($nome,$email,$idade,$curso,$telefone,$cep,$logradouro,$bairro,$localidade,$numero)
        {
            $this->nome=$nome;
            $this->email=$email;
            $this->idade=$idade;   
            $this->curso=$curso; 
            $this->telefone=$telefone; 
            $this->cep=$cep; 
            $this->logradouro=$logradouro; 
            $this->bairro=$bairro;
            $this->localidade=$localidade;
            $this->numero=$numero;

        }

        ##GETTERS
        function getNome()
        {
            return $this->nome;
        }
        function getEmail()
        {
            return $this->email;        
        }
        function getIdade()
        {
            return $this->idade;        
        }
        function getCurso()
        {
            return $this->telefone;        
        }
        function getTelefone()
        {
            return $this->telefone;        
        }
        function getCep()
        {
            return $this->cep;        
        }
        function getLogradouro()
        {
            return $this->logradouro;        
        }
        function getBairro()
        {
            return $this->bairro;        
        }
        function getLocalidade()
        {
            return $this->localidade;        
        }
        function getNumero()
        {
            return $this->numero;        
        }

        ##SETTERS
        function setNome()
        {
            $this->nome = $nome;
        }
        function setEmail()
        {
            $this->data = $data;        
        }
        function setIdade()
        {
            $this->vaciina = $vaciina;        
        }
        function setCurso()
        {
            $this->documento = $documento;        
        }
        function setTelefone()
        {
            $this->vaciina = $vaciina;        
        }
        function setCep()
        {
            $this->vaciina = $vaciina;        
        }
        function setLogradouro()
        {
            $this->vaciina = $vaciina;        
        }
        function setBairro()
        {
            $this->vaciina = $vaciina;        
        }
        function setLocalidade()
        {
            $this->vaciina = $vaciina;        
        }
        function setNumero()
        {
            $this->vaciina = $vaciina;        
        }
    }

    #PARAMETROS DE CONEXAO COM O BANCO
    $host='35.224.87.218';
    $dbuser='thlinc';
    $dbpwd='Hotmail2#';
    //$dbuser='obelisco';
    //$dbpwd='Gmail2#';
    $database='info_cliente';

    $conexao= mysqli_connect($host,$dbuser,$dbpwd,$database);
    $conectado="ZERADO";
    #PARAMETROS DE CONEXAO COM O BANCO


    //var dados= {no:nome,em:email,id:idade,cu:curso,tel:telefone,ce:cep,lo:logradouro,ba:bairro,loc:localidade,nu:numero};

    #PUXANDO DADOS DO HTML-->JS
    $nome=$_POST['no'];
    $email=$_POST['em'];
    $idade=$_POST['id'];
    $curso=$_POST['cu'];
    $telefone=$_POST['tel'];
    $cep=$_POST['ce'];
    $logradouro=$_POST['lo'];
    $bairro=$_POST['ba'];
    $localidade=$_POST['loc'];
    $numero=$_POST['nu'];
    #PUXANDO DADOS DO HTML-->JS

    $pessoa = new Info($nome,$vacinas,$doc,date('l jS \of F Y h:i:s A'));

    var_dump($pessoa);
    //echo $criança;

    if(mysqli_connect_error())
    {
        $erro = $conexao->error;
        $conectado="Não conectou    ".$conexao->error;
    }
    else
    {
        $conectado="Conectou ao banco!";

        $query='insert into info (nome,email,idade,curso,telefone,cep,logradouro,bairro,localidade,numero) values ("'.$pessoa->getNome().'","'.$pessoa->getEmail().'","'.$pessoa->getIdade().'","'.$pessoa->getCurso().'","'.$pessoa->getTelefone().'","'.$pessoa->getCep().'","'.$pessoa->getLogradouro().'","'.$pessoa->getBairro().'","'.$pessoa->getLocalidade().'","'.$pessoa->getNumero().'");';
        #Tratando Query
        if(mysqli_query($conexao,$query))
        {
            $sucesso = "Cadastro efetuado com sucesso";
        }
        else
        {
            $sucesso = $conexao->error;
        }
        #Tratando Query
    }
?>