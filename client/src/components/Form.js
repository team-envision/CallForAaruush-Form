import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [alreadyInAaruush, setAlready] = useState('');
  const [loading, setLoading] = useState(false);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeAlready = (e) => {
    setAlready(e.target.value);
  };

  const required = (value) => {
    if (!value.toString().trim().length) {
      // We can return string or jsx as the 'error' prop for the validated Component
      return 'require';
    }
  };

  const isEmail = (value) => {
    if (!validator.isEmail(value)) {
      return `${value} is not a valid email.`;
    }
  };

  const postForm = async (name, email, alreadyInAaruush) => {
    try {
      setLoading(true);
      await axios.post('/api/addForm', {
        name: name,
        email: email,
        alreadyInAaruush: alreadyInAaruush,
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (name === '' && email === '' && validator.isEmail(email)) {
      console.log('Please enter something', 'light');
    } else {
      await postForm(name, email, alreadyInAaruush);
      setName('');
      setEmail('');
      alert('Form submitted');
    }
  };

  return (
    <div className='form'>
      <p>
        To Apply, fill the form and send the downloaded document at
        teamdev@aaruush.com
      </p>
      <form>
        <input
          type='text'
          placeholder='Name'
          validations={[required]}
          validator={required}
          value={name}
          onChange={onChangeName}
        />
        <input
          type='email'
          validations={[required, isEmail]}
          placeholder='Email Id (use college email id)'
          value={email}
          onChange={onChangeEmail}
        />
        <select
          placeholder='Already in Aaruush?'
          value={alreadyInAaruush}
          validations={[required]}
          onChange={onChangeAlready}
        >
          <option value='no' selected>
            Already in Aaruush?
          </option>

          <option value='Yes'>Yes</option>
          <option value='No'>No</option>
        </select>

        {loading ? (
          <button className='submit'>Loading...</button>
        ) : (
          <button
            className='submit'
            onClick={!validator.isEmail(email) ? null : onSubmit}
          >
            Download
          </button>
        )}
      </form>

      <div className='contact'>
        <div className='info-left'>
          <h2>Secretory</h2>
          <p>Karan Singh Pokharia - 9876543210</p>
        </div>
        <div className='info-right'>
          <h2>Joint Secretory</h2>
          <p>Harsh Kumar Modi - 9876543210</p>
          <p>Sri Hari Anand - 9876543210</p>
        </div>
      </div>
    </div>
  );
};

export default Form;
