# Firebase Remote Config

Neste app React Native, configuramos o **Firebase Remote Config**, onde é um serviço que permite alterar o comportamento e a aparência de um aplicativo em tempo real, sem a necessidade de publicar uma nova versão na loja. Ele funciona através de parâmetros que você define no console do Firebase. Esses parâmetros podem ser recuperados pelo app e usados para modificar elementos como layout, texto, funcionalidades e muito mais. É uma ferramenta útil para testes A/B, personalização de conteúdo para diferentes segmentos de usuários e para lançar novas funcionalidades de forma controlada.

Para saber mais sobre a funcionalidade e ver o passo a passo, a aula está disponível no [YouTube](https://youtu.be/nsT3c8kFTyw).


## Antes de rodar o projeto

Altere seus arquivos credenciais para poder rodar o seu projeto. Eles são cruciais para poder se comunicar com seu [Projeto Firebase](https://youtu.be/12R-7Oejk7c).

1. Altere o arquivo **google-services.json** em `android/app` para o mesmo arquivo que você criou na aula de [Configuração para Android](https://youtu.be/nGTPHD7eOF8).
2. Altere o arquivo **GoogleService-Info.plist** em `ios/` para o mesmo arquivo que você criou na aula de [Configuração para iOS](https://youtu.be/AfQCQBpfE-A).
  

## Como Rodar o Projeto

Siga os passos abaixo para clonar e rodar o projeto no seu ambiente local.


### Passos para Clonar e Rodar o Projeto

  

1. ****Clone o repositório:****

    ```bash 
    git clone https://github.com/viniivg/rn-firebase-remote-config.git
    cd rn-firebase-remote-config
    ```

2. ****Instale as dependências:****

    ```bash 
    npm install
    ## ou
    yarn install
    ```
    
    Para iOS
    ```bash 
    cd ios && pod install
    ```

3. ****Execute o projeto:****


    ```bash 
    npx react-native run-android
    ```
    
    Ou para iOS:
    
    ```bash 
    npx react-native run-ios
    ```

 

## Redes sociais

Nos siga nas redes sociais


- ****[Instagram](https://www.instagram.com/vinii.vg)****
- ****[YouTube](https://www.youtube.com/c/ViniciusGuedesDev)****
- ****[LinkedIn](https://www.linkedin.com/in/seu-usuario)****

  
