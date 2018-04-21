/**
 * EassyHTTP Library
 * Library for making HTTP Request
 * 
 * @version 2.0.0
 * @author Marian Dobre 
 * 
 */

// // Using ES6 classes
// class EassyHTTP {
//   // Make an HTTP Get Request
//   get(url) {
//     fetch(url)
//       .then(response => response.json())
//       .then(data => data)
//       .catch(error => console.log(error));
//   }
// }

// Using Promises
class EassyHTTP {
  // Make an HTTP GET Request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  // Make an HTTP POST Request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        // What method we use
        method: 'POST',
        headers: {
          // Content header we want to send
          'Content-type':'application/json'
        },
        // Sending the body converting my javascript value
        // into a JSON string
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    });
  }

  // Make an HTTP Put Request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type':'application/json'
        },
        // Converting Javascript value into JSON string value
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .then(error => reject(data))
    });
  }

  // Make an HTTP Delete Request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type':'application/json'
        },
      })
        .then(response => response.json())
        .then(() => resolve('Resource Deleted...'))
        .then(error => reject(data))
    });
  }
}