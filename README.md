## react-native-app

## firebase setting
`firebaseConfig.js` を作成、下記を記入（firebase console で確認）
```
export const firebaseConfig = {
  apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  authDomain: 'xxxxxxxxxxxxxxxx.firebaseapp.com',
  databaseURL: 'https://xxxxxxxxxxxxxxxx.firebaseio.com',
  projectId: 'xxxxxxxxxxxxxxxx',
  storageBucket: 'xxxxxxxxxxxxxxxx.appspot.com',
  messagingSenderId: 'xxxxxxxxxxxxx',
  appId: 'x:xxxxxxxxxxxxx:web:xxxxxxxxxxxxxxxx',
};
```

## main command
```
- パッケージインストール
$ yarn i

- 開発環境
$ yarn web
$ yarn android
$ yarn ios
```
