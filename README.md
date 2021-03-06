<h1 align="center"> ConectLab</h1> 


![Página Inicial](https://user-images.githubusercontent.com/44882364/151262661-13e218b4-b3b6-44b9-9bed-b722cf2957d1.jpg)



## Sumário

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#cliente">Cliente</a> • 
 <a href="#equipe-avatar">Equipe</a> • 
 <a href="#mapeamento-de-funcionalidades">Mapeamento de Funcionalidades</a> • 
 <a href="#youtube">Apresentação</a> •
 <a href="#documento">Relatório</a> •
</p>
                  

## Sobre

Nosso produto se constitui em um laboratório de circuitos eletrônicos com o objetivo de auxiliar práticas de laboratório nos cursos de engenharia elétrica e física na Universidade Federal do Ceará. O usuário tem a opção de usá-lo sem a obrigatoriedade de cadastro, mas uma vez cadastrado, abrir-se-á a possibilidade de se criar lições e  armazenar circuitos criado no simulador. O simulador utiliza-se de ações de “arrastar e soltar” (drag and drop) para movimentação dos componentes, e ainda há a opção de simulação para visualização dos resultados.


## Cliente

![cliente](https://user-images.githubusercontent.com/34467745/148120773-a65f1b37-1017-45d3-8af6-46ccde3d0780.jpeg) 

O nosso cliente é o professor [Wellington Wagner Ferreira Sarmento](https://github.com/wwagner33), professor do curso de Sistemas e Mídias Digitais da Universidade Federal do Ceará - UFC e tem como linhas de pesquisa alguns temas como: Ambientes Virtuais de Aprendizagem; Uso de Tecnologias Digitais em Educação à Distância; Informática Educativa; Multimídia para Educação; Swarm Intelligence.


## Equipe AVATAR 

|  NOME                          |  FUNÇÃO                    |  MATRÍCULA  |
|  ----------------------------  |  --------------------------|  ---------  |
|  ISRAEL DE CARVALHO DOS SANTOS |  CODIFICAÇÃO               |  497282     |
|  LUCAS AUGUSTO PIMENTA ALVES   |  DESIGN                    |  392282     |
|  REBEKA MELO PERES             |  DESIGN                    |  407760     |
|  RICARDO RODRIGUES PEREIRA     |  CODIFICAÇÃO E ATENDIMENTO |  396061     |
|  RONALD DO VALE GADELHA        |  CODIFICAÇÃO E ATENDIMENTO |  404078     |


 ## Youtube
Link da apresentação desse projeto:
 
<a href="http://www.youtube.com/watch?feature=player_embedded&v=vgHLnixMp4g" target="_blank"><img src="http://img.youtube.com/vi/vgHLnixMp4g/0.jpg" 
alt="Apresentação do Youtube" width="240" height="180" border="10" /></a>   

## Documento
Clique e veja nosso [relatório](https://github.com/lankion/conectlab/blob/master/Relat%C3%B3rio_Avatar_Checkpoint_4.pdf.pdf) de planejamento desse projeto.

## Instalação
 
### Frontend
```
// Clone essse repositório
 
$ git clone 
 
// Navege até a pasta conectlab
 
$ cd conectlab
 
// Começe a instalação dos pacotes por npm
 
$ npm install
 
// Para executar o aplicativo react pela parte Front
 
$ npm start

// A janela do seu navegador padrão abre automaticamente carregado o programa em questão
 
```
 
### Backend
 ```
 // Navege para backend
 
 $ cd backend
 
 // Instale os pacotes para o backend 
 
 $ npm install
 
 // Para executar a parte Backend
 
 $ npm run dev
 
 //A porta que ele roda é http://localost:3001
 ```
 
Uma versão do buil se encontra em [build](https://github.com/lankion/conectlab/releases)
 
## Mapeamento de Funcionalidades

|  Código  |  Funcionalidade                                                        |  Funções/Arquivos de Código                           |
|  ------- |  --------------------------------------------------------------------  |  ---------------------------------------------------  |
|  RF0001  |  Mostrar página inicial                                                |  Home() e BarraHero() BarraInfo()                     |
|  RF0002  |  Mostrar barra de navegação padrão                                     |  NavigationBarDisconnected()                          |
|  RF0003  |  Mostrar barra de navegação logado                                     |  NavigationBarConnected()                             |
|  RF0004  |  Mostrar formulário de cadastro de usuário                             |  Cadastro() e NovoUsuario()                           |
|  RF0005  |  Inserir dados de cadastro de usuário                                  |  NovoUsuario()                                        |
|  RF0006  |  Mostrar erro, caso dados obrigatórios não preenchidos                 |  NovoUsuario()                                        |
|  RF0007  |  Armazenar dados cadastrados                                           |  NovoUsuario()                                        |
|  RF0008  |  Mostrar usuário como cadastrado                                       |                                                       |
|  RF0009  |  Mostrar tela de login                                                 |  Login() e UsuarioLogar()                             |    
|  RF0010  |  Inserir dados de login                                                |  UsuarioLogar()                                       |
|  RF0011  |  Mostrar erro, caso dados de login estejam incorretos                  |  UsuarioLogar()                                       | 
|  RF0012  |  Consultar dados de usuário cadastrado                                 |                                                       |
|  RF0013  |  Mostrar erro, caso não exista usuário cadastrado                      |                                                       |
|  RF0014  |  Mostrar tela de recuperar login                                       |  RecuperarSenha()                                     |
|  RF0015  |  Inserir dados de recuperar login                                      |                                                       |
|  RF0016  |  Mostrar erro, caso dados de recuperar login estejam incorretos        |                                                       |
|  RF0017  |  Consultar dados de recuperar login                                    |                                                       |
|  RF0018  |  Mostrar erro, caso não existam dados para recuperar login             |                                                       |
|  RF0019  |  Mostrar dashboard/perfil                                              |  Perfil()                                             |
|  RF0020  |  Mostrar botão de alterar informações do usuário                       |                                                       |
|  RF0021  |  Inserir novo nome e sobrenome                                         |                                                       |
|  RF0024  |  Mostrar erro, caso e-mail seja inconsistente                          |                                                       |
|  RF0025  |  Inserir senha antiga                                                  |                                                       |    
|  RF0026  |  Inserir senha nova                                                    |                                                       |
|  RF0027  |  Mostrar erro, caso senha seja inconsistente                           |                                                       |
|  RF0028  |  Mostrar botão para guardar alterações                                 |                                                       |
|  RF0029  |  Guarda nome e sobrenome                                               |                                                       |
|  RF0030  |  Mostrar mensagem, nome e sobrenome atualizados                        |                                                       |
|  RF0031  |  Guardar e-mail atualizado                                             |                                                       |
|  RF0032  |  Mostrar mensagem de e-mail atualizado                                 |                                                       |
|  RF0033  |  Guardar senha alterada                                                |                                                       |
|  RF0034  |  Mostrar mensagem de senha atualizada                                  |                                                       |
|  RF0035  |  Mostrar botão de deletar perfil                                       |                                                       |
|  RF0036  |  Mostrar aviso perguntando se deseja confirmar exclusão de perfil      |                                                       |
|  RF0037  |  Mostrar mensagem de perfil deletado                                   |                                                       |
|  RF0038  |  Redirecionar para página inicial após perfil deletado                 |                                                       |
|  RF0039  |  Mostrar coleção                                                       |   Colecao()                                           |
|  RF0040  |  Selecionar circuito armazenado                                        |                                                       |
|  RF0041  |  Deletar circuito armazenado                                           |                                                       |
|  RF0042  |  Mostrar mensagem perguntando se deseja deletar circuito armazenado    |                                                       |
|  RF0043  |  Mostrar mensagem informando circuito deletado                         |                                                       |
|  RF0044  |  Abrir simulador para alterar circuito armazenado                      |                                                       |
|  RF0045  |  Mostrar lições                                                        |   Licoes()                                            |
|  RF0046  |  Selecionar lição                                                      |                                                       |
|  RF0047  |  Criar lição                                                           |                                                       |
|  RF0048  |  Deletar lição                                                         |                                                       | 
|  RF0049  |  Mostrar mensagem perguntando se deseja deletar lição armazenada       |                                                       |
|  RF0050  |  Mostrar mensagem de lição deletada                                    |                                                       |
|  RF0051  |  Mostrar tela de simulação                                             |  Simulacao()                                          |
|  RF0052  |  Mostrar biblioteca de componentes                                     |  ComponentesGeral() ComponenteInfo() ComponetePeca()  |
|  RF0053  |  Escolher modalidade de visualização de componentes                    |                                                       |
|  RF0054  |  Selecionar componente                                                 |                                                       |
|  RF0055  |  Posicionar componente                                                 |                                                       |
|  RF0056  |  Conectar componente                                                   |                                                       |
|  RF0057  |  Retirar componente                                                    |                                                       |
|  RF0058  |  Girar componente                                                      |                                                       |
|  RF0059  |  Copiar e colar componente                                             |                                                       |
|  RF0060  |  Mostrar instrumento de medição                                        |                                                       |  
|  RF0061  |  Selecionar instrumento de medição                                     |                                                       |
|  RF0062  |  Posicionar instrumento de medição                                     |                                                       |
|  RF0063  |  Conectar instrumento de medição                                       |                                                       |
|  RF0064  |  Retirar instrumento de medição                                        |                                                       |
|  RF0065  |  Girar instrumento de medição                                          |                                                       |
|  RF0066  |  Copiar e colar instrumento de medição                                 |                                                       |
|  RF0067  |  Desfazer ação na simulação                                            |                                                       |
|  RF0068  |  Refazer ação na simulação                                             |                                                       |
|  RF0069  |  Iniciar simulação                                                     |                                                       |
|  RF0070  |  Mostrar animação de simulação                                         |                                                       |
|  RF0071  |  Mostrar resultados da simulação                                       |                                                       |
|  RF0072  |  Parar simulação                                                       |                                                       |
|  RF0073  |  Salvar componente presente na área de simulação                       |                                                       |

