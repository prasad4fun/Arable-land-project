var fs = require('fs'),
    csvrow = require('csvrow'),
    readLine = require('readline'),
    stream = require('stream');


    var inStream = fs.createReadStream('../../data files/WDI_Data.csv');
    var outStream1 = fs.createWriteStream('../../data files/json/arableContinent.json');
    var rl = readLine.createInterface(inStream,outStream1);
    var jsonObject=[];
    rl.on('line',function(line){
          var content = line.split(",");
          if(content[0]=="Country Name"){
            headers = content;
          }
          else if(content[2]=="Arable land (hectares)"){
            for(var i=4;i<=headers.length-1;i++){
              if(continents[content[0]]){
                if(aggregate[continents[content[0]]][headers[i]]==undefined)
                aggregate[continents[content[0]]][headers[i]]=0;
                  aggregate[continents[content[0]]][headers[i]]+=
                  isNaN(parseFloat(content[i]))?0:parseFloat(content[i]);
              }
            }
          }
      });

rl.on('close',function(){
var continentsAggregate = (JSON.parse(JSON.stringify(aggregate)));
//console.log(continentsAggregate["ASIA"][1990]);
for(var j=4;j<headers.length;j++){
  var result={};
  for(i in aggregate){
    result["Year"]=headers[j];
    result[i]=continentsAggregate[i][headers[j]+""];
    //console.log(result);
  }jsonObject.push(result);
}
outStream1.write(JSON.stringify(jsonObject));
});

var aggregate = {
  'AFRICA':{},
  'ASIA':{},
  'AUSTRALIA':{},
  'EUROPE':{},
  'S_AMERICA':{},
  'N_AMERICA':{}
};

