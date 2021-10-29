import { useState } from "react";

const usePost = (productId, action, url) => {

  const [response, setResponse] = useState();


  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  let csrftoken = getCookie('csrftoken');


  fetch(url, {
    credentials: 'same-origin',
    method: 'POST',
    mode: 'cors',
    header: {
      'Accept': '/',
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken,
    },
    body: JSON.stringify({ 'productID': productId, 'action': action })
  }).then((res) => {
    return res.json();
  }).then((data) => {
    setResponse(data);
  }).catch(err => {
    console.log("Error found: " + err);
  })

  return { response }
}
 
export default usePost;