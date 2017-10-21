// Data extracted from thebluealliance.com at 2017-10-21T12:15:09+00:00
// Built by scraper at https://github/GeeII/Firstmap-scraper/

var regionals = [
  ["Canadian Rockies Regional", {lat:51.1203, lng:-113.9486}, 5, "2018abca", "2018-04-04 - 2018-04-07"],
  ["Rocket City Regional", {lat:34.7267, lng:-86.5902}, 2, "2018alhu", "2018-03-14 - 2018-03-17"],
  ["Arkansas Rock City Regional", {lat:34.7217, lng:-92.2991}, 1, "2018arli", "2018-03-07 - 2018-03-10"],
  ["Southern Cross Regional", {lat:-33.8534, lng:151.0694}, 1, "2018ausc", "2018-03-10 - 2018-03-13"],
  ["South Pacific Regional", {lat:-33.8534, lng:151.0694}, 2, "2018ausp", "2018-03-16 - 2018-03-18"],
  ["Arizona North Regional", {lat:35.1805, lng:-111.6528}, 1, "2018azfl", "2018-03-07 - 2018-03-10"],
  ["Arizona West Regional", {lat:33.5102, lng:-112.1289}, 5, "2018azpx", "2018-04-04 - 2018-04-07"],
  ["Canadian Pacific Regional", {lat:48.4316, lng:-123.3606}, 1, "2018bcvi", "2018-03-13 - 2018-03-16"],
  ["Aerospace Valley Regional", {lat:34.6814, lng:-118.0706}, 5, "2018caav", "2018-04-04 - 2018-04-07"],
  ["Sacramento Regional", {lat:38.5419, lng:-121.7596}, 3, "2018cada", "2018-03-21 - 2018-03-24"],
  ["Central Valley Regional", {lat:36.7350, lng:-119.7850}, 5, "2018cafr", "2018-04-05 - 2018-04-08"],
  ["Orange County Regional", {lat:33.6405, lng:-117.8443}, 3, "2018cair", "2018-03-21 - 2018-03-24"],
  ["Los Angeles Regional", {lat:34.0810, lng:-117.7652}, 2, "2018capo", "2018-03-14 - 2018-03-17"],
  ["San Diego Regional", {lat:32.9752, lng:-117.2584}, 1, "2018casd", "2018-03-07 - 2018-03-10"],
  ["San Francisco Regional", {lat:37.7481, lng:-122.4959}, 2, "2018casf", "2018-03-15 - 2018-03-18"],
  ["Silicon Valley Regional", {lat:37.3352, lng:-121.8801}, 4, "2018casj", "2018-03-28 - 2018-03-31"],
  ["Ventura Regional", {lat:34.2770, lng:-119.2316}, 4, "2018cave", "2018-03-28 - 2018-03-31"],
  ["Colorado Regional", {lat:39.6820, lng:-104.9619}, 3, "2018code", "2018-03-21 - 2018-03-24"],
  ["Orlando Regional", {lat:28.6072, lng:-81.1974}, 1, "2018flor", "2018-03-07 - 2018-03-10"],
  ["South Florida Regional ", {lat:26.7046, lng:-80.0589}, 4, "2018flwp", "2018-03-28 - 2018-03-31"],
  ["Shenzhen Regional", {lat:22.5853, lng:113.9788}, 1, "2018gush", "2018-03-07 - 2018-03-10"],
  ["Hawaii Regional", {lat:21.2969, lng:-157.8171}, 3, "2018hiho", "2018-03-21 - 2018-03-24"],
  ["Iowa Regional", {lat:42.5144, lng:-92.4673}, 3, "2018iacf", "2018-03-21 - 2018-03-24"],
  ["Idaho Regional", {lat:43.6036, lng:-116.1989}, 4, "2018idbo", "2018-03-28 - 2018-03-31"],
  ["Midwest Regional", {lat:41.8749, lng:-87.6561}, 5, "2018ilch", "2018-04-04 - 2018-04-07"],
  ["Central Illinois Regional", {lat:40.6978, lng:-89.6153}, 2, "2018ilpe", "2018-03-14 - 2018-03-17"],
  ["Bayou Regional", {lat:30.0393, lng:-90.2406}, 3, "2018lake", "2018-03-21 - 2018-03-24"],
  ["Lake Superior Regional", {lat:46.7813, lng:-92.0995}, 1, "2018mndu", "2018-03-07 - 2018-03-10"],
  ["Northern Lights Regional", {lat:46.7813, lng:-92.0995}, 1, "2018mndu2", "2018-03-07 - 2018-03-10"],
  ["Minnesota 10000 Lakes Regional", {lat:44.9770, lng:-93.2283}, 4, "2018mnmi", "2018-03-28 - 2018-03-31"],
  ["Minnesota North Star Regional", {lat:44.9781, lng:-93.2280}, 4, "2018mnmi2", "2018-03-28 - 2018-03-31"],
  ["Greater Kansas City Regional", {lat:39.1392, lng:-94.5041}, 2, "2018mokc", "2018-03-14 - 2018-03-17"],
  ["Heartland Regional", {lat:39.1392, lng:-94.5041}, 1, "2018mokc2", "2018-03-08 - 2018-03-11"],
  ["St. Louis Regional", {lat:38.6325, lng:-90.2280}, 1, "2018mosl", "2018-03-07 - 2018-03-10"],
  ["Monterrey Regional", {lat:25.6516, lng:-100.2895}, 0, "2018mxmo", "2018-02-28 - 2018-03-03"],
  ["Santa Fe Regional", {lat:19.3598, lng:-99.2580}, 2, "2018mxsf", "2018-03-14 - 2018-03-17"],
  ["Laguna Regional", {lat:25.5352, lng:-103.4349}, 3, "2018mxto", "2018-03-21 - 2018-03-24"],
  ["Great Northern Regional", {lat:47.9106, lng:-97.0910}, 0, "2018ndgf", "2018-02-28 - 2018-03-03"],
  ["Las Vegas Regional", {lat:36.1049, lng:-115.1442}, 3, "2018nvlv", "2018-03-21 - 2018-03-24"],
  ["SBPLI Long Island Regional #1", {lat:40.7166, lng:-73.5985}, 5, "2018nyli", "2018-04-09 - 2018-04-11"],
  ["SBPLI Long Island Regional #2", {lat:40.7166, lng:-73.5985}, 6, "2018nyli2", "2018-04-12 - 2018-04-14"],
  ["New York City Regional", {lat:40.8421, lng:-73.9413}, 5, "2018nyny", "2018-04-05 - 2018-04-08"],
  ["Finger Lakes Regional ", {lat:43.0851, lng:-77.6716}, 2, "2018nyro", "2018-03-14 - 2018-03-17"],
  ["Hudson Valley Regional", {lat:41.1335, lng:-74.0902}, 3, "2018nysu", "2018-03-22 - 2018-03-25"],
  ["New York Tech Valley Regional", {lat:42.7302, lng:-73.6788}, 2, "2018nytr", "2018-03-14 - 2018-03-17"],
  ["Central New York Regional", {lat:43.1356, lng:-75.2299}, 0, "2018nyut", "2018-03-01 - 2018-03-04"],
  ["Buckeye Regional", {lat:41.4993, lng:-81.6769}, 4, "2018ohcl", "2018-03-28 - 2018-03-31"],
  ["Miami Valley Regional", {lat:39.7845, lng:-84.0580}, 0, "2018ohmv", "2018-02-28 - 2018-03-03"],
  ["Oklahoma Regional ", {lat:35.4660, lng:-97.5146}, 4, "2018okok", "2018-03-28 - 2018-03-31"],
  ["Greater Pittsburgh Regional", {lat:40.0632, lng:-79.8819}, 3, "2018paca", "2018-03-21 - 2018-03-24"],
  ["Festival de Robotique - Montreal Regional", {lat:45.5529, lng:-73.6370}, 0, "2018qcmo", "2018-02-28 - 2018-03-03"],
  ["Palmetto Regional", {lat:33.7066, lng:-78.8742}, 0, "2018scmb", "2018-02-28 - 2018-03-03"],
  ["Shanghai Regional", {lat:31.1569, lng:121.3559}, 2, "2018shmi", "2018-03-15 - 2018-03-18"],
  ["Smoky Mountains Regional", {lat:35.9512, lng:-83.9250}, 3, "2018tnkn", "2018-03-21 - 2018-03-24"],
  ["Istanbul Regional", {lat:40.9929, lng:29.1048}, 1, "2018tuis", "2018-03-09 - 2018-03-12"],
  ["Dallas Regional", {lat:32.8780, lng:-96.9431}, 0, "2018txda", "2018-03-01 - 2018-03-04"],
  ["El Paso Regional", {lat:31.7576, lng:-106.4921}, 4, "2018txel", "2018-03-28 - 2018-03-31"],
  ["Lone Star Central Regional", {lat:29.7062, lng:-95.5414}, 2, "2018txho", "2018-03-14 - 2018-03-17"],
  ["Hub City Regional", {lat:33.5868, lng:-101.8355}, 1, "2018txlu", "2018-03-07 - 2018-03-10"],
  ["Lone Star South Regional", {lat:29.6611, lng:-95.1121}, 5, "2018txpa", "2018-04-04 - 2018-04-07"],
  ["Alamo Regional", {lat:29.4523, lng:-98.5641}, 5, "2018txsa", "2018-04-04 - 2018-04-07"],
  ["Utah Regional", {lat:40.7027, lng:-111.9506}, 0, "2018utwv", "2018-02-28 - 2018-03-03"],
  ["Seven Rivers Regional", {lat:43.8122, lng:-91.2557}, 5, "2018wila", "2018-04-04 - 2018-04-07"],
  ["Wisconsin Regional", {lat:43.0417, lng:-87.9169}, 3, "2018wimi", "2018-03-21 - 2018-03-24"]
]


