# Features de Angular

## Lazy Loading

O Lazy Loading permite você carregar os modulos angular dinâmicamente, de acordo com a rota em que o usuário está. Por exemplo, enquanto o usuário estiver na tela de Login, somente o modulo de login será carregado, e não login, home, profile, list. O default é o Angular carregar todos os modulos o mais cedo possível. O Lazy loading pode aumentar a performance por fazer esse carregamento por demanda.

**Implementando o Lazy Loading**

1- Dentro de ``app-routing-module.ts``, no array de rotas, após definir o path da rota(Ex: path : "home"), adicione uma propriedade chamada loadChildren, que recebe um callback com o module a ser carregado. Ex: `` loadChildren: () => import("./home/home.module").then(mod => mod.HomeModule) ``

2- O usuário ao acessar a rota "home", será carregado o modulo de home e todas as suas rotas internas(já supondo que você tenha um arquivo home-routing.module.ts com as rotas internas definidas)

## Guarda de Rotas

Protege rotas para o usuário não acessá-las, caso não tenha autenticação/autorização necessária.

**Implementando os Guards**

1- Rode o comando do Angular CLI `` ng generate guard [name] ``

2- Selecione a opção **canMatch**

3- No arquivo criado, há uma função canMatch, ela deve retornar um boolean. Dentro dessa função escrevemos nossa regra para acessar a rota, retornando true caso o usuário esteja apto para acessa-lá, ou false se ele não pode acessar ainda(geralmente com um redirect pra outra página).

4- Após escrever o que a função deve fazer, importe essa guarda dentro de `` app-routing-module.ts ``, e dentro do array de rotas, na rota que você deseja proteger, adicione a propriedade **canMatch** que recebe como valor a guarda que você acabou de criar. 

Ex: 
``
const routes: Routes = [
  {
    path: "nomeDaRota",
    canMatch: [ExemploGuard]
  }
``

## Interceptors

Intercepta e faz alguma ação em qualquer requisição que saia do seu front-end para o back-end. Ex: seu back-end espera receber um token de autenticação em toda requisição que ele receber. Implementar no frontend você repetiria varias vezes o mesmo código para sempre anexar o token na requisição. Escrevendo uma vez só no interceptor, você não precisará mais lembrar de ter que fazer isso sempre.

**Implementando o Interceptor**

1- Rode o comando do Angular CLI `` ng generate interceptor [name] ``

2- Olhando a função intercept que vem nesse arquivo, percebe-se 2 parâmetros: request (a requisição sendo feita) e next (usado para dar continuidade a cadeia de intercept. Sim você pode criar varios interceptors)

3- Dentro da função intercept, você implementa o que deve ser feito antes de disparar a requisição. No final da função, chame `` next.handle(requisiçãoAlterada) ``, passando como argumento a nova requisição, com as alterações que você fez. Esse método dá continuidade para a cadeia de interceptors, ou vai direto para a requisição caso não haja mais interceptors.

4- Dentro de ``app.module.ts``, no decorator NgModule, adicione a propriedade providers, que recebe um array com mais 3 propriedades:

``@NgModule({
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : AutenticacaoInterceptor, multi : true}
  ],``
  
  **provide:** para escolher o que você quer prover, no caso interceptor
  
  **useClass:** qual interceptor você vai usar
  
  **multi:** para permitir que mais interceptors possa ser usado.
  
