import React, { useState } from 'react';
import axios from 'axios';

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

  function validateEmail(value) {
    let error;

    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      error = 'Invalid email address';
    }

    return error;
  }

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

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' && email === '') {
      console.log('Please enter something', 'light');
    } else {
      postForm(name, email, alreadyInAaruush);
      setName('');
      setEmail('');
    }
  };

  return (
    <div className='form'>
      <p>
        To Apply, fill the form and send the downloaded document at
        crisis_team@aaruush.com
      </p>
      <form>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={onChangeName}
        />
        <input
          type='email'
          placeholder='Email Id (use college email id)'
          value={email}
          onChange={onChangeEmail}
        />
        <select
          placeholder='Already in Aaruush?'
          value={alreadyInAaruush}
          onChange={onChangeAlready}
        >
          <option value='no' selected>
            Already in Aaruush?
          </option>

          <option value='Yes'>Yes</option>
          <option value='No'>No</option>
        </select>

        {loading ? (
          <button className='submit' onClick={onSubmit}>
            Loading...
          </button>
        ) : (
          <button className='submit' onClick={onSubmit}>
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
