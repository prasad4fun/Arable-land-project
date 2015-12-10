var fs = require('fs'),
    csvrow = require('csvrow'),
    readLine = require('readline'),
    stream = require('stream');


var inStream = fs.createReadStream('../../data files/WDI_Data.csv');
var i=0;
var outStream1 = fs.createWriteStream('../../data files/json/arableIndiaPercent.json');
var outStream2 = fs.createWriteStream('../../data files/json/arableIndiaHPP.json');
var outStream3 = fs.createWriteStream('../../data files/json/arableIndiaHectares.json');
var percent_of_land_area = [];
var hectares_per_person = [];
var hectares = [];
var rl = readLine.createInterface(inStream,outStream1);
rl.on('line',function(line){
      var content = line.split(",");
      if(content[0]=="Country Name"){
        headers = content;
      }
      else{
        if(content[0]=="India" && content[2]=="Arable land (% of land area)"){
          for(i=4;i<content.length;i++)
          {
            var year={};
          year["Year"]=headers[i];
          year["Value"]=isNaN(parseFloat(content[i])) ? (content[i]) : parseFloat(content[i]) ;
          percent_of_land_area.push(year);
          }
        }

        if(content[0]=="India" && content[2]=="Arable land (hectares per person)"){
          for(i=4;i<content.length;i++)
          {
            var year={};
          year["Year"]=headers[i];
          year["Value"]=isNaN(parseFloat(content[i])) ? (content[i]) : parseFloat(content[i]) ;
          hectares_per_person.push(year);
        }
      }
        if(content[0]=="India" && content[2]=="Arable land (hectares)"){
          for(i=4;i<content.length;i++)
          {
            var year={};
          year["Year"]=headers[i];
          year["Value"]=isNaN(parseFloat(content[i])) ? (content[i]) : parseFloat(content[i]) ;
          hectares.push(year);
        }
      }
      }
});

rl.on('close',function() {
  outStream1.write(JSON.stringify(percent_of_land_area), null, 2);
  outStream2.write(JSON.stringify(hectares_per_person), null, 2);
  outStream3.write(JSON.stringify(hectares), null, 2);
});
