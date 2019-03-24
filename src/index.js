
  module.exports = function check(str, bracketsConfig) {
    let drive = [];

    for (let i= 0; i < str.length; i++) {
      for (let x = 0; x < bracketsConfig.length; x++) {
        if(bracketsConfig[x][0] === str[i])  {
          if(str[i] === drive[drive.length - 1] && bracketsConfig[x][0] === bracketsConfig[x][1]) {
            drive.pop();
            break;
          }
          drive.push(str[i]);
          break;
        }
        if(bracketsConfig[x][1] === str[i]){
          if(bracketsConfig[x][0] === drive[drive.length - 1]) {
            drive.pop()
            break;
          } else return false;
        }
      }
    }
    return drive.length === 0;
  }

