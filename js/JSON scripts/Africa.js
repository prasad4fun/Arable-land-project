var fs = require('fs'),
    csvrow = require('csvrow'),
    readLine = require('readline'),
    stream = require('stream');


var inStream = fs.createReadStream('../../data files/WDI_Data.csv');
var outStream1 = fs.createWriteStream('../../data files/json/arableAfrica2010.json');
var headers = [];
var percent_of_land_area_africa = [];
var rl = readLine.createInterface(inStream,outStream1);

rl.on('line',function(line){
      var content = line.split(",");

      if(content[0]=="Country Name"){
        for(i=0;i<content.length;i++)
        if(i==0 || i==2 || i==54)//{
        headers.push(content[i]);
      }
      else{
        var obj = {};
        if(AFRICA[content[0]] && content[2]=="Arable land (% of land area)"){
          var j=0;
          for(i=0;i<content.length;i++)
          {
          if(i==0 || i==2 || i==54){
          obj[headers[j]]=isNaN(parseFloat(content[i])) ? (content[i]) : parseFloat(content[i]) ;
          j++;}
          }
          percent_of_land_area_africa.push(obj);
        }
      }
});

rl.on('close',function() {
  outStream1.write(JSON.stringify(percent_of_land_area_africa,null,2));
});




var AFRICA = {
  /* AFRICA */
  'Algeria' : 'AFRICA',
  'Angola' : 'AFRICA',
  'Benin' : 'AFRICA',
  'Botswana' : 'AFRICA',
  'Burkina' : 'AFRICA',
  'Burundi' : 'AFRICA',
  'Cameroon' : 'AFRICA',
  'Cape Verde' : 'AFRICA',
  'Central African Republic' : 'AFRICA',
  'Chad' : 'AFRICA',
  'Comoros' : 'AFRICA',
  'Congo' : 'AFRICA',
  'Democratic Republic of' : 'AFRICA',
  'Djibouti' : 'AFRICA',
  'Egypt' : 'AFRICA',
  'Equatorial Guinea' : 'AFRICA',
  'Eritrea' : 'AFRICA',
  'Ethiopia' : 'AFRICA',
  'Gabon' : 'AFRICA',
  'Gambia' : 'AFRICA',
  'Ghana' : 'AFRICA',
  'Guinea' : 'AFRICA',
  'Guinea-Bissau' : 'AFRICA',
  'Ivory Coast' : 'AFRICA',
  'Kenya' : 'AFRICA',
  'Lesotho' : 'AFRICA',
  'Liberia' : 'AFRICA',
  'Libya' : 'AFRICA',
  'Madagascar' : 'AFRICA',
  'Malawi' : 'AFRICA',
  'Mali' : 'AFRICA',
  'Mauritania' : 'AFRICA',
  'Mauritius' : 'AFRICA',
  'Morocco' : 'AFRICA',
  'Mozambique' : 'AFRICA',
  'Namibia' : 'AFRICA',
  'Niger' : 'AFRICA',
  'Nigeria' : 'AFRICA',
  'Rwanda' : 'AFRICA',
  'Sao Tome and Principe' : 'AFRICA',
  'Senegal' : 'AFRICA',
  'Seychelles' : 'AFRICA',
  'Sierra Leone' : 'AFRICA',
  'Somalia' : 'AFRICA',
  'South Africa' : 'AFRICA',
  'South Sudan' : 'AFRICA',
  'Sudan' : 'AFRICA',
  'Swaziland' : 'AFRICA',
  'Tanzania' : 'AFRICA',
  'Togo' : 'AFRICA',
  'Tunisia' : 'AFRICA',
  'Uganda' : 'AFRICA',
  'Zambia' : 'AFRICA',
  'Zimbabwe' : 'AFRICA'
}
