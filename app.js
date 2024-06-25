const express = require('express');
const axios = require("axios");
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hellooo worlds!')
    smsIndia(9453397101,342645);
});


function smsIndia(phoneNo, OTP) {
    console.log("SMS API INDIA", phoneNo, 'OTP Generated', OTP);
    
    const encodedOTP = encodeURIComponent(OTP);
    const params =JSON.stringify( {
        "ver": "1.0",
        "key": "2D1WT91EvQmCU2f6F3c0Rw==",
        "messages": [
            {
                "dest": [phoneNo],
                "text": `Dear Customer, your OTP for registering on Jubilant Foodworks is ${encodedOTP}. Thank you, Jubilant FoodWorks.`,
                "send": "JFLITS",
                "type": "PM",
                "dlt_entity_id": "",
                "dlt_template_id": ""
            }
        ]
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://pod1-japi.instaalerts.zone/httpapi/JsonReceiver',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : params
      };

      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})