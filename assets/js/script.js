// https://api.rawg.io/api/platforms?key=f9ffe099be0a466eb8f7ff46f77e5a20
function getApi() {
    var requestUrl = 'https://api.rawg.io/api/platforms?key=f9ffe099be0a466eb8f7ff46f77e5a20';  

    fetch(requestUrl)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }
  getApi()