var districts = [

  ["CHS District", "FIRST Chesapeake District Championship", {lat:38.2170, lng:-78.3420}, 4, "2018chcmp", "2018-03-28 - 2018-03-31"],
  ["NE District", "NE District Hartford Event", {lat:41.7652, lng:-72.7010}, 5, "2018cthar", "2018-04-06 - 2018-04-08"],
  ["NE District", "NE District Southern CT Event", {lat:41.1588, lng:-73.2574}, 2, "2018ctsct", "2018-03-16 - 2018-03-18"],
  ["NE District", "NE District Waterbury Event", {lat:41.6042, lng:-73.0266}, 1, "2018ctwat", "2018-03-09 - 2018-03-11"],
  ["PCH District", "PCH District Albany Event", {lat:31.5738, lng:-84.1500}, 2, "2018gaalb", "2018-03-15 - 2018-03-17"],
  ["PCH District", "Peachtree District State Championship", {lat:33.9425, lng:-83.3781}, 5, "2018gacmp", "2018-04-04 - 2018-04-07"],
  ["PCH District", "PCH District Columbus Event", {lat:32.5023, lng:-84.9414}, 3, "2018gacol", "2018-03-22 - 2018-03-24"],
  ["PCH District", "PCH District Dalton Event", {lat:34.7592, lng:-85.0054}, 1, "2018gadal", "2018-03-08 - 2018-03-10"],
  ["PCH District", "PCH District Duluth Event", {lat:33.9916, lng:-84.0939}, 4, "2018gadul", "2018-03-29 - 2018-03-31"],
  ["PCH District", "PCH District Gainesville Event", {lat:34.3323, lng:-83.8325}, 0, "2018gagai", "2018-03-02 - 2018-03-04"],
  ["IN District", "Indiana State Championship", {lat:40.4853, lng:-86.1266}, 6, "2018incmp", "2018-04-12 - 2018-04-14"],
  ["IN District", "IN District St. Joseph Event", {lat:41.6789, lng:-86.1077}, 1, "2018inmis", "2018-03-09 - 2018-03-11"],
  ["IN District", "IN District Plainfield Event", {lat:39.6819, lng:-86.3788}, 3, "2018inpla", "2018-03-23 - 2018-03-25"],
  ["IN District", "IN District Tippecanoe Event", {lat:40.4992, lng:-86.9145}, 4, "2018inwla", "2018-03-29 - 2018-03-31"],
  ["ISR District", "FIRST Israel District Championship", {lat:32.0611, lng:34.7913}, 3, "2018iscmp", "2018-03-26 - 2018-03-28"],
  ["ISR District", "ISR District Event #1", {lat:32.1091, lng:34.8114}, 0, "2018isde1", "2018-03-05 - 2018-03-06"],
  ["ISR District", "ISR District Event #2", {lat:32.1091, lng:34.8114}, 1, "2018isde2", "2018-03-07 - 2018-03-08"],
  ["ISR District", "ISR District Event #3", {lat:32.7940, lng:34.9896}, 1, "2018isde3", "2018-03-12 - 2018-03-13"],
  ["ISR District", "ISR District Event #4", {lat:32.7940, lng:34.9896}, 2, "2018isde4", "2018-03-14 - 2018-03-15"],
  ["NE District", "NE District Greater Boston Event", {lat:42.4122, lng:-71.0079}, 5, "2018mabos", "2018-04-06 - 2018-04-08"],
  ["NE District", "NE District SE Mass Event", {lat:41.9911, lng:-70.9930}, 1, "2018mabri", "2018-03-09 - 2018-03-11"],
  ["NE District", "NE District North Shore Event", {lat:42.5346, lng:-71.1091}, 2, "2018marea", "2018-03-16 - 2018-03-18"],
  ["NE District", "NE District Worcester Polytechnic Institute Event", {lat:42.2745, lng:-71.8097}, 0, "2018mawor", "2018-03-01 - 2018-03-03"],
  ["CHS District", "CHS District Central Maryland Event", {lat:38.9217, lng:-76.5597}, 3, "2018mdedg", "2018-03-23 - 2018-03-25"],
  ["CHS District", "CHS District Southern Maryland Event", {lat:38.7972, lng:-76.9936}, 2, "2018mdoxo", "2018-03-16 - 2018-03-18"],
  ["NE District", "NE District Pine Tree Event", {lat:44.0956, lng:-70.2051}, 3, "2018melew", "2018-03-22 - 2018-03-24"],
  ["FIM District", "FIM District Alpena Event", {lat:45.0561, lng:-83.4675}, 5, "2018mialp", "2018-04-05 - 2018-04-07"],
  ["FIM District", "FIM District Ann Arbor Pioneer Event", {lat:42.2627, lng:-83.7554}, 5, "2018miann", "2018-04-05 - 2018-04-07"],
  ["FIM District", "FIM District Belleville Event", {lat:42.2030, lng:-83.4933}, 3, "2018mibel", "2018-03-22 - 2018-03-24"],
  ["FIM District", "FIM District Center Line Event", {lat:42.4867, lng:-83.0205}, 1, "2018micen", "2018-03-08 - 2018-03-10"],
  ["FIM District", "Michigan State Championship", {lat:43.5143, lng:-83.9624}, 6, "2018micmp", "2018-04-11 - 2018-04-14"],
  ["FIM District", "FIM District Escanaba Event", {lat:45.7412, lng:-87.0820}, 2, "2018miesc", "2018-03-15 - 2018-03-17"],
  ["FIM District", "FIM District Gaylord Event", {lat:45.0465, lng:-84.6710}, 2, "2018migay", "2018-03-15 - 2018-03-17"],
  ["FIM District", "FIM District Gibraltar Event", {lat:42.0855, lng:-83.2115}, 0, "2018migib", "2018-03-01 - 2018-03-03"],
  ["FIM District", "FIM District Gull Lake Event", {lat:42.3728, lng:-85.4393}, 2, "2018migul", "2018-03-15 - 2018-03-17"],
  ["FIM District", "FIM District Kettering University Event #2", {lat:43.0115, lng:-83.7139}, 1, "2018mike2", "2018-03-08 - 2018-03-10"],
  ["FIM District", "FIM District East Kentwood Event", {lat:42.8508, lng:-85.6185}, 4, "2018miken", "2018-03-29 - 2018-03-31"],
  ["FIM District", "FIM District Kettering University Event #1", {lat:43.0115, lng:-83.7139}, 0, "2018miket", "2018-03-01 - 2018-03-03"],
  ["FIM District", "FIM District Lakeview Event", {lat:42.2916, lng:-85.2355}, 5, "2018milak", "2018-04-05 - 2018-04-07"],
  ["FIM District", "FIM District Lansing Event", {lat:42.5709, lng:-84.4353}, 3, "2018milan", "2018-03-22 - 2018-03-24"],
  ["FIM District", "FIM District Lincoln Event", {lat:42.1586, lng:-83.6111}, 2, "2018milin", "2018-03-15 - 2018-03-17"],
  ["FIM District", "FIM District Livonia Event", {lat:42.3554, lng:-83.4086}, 4, "2018miliv", "2018-03-29 - 2018-03-31"],
  ["FIM District", "FIM District Lake Superior State University Event", {lat:46.4918, lng:-84.3639}, 5, "2018milsu", "2018-04-05 - 2018-04-07"],
  ["FIM District", "FIM District Marysville Event", {lat:42.9112, lng:-82.4754}, 5, "2018mimar", "2018-04-05 - 2018-04-07"],
  ["FIM District", "FIM District Midland Event", {lat:43.6407, lng:-84.2754}, 3, "2018mimid", "2018-03-22 - 2018-03-24"],
  ["FIM District", "FIM District Milford Event", {lat:42.6178, lng:-83.6226}, 2, "2018mimil", "2018-03-15 - 2018-03-17"],
  ["FIM District", "FIM District Rockwood Event", {lat:42.0855, lng:-83.2115}, 0, "2018miroc", "2018-03-01 - 2018-03-03"],
  ["FIM District", "FIM District Shepherd Event", {lat:43.5218, lng:-84.6905}, 4, "2018mishe", "2018-03-29 - 2018-03-31"],
  ["FIM District", "FIM District St. Joseph Event", {lat:42.0895, lng:-86.4917}, 1, "2018misjo", "2018-03-08 - 2018-03-10"],
  ["FIM District", "FIM District Southfield Event", {lat:42.4695, lng:-83.2633}, 0, "2018misou", "2018-03-01 - 2018-03-03"],
  ["FIM District", "FIM District Troy Event", {lat:42.5820, lng:-83.1120}, 4, "2018mitry", "2018-03-29 - 2018-03-31"],
  ["FIM District", "FIM District Traverse City Event", {lat:44.7689, lng:-85.5881}, 0, "2018mitvc", "2018-03-01 - 2018-03-03"],
  ["FIM District", "FIM District Waterford Event", {lat:42.6565, lng:-83.3490}, 1, "2018miwat", "2018-03-08 - 2018-03-10"],
  ["FIM District", "FIM District West Michigan Event", {lat:42.9639, lng:-85.8889}, 3, "2018miwmi", "2018-03-22 - 2018-03-24"],
  ["MAR District", "FIRST Mid-Atlantic District Championship", {lat:40.5853, lng:-75.3574}, 5, "2018mrcmp", "2018-04-04 - 2018-04-07"],
  ["NC District", "NC District UNC Asheville Event", {lat:35.6163, lng:-82.5673}, 3, "2018ncash", "2018-03-23 - 2018-03-25"],
  ["NC District", "FIRST North Carolina State Championship", {lat:35.4187, lng:-78.8022}, 5, "2018nccmp", "2018-04-06 - 2018-04-08"],
  ["NC District", "NC District Pitt County Event", {lat:35.5975, lng:-77.3674}, 1, "2018ncgre", "2018-03-09 - 2018-03-11"],
  ["NC District", "NC District UNC Pembroke Event", {lat:34.6899, lng:-79.2006}, 2, "2018ncpem", "2018-03-16 - 2018-03-18"],
  ["NC District", "NC District Forsyth County Event", {lat:36.1280, lng:-80.2538}, 4, "2018ncwin", "2018-03-29 - 2018-03-31"],
  ["NE District", "New England District Championship", {lat:42.3522, lng:-71.1177}, 6, "2018necmp", "2018-04-11 - 2018-04-14"],
  ["NE District", "NE District UNH Event", {lat:43.1398, lng:-70.9345}, 4, "2018nhdur", "2018-03-29 - 2018-03-31"],
  ["NE District", "NE District Granite State Event", {lat:42.7804, lng:-71.2117}, 0, "2018nhgrs", "2018-03-02 - 2018-03-04"],
  ["MAR District", "MAR District Bridgewater-Raritan Event", {lat:40.5930, lng:-74.6345}, 2, "2018njbri", "2018-03-16 - 2018-03-18"],
  ["MAR District", "MAR District Mount Olive Event", {lat:40.8586, lng:-74.7140}, 1, "2018njfla", "2018-03-09 - 2018-03-11"],
  ["MAR District", "MAR District Montgomery Event", {lat:40.4175, lng:-74.7064}, 3, "2018njski", "2018-03-23 - 2018-03-25"],
  ["MAR District", "MAR District Seneca Event", {lat:39.8573, lng:-74.7176}, 3, "2018njtab", "2018-03-23 - 2018-03-25"],
  ["ONT District", "ONT District Georgian College Event", {lat:44.4109, lng:-79.6687}, 0, "2018onbar", "2018-03-02 - 2018-03-04"],
  ["ONT District", "FIRST Ontario Provincial Championship", {lat:43.6383, lng:-79.4211}, 6, "2018oncmp", "2018-04-11 - 2018-04-14"],
  ["ONT District", "ONT District McMaster University Event", {lat:43.2609, lng:-79.9192}, 5, "2018onham", "2018-04-06 - 2018-04-08"],
  ["ONT District", "ONT District Western University, Western Engineering Event", {lat:43.0096, lng:-81.2737}, 5, "2018onlon", "2018-04-06 - 2018-04-08"],
  ["ONT District", "ONT District North Bay Event", {lat:46.3430, lng:-79.4928}, 4, "2018onnob", "2018-03-29 - 2018-03-31"],
  ["ONT District", "ONT District York University Event", {lat:43.7735, lng:-79.5019}, 3, "2018onnyo", "2018-03-23 - 2018-03-25"],
  ["ONT District", "ONT District Durham College Event", {lat:43.9424, lng:-78.8962}, 0, "2018onosh", "2018-03-02 - 2018-03-04"],
  ["ONT District", "ONT District Ryerson University Event", {lat:43.6577, lng:-79.3788}, 2, "2018onto1", "2018-03-15 - 2018-03-17"],
  ["ONT District", "ONT District University of Waterloo Event", {lat:43.4723, lng:-80.5449}, 3, "2018onwat", "2018-03-22 - 2018-03-24"],
  ["ONT District", "ONT District Windsor Essex Great Lakes Event", {lat:42.3077, lng:-83.0685}, 4, "2018onwin", "2018-03-29 - 2018-03-31"],
  ["PNW District", "PNW District Lake Oswego Event", {lat:45.4275, lng:-122.7025}, 4, "2018orlak", "2018-03-29 - 2018-03-31"],
  ["PNW District", "PNW District Clackamas Academy Event", {lat:45.4295, lng:-122.5734}, 0, "2018orore", "2018-03-01 - 2018-03-03"],
  ["PNW District", "PNW District Wilsonville Event", {lat:45.3074, lng:-122.7477}, 1, "2018orwil", "2018-03-08 - 2018-03-10"],
  ["MAR District", "MAR District Hatboro-Horsham Event", {lat:40.1977, lng:-75.1635}, 0, "2018pahat", "2018-03-02 - 2018-03-04"],
  ["MAR District", "MAR District Springside Chestnut Hill Academy Event", {lat:40.0616, lng:-75.2095}, 2, "2018paphi", "2018-03-16 - 2018-03-18"],
  ["MAR District", "MAR District Westtown Event", {lat:39.9483, lng:-75.5383}, 1, "2018pawch", "2018-03-09 - 2018-03-11"],
  ["PNW District", "Pacific Northwest District Championship", {lat:45.5321, lng:-122.6693}, 5, "2018pncmp", "2018-04-04 - 2018-04-07"],
  ["NE District", "NE District Rhode Island Event", {lat:41.9212, lng:-71.5379}, 3, "2018rismi", "2018-03-23 - 2018-03-25"],
  ["CHS District", "CHS District Southwest Virginia Event", {lat:37.2109, lng:-80.4593}, 3, "2018vabla", "2018-03-23 - 2018-03-25"],
  ["CHS District", "CHS District Greater DC Event", {lat:38.7508, lng:-77.1432}, 1, "2018vagdc", "2018-03-09 - 2018-03-11"],
  ["CHS District", "CHS District Central Virginia Event", {lat:37.6756, lng:-77.5996}, 1, "2018vagle", "2018-03-09 - 2018-03-11"],
  ["CHS District", "CHS District Northern Virginia Event", {lat:38.8453, lng:-77.6298}, 0, "2018vahay", "2018-03-02 - 2018-03-04"],
  ["CHS District", "CHS District Hampton Roads Event", {lat:36.8804, lng:-76.3710}, 2, "2018vapor", "2018-03-16 - 2018-03-18"],
  ["PNW District", "PNW District Auburn Event", {lat:47.3087, lng:-122.2200}, 2, "2018waahs", "2018-03-16 - 2018-03-18"],
  ["PNW District", "PNW District Auburn Mountainview Event", {lat:47.3420, lng:-122.1720}, 4, "2018waamv", "2018-03-29 - 2018-03-31"],
  ["PNW District", "PNW District Mount Vernon Event", {lat:48.4237, lng:-122.3275}, 0, "2018wamou", "2018-03-02 - 2018-03-04"],
  ["PNW District", "PNW District Glacier Peak Event", {lat:47.8688, lng:-122.1340}, 3, "2018wasno", "2018-03-23 - 2018-03-25"],
  ["PNW District", "PNW District West Valley Event", {lat:47.6834, lng:-117.2927}, 3, "2018waspo", "2018-03-22 - 2018-03-24"],
  ["MAR District", "MAR District Bridgewater-Raritan Event", {lat:40.5930, lng:-74.6345}, 2, "2018njbri", "2018-03-16 - 2018-03-18"]
]
