># 1 Estrutura do projeto


## 1.1 Boas vindas
<br/>

## 1.2 Sobre o projeto
<br/>

## 1.3 Criando o projeto
Conforme doc https://reactnative.dev/docs/0.62/typescript#getting-started-with-typescript<br/>
usei o seguinte comando para gerar o app <br/>
**npx react-native init gopizza --template react-native-template-typescript**

### Padronização de código
Criar arquivo .editorconfig
```
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

Editar .prettierrc.js
```
module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: true,
  singleQuote: true,
  semi: false,
  tabWidth: 2,
  trailingComma: 'es5',
  arrowParens: 'avoid',
}
```

**yarn add eslint-plugin-import -D**

Alterar o conteúdo do .eslint.js
```
/* eslint-disable semi */
module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        semi: ['error', 'never'],
        '@typescript-eslint/semi': 'off',
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
            pathGroups: [
              {
                pattern: 'src/**',
                group: 'parent',
                position: 'after',
              },
            ],
            pathGroupsExcludedImportTypes: ['builtin'],
            alphabetize: {
              order: 'asc',
            },
            'newlines-between': 'always',
          },
        ],
        'sort-imports': [
          'error',
          {
            allowSeparatedGroups: true,
            ignoreDeclarationSort: true,
          },
        ],
      },
    },
  ],
}
```

Repare na configuração __pattern: 'src/**__ dentro de pathGroups, ela vai agrupar os imports absolutos via Path Mapping src/directory/file.ext que vamos configurar a seguir.

<br/><br/>

## 1.4 Adicionando Typescript
Typescript já está configurado pois o template utilizado para gerar o app já fornece
<br/><br/>


## 1.5 Path Mapping
Instalar a depedendência <br />
**yarn add babel-plugin-module-resolver -D**

### babel.config.js adicionar

```
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          src: './src',
        },
      },
    ],
  ],
```

### tsconfig.json
```
  "baseUrl": "./",
  "paths": {"src/*": ["./src/*"]},
```

Feito isso é possível importar usando a sintaxe src/directory/File.tsx
<br/><br/>

## 1.6 Fonte personalizada
Criar o diretório **assets/fonts** na raiz do projeto e colocar os arquivos de fonte (pode baixar do google fonts) <br/>

No arquivo react-native.config.js (criar na raiz do projeto caso não exista)
```
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts/'],
}
```
Rodar o comando para configurar pro Android e IOS <br/>
**yarn react-native link**
<br/><br/>

## EXTRA Recurso de geolocalização
Criar arquivo src/hooks/useUserLocation.ts
```
import { useEffect, useState } from 'react'
import { PermissionsAndroid } from 'react-native'
import Geolocation from 'react-native-geolocation-service'

export const useUserLocation = () => {
  const [hasLocationPermission, setHasLocationPermission] = useState(false)
  const [userLocation, setUserLocation] = useState({
    latitude: 0,
    longitude: 0,
  })

  async function verifyLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      )
      setHasLocationPermission(granted === PermissionsAndroid.RESULTS.GRANTED)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    verifyLocationPermission()

    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        position =>
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        error => console.log(error.code, error.message)
      )
    }
  }, [hasLocationPermission])

  return userLocation
}
```

No arquivo ios/gopizza/Info.plist adicionar
```
<dict>
  ...
  <key>NSLocationWhenInUseUsageDescription</key>
  <string>Permitir o acesso a minha localização</string>
</dict>
```

No arquivo android/app/src/main/AndroidManifest.xml
```
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

Como utilizar: <br/>
```
import { useUserLocation } from 'src/hooks/useUserLocation'

export const SomeScreen = () => {
  const userLocation = useUserLocation()

  console.log(userLocation)

  return (
    <View>
```
<br/><br/>

## 1.7 Instalando Styled Components
**yarn add styled-components**<br/>
**yarn add @types/styled-components-react-native -D**
<br/><br/>

## 1.8 - Tema da aplicação
No arquivo theme/index.ts inserido as cores e fontes com os tokens.

