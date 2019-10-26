<?php

//php -S localhost:8000
    header('Access-Control-Allow-Origin: http://localhost:4200');  
    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 43200');    // cache for 0.5 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }

    //echo "You have CORS!";
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
            return $this->curso;        
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
            $this->email = $email;        
        }
        function setIdade()
        {
            $this->idade = $idade;        
        }
        function setCurso()
        {
            $this->curso = $curso;        
        }
        function setTelefone()
        {
            $this->telefone = $telefone;        
        }
        function setCep()
        {
            $this->cep = $cep;        
        }
        function setLogradouro()
        {
            $this->logradouro = $logradouro;        
        }
        function setBairro()
        {
            $this->bairro = $bairro;        
        }
        function setLocalidade()
        {
            $this->localidade = $localidade;        
        }
        function setNumero()
        {
            $this->numero = $numero;        
        }
    }

    #PARAMETROS DE CONEXAO COM O BANCO
    // $host='';
    // $dbuser='obelisco';
    // $dbpwd='Google2#';
    //$dbuser='obelisco';
    //$dbpwd='Gmail2#';
    // $database='info_cliente';

    // $conexao= mysqli_connect($host,$dbuser,$dbpwd,$database);
    // $conectado="ZERADO";
    #PARAMETROS DE CONEXAO COM O BANCO


    //var dados= {no:nome,em:email,id:idade,cu:curso,tel:telefone,ce:cep,lo:logradouro,ba:bairro,loc:localidade,nu:numero};
    //$objeto=$_REQUEST['model'];
    // Takes raw data from the request
    $json = file_get_contents('php://input');
    $objeto = json_encode($json);
    $convertido=json_decode($objeto);

    $convertido2=json_decode($convertido,true);
    

    // Converts it into a PHP object
    //$data = var_dump($json);
    
    #PUXANDO DADOS DO HTML-->JS
    $cep=$convertido2['cep'];
    $logradouro=$convertido2['logradouro'];
    $bairro=$convertido2['bairro'];
    $localidade=$convertido2['localidade'];
    $nome=$convertido2['nome'];
    $email=$convertido2['email'];
    $idade=$convertido2['idade'];
    $curso=$convertido2['curso'];
    $telefone=$convertido2['telefone'];
    $numero=$convertido2['numero'];
    #PUXANDO DADOS DO HTML-->JS

    // $pessoa = new Info($nome,$email,$idade,$curso,$telefone,$cep,$logradouro,$bairro,$localidade,$numero);

    //var_dump($pessoa);
    //echo $criança;

    // if(mysqli_connect_error())
    // {
    //     $erro = $conexao->error;
    //     $conectado="Não conectou    ".$conexao->error;
    // }
    // else
    // {
    //     $conectado="Conectou ao banco!";

    //     $query='insert into info (nome,email,idade,curso,telefone,cep,logradouro,bairro,localidade,numero) values ("'.$pessoa->getNome().'","'.$pessoa->getEmail().'","'.$pessoa->getIdade().'","'.$pessoa->getCurso().'","'.$pessoa->getTelefone().'","'.$pessoa->getCep().'","'.$pessoa->getLogradouro().'","'.$pessoa->getBairro().'","'.$pessoa->getLocalidade().'","'.$pessoa->getNumero().'");';
    //     #Tratando Query
    //     if(mysqli_query($conexao,$query))
    //     {
    //         $sucesso = "Cadastro efetuado com sucesso";
    //     }
    //     else
    //     {
    //         $sucesso = $conexao->error;
    //     }
    //     #Tratando Query
    // }
    //echo $sucesso;
    $teste = array("Ta tudo funcionando, se alterar algo nao deleta, comenta! ",$cep,$logradouro,$bairro,$localidade,$nome,$email,$idade,$curso,$telefone,$numero);
    //$teste = json_encode(var_dump($objeto));
    //$teste = json_decode($objeto);
    //echo json_encode($teste);
    
    //print_r(var_dump($objeto));
    //echo "oi";
    //echo json_encode(var_dump($teste));
    //echo json_decode($objeto);
    //echo $convertido;
    echo json_encode($teste);
?>
