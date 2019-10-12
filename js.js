function registra_info()
{
    //var usuario=$("#usuario_cadastro").val(),senha=$("#senha_cadastro").val(),confirma=$("#confirma_cadastro").val();
    var vacinas=" ";

    var nome = $("#nome").val();
    var email =$("#email").val();
    var idade =$("#idade").val();
    var curso =$("#curso").val();
    var telefone =$("#telefone").val();
    var cep =$("#cep").val();
    var logradouro =$("#logradouro").val();
    var bairro =$("#bairro").val();
    var localidade =$("#localidade").val();
    var numero =$("#numero").val();
    
   

    // if($("#chk1").is(':checked'))
    // {
    //     vacinas = vacinas + "Polio ";
    // }
    // if($("#chk2").is(':checked'))
    // {
    //     vacinas = vacinas+ "Sarampo";
    // }

    callServer(nome,email,idade,curso,telefone,cep,logradouro,bairro,localidade,numero);

}

function callServer(nome,email,idade,curso,telefone,cep,logradouro,bairro,localidade,numero)
{
    var dados= {no:nome,em:email,id:idade,cu:curso,tel:telefone,ce:cep,lo:logradouro,ba:bairro,loc:localidade,nu:idade};

    try {
        $.post('http://thlinc.com/model.php',dados,function(data)
        {
            //var obj = jQuery.parseJSON(data);
            var obj = data;
            $("#teste").text(""+obj);
            console.log(obj);
        });
      }
      catch(err) {
        $("#teste").text(err.message);
      }

    
}