var continents = {
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
  'Zimbabwe' : 'AFRICA',

  /* ASIA */
  'Afghanistan' : 'ASIA',
  'Arab World' : 'ASIA',
  'Bahrain' : 'ASIA',
  'Bangladesh' : 'ASIA',
  'Bhutan' : 'ASIA',
  'Brunei' : 'ASIA',
  'Burma (Myanmar)' : 'ASIA',
  'Cambodia' : 'ASIA',
  'China' : 'ASIA',
  'East Timor' : 'ASIA',
  'India' : 'ASIA',
  'Indonesia' : 'ASIA',
  'Iran' : 'ASIA',
  'Iraq' : 'ASIA',
  'Israel' : 'ASIA',
  'Japan' : 'ASIA',
  'Jordan' : 'ASIA',
  'Kazakhstan' : 'ASIA',
  'North Korea' : 'ASIA',
  'South Korea' : 'ASIA',
  'Kuwait' : 'ASIA',
  'Kyrgyzstan' : 'ASIA',
  'Laos' : 'ASIA',
  'Lebanon' : 'ASIA',
  'Malaysia' : 'ASIA',
  'Maldives' : 'ASIA',
  'Mongolia' : 'ASIA',
  'Nepal' : 'ASIA',
  'Oman' : 'ASIA',
  'Pakistan' : 'ASIA',
  'Philippines' : 'ASIA',
  'Qatar' : 'ASIA',
  'Russian Federation' : 'ASIA',
  'Saudi Arabia' : 'ASIA',
  'Singapore' : 'ASIA',
  'Sri Lanka' : 'ASIA',
  'Syria' : 'ASIA',
  'Tajikistan' : 'ASIA',
  'Thailand' : 'ASIA',
  'Turkey' : 'ASIA',
  'Turkmenistan' : 'ASIA',
  'United Arab Emirates' : 'ASIA',
  'Uzbekistan' : 'ASIA',
  'Vietnam' : 'ASIA',
  'Yemen' : 'ASIA',

  /* EUROPE */
  'Albania' : 'EUROPE',
  'Andorra' : 'EUROPE',
  'Armenia' : 'EUROPE',
  'Austria' : 'EUROPE',
  'Azerbaijan' : 'EUROPE',
  'Belarus' : 'EUROPE',
  'Belgium' : 'EUROPE',
  'Bosnia and Herzegovina' : 'EUROPE',
  'Bulgaria' : 'EUROPE',
  'Croatia' : 'EUROPE',
  'Cyprus' : 'EUROPE',
  'Czech Republic' : 'EUROPE',
  'Denmark' : 'EUROPE',
  'Estonia' : 'EUROPE',
  'Finland' : 'EUROPE',
  'France' : 'EUROPE',
  'Georgia' : 'EUROPE',
  'Germany' : 'EUROPE',
  'Greece' : 'EUROPE',
  'Hungary' : 'EUROPE',
  'Iceland' : 'EUROPE',
  'Ireland' : 'EUROPE',
  'Italy' : 'EUROPE',
  'Latvia' : 'EUROPE',
  'Liechtenstein' : 'EUROPE',
  'Lithuania' : 'EUROPE',
  'Luxembourg' : 'EUROPE',
  'Macedonia' : 'EUROPE',
  'Malta' : 'EUROPE',
  'Moldova' : 'EUROPE',
  'Monaco' : 'EUROPE',
  'Montenegro' : 'EUROPE',
  'Netherlands' : 'EUROPE',
  'Norway' : 'EUROPE',
  'Poland' : 'EUROPE',
  'Portugal' : 'EUROPE',
  'Romania' : 'EUROPE',
  'San Marino' : 'EUROPE',
  'Serbia' : 'EUROPE',
  'Slovakia' : 'EUROPE',
  'Slovenia' : 'EUROPE',
  'Spain' : 'EUROPE',
  'Sweden' : 'EUROPE',
  'Switzerland' : 'EUROPE',
  'Ukraine' : 'EUROPE',
  'United Kingdom' : 'EUROPE',
  'Vatican City' : 'EUROPE',

  /* N_AMERICA */
  'Caribbean small states' : 'N_AMERICA',
  'Latin America & Caribbean (all income levels)' : 'N_AMERICA',
  'Latin America & Caribbean (developing only)' : 'N_AMERICA',
  'Antigua and Barbuda' : 'N_AMERICA',
  'Bahamas' : 'N_AMERICA',
  'Barbados' : 'N_AMERICA',
  'Belize' : 'N_AMERICA',
  'Canada' : 'N_AMERICA',
  'Costa Rica' : 'N_AMERICA',
  'Cuba' : 'N_AMERICA',
  'Dominica' : 'N_AMERICA',
  'Dominican Republic' : 'N_AMERICA',
  'El Salvador' : 'N_AMERICA',
  'Grenada' : 'N_AMERICA',
  'Guatemala' : 'N_AMERICA',
  'Haiti' : 'N_AMERICA',
  'Honduras' : 'N_AMERICA',
  'Jamaica' : 'N_AMERICA',
  'Mexico' : 'N_AMERICA',
  'Nicaragua' : 'N_AMERICA',
  'Panama' : 'N_AMERICA',
  'Saint Kitts and Nevis' : 'N_AMERICA',
  'Saint Lucia' : 'N_AMERICA',
  'Saint Vincent and the Grenadines' : 'N_AMERICA',
  'Trinidad and Tobago' : 'N_AMERICA',
  'United States' : 'N_AMERICA',

  /* AUSTRALIA */
  'Australia' : 'AUSTRALIA',
  'Fiji' : 'AUSTRALIA',
  'Kiribati' : 'AUSTRALIA',
  'Marshall Islands' : 'AUSTRALIA',
  'Micronesia' : 'AUSTRALIA',
  'Nauru' : 'AUSTRALIA',
  'New Zealand' : 'AUSTRALIA',
  'Palau' : 'AUSTRALIA',
  'Papua New Guinea' : 'AUSTRALIA',
  'Samoa' : 'AUSTRALIA',
  'Solomon Islands' : 'AUSTRALIA',
  'Tonga' : 'AUSTRALIA',
  'Tuvalu' : 'AUSTRALIA',
  'Vanuatu' : 'AUSTRALIA',

  /* S_AMERICA */
  'Argentina' : 'S_AMERICA',
  'Bolivia' : 'S_AMERICA',
  'Brazil' : 'S_AMERICA',
  'Chile' : 'S_AMERICA',
  'Colombia' : 'S_AMERICA',
  'Ecuador' : 'S_AMERICA',
  'Guyana' : 'S_AMERICA',
  'Paraguay' : 'S_AMERICA',
  'Peru' : 'S_AMERICA',
  'Suriname' : 'S_AMERICA',
  'Uruguay' : 'S_AMERICA',
  'Venezuela' : 'S_AMERICA'
};