No styed.d.ts faz uma leitura desse arquivo com o typeof que incluída no DefaultTheme que por sua vez é sobrescrito para a app, então DefaultTheme passa a ter estas configs.
<br/><br/>

## 1.9 - Instalação e configuração do Firebase
https://efficient-sloth-d85.notion.site/Instala-o-e-Configura-o-Firebase-939e568bc5d240f8949a6ab1cafadd43
<br/><br/>

>## 2 Autenticação

### 2.1 Criação SignIn
Criados arquivos no diretório src/screens/SignIn

index.tsx
```
import React from 'react'

import * as S from './styles'

export const SignIn = () => {

  return (
    <S.Container>

    </S.Container>
  )
}
```
styles.ts
```
import styled from 'styled-components/native'

export const Container = styled.View``
```
<br/><br/>

## 2.2 Utilizando do LinearGradient
https://www.npmjs.com/package/react-native-linear-gradient <br/>
https://github.com/react-native-linear-gradient/react-native-linear-gradient

**yarn add react-native-linear-gradient** <br/>
**yarn react-native link react-native-linear-gradient** <br/>
Reiniciar o app

Editar o src/screens/SignIn/styles.ts para
```
import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 },
}))`
  flex: 1;
  justify-content: center;
`
```
<br/><br/>

## 2.3 StatusBar
Todos os Statusbar terão o conteúdo branco e background transparent para que fique da mesma cor da screen:

Editar no App.tsx <br/>
```
<StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent />
```

a prop translucent considera o limite do dispositivo como area util da interface
<br/><br/>

## 2.4 Componente Input
Criado o componente Input que varia o layout conforme a prop variant
<br/><br/>

## 2.5 Componente Button
Criado o componente Button que varia o layout conforme a prop variant
<br/><br/>

## 2.6 Finalizando interface do SignIn
Utilizados KeyboardAvoidingView para subir o conteúdo quando o teclado estiver visível.<br/>
Customizado o comportamento conforme a plataforma, se for ios insere um padding

Conteúdo foi envolvido numa ScrolView, sendo que o padding-bottom ficou dinâmico
por meio da lib react-native-iphone-x-helper,<br/>
que ajusta a screen para q parte do conteúdo não fique escondido nos iphones recentes
<br/><br/>

## 2.7 Estrutura do Hook de Autenticação
Criada a base do hook de autenticação<br/>
src/hooks/useAuthentication.tsx
```
import React, { ReactNode, createContext, useContext } from 'react'

type AuthContextProps = {}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextProps)

const AuthProvider = ({ children }: AuthProviderProps) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext)

export { AuthContext, AuthProvider, useAuth }
```

Envolvido o app com o contexto<br/>
App.tsx
```
import { AuthProvider } from 'src/hooks/useAuthentication'
...
  <AuthProvider>
    <SignIn />
  </AuthProvider>
```
<br/><br/>

## 2.8 Ativando Autenticação com Email e Senha
### 2.8.1 Configurando GraphQL
Necessário alterações no babel.config.js e metro.config.js para que entendam o graphql.
<br/><br/>

### 2.8.2 Configurando Codegen
Seguindo alguns artigos como https://dev.to/harrisonhenri/creating-a-react-native-app-using-apollo-graphql-v3-gj5
configurei codegen para gerar as typagens do endpoint (backend), para isso basta executar o comando
<br/>
**yarn gen-endpoint-types**
<br/>
O arquivo src/gql/generated/apiDocs.ts será atualizado conforme os recursos do endpoint graphql.
<br/><br/>

### 2.8.3 Apollo Client
No arquivo src/gql/client.ts uma função createClient retorna um ApolloClient em que é usado para servir
o app, disponibilizado globalmente pelo ApolloProvider no App.tsx.
<br/><br/>

### 2.8.4 Hook useAuthentication
Implemetado o recurso de login via backend/graphql por meio do useMutation do @apollo/client
<br/><br/>

## 2.9 Cadastrando usuários
Criada uma coleção de usuários e inseridos dois registros, um deles é admin.
<br/><br/>
