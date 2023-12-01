var express = require('express');
var router = express.Router();
const fs = require('fs');
var change = 0;
let value = null;
var countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia (Czech Republic)",
  "Democratic Republic of the Congo (Congo-Kinshasa)",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini (fmr. Swaziland)",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy See",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (formerly Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia (formerly Macedonia)",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];
var languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Mandarin",
  "Arabic",
  "Hindi",
  "Portuguese",
  "Russian",
  "Japanese",
  "Bengali",
  "Urdu",
  "Korean",
  "Italian",
  "Dutch",
  "Turkish",
  "Swedish",
  "Polish",
  "Thai",
  "Greek",
  "Finnish",
  "Danish",
  "Norwegian",
  "Hebrew",
  "Vietnamese",
  "Indonesian",
  "Malay",
  "Swahili",
  "Czech",
  "Hungarian",
  "Romanian",
  "Ukrainian",
  "Bulgarian",
  "Slovak",
  "Slovenian",
  "Croatian",
  "Serbian",
  "Gujarati",
  "Tamil",
  "Telugu",
  "Punjabi",
  "Marathi",
  "Kannada",
  "Malayalam",
  "Burmese",
  "Khmer",
  "Lao",
  "Tagalog",
  "Fijian",
  "Samoan",
  "Tongan",
  "Maori",
  "Hawaiian",
  "Yoruba",
  "Zulu",
  "Xhosa",
  "Igbo",
  "Hausa",
  "Swazi",
  "Amharic",
  "Somali",
  "Oromo",
  "Tigrinya",
  "Nepali",
  "Bhutanese",
  "Tibetan",
  "Kurdish",
  "Pashto",
  "Farsi (Persian)",
  "Kurdish",
  "Kazakh",
  "Tatar",
  "Uighur",
  "Mongolian",
  "Tajik",
  "Azerbaijani",
  "Armenian",
  "Georgian",
  "Chichewa",
  "Kinyarwanda",
  "Swedish",
  "Finnish",
  "Dutch",
  "Turkish",
  "Sanskrit",
  "Pali",
  "Classical Latin"
];




function books(){
  return JSON.parse(fs.readFileSync('public/database/data.json','utf-8'));
}


/* GET home page. */
router.get('/', function(req, res, next) {
  let username = 
  res.render('index');
});
/* GET about page. */
router.get('/about', function(req, res, next) {
  let username = 
  res.render('about');
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  let username = 
  res.render('contact');
});
/* GET profile page. */
router.get('/profile', function(req, res, next) {
  const book = books()
  res.render('profile',{book});
});
router.post('/add', function(req, res, next) {
  const bookData = books();
  bookData.push(req.body);
  fs.writeFileSync('public/database/data.json',JSON.stringify(bookData));
  change = 1;
  // res.json(req.body);
  res.redirect('/login')
});


/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login',{countries:countries,languages:languages,changes:change});
});

router.get("/redirect",function(req, res, next){
  change = 0;
  res.redirect('/login')
})

// update page
router.get("/edit/:title",function(req, res, next){
  const bData = books();
  
  bData.forEach(function(elem,i){
    if(elem.title === req.params.title){
      value = i;
    }
  })
  res.render('editD',{bookD:bData[value],countries:countries,languages:languages})
});

router.post('/update',function(req,res,next){
  const upData = books();
  upData[value].title = req.body.title
  upData[value].author = req.body.author
  upData[value].country = req.body.country
  upData[value].language = req.body.language
  upData[value].thumbnail = req.body.thumbnail
  upData[value].pages = req.body.pages
  upData[value].year = req.body.year
  fs.writeFileSync('public/database/data.json',JSON.stringify(upData));
  res.redirect('/profile')
})

router.get('/delete/:name',function(req, res, next){
  const delData = books();
  
  delData.forEach(function(elem, i){
    if(elem.title === req.params.name){
      delData.splice(i,1);
    }
  })
  fs.writeFileSync('public/database/data.json',JSON.stringify(delData));
  res.redirect('/profile');
})


module.exports = router;
