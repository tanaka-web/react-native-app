## react-native-app

## firebase setting
`firebaseConfig.js` を作成、下記を記入（firebase console で確認）
```
export const firebaseConfig = {
  apiKey: 'xxxxxxxxxxxx',
  authDomain: 'xxxxxxx.firebaseapp.com',
  databaseURL: 'https://xxxxxxx.firebaseio.com',
  projectId: 'xxxxxxx',
  storageBucket: 'xxxxxxx.appspot.com',
  messagingSenderId: 'xxxx',
  appId: 'x:xxxx:web:xxxxxxx',
};
```

## main command
```
- パッケージインストール
$ yarn install

- 開発環境
$ yarn web
$ yarn android
$ yarn ios
```
