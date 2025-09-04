import { Form, Formik, Field } from 'formik';
import style from './ContactForm.module.css';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';

import { selectContacts } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

export default function ContactForm() {
  const dispatch = useDispatch();

  const phones = useSelector(selectContacts);
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .trim()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });
  const nameId = useId();
  const phoneId = useId();

  const handleSubmit = (values, actions) => {
    const name = values.name.trim();
    const number = values.number.trim();

    const isDuplicateName = phones.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const isDuplicateNumber = phones.some(
      contact =>
        contact.number.replace(/\s+/g, '') === number.replace(/\s+/g, '')
    );

    if (isDuplicateName) {
      alert(`Contact with name "${name}" already exists!`);
      return;
    }

    if (isDuplicateNumber) {
      alert(`Contact with number "${number}" already exists!`);
      return;
    }

    const contact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(contact));

    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ name: 'Roman', number: '+420774343984' }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={style.form}>
          <label className={style.wrapper} htmlFor={nameId}>
            Name
            <Field
              className={style.input}
              type="text"
              name="name"
              id={nameId}
            />
          </label>
          <ErrorMessage className={style.error} name="name" component="span" />
          <label className={style.wrapper} htmlFor={phoneId}>
            Number
            <Field
              className={style.input}
              type="tel"
              name="number"
              id={phoneId}
            />
          </label>
          <ErrorMessage
            className={style.error}
            name="number"
            component="span"
          />

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
}
