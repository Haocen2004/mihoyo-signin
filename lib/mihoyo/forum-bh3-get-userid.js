const superagent = require('superagent');

const URL = "https://api-takumi.mihoyo.com/binding/api/getUserGameRolesByStoken";

module.exports = async (regionName) => {

  let res = await superagent.get(URL).set(getHeader());

  var result = '';
  res.body.data.list.forEach(playerData => {
    
    if (playerData.region == regionName) {

      result = playerData.game_uid;
    
      }
  });
  
  console.log("GetUserid【%s】 %s", regionName, result);
  return result;

}