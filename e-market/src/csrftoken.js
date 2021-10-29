import React from 'react';

const csrftoken = getCookie('csrftoken');

const CSRFTOKEN = () => {
  return (
    <input name="csrfmiddlewaretoken" value={csrftoken} type="hidden" />
  );
};

export default CSRFTOKEN;
