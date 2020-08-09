//function getTopList(){
  const topList = [];
  var config = {
      headers: {'Access-Control-Allow-Origin': '*'}
  };
  proxyurl = "https://cors-anywhere.herokuapp.com/";
  axios.get(proxyurl+'https://api.robinhood.com/midlands/tags/tag/100-most-popular/', config)
    .then(function (response) {
      //console.dir(response.data.instruments);
    //  topList = response.data.instruments;
      //return topList;
      //console.log(response.data.instruments[0].symbol);
      //console.log(response.data.instruments[0].simple_name);

      //jsonList = response.data.instruments;
      for(let i=0; i <= response.data.instruments; i++){
        topList.push(response.data.instruments[i]);
        console.log("helloworld");
      }

    })
    .catch(function (error) {
      console.log(error);
    });
  //console.log(topList);
//}

//const urlList = getTopList();
//urlList.then(console.log(urlList));
//console.log(urlList);
