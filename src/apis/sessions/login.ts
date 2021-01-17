import firebase from '../../plugins/firebase';

type Params = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: Params) => {
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {})
    .catch(() => {
      window.alert('ログインに失敗しました。\nメールアドレスとパスワードを確認してください。');
    });
};
