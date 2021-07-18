import React, { useCallback } from 'react';
import { TextInput, Button, View, Text, ScrollView, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { sendMail } from '../../apis/mail/send';
import { DESIRED_JOB, SEND_MAIL_TEXT } from '../../config';
import { createUser } from '../../apis/users/create';
import { color } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';

const schema = Yup.object().shape({
  username: Yup.string().required('氏名は必須です。'),
  email: Yup.string()
    .email('メールアドレスの形式ではありません。')
    .required('メールアドレスは必須です。'),
  age: Yup.number().required('年齢は必須です。'),
  desired_job: Yup.string().required('希望職種は必須です。'),
});

const UsersForm: React.FC = () => {
  const { goBack } = useNavigation();
  const handleOnSubmit = useCallback((values) => {
    try {
      createUser({
        username: values.username,
        email: values.email,
        age: values.age,
        desired_job: values.desired_job,
        desired_reason: values.desired_reason,
      });
      sendMail({ email: values.email, message: SEND_MAIL_TEXT });
    } catch {
      window.alert('送信に失敗しました\n入力を確認して再度送信してください');
      return;
    }
    window.alert('エントリーを受け付けました\n登録したメールアドレスにメールを送信しました。');
    goBack();
  }, []);

  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <View style={Styles.form}>
        <Formik
          initialValues={{
            username: '',
            email: '',
            age: '',
            desired_job: undefined,
            desired_reason: '',
          }}
          validateOnMount
          validationSchema={schema}
          onSubmit={(values) => handleOnSubmit(values)}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            isValid,
            isSubmitting,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={InputStyles.view}>
                <Text style={InputStyles.label}>氏名</Text>
                <TextInput
                  style={InputStyles.input}
                  value={values.username}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  placeholder="ex. 鈴木 太郎"
                />
                {errors.username && touched.username ? (
                  <Text style={InputStyles.error}>{errors.username}</Text>
                ) : null}
              </View>
              <View style={InputStyles.view}>
                <Text style={InputStyles.label}>Email</Text>
                <TextInput
                  style={InputStyles.input}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="ex. hoge@example.com"
                />
                {errors.email && touched.email ? (
                  <Text style={InputStyles.error}>{errors.email}</Text>
                ) : null}
              </View>
              <View style={InputStyles.view}>
                <Text style={InputStyles.label}>年齢</Text>
                <TextInput
                  style={InputStyles.input}
                  value={values.age}
                  onChangeText={handleChange('age')}
                  onBlur={handleBlur('age')}
                  placeholder="ex. 30"
                />
                {errors.age && touched.age ? (
                  <Text style={InputStyles.error}>{errors.age}</Text>
                ) : null}
              </View>
              <View style={InputStyles.view}>
                <Text style={InputStyles.label}>希望職種</Text>
                <RNPickerSelect
                  onValueChange={handleChange('desired_job')}
                  items={DESIRED_JOB}
                  style={PickerSelectStyles}
                  value={values.desired_job}
                  placeholder={{ label: '選択してください', value: '' }}
                  Icon={() => (
                    <Text
                      style={{
                        position: 'absolute',
                        left: -28,
                        top: 8,
                        fontSize: 18,
                        color: color.text,
                      }}
                    >
                      ▼
                    </Text>
                  )}
                />
                {errors.desired_job && touched.desired_job ? (
                  <Text style={InputStyles.error}>{errors.desired_job}</Text>
                ) : null}
              </View>
              <View style={InputStyles.view}>
                <Text style={InputStyles.label}>希望理由</Text>
                <TextInput
                  style={InputStyles.input}
                  multiline
                  editable
                  numberOfLines={4}
                  value={values.desired_reason}
                  onChangeText={handleChange('desired_reason')}
                  onBlur={handleBlur('desired_reason')}
                  placeholder="ex. 自由に記入してください。"
                />
                {errors.desired_reason && touched.desired_reason ? (
                  <Text style={InputStyles.error}>{errors.desired_reason}</Text>
                ) : null}
              </View>
              <View style={FormStyles.button}>
                <Button
                  title="登録する"
                  onPress={handleSubmit}
                  disabled={!isValid || isSubmitting}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default UsersForm;

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '100%',
    padding: 20,
    backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
  },
});

const InputStyles = StyleSheet.create({
  view: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: color.border,
    borderRadius: 4,
    fontSize: 16,
    padding: 8,
  },
  error: {
    marginTop: 4,
    color: color.error,
  },
});

const FormStyles = StyleSheet.create({
  button: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    borderRadius: 4,
  },
});

const PickerSelectStyles = StyleSheet.create({
  inputIOS: {
    position: 'relative',
    fontSize: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: color.border,
    borderRadius: 4,
  },
  inputAndroid: {
    position: 'relative',
    fontSize: 16,
    color: color.text,
    padding: 8,
    borderWidth: 1,
    borderColor: color.border,
    borderRadius: 4,
    backgroundColor: color.lightGray,
  },
});
