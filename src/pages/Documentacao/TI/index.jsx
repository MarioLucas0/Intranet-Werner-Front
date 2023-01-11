import React from 'react';
import createAccount from "../../../assets/img/createAccount.png";
import dependenciaFront from "../../../assets/img/dependenciaFront.png";
import diagrama from "../../../assets/img/diagrama.png";
import funcaoAuth from "../../../assets/img/funcaoAuth.png";
import funcaoPrivar from "../../../assets/img/funcaoPrivar.png";
import hashSenha from "../../../assets/img/hash-senha.png";
import imageAniversariantePost from "../../../assets/img/imageAniversariantePost.png";
import imageBandoDeDados from "../../../assets/img/imageBancodeDados.png";
import imageBandoDeDados2 from "../../../assets/img/imageBandodeDados2.png";
import imageCodigoRamal from "../../../assets/img/imageCodigoRamal.png";
import imageExclusaoPostagens from "../../../assets/img/imageExclusaoPostagens.png";
import imageMail from "../../../assets/img/imageMail.png";
import imageMailRecovery from "../../../assets/img/imageMailRecovery.png";
import imagePassword from "../../../assets/img/imagePassword.png";
import imageSwagger from "../../../assets/img/imageSwagger.png";
import liberarRotasBack from "../../../assets/img/liberarRotas.png";
import pasta from "../../../assets/img/pastaLiberarRotas.png";
import rotasFront from "../../../assets/img/rotasFront.png";
import './style.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export const Documentation = () => {
  return (
    <section className='sectionDocumentation '>
      <div className="container">
        <h1 className="h1 border-bottom border-success d-flex justify-content-center mt-5 pb-3">Back-end</h1>
        <div className="section">
          <h2 className="mt-0 text-bold" >Java Version</h2>
          <p className='border  bg-light boxVersion'>Java Version 11</p>
        </div>
        <div className="section"> 
          <h2 className='mt-0 text-bold'>Spring boot</h2>
          <p className='border  bg-light boxVersion'>Ferramenta de gestão de dependências utilizada: 
          <a href="https://mvnrepository.com/"> Maven</a></p>
        </div>
        <div className="section"> 
          <h2 className='mt-0 text-bold'>Version</h2>
          <p className='border mb-3  bg-light boxVersion'>Spring boot version 2.7.4</p> 
          <p className='border  bg-light boxVersion'>Maven version 3.8.4</p> 
        </div>
        <div className="section">
          <h2 className="mt-0 text-bold">Dependências</h2>
          <p>As dependências se encontram no arquivo <span className='text-bold'> pom.xml.</span> Todas as dependências listadas abaixo podem ser encontradas no site <a href="https://mvnrepository.com/">https://mvnrepository.com/</a> (Maven Repository).</p>
          <ul className='border pt-3 pb-3 mt-4  alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>
            <li>spring-boot-starter-data-jpa</li>
            <li>spring-boot-starter-web</li>
            <li>spring-boot-devtools</li>
            <li>postgresql</li>
            <li>springdoc-openapi-ui (Versão 1.6.11)</li>
            <li>flyway-core (Versão 7.8.0)</li>
            <li>spring-boot-starter-security</li>
            <li>java-jwt (JSON Web Token Versão 3.19.2)</li>
            <li>spring-boot-starter-mail</li>
            <li>jackson-datatype-jsr310</li>
            <li>modelmapper (Versão 3.0.0)</li>
          </ul>
        </div>

        <div className="section">
          <h2 className="mt-0 text-bold">Banco de Dados</h2>
          <h2 className="h3">Os campos selecionados abaixo devem ser editados de acordo com as configurações do banco.</h2>
          <img src={imageBandoDeDados} alt="" />
          <p className='pt-4'><span className="text-bold">spring.datasource.url: </span>Esta é a propriedade que o endereço do banco deve ser informado.</p>
          <img src={imageBandoDeDados2} alt="" />
          <ul className='border pt-3 pb-3 mt-4 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>
            <li>O endereço do banco deve ser informado após<span className="text-bold">“jdbc:postgresql://". </span> No exemplo acima, o
endereço IP é <span className="text-bold">“10.150.122.52”.</span>  A porta do banco é  <span className="text-bold">“5432”.</span></li>
            <li>O nome da database deve ser informada logo após a última “/”. No exemplo acima, o nome da
database é<span className="text-bold">“proj25db”.</span></li>
          </ul>
        </div>

        <div className="section">
          <h2 className="mt-0 text-bold">Mail properties</h2>
          <h3>Aqui é o local onde você pode alterar as propriedades de email.</h3>
          <img src={imageMail} alt="" />
          <ul className='border pt-3 pb-3 mt-4 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>
            <li>Em <span className="text-bold">spring.mail.host</span> você pode alterar o servidor de email.</li>
            <li>Em <span className="text-bold">spring.mail.port</span> você pode alterar a porta do servidor de email.</li>
          </ul>        
        </div>

        <div className="section">
          <h2 className="mt-0 text-bold">User</h2>
          <ul className='border pt-3 pb-3 mt-4 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>
            <li>Em <span className="text-bold">spring.mail.username</span>  você pode alterar o endereço de email.</li>
            <li>Em <span className="text-bold">spring.mail.password</span> você deve informar a senha do email informado. Caso o endereço de
            email seja do Google. Você deverá criar um <span className="text-bold">“App password”.</span>  Siga as instruções em <a href="https://
            support.google.com/mail/answer/185833?hl=en">https://
            support.google.com/mail/answer/185833?hl=en</a>.</li>
            <li>Em <span className="text-bold">spring.mail.from</span> você deve informar o mesmo valor do campo <span className="text-bold">spring.mail.username</span>.</li>
          </ul>    
        </div>

        <div className="section">
          <h2 className="mt-0 text-bold">Características da Senha do Usuário</h2>
          <img src={hashSenha} alt="" />
          <p className='mt-3'>Atenção, não modifique o algoritmo de senhas atual. O sistema pode apresentar erros caso ele seja removido/substituído.</p>
        </div>

        <div className="section">
        <h2 className="mt-0 text-bold">Endpoints</h2>
          <p>Você pode obter uma informação detalhada dos <span className="text-bold">endpoints</span> da API através da documentação do
            <span className="text-bold"> Swagger UI</span>. Para acessar, basta você digitar a seguinte url no navegador: <span className="text-bold">endereco.da.api:porta/swagger-ui/</span> 
            index.html
          </p>
          <h3 className='mb-3 text-bold'>Exemplo:</h3>
          <img src={imageSwagger } alt="" />
          <h3 className='mt-4 text-bold'>Endpoints “públicos”:</h3>
          <ul className='border pt-3 pb-3 mt-4 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>
            <li>"/"</li>
            <li>"*"</li>
            <li>"/auth/**"</li>
            <li>"/swagger-ui/**"</li>
            <li>"/v3/api-docs/**"</li>
            <li>"/actuator/**"</li>
            <li>"/ramal"</li>
            <li>"/cardapios"</li>
            <li>"/funcionarios/aniversariantes/**"</li>
            <li>"/apostilas"</li>
            <li>"/manuais"</li>
            <li>"/posts"</li>
            <li>"/autores/**"</li>
            <li>"/departamentos"</li>
            <li>"/funcionarios"</li>
            <li>"/email/**"</li>
            <li>"/funcionarios/name/**"</li>
          </ul>   
        </div>
        <div className="section">
          <h2 className="mt-0 mb-3 text-bold">Deixar Endpoints públicos ou Privá-los</h2>
          <h3>Pasta</h3>
          <img src={pasta} alt="" />
          <h3>Codigo</h3>
          <img src={liberarRotasBack} alt="" />
          <p className='border mt-5 pt-3 pb-3 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>Esse código acima está definindo uma lista de caminhos que são permitidos sem autenticação em uma aplicação.
          Ele está usando o método antMatchers do objeto HttpSecurity, que é uma configuração de segurança para aplicações web baseadas em Spring. O método antMatchers permite especificar um padrão de URL que deve ser permitido sem autenticação. Os padrões de URL são especificados como argumentos para o método.
          <br/>
          <br/>
          A lista de caminhos inclui rotas como "/auth" e "/swagger-ui", que podem ser usadas para autenticar usuários e exibir a documentação da API, respectivamente. Também inclui rotas como "/funcionarios/aniversariantes" e "/apostilas", que podem ser usadas para recuperar informações sobre funcionários e apostilas, respectivamente.
          <br/>
          <br/>
          O padrão de URL "*" significa que todas as rotas são permitidas sem autenticação. O padrão de URL "/" significa que a rota raiz da aplicação é permitida sem autenticação.

</p>
        </div>

        <div className="section">
          <h2 className="mt-0 mb-3 text-bold">Diagrama com Relacionamentos</h2>
          <img src={diagrama} alt="" />
        </div>

        <div className="section">
          <h1 className="h1 border-bottom border-success d-flex justify-content-center mt-5 pb-3">Front-end</h1>
          <h2 className="mt-6 text-bold" >Dependências</h2>
          <img src={dependenciaFront} alt="" />
        </div>
        <div className="section">
          <h2 className="mt-6 text-bold"  >Node Versão</h2>
          <p className='border pt-3 pb-3 mt-4 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>v16.16.0</p>
        </div>
        <div className="section">
          <h2 className="mt-6 text-bold">Começando</h2>
          <p className='mb-3'>Instalar o pacote <span className="text-bold">“serve”</span> com NPM</p>
          <p className='border pt-3 pb-3 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>npm install serve</p>
          <p>Na primeira utilização ou quando for adicionado algum pacote novo no projeto do FRONT,
será necessário utilizar o comando de instalação para atualizar os pacotes.</p>
        </div>
        <div className="section">
          <h2 className="mt-6 text-bold">Instalar Dependências</h2>
          <p className='border pt-3 pb-3 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>npm install</p>
          <p>Gerar a versão de produção do front. </p>
        </div>
        <div className="section">
          <h2 className="mt-6 text-bold">Como "buildar" o projeto</h2>
          <p className='border pt-3 pb-3 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>npm run-script build</p>
        </div>
        <div className="section">
          <h2 className="mt-6 text-bold">Subir o servidor</h2>
          <p className='border pt-3 pb-3 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>npx serve -s build -l 30xx &</p>
        </div>

        <div className="section">
          <h2 className="mt-6 text-bold">Explicando Sistema de Rotas</h2>
          <img src={rotasFront} alt="" />
          <p className='border mt-5 pt-3 pb-3 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>
          Cada elemento  <span className="text-bold">&lt;Route&gt;</span> representa uma rota na aplicação. Cada rota tem um atributo path que especifica o caminho da rota e um atributo element que especifica o componente que deve ser renderizado quando a rota for acessada.
Por exemplo, a rota com o caminho '/login' irá renderizar o componente  <span className="text-bold">&lt;Login /&gt;</span> quando acessada.<br/><br/>

O atributo exact no elemento <span className="text-bold">&lt;Route&gt;</span>   significa que o caminho da rota deve ser exatamente igual ao especificado para que o componente seja renderizado. Isso é útil para evitar que vários componentes sejam renderizados ao mesmo tempo quando o caminho da rota inclui uma string que também está presente em outros caminhos de rotas.<br/><br/>

O elemento <span className="text-bold">&lt;Route&gt;</span>   com o caminho '*' significa que todas as rotas que não foram especificadas explicitamente irão renderizar o componente <span className="text-bold">&lt;NotFound /&gt;.</span> 
          </p>
        </div>
        
        <div className="section">
          <h2 className="mt-6 text-bold">Método para Privação e Liberação de Rotas</h2>
          <img src={funcaoPrivar} alt="" />
          <p className='border mt-5 pt-3 pb-3 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>O código acima é um componente de função chamado Private que é usado para privar algumas rotas da aplicação. Ele recebe uma única propriedade chamada children que representa os componentes filhos do componente Private.<br/><br/>

O componente Private utiliza o contexto de autenticação da aplicação, obtido através da função useContext, para verificar se o usuário está autenticado. Ele verifica se a propriedade authenticated do contexto de autenticação é true ou false. Se for false, significa que o usuário não está autenticado e o componente Private redireciona o usuário para a rota de login através do componente &lt;Navigate&gt;. Se a propriedade authenticated for true, significa que o usuário está autenticado e o componente Private renderiza os componentes filhos.<br/><br/>

O componente Private também verifica a propriedade loading do contexto de autenticação. Se essa propriedade for true, significa que a autenticação ainda está sendo verificada e o componente Private renderiza um elemento  com o texto "Carregando..." enquanto isso.</p>
        </div>

              
        <div className="section">
          <h2 className="mt-6 text-bold">Explicando Método de auth</h2>
          <img src={funcaoAuth } alt="" />
          <p className='border mt-5 pt-3 pb-3 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>O código acima é um componente de função que fornece um contexto de autenticação para a aplicação. Ele contém várias funções e estados que são compartilhados por toda a aplicação através do contexto.

O componente usa a função <span className="text-bold">useEffect</span>  para recuperar os dados do usuário e do token de acesso armazenados no armazenamento local do navegador quando o componente é montado. Ele então atualiza o cabeçalho da API com o token de acesso para autenticar as chamadas da API subsequentes. Isso permite que o usuário continue autenticado mesmo se a página for recarregada ou se o usuário sair e voltar para a aplicação.<br/><br/>

O componente também define uma função <span className="text-bold">login</span>  que é usada para autenticar o usuário. Quando a função é chamada, ela faz uma chamada à API para autenticar o usuário com os dados de login fornecidos. Se a autenticação for bem-sucedida, a função armazena os dados do usuário e o token de acesso no armazenamento local do navegador e atualiza o cabeçalho da API com o token de acesso. A função também atualiza o estado da aplicação para refletir que o usuário está autenticado.<br/><br/>

O componente também define uma função logout que é usada para desconectar o usuário. Quando a função é chamada, ela remove os dados do usuário e o token de acesso do armazenamento local do navegador.</p>  
        </div> 
        <div className="section">
          <h2 className="mt-6 text-bold">Explicando Método de Criaçao de Conta</h2>
          <img src={createAccount} alt="" />
              <p  className='border mt-5 pt-3 pb-3 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'> Este código é uma função em JavaScript que realiza o processo de registro de um novo usuário em algum tipo de sistema. Ele começa chamando a função <code>handleNewUser</code>, que faz uma chamada à uma API com o método get, passando como parâmetro a URL <code>'/autores/verify/'</code> seguida do email informado pelo usuário. Se a chamada for bem-sucedida, uma mensagem de alerta é exibida informando que o email já está cadastrado. Se houver um erro na chamada, é realizada uma nova chamada à API, desta vez com o método post e a URL <code>'/auth/registro'</code>, enviando como parâmetro um objeto contendo as informações do usuário. Se essa chamada for bem-sucedida, a função createAutor é chamada. Caso ocorra um erro, o erro é simplesmente exibido no console.

A função createAutor faz uma chamada à API com o método post e a URL <code>'/autores'</code> , enviando como parâmetro um objeto com o email e a senha do usuário. Antes de enviar a senha, ela é criptografada usando a função md5. Se a chamada for bem-sucedida, uma mensagem de sucesso é exibida e o usuário é redirecionado para a página de login após um delay de 5 segundos. Caso ocorra um erro, o erro é exibido no console.

A função generateCode gera um código aleatório com a quantidade de caracteres especificada como parâmetro. Ela faz isso concatenando os caracteres de uma string pré-definida de forma aleatória.

A função sendMail faz uma chamada à API com o método post e a URL <code>'/email/createAccount'</code> , enviando um objeto com o email e um código especial como parâmetro. Se a chamada for bem-sucedida, uma mensagem de sucesso é exibida, caso contrário, uma mensagem de erro é exibida.

A função handleCodigo simplesmente chama a função sendMail.<br/><br/>

A função validarCodigo verifica se o código informado pelo usuário é igual ao código especial e, se não for, exibe uma mensagem de erro. Se for, exibe uma mensagem de informação e altera o estado de um input.<br/><br/>

A função handleClose fecha um modal exibindo um aviso.<br/><br/>

O hook de efeito useEffect é chamado quando a função é iniciada, gerando um código aleatório com a função generateCode e exibindo um modal com um aviso.<br/><br/>

A constante highlightText é um objeto com a propriedade <strong>'color'</strong> , que pode ser usada para destacar algum texto em uma página HTML.<br/><br/>
          </p>
        </div>
        <div className="section">
          <h2 className="mt-6 text-bold">Explicando Método de Recuperacao de Senha</h2>
          <div style={{display: "flex",justifyContent: "space-between"}}>
            <img  style={{width: "49.6%"}}src={imagePassword} alt="" />
            <img style={{width: "49.6%"}} src={imageMailRecovery} alt="" />
          </div>
          <h3 className="mt-6 text-bold">Mail Recovery</h3>
          <p  className='border mt-5 pt-3 pb-3 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>
<p>O componente <code>MailRecovery</code> é um formulário para iniciar um processo de recuperação de senha para uma conta. Ele possui várias funções que são usadas para lidar com as diferentes etapas do processo: <code>useContext</code> é um gancho que permite que um componente de função acesse os valores em um objeto de contexto. Nesse caso, o componente está usando o <code>AuthContext</code> para acessar as funções <code>setAutorPasswordRecovery</code> e <code>setEmailJwt</code>, que são usadas para definir as informações de recuperação de senha e e-mail no estado de contexto. Esses valores são então usados ​​para levar o usuário ao formulário de redefinição de senha. <code>useEffect</code> é um gancho usado para executar efeitos colaterais em um componente de função. Nesse caso, ele está sendo usado para definir o valor da variável de estado <code>codigoTemp</code> para um código de recuperação gerado aleatoriamente quando o componente é renderizado pela primeira vez. Este código será enviado para o e-mail do usuário e usado para verificar se ele é o proprietário da conta antes de permitir que ele redefina sua senha. <code>useState</code> é um gancho que permite que um componente de função tenha variáveis ​​de estado. Nesse caso, o componente está usando variáveis ​​de estado para armazenar o e-mail, código de recuperação, código de recuperação temporário e vários outros valores usados ​​durante o processo de recuperação de senha. Essas variáveis ​​de estado são usadas para armazenar e atualizar os dados conforme o usuário interage com o formulário. <code>useNavigate</code> é um gancho que permite que um componente de função navegue para diferentes rotas no aplicativo. Nesse caso, ele está sendo usado para levar o usuário ao formulário de redefinição de senha quando o código de recuperação é verificado com sucesso. <code>useForm</code> é um gancho que fornece funcionalidade de validação de formulário. Neste caso, ele está sendo usado para validar o campo de e-mail usando um esquema Yup, e para registrar o campo de e-mail com o formulário para que ele possa ser acessado e validado. A função <code>handleSubmit</code> também é fornecida pelo gancho e é usada para manipular o envio do formulário. <code>toast</code> e <code>ToastContainer</code> são componentes da biblioteca <code>react-toastify</code> que são usados ​​para exibir notificações ao usuário. A função <code>toast</code> é usada para exibir uma notificação toast e o <code>ToastContainer</code> é usado para renderizar as notificações do sistema na página. <code>Modal</code> e <code>Button</code> são componentes da biblioteca <code>react-bootstrap</code> que são usados ​​para exibir um modal. O componente <code>Modal</code> é usado para renderizar o modal, e o componente <code>Button</code> é usado para renderizar os botões dentro do modal.</p>
          </p>
          <h3 className="mt-6 text-bold">Password Recovery</h3>
          <p className='border mt-5 pt-3 pb-3 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>
          A função PasswordRecovery é um componente funcional em um aplicativo React que lida com a recuperação de senha de um usuário. Ele utiliza os ganchos useState, useContext, useNavigate, useForm e useEffect para gerenciar o estado, obter valores do contexto, navegar para outras páginas, validar o formulário e executar determinadas ações quando o componente é montado.

O componente possui as seguintes variáveis ​​de estado:

senha: a nova senha inserida pelo usuário. É inicialmente definida como uma string vazia e pode ser atualizada usando a função setSenha.
confirmarSenha: a senha de confirmação inserida pelo usuário. É inicialmente definida como uma string vazia e pode ser atualizada usando a função setConfirmarSenha.
emailAutor: o e-mail do usuário. É inicialmente definido como uma string vazia e pode ser atualizado usando a função setEmailAutor.
O componente também utiliza o gancho useContext para obter os valores idAutor e passwordRecovery do contexto emailJwtAuthContext. Esses valores são usados ​​para identificar o usuário e sua conta no banco de dados.

O gancho useForm da biblioteca react-hook-form é usado para validar o formulário. O objeto newPassSchema é criado usando a biblioteca yup para especificar as regras de validação para os campos de senha e confirmação de senha. A função yupResolver é então passada para o gancho useForm para manipular a validação do formulário.

A função handleNewPassword é chamada quando o formulário é enviado. Ela atualiza a senha do usuário no banco de dados enviando uma solicitação PUT ao endpoint da API, passando a nova senha como corpo da solicitação. Se a solicitação for bem-sucedida, exibe uma mensagem de sucesso usando a biblioteca toast e navega para a página de login. Se a solicitação falhar, exibe uma mensagem de erro usando a biblioteca toast.

As funções handleAccountJwt e handleAccountAutor são usadas para obter informações da conta e do e-mail do usuário do banco de dados, respectivamente, enviando solicitações GET ao endpoint da API. Elas armazenam essas informações nas variáveis ​​de estado accountJwt e emailAutor, respectivamente.

O gancho useEffect é usado para chamar as funções handleAccountAutor e handleAccountJwt quando o componente é montado. Isso garante que as informações da conta do usuário sejam recuperadas e armazenadas no estado quando o componente é renderizado.

Em resumo, o componente PasswordRecovery é responsável por gerenciar o estado, obter informações do banco de dados, validar e enviar o formulário de recuperação de senha e navegar para outras páginas. Ele também exibe mensagens de sucesso ou erro ao tentar atualizar a senha do usuário no banco de dados.
          </p>
        </div>  
        <div className="section">
          <h2 className="mt-6 text-bold">Explicando Codigo de AniversariantePost</h2>
          <img src={imageAniversariantePost} alt="" />
          <p className='border mt-5 pt-3 pb-3 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>
          requisicaoLista Aniversariantes é uma função que faz uma solicitação GET à API para recuperar uma lista de funcionários. Quando a resposta é recebida, a lista de funcionários é armazenada no estado do componente usando a setListaAniversariantefunção.

requisitarPostAniversarianteé uma função que faz uma solicitação PUT à API para atualizar as informações de um funcionário específico. Ele pega um objeto funcionário como parâmetro e envia uma solicitação para a API com as informações atualizadas, incluindo nome do funcionário, aniversário e departamento.

inserirFuncionarioé uma função que faz uma solicitação POST à ​​API para adicionar um novo funcionário à lista. colaboradorNameEle usa as variáveis ​​de estado do componente startDate, e departamentopara criar o novo objeto funcionário e enviá-lo para a API.

excluirAniversarianteé uma função que faz uma solicitação DELETE à API para excluir um funcionário da lista. Ele itera sobre uma matriz de IDs de funcionários armazenados na aniversarianteInfovariável de estado do componente e envia uma solicitação DELETE à API para cada ID.

searchForEmployeeByNameé uma função que faz uma solicitação GET para a API com uma consulta de pesquisa para recuperar uma lista de funcionários com nomes que correspondem à consulta de pesquisa. Ele usa a colaboradorNamevariável de estado do componente como consulta de pesquisa.
          </p>
        </div>              
        <div className="section">
          <h2 className="mt-6 text-bold">Explicando Codigo da Area de Exclusao de Postagens</h2>
          <img src={imageExclusaoPostagens} alt="" />
          <p className='border mt-5 pt-3 pb-3 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>
          Esse código é  um componente em ReactJS. O componente é uma página que exibe uma lista de postagens e permite que o usuário selecione as postagens que deseja excluir.

A função começa declarando alguns estados gerenciados pelo Hook useState do React. O estado postagens armazena a lista de postagens que serão exibidas na tela. O estado aux é um valor booleano que é utilizado para atualizar a lista de postagens quando uma postagem é excluída. O estado userinfo armazena informações sobre o usuário, incluindo a lista de postagens que o usuário selecionou para exclusão.

A função handleChange é um manipulador de eventos que é chamado quando o usuário seleciona ou desmarca uma postagem na lista. Ele atualiza o estado userinfo com a nova lista de postagens selecionadas pelo usuário.

A função getPosts faz uma chamada à API para obter a lista de postagens e atualiza o estado postagens com os dados retornados.

A função excluirPostagem faz uma chamada à API para excluir cada postagem selecionada pelo usuário. Se a exclusão for bem-sucedida, ela atualiza o estado aux, o que faz com que a lista de postagens seja atualizada.

O hook useEffect é usado para chamar a função getPosts assim que o componente é montado e para atualizar a lista de postagens quando o estado aux é alterado.

Por fim, o componente retornado exibe a lista de postagens e um botão para permitir que o usuário exclua as postagens selecionadas.
          </p>
        </div>              
        <div className="section">
          <h2 className="mt-6 text-bold">Explicando Codigo do Ramal</h2>
          <img src={imageCodigoRamal} alt="" />
          <p className='border mt-5 pt-3 pb-3 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>
          Esse código é  um componente em ReactJS. O componente é uma página que exibe uma lista de ramais de funcionários organizados por departamento.

A função começa declarando alguns estados gerenciados pelo Hook useState do React. O estado departamentos armazena a lista de departamentos da empresa. O estado funcionarios armazena a lista de funcionários da empresa. O estado showModalAviso é um valor booleano que controla a exibição de um modal de aviso.

A função Departamentos faz uma chamada à API para obter a lista de departamentos e atualiza o estado departamentos com os dados retornados.

A função Funcionarios faz uma chamada à API para obter a lista de funcionários e atualiza o estado funcionarios com os dados retornados.

O hook useEffect é usado para chamar as funções Departamentos e Funcionarios assim que o componente é montado. Isso significa que essas duas funções serão chamadas apenas uma vez, quando o componente é carregado pela primeira vez.

Por fim, o componente retornado exibe a lista de departamentos e, para cada departamento, exibe a lista de funcionários que pertencem a ele. Cada item da lista exibe o nome do funcionário e seu ramal. Também é exibido um botão de edição para cada funcionário, que leva o usuário para uma página de edição de ramal.
          </p>
        </div>
        <div className="section">
          <h2 className="mt-6 text-bold">Explicando Codigo Edit Infos Ramal</h2>
          <img src={imageCodigoRamal} alt="" />
          <p className='border mt-5 pt-3 pb-3 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>
          Esta é uma função de componente de React que exibe um formulário para editar os dados de um funcionário, incluindo o nome e o número de ramal.

A função utiliza o gerenciador de estado do React, useState, para gerenciar o valor dos campos de entrada do formulário. Ela também usa o hook useParams do pacote react-router-dom para obter o ID do funcionário a ser editado a partir da rota atual.

Ela também usa o hook useForm do pacote react-hook-form para gerenciar o estado do formulário e realizar validação dos campos com o pacote yup. Quando o formulário é enviado, a função editarFuncionarioRamal é chamada, que faz uma chamada à API para atualizar os dados do funcionário com os valores dos campos de entrada. Se a chamada à API for bem-sucedida, uma mensagem de sucesso é exibida e o usuário é redirecionado para a página de ramal. Se houver um erro, uma mensagem de erro é exibida.

A função também usa o hook useEffect do React para fazer uma chamada à API para obter os dados do funcionário a ser editado quando o componente é montado. Estes dados são usados para preencher os campos de entrada do formulário com os valores atuais do funcionário.
          </p>
        </div>                
      </div>
    </section>
  );
};