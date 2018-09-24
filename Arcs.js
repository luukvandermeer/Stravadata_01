d3.json("Data_2017.json", function(data) {

  var jsonRondjes = [{"date":"2017-01-01","FG":39,"G":5,"RH":19,"SQ":0,"NG":8},
  {"date":"2017-01-02","FG":22,"G":30,"RH":5,"SQ":43,"NG":5},
  {"date":"2017-01-03","FG":43,"G":50,"RH":7,"SQ":5,"NG":7},
  {"date":"2017-01-04","FG":47,"G":58,"RH":18,"SQ":33,"NG":6},
  {"date":"2017-01-05","FG":23,"G":0,"RH":-1,"SQ":58,"NG":3},
  {"date":"2017-01-06","FG":27,"G":-30,"RH":0,"SQ":62,"NG":8},
  {"date":"2017-01-07","FG":32,"G":-2,"RH":52,"SQ":0,"NG":8},
  {"date":"2017-01-08","FG":14,"G":43,"RH":0,"SQ":0,"NG":8,"type":"Ride","distance":17837.2,"total_elevation_gain":24.7,"time":32216,"elapsed_time":2587,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170108-075656-Ride.xml"},
  {"date":"2017-01-09","FG":39,"G":48,"RH":48,"SQ":0,"NG":8},
  {"date":"2017-01-10","FG":29,"G":53,"RH":38,"SQ":10,"NG":7},
  {"date":"2017-01-11","FG":63,"G":72,"RH":5,"SQ":28,"NG":7},
  {"date":"2017-01-12","FG":47,"G":52,"RH":143,"SQ":14,"NG":8},
  {"date":"2017-01-13","FG":49,"G":31,"RH":96,"SQ":32,"NG":7},
  {"date":"2017-01-14","FG":33,"G":18,"RH":51,"SQ":23,"NG":6},
  {"date":"2017-01-15","FG":16,"G":7,"RH":0,"SQ":33,"NG":7},
  {"date":"2017-01-16","FG":18,"G":-16,"RH":-1,"SQ":18,"NG":7},
  {"date":"2017-01-17","FG":18,"G":-34,"RH":0,"SQ":36,"NG":7},
  {"date":"2017-01-18","FG":13,"G":-38,"RH":-1,"SQ":18,"NG":7},
  {"date":"2017-01-19","FG":13,"G":-20,"RH":0,"SQ":67,"NG":3},
  {"date":"2017-01-20","FG":20,"G":-3,"RH":0,"SQ":71,"NG":4},
  {"date":"2017-01-21","FG":23,"G":-2,"RH":0,"SQ":75,"NG":3},
  {"date":"2017-01-22","FG":11,"G":-17,"RH":0,"SQ":75,"NG":4},
  {"date":"2017-01-23","FG":20,"G":16,"RH":-1,"SQ":2,"NG":8},
  {"date":"2017-01-24","FG":20,"G":8,"RH":3,"SQ":0,"NG":8},
  {"date":"2017-01-25","FG":24,"G":-11,"RH":0,"SQ":0,"NG":6},
  {"date":"2017-01-26","FG":31,"G":-28,"RH":0,"SQ":65,"NG":0},
  {"date":"2017-01-27","FG":35,"G":8,"RH":0,"SQ":57,"NG":5},
  {"date":"2017-01-28","FG":36,"G":54,"RH":-1,"SQ":16,"NG":8},
  {"date":"2017-01-29","FG":38,"G":47,"RH":36,"SQ":5,"NG":8,"type":"Ride","distance":24646.3,"total_elevation_gain":45.7,"time":40326,"elapsed_time":3726,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/gpx_data/20170129-101206-Ride.xml"},
  {"date":"2017-01-30","FG":37,"G":49,"RH":65,"SQ":0,"NG":8},
  {"date":"2017-01-31","FG":23,"G":37,"RH":0,"SQ":8,"NG":8},
  {"date":"2017-02-01","FG":48,"G":34,"RH":12,"SQ":0,"NG":8},
  {"date":"2017-02-02","FG":44,"G":86,"RH":10,"SQ":31,"NG":8},
  {"date":"2017-02-03","FG":33,"G":86,"RH":1,"SQ":15,"NG":7},
  {"date":"2017-02-04","FG":26,"G":57,"RH":83,"SQ":2,"NG":7,"type":"Ride","distance":28725.6,"total_elevation_gain":47.7,"time":35179,"elapsed_time":3886,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170204-084619-Ride.xml"},
  {"date":"2017-02-05","FG":21,"G":44,"RH":-1,"SQ":41,"NG":8,"type":"Ride","distance":35546.1,"total_elevation_gain":15.3,"time":42695,"elapsed_time":15109,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170205-105135-Ride.xml"},
  {"date":"2017-02-06","FG":18,"G":43,"RH":0,"SQ":0,"NG":8},
  {"date":"2017-02-07","FG":42,"G":24,"RH":25,"SQ":0,"NG":8},
  {"date":"2017-02-08","FG":38,"G":0,"RH":2,"SQ":0,"NG":8},
  {"date":"2017-02-09","FG":40,"G":-16,"RH":-1,"SQ":0,"NG":8},
  {"date":"2017-02-10","FG":34,"G":-23,"RH":2,"SQ":0,"NG":8,"type":"Ride","distance":23946.2,"total_elevation_gain":570.6,"time":52394,"elapsed_time":6000,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170210-100901-Ride.xml"},
  {"date":"2017-02-11","FG":33,"G":-4,"RH":45,"SQ":0,"NG":8},
  {"date":"2017-02-12","FG":50,"G":7,"RH":3,"SQ":45,"NG":5},
  {"date":"2017-02-13","FG":55,"G":22,"RH":0,"SQ":87,"NG":0},
  {"date":"2017-02-14","FG":38,"G":38,"RH":0,"SQ":87,"NG":0},
  {"date":"2017-02-15","FG":28,"G":74,"RH":-1,"SQ":75,"NG":2},
  {"date":"2017-02-16","FG":36,"G":68,"RH":5,"SQ":7,"NG":7},
  {"date":"2017-02-17","FG":29,"G":70,"RH":6,"SQ":2,"NG":8},
  {"date":"2017-02-18","FG":22,"G":56,"RH":0,"SQ":49,"NG":6,"type":"Ride","distance":45060.4,"total_elevation_gain":17.1,"time":36193,"elapsed_time":10244,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170218-090313-Ride.xml"},
  {"date":"2017-02-19","FG":34,"G":62,"RH":6,"SQ":4,"NG":7,"type":"Ride","distance":44400.0,"total_elevation_gain":0.0,"time":41327,"elapsed_time":4800,"url":""},
  {"date":"2017-02-20","FG":48,"G":91,"RH":53,"SQ":0,"NG":8},
  {"date":"2017-02-21","FG":44,"G":96,"RH":3,"SQ":54,"NG":8},
  {"date":"2017-02-22","FG":63,"G":95,"RH":175,"SQ":0,"NG":8},
  {"date":"2017-02-23","FG":83,"G":80,"RH":145,"SQ":2,"NG":8},
  {"date":"2017-02-24","FG":32,"G":45,"RH":6,"SQ":68,"NG":4},
  {"date":"2017-02-25","FG":53,"G":58,"RH":7,"SQ":5,"NG":8},
  {"date":"2017-02-26","FG":53,"G":87,"RH":21,"SQ":0,"NG":8,"type":"Ride","distance":106508.0,"total_elevation_gain":30.6,"time":31996,"elapsed_time":20454,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170226-075316-Ride.xml"},
  {"date":"2017-02-27","FG":62,"G":87,"RH":138,"SQ":3,"NG":8},
  {"date":"2017-02-28","FG":63,"G":47,"RH":28,"SQ":21,"NG":7},
  {"date":"2017-03-01","FG":37,"G":63,"RH":35,"SQ":38,"NG":8},
  {"date":"2017-03-02","FG":62,"G":66,"RH":84,"SQ":11,"NG":7},
  {"date":"2017-03-03","FG":39,"G":59,"RH":11,"SQ":14,"NG":8},
  {"date":"2017-03-04","FG":32,"G":92,"RH":61,"SQ":6,"NG":8},
  {"date":"2017-03-05","FG":54,"G":69,"RH":38,"SQ":42,"NG":7},
  {"date":"2017-03-06","FG":21,"G":60,"RH":23,"SQ":43,"NG":7},
  {"date":"2017-03-07","FG":25,"G":67,"RH":1,"SQ":16,"NG":8},
  {"date":"2017-03-08","FG":38,"G":59,"RH":137,"SQ":2,"NG":7},
  {"date":"2017-03-09","FG":40,"G":77,"RH":1,"SQ":45,"NG":6},
  {"date":"2017-03-10","FG":19,"G":65,"RH":0,"SQ":80,"NG":5},
  {"date":"2017-03-11","FG":21,"G":73,"RH":0,"SQ":64,"NG":8,"type":"Ride","distance":33657.6,"total_elevation_gain":64.5,"time":34073,"elapsed_time":4763,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170311-082753-Ride.xml"},
  {"date":"2017-03-12","FG":33,"G":79,"RH":0,"SQ":98,"NG":8},
  {"date":"2017-03-13","FG":23,"G":65,"RH":0,"SQ":81,"NG":7},
  {"date":"2017-03-14","FG":33,"G":88,"RH":0,"SQ":45,"NG":8},
  {"date":"2017-03-15","FG":19,"G":90,"RH":0,"SQ":84,"NG":5},
  {"date":"2017-03-16","FG":27,"G":94,"RH":0,"SQ":109,"NG":4},
  {"date":"2017-03-17","FG":49,"G":83,"RH":57,"SQ":42,"NG":8},
  {"date":"2017-03-18","FG":43,"G":97,"RH":62,"SQ":1,"NG":8,"type":"Ride","distance":107782.0,"total_elevation_gain":25.4,"time":31037,"elapsed_time":20651,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170318-073717-Ride.xml"},
  {"date":"2017-03-19","FG":59,"G":113,"RH":2,"SQ":7,"NG":8},
  {"date":"2017-03-20","FG":62,"G":103,"RH":94,"SQ":0,"NG":8},
  {"date":"2017-03-21","FG":42,"G":75,"RH":-1,"SQ":88,"NG":7},
  {"date":"2017-03-22","FG":38,"G":63,"RH":0,"SQ":85,"NG":5},
  {"date":"2017-03-23","FG":45,"G":82,"RH":0,"SQ":109,"NG":4},
  {"date":"2017-03-24","FG":47,"G":84,"RH":0,"SQ":110,"NG":6},
  {"date":"2017-03-25","FG":44,"G":85,"RH":0,"SQ":105,"NG":7},
  {"date":"2017-03-26","FG":35,"G":80,"RH":0,"SQ":73,"NG":8,"type":"Ride","distance":73372.9,"total_elevation_gain":199.1,"time":33612,"elapsed_time":11190,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170326-072012-Ride.xml"},
  {"date":"2017-03-27","FG":26,"G":92,"RH":0,"SQ":115,"NG":4},
  {"date":"2017-03-28","FG":28,"G":113,"RH":1,"SQ":114,"NG":4},
  {"date":"2017-03-29","FG":45,"G":126,"RH":-1,"SQ":12,"NG":8},
  {"date":"2017-03-30","FG":37,"G":157,"RH":0,"SQ":61,"NG":8,"type":"Ride","distance":31764.3,"total_elevation_gain":63.3,"time":68331,"elapsed_time":4532,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170330-165851-Ride.xml"},
  {"date":"2017-03-31","FG":35,"G":145,"RH":14,"SQ":55,"NG":8},
  {"date":"2017-04-01","FG":20,"G":108,"RH":-1,"SQ":2,"NG":7},
  {"date":"2017-04-02","FG":23,"G":103,"RH":0,"SQ":98,"NG":5,"type":"Ride","distance":31326.8,"total_elevation_gain":36.6,"time":46776,"elapsed_time":4385,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170402-105936-Ride.xml"},
  {"date":"2017-04-03","FG":15,"G":81,"RH":0,"SQ":48,"NG":4},
  {"date":"2017-04-04","FG":18,"G":98,"RH":0,"SQ":66,"NG":4,"type":"Ride","distance":25822.0,"total_elevation_gain":36.5,"time":68981,"elapsed_time":4443,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170404-170941-Ride.xml"},
  {"date":"2017-04-05","FG":35,"G":92,"RH":0,"SQ":52,"NG":6},
  {"date":"2017-04-06","FG":30,"G":81,"RH":-1,"SQ":26,"NG":8,"type":"Ride","distance":37690.0,"total_elevation_gain":80.2,"time":68707,"elapsed_time":5133,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170406-170507-Ride.xml"},
  {"date":"2017-04-07","FG":26,"G":105,"RH":0,"SQ":15,"NG":8},
  {"date":"2017-04-08","FG":13,"G":96,"RH":0,"SQ":50,"NG":4},
  {"date":"2017-04-09","FG":22,"G":117,"RH":0,"SQ":123,"NG":0,"type":"Ride","distance":93022.9,"total_elevation_gain":171.1,"time":31708,"elapsed_time":13861,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170409-064828-Ride.xml"},
  {"date":"2017-04-10","FG":34,"G":98,"RH":0,"SQ":53,"NG":7},
  {"date":"2017-04-11","FG":33,"G":96,"RH":0,"SQ":86,"NG":7},
  {"date":"2017-04-12","FG":42,"G":98,"RH":8,"SQ":9,"NG":8},
  {"date":"2017-04-13","FG":33,"G":93,"RH":-1,"SQ":77,"NG":6,"type":"Ride","distance":28488.1,"total_elevation_gain":47.8,"time":69130,"elapsed_time":3547,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170413-171210-Ride.xml"},
  {"date":"2017-04-14","FG":32,"G":99,"RH":-1,"SQ":24,"NG":8},
  {"date":"2017-04-15","FG":45,"G":96,"RH":34,"SQ":47,"NG":7},
  {"date":"2017-04-16","FG":29,"G":79,"RH":29,"SQ":34,"NG":8},
  {"date":"2017-04-17","FG":35,"G":65,"RH":86,"SQ":74,"NG":5,"type":"Ride","distance":47686.5,"total_elevation_gain":11.0,"time":53353,"elapsed_time":6624,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170417-124913-Ride.xml"},
  {"date":"2017-04-18","FG":32,"G":61,"RH":-1,"SQ":92,"NG":3},
  {"date":"2017-04-19","FG":29,"G":39,"RH":0,"SQ":71,"NG":5},
  {"date":"2017-04-20","FG":23,"G":69,"RH":0,"SQ":123,"NG":7},
  {"date":"2017-04-21","FG":36,"G":111,"RH":8,"SQ":4,"NG":8},
  {"date":"2017-04-22","FG":37,"G":78,"RH":6,"SQ":78,"NG":7},
  {"date":"2017-04-23","FG":26,"G":66,"RH":1,"SQ":55,"NG":7,"type":"Ride","distance":94471.4,"total_elevation_gain":176.3,"time":35830,"elapsed_time":17300,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170423-075710-Ride.xml"},
  {"date":"2017-04-24","FG":43,"G":93,"RH":27,"SQ":34,"NG":8},
  {"date":"2017-04-25","FG":39,"G":59,"RH":20,"SQ":97,"NG":5,"type":"Ride","distance":19940.7,"total_elevation_gain":0.0,"time":62664,"elapsed_time":2422,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170425-152424-Ride.xml"},
  {"date":"2017-04-26","FG":22,"G":50,"RH":3,"SQ":86,"NG":3},
  {"date":"2017-04-27","FG":28,"G":61,"RH":2,"SQ":102,"NG":6},
  {"date":"2017-04-28","FG":25,"G":76,"RH":19,"SQ":43,"NG":7,"type":"Ride","distance":111852.0,"total_elevation_gain":769.6,"time":37899,"elapsed_time":20438,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170428-083139-Ride.xml"},
  {"date":"2017-04-29","FG":19,"G":76,"RH":-1,"SQ":72,"NG":3},
  {"date":"2017-04-30","FG":61,"G":123,"RH":0,"SQ":113,"NG":6},
  {"date":"2017-05-01","FG":31,"G":117,"RH":9,"SQ":8,"NG":8},
  {"date":"2017-05-02","FG":23,"G":100,"RH":47,"SQ":20,"NG":8},
  {"date":"2017-05-03","FG":33,"G":107,"RH":35,"SQ":24,"NG":8},
  {"date":"2017-05-04","FG":51,"G":104,"RH":-1,"SQ":27,"NG":8},
  {"date":"2017-05-05","FG":35,"G":89,"RH":-1,"SQ":3,"NG":8},
  {"date":"2017-05-06","FG":41,"G":128,"RH":0,"SQ":112,"NG":6,"type":"Ride","distance":25229.7,"total_elevation_gain":45.6,"time":31773,"elapsed_time":5993,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170506-064933-Ride.xml"},
  {"date":"2017-05-07","FG":33,"G":117,"RH":0,"SQ":23,"NG":8,"type":"Ride","distance":88213.8,"total_elevation_gain":0.0,"time":33054,"elapsed_time":8798,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170507-060630-Ride.xml"},
  {"date":"2017-05-08","FG":39,"G":97,"RH":-1,"SQ":64,"NG":5},
  {"date":"2017-05-09","FG":23,"G":80,"RH":0,"SQ":69,"NG":6,"type":"Ride","distance":56458.6,"total_elevation_gain":12.7,"time":69155,"elapsed_time":7844,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170509-171235-Ride.xml"},
  {"date":"2017-05-10","FG":18,"G":90,"RH":0,"SQ":95,"NG":3},
  {"date":"2017-05-11","FG":35,"G":154,"RH":3,"SQ":119,"NG":5,"type":"Ride","distance":25925.6,"total_elevation_gain":12.4,"time":54266,"elapsed_time":3433,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170511-050847-Ride.xml"},
  {"date":"2017-05-12","FG":29,"G":155,"RH":125,"SQ":27,"NG":8},
  {"date":"2017-05-13","FG":27,"G":140,"RH":100,"SQ":21,"NG":6,"type":"Ride","distance":60573.0,"total_elevation_gain":165.9,"time":37750,"elapsed_time":8691,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170513-082910-Ride.xml"},
  {"date":"2017-05-14","FG":31,"G":134,"RH":19,"SQ":90,"NG":4,"type":"Ride","distance":34487.9,"total_elevation_gain":80.8,"time":39972,"elapsed_time":6269,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170514-090612-Ride.xml"},
  {"date":"2017-05-15","FG":25,"G":149,"RH":-1,"SQ":100,"NG":7},
  {"date":"2017-05-16","FG":26,"G":204,"RH":-1,"SQ":18,"NG":8,"type":"Ride","distance":670.1,"total_elevation_gain":0.0,"time":78359,"elapsed_time":75,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170516-165909-Ride.xml"},
  {"date":"2017-05-17","FG":28,"G":223,"RH":0,"SQ":77,"NG":8},
  {"date":"2017-05-18","FG":33,"G":165,"RH":3,"SQ":11,"NG":8,"type":"Ride","distance":25385.3,"total_elevation_gain":119.9,"time":70564,"elapsed_time":3473,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170518-173604-Ride.xml"},
  {"date":"2017-05-19","FG":46,"G":136,"RH":1,"SQ":7,"NG":8},
  {"date":"2017-05-20","FG":28,"G":125,"RH":12,"SQ":99,"NG":3},
  {"date":"2017-05-21","FG":19,"G":144,"RH":0,"SQ":109,"NG":5},
  {"date":"2017-05-22","FG":19,"G":176,"RH":0,"SQ":127,"NG":6},
  {"date":"2017-05-23","FG":30,"G":161,"RH":0,"SQ":119,"NG":7},
  {"date":"2017-05-24","FG":26,"G":159,"RH":0,"SQ":82,"NG":7},
  {"date":"2017-05-25","FG":25,"G":174,"RH":0,"SQ":146,"NG":2},
  {"date":"2017-05-26","FG":37,"G":203,"RH":0,"SQ":148,"NG":0},
  {"date":"2017-05-27","FG":37,"G":229,"RH":0,"SQ":136,"NG":3},
  {"date":"2017-05-28","FG":26,"G":205,"RH":0,"SQ":121,"NG":7},
  {"date":"2017-05-29","FG":31,"G":219,"RH":3,"SQ":97,"NG":8},
  {"date":"2017-05-30","FG":39,"G":183,"RH":0,"SQ":40,"NG":7},
  {"date":"2017-05-31","FG":30,"G":174,"RH":0,"SQ":119,"NG":5},
  {"date":"2017-06-01","FG":20,"G":166,"RH":0,"SQ":152,"NG":5},
  {"date":"2017-06-02","FG":18,"G":198,"RH":0,"SQ":103,"NG":6},
  {"date":"2017-06-03","FG":23,"G":184,"RH":21,"SQ":54,"NG":8},
  {"date":"2017-06-04","FG":30,"G":154,"RH":0,"SQ":114,"NG":7},
  {"date":"2017-06-05","FG":40,"G":171,"RH":0,"SQ":71,"NG":8},
  {"date":"2017-06-06","FG":66,"G":141,"RH":105,"SQ":25,"NG":8},
  {"date":"2017-06-07","FG":62,"G":140,"RH":51,"SQ":45,"NG":8},
  {"date":"2017-06-08","FG":43,"G":168,"RH":3,"SQ":47,"NG":8},
  {"date":"2017-06-09","FG":41,"G":165,"RH":212,"SQ":75,"NG":5,"type":"Ride","distance":10380.8,"total_elevation_gain":306.2,"time":64948,"elapsed_time":2655,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170609-160228-Ride.xml"},
  {"date":"2017-06-10","FG":30,"G":178,"RH":0,"SQ":107,"NG":3,"type":"Ride","distance":37263.9,"total_elevation_gain":844.5,"time":61113,"elapsed_time":8933,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170610-090504-Ride.xml"},
  {"date":"2017-06-11","FG":32,"G":199,"RH":-1,"SQ":50,"NG":6,"type":"Ride","distance":64224.8,"total_elevation_gain":1460.4,"time":40247,"elapsed_time":15007,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170611-091047-Ride.xml"},
  {"date":"2017-06-12","FG":41,"G":161,"RH":-1,"SQ":24,"NG":7},
  {"date":"2017-06-13","FG":26,"G":163,"RH":0,"SQ":87,"NG":6},
  {"date":"2017-06-14","FG":17,"G":174,"RH":0,"SQ":151,"NG":5},
  {"date":"2017-06-15","FG":35,"G":200,"RH":0,"SQ":114,"NG":6},
  {"date":"2017-06-16","FG":35,"G":162,"RH":0,"SQ":37,"NG":7},
  {"date":"2017-06-17","FG":25,"G":186,"RH":0,"SQ":55,"NG":6},
  {"date":"2017-06-18","FG":13,"G":208,"RH":0,"SQ":128,"NG":4,"type":"Ride","distance":29031.2,"total_elevation_gain":83.1,"time":34012,"elapsed_time":6065,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170618-072652-Ride.xml"},
  {"date":"2017-06-19","FG":18,"G":236,"RH":0,"SQ":152,"NG":3},
  {"date":"2017-06-20","FG":38,"G":216,"RH":0,"SQ":98,"NG":7},
  {"date":"2017-06-21","FG":26,"G":214,"RH":0,"SQ":127,"NG":8},
  {"date":"2017-06-22","FG":43,"G":229,"RH":13,"SQ":83,"NG":7,"type":"Ride","distance":38439.4,"total_elevation_gain":98.7,"time":69103,"elapsed_time":5784,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170622-171143-Ride.xml"},
  {"date":"2017-06-23","FG":43,"G":196,"RH":0,"SQ":69,"NG":8},
  {"date":"2017-06-24","FG":45,"G":171,"RH":55,"SQ":0,"NG":8},
  {"date":"2017-06-25","FG":38,"G":175,"RH":46,"SQ":7,"NG":8,"type":"Ride","distance":106196.0,"total_elevation_gain":516.1,"time":32057,"elapsed_time":14463,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170625-065417-Ride.xml"},
  {"date":"2017-06-26","FG":28,"G":168,"RH":0,"SQ":105,"NG":5},
  {"date":"2017-06-27","FG":38,"G":173,"RH":28,"SQ":42,"NG":8},
  {"date":"2017-06-28","FG":28,"G":180,"RH":31,"SQ":2,"NG":8},
  {"date":"2017-06-29","FG":22,"G":175,"RH":1,"SQ":11,"NG":8,"type":"Ride","distance":616.1,"total_elevation_gain":2.6,"time":79994,"elapsed_time":76,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170629-171809-Ride.xml"},
  {"date":"2017-06-30","FG":26,"G":162,"RH":42,"SQ":4,"NG":8},
  {"date":"2017-07-01","FG":30,"G":161,"RH":69,"SQ":20,"NG":8},
  {"date":"2017-07-02","FG":30,"G":156,"RH":6,"SQ":62,"NG":5,"type":"Ride","distance":36704.1,"total_elevation_gain":95.1,"time":37990,"elapsed_time":14132,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170702-083310-Ride.xml"},
  {"date":"2017-07-03","FG":37,"G":166,"RH":10,"SQ":83,"NG":5},
  {"date":"2017-07-04","FG":15,"G":186,"RH":-1,"SQ":66,"NG":8},
  {"date":"2017-07-05","FG":19,"G":190,"RH":0,"SQ":90,"NG":5},
  {"date":"2017-07-06","FG":21,"G":199,"RH":170,"SQ":80,"NG":6},
  {"date":"2017-07-07","FG":29,"G":206,"RH":-1,"SQ":89,"NG":7,"type":"Ride","distance":20310.3,"total_elevation_gain":438.6,"time":55840,"elapsed_time":4372,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170707-084306-Ride.xml"},
  {"date":"2017-07-08","FG":20,"G":186,"RH":-1,"SQ":27,"NG":7,"type":"Ride","distance":56873.1,"total_elevation_gain":1653.3,"time":40303,"elapsed_time":15981,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170708-091143-Ride.xml"},
  {"date":"2017-07-09","FG":20,"G":172,"RH":0,"SQ":133,"NG":5,"type":"Ride","distance":18184.7,"total_elevation_gain":283.9,"time":37822,"elapsed_time":3637,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170709-083022-Ride.xml"},
  {"date":"2017-07-10","FG":22,"G":196,"RH":1,"SQ":48,"NG":8,"type":"Ride","distance":22471.2,"total_elevation_gain":756.8,"time":48420,"elapsed_time":4547,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170710-050424-Ride.xml"},
  {"date":"2017-07-11","FG":30,"G":177,"RH":33,"SQ":12,"NG":8},
  {"date":"2017-07-12","FG":34,"G":149,"RH":268,"SQ":41,"NG":6},
  {"date":"2017-07-13","FG":10,"G":146,"RH":0,"SQ":61,"NG":7},
  {"date":"2017-07-14","FG":29,"G":142,"RH":176,"SQ":60,"NG":5},
  {"date":"2017-07-15","FG":24,"G":172,"RH":-1,"SQ":38,"NG":8},
  {"date":"2017-07-16","FG":28,"G":186,"RH":12,"SQ":4,"NG":8},
  {"date":"2017-07-17","FG":23,"G":186,"RH":-1,"SQ":134,"NG":6},
  {"date":"2017-07-18","FG":35,"G":199,"RH":0,"SQ":123,"NG":8},
  {"date":"2017-07-19","FG":37,"G":235,"RH":1,"SQ":73,"NG":7},
  {"date":"2017-07-20","FG":32,"G":191,"RH":210,"SQ":28,"NG":7},
  {"date":"2017-07-21","FG":29,"G":182,"RH":0,"SQ":131,"NG":5},
  {"date":"2017-07-22","FG":25,"G":194,"RH":35,"SQ":75,"NG":6},
  {"date":"2017-07-23","FG":33,"G":160,"RH":112,"SQ":47,"NG":7},
  {"date":"2017-07-24","FG":25,"G":161,"RH":25,"SQ":84,"NG":6},
  {"date":"2017-07-25","FG":33,"G":167,"RH":83,"SQ":40,"NG":7},
  {"date":"2017-07-26","FG":29,"G":190,"RH":1,"SQ":93,"NG":7},
  {"date":"2017-07-27","FG":40,"G":185,"RH":-1,"SQ":47,"NG":8},
  {"date":"2017-07-28","FG":52,"G":172,"RH":17,"SQ":34,"NG":7},
  {"date":"2017-07-29","FG":39,"G":182,"RH":76,"SQ":9,"NG":8},
  {"date":"2017-07-30","FG":41,"G":188,"RH":14,"SQ":85,"NG":7},
  {"date":"2017-07-31","FG":27,"G":181,"RH":-1,"SQ":64,"NG":8},
  {"date":"2017-08-01","FG":14,"G":178,"RH":0,"SQ":26,"NG":8},
  {"date":"2017-08-02","FG":27,"G":176,"RH":30,"SQ":8,"NG":8},
  {"date":"2017-08-03","FG":59,"G":190,"RH":17,"SQ":63,"NG":5,"type":"Ride","distance":41865.8,"total_elevation_gain":163.6,"time":70132,"elapsed_time":6360,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170803-172852-Ride.xml"},
  {"date":"2017-08-04","FG":50,"G":183,"RH":6,"SQ":89,"NG":6},
  {"date":"2017-08-05","FG":24,"G":159,"RH":18,"SQ":24,"NG":6},
  {"date":"2017-08-06","FG":21,"G":158,"RH":0,"SQ":100,"NG":3,"type":"Ride","distance":84246.0,"total_elevation_gain":306.1,"time":35347,"elapsed_time":14369,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170806-074907-Ride.xml"},
  {"date":"2017-08-07","FG":22,"G":168,"RH":0,"SQ":123,"NG":7},
  {"date":"2017-08-08","FG":20,"G":162,"RH":65,"SQ":10,"NG":8},
  {"date":"2017-08-09","FG":33,"G":167,"RH":-1,"SQ":77,"NG":6},
  {"date":"2017-08-10","FG":17,"G":157,"RH":24,"SQ":3,"NG":7,"type":"Ride","distance":458.7,"total_elevation_gain":2.5,"time":78941,"elapsed_time":47,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170810-171050-Ride.xml"},
  {"date":"2017-08-11","FG":22,"G":167,"RH":2,"SQ":39,"NG":7},
  {"date":"2017-08-12","FG":28,"G":168,"RH":44,"SQ":25,"NG":7},
  {"date":"2017-08-13","FG":16,"G":162,"RH":0,"SQ":83,"NG":5,"type":"Ride","distance":33301.3,"total_elevation_gain":128.4,"time":48421,"elapsed_time":4304,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170813-112701-Ride.xml"},
  {"date":"2017-08-14","FG":23,"G":179,"RH":0,"SQ":94,"NG":6},
  {"date":"2017-08-15","FG":17,"G":179,"RH":15,"SQ":22,"NG":7,"type":"Ride","distance":28499.3,"total_elevation_gain":124.8,"time":29975,"elapsed_time":3404,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170815-061935-Ride.xml"},
  {"date":"2017-08-16","FG":18,"G":176,"RH":0,"SQ":44,"NG":7},
  {"date":"2017-08-17","FG":33,"G":173,"RH":23,"SQ":8,"NG":8,"type":"Ride","distance":43868.6,"total_elevation_gain":239.3,"time":69701,"elapsed_time":6391,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170817-172141-Ride.xml"},
  {"date":"2017-08-18","FG":36,"G":169,"RH":62,"SQ":19,"NG":7},
  {"date":"2017-08-19","FG":41,"G":154,"RH":104,"SQ":67,"NG":6},
  {"date":"2017-08-20","FG":32,"G":158,"RH":-1,"SQ":93,"NG":6,"type":"Ride","distance":33992.2,"total_elevation_gain":477.8,"time":38528,"elapsed_time":10327,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170820-084208-Ride.xml"},
  {"date":"2017-08-21","FG":18,"G":159,"RH":0,"SQ":19,"NG":7,"type":"Ride","distance":34135.7,"total_elevation_gain":839.7,"time":50610,"elapsed_time":11871,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170821-120330-Ride.xml"},
  {"date":"2017-08-22","FG":20,"G":182,"RH":0,"SQ":99,"NG":6},
  {"date":"2017-08-23","FG":31,"G":196,"RH":0,"SQ":74,"NG":6,"type":"Ride","distance":55651.3,"total_elevation_gain":1022.3,"time":53555,"elapsed_time":9294,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170823-125235-Ride.xml"},
  {"date":"2017-08-24","FG":28,"G":179,"RH":-1,"SQ":56,"NG":8},
  {"date":"2017-08-25","FG":13,"G":169,"RH":0,"SQ":99,"NG":7},
  {"date":"2017-08-26","FG":15,"G":182,"RH":0,"SQ":81,"NG":7},
  {"date":"2017-08-27","FG":13,"G":178,"RH":0,"SQ":103,"NG":4},
  {"date":"2017-08-28","FG":13,"G":187,"RH":0,"SQ":111,"NG":5},
  {"date":"2017-08-29","FG":20,"G":210,"RH":15,"SQ":75,"NG":5,"type":"Ride","distance":20500.8,"total_elevation_gain":66.3,"time":36789,"elapsed_time":2498,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170829-081309-Ride.xml"},
  {"date":"2017-08-30","FG":28,"G":178,"RH":88,"SQ":4,"NG":8},
  {"date":"2017-08-31","FG":20,"G":144,"RH":20,"SQ":60,"NG":5},
  {"date":"2017-09-01","FG":14,"G":147,"RH":3,"SQ":41,"NG":6,"type":"Ride","distance":37132.0,"total_elevation_gain":118.3,"time":26806,"elapsed_time":13061,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170901-052646-Ride.xml"},
  {"date":"2017-09-02","FG":15,"G":133,"RH":0,"SQ":81,"NG":2},
  {"date":"2017-09-03","FG":14,"G":130,"RH":0,"SQ":77,"NG":4,"type":"Ride","distance":153939.0,"total_elevation_gain":632.9,"time":38371,"elapsed_time":27683,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170903-083931-Ride.xml"},
  {"date":"2017-09-04","FG":23,"G":158,"RH":0,"SQ":63,"NG":7},
  {"date":"2017-09-05","FG":29,"G":186,"RH":6,"SQ":18,"NG":8,"type":"Ride","distance":40291.6,"total_elevation_gain":179.3,"time":34918,"elapsed_time":10523,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170905-074158-Ride.xml"},
  {"date":"2017-09-06","FG":38,"G":159,"RH":37,"SQ":33,"NG":8},
  {"date":"2017-09-07","FG":33,"G":156,"RH":28,"SQ":18,"NG":8,"type":"Ride","distance":55117.1,"total_elevation_gain":142.7,"time":68668,"elapsed_time":7245,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170907-170428-Ride.xml"},
  {"date":"2017-09-08","FG":50,"G":151,"RH":172,"SQ":0,"NG":8},
  {"date":"2017-09-09","FG":25,"G":132,"RH":125,"SQ":44,"NG":5},
  {"date":"2017-09-10","FG":50,"G":139,"RH":9,"SQ":68,"NG":5,"type":"Ride","distance":43082.5,"total_elevation_gain":217.5,"time":36497,"elapsed_time":5626,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170910-080817-Ride.xml"},
  {"date":"2017-09-11","FG":64,"G":141,"RH":95,"SQ":50,"NG":6},
  {"date":"2017-09-12","FG":48,"G":146,"RH":1,"SQ":96,"NG":5},
  {"date":"2017-09-13","FG":70,"G":141,"RH":125,"SQ":58,"NG":7},
  {"date":"2017-09-14","FG":40,"G":117,"RH":207,"SQ":23,"NG":7},
  {"date":"2017-09-15","FG":29,"G":125,"RH":41,"SQ":74,"NG":5},
  {"date":"2017-09-16","FG":18,"G":106,"RH":139,"SQ":2,"NG":8},
  {"date":"2017-09-17","FG":14,"G":108,"RH":-1,"SQ":59,"NG":7,"type":"Ride","distance":126740.0,"total_elevation_gain":540.1,"time":40297,"elapsed_time":22180,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170917-091137-Ride.xml"},
  {"date":"2017-09-18","FG":20,"G":120,"RH":8,"SQ":54,"NG":7},
  {"date":"2017-09-19","FG":16,"G":120,"RH":-1,"SQ":43,"NG":7},
  {"date":"2017-09-20","FG":23,"G":135,"RH":6,"SQ":35,"NG":8},
  {"date":"2017-09-21","FG":23,"G":134,"RH":0,"SQ":86,"NG":8,"type":"Ride","distance":36115.4,"total_elevation_gain":115.0,"time":70170,"elapsed_time":5267,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170921-172930-Ride.xml"},
  {"date":"2017-09-22","FG":13,"G":119,"RH":8,"SQ":34,"NG":5},
  {"date":"2017-09-23","FG":12,"G":109,"RH":0,"SQ":102,"NG":2},
  {"date":"2017-09-24","FG":19,"G":121,"RH":0,"SQ":90,"NG":1,"type":"Ride","distance":103100.0,"total_elevation_gain":244.1,"time":38493,"elapsed_time":15547,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170924-084133-Ride.xml"},
  {"date":"2017-09-25","FG":25,"G":142,"RH":0,"SQ":13,"NG":7},
  {"date":"2017-09-26","FG":20,"G":132,"RH":0,"SQ":35,"NG":5,"type":"Ride","distance":38809.0,"total_elevation_gain":130.9,"time":62807,"elapsed_time":6817,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170926-152647-Ride.xml"},
  {"date":"2017-09-27","FG":23,"G":136,"RH":0,"SQ":64,"NG":5},
  {"date":"2017-09-28","FG":23,"G":158,"RH":11,"SQ":17,"NG":8},
  {"date":"2017-09-29","FG":28,"G":171,"RH":166,"SQ":48,"NG":8},
  {"date":"2017-09-30","FG":15,"G":131,"RH":24,"SQ":9,"NG":6,"type":"Ride","distance":278820.0,"total_elevation_gain":656.8,"time":25130,"elapsed_time":43700,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170930-045850-Ride.xml"},
  {"date":"2017-10-01","FG":46,"G":141,"RH":-1,"SQ":29,"NG":7},
  {"date":"2017-10-02","FG":50,"G":156,"RH":6,"SQ":23,"NG":8},
  {"date":"2017-10-03","FG":34,"G":136,"RH":16,"SQ":59,"NG":7},
  {"date":"2017-10-04","FG":42,"G":130,"RH":28,"SQ":3,"NG":8},
  {"date":"2017-10-05","FG":53,"G":129,"RH":252,"SQ":57,"NG":5},
  {"date":"2017-10-06","FG":31,"G":116,"RH":32,"SQ":62,"NG":6},
  {"date":"2017-10-07","FG":42,"G":122,"RH":159,"SQ":0,"NG":8},
  {"date":"2017-10-08","FG":18,"G":121,"RH":1,"SQ":29,"NG":7},
  {"date":"2017-10-09","FG":21,"G":121,"RH":104,"SQ":0,"NG":8},
  {"date":"2017-10-10","FG":40,"G":143,"RH":3,"SQ":9,"NG":8},
  {"date":"2017-10-11","FG":60,"G":148,"RH":2,"SQ":1,"NG":8},
  {"date":"2017-10-12","FG":37,"G":134,"RH":2,"SQ":53,"NG":7},
  {"date":"2017-10-13","FG":38,"G":153,"RH":0,"SQ":24,"NG":7,"type":"Ride","distance":28501.8,"total_elevation_gain":119.3,"time":46964,"elapsed_time":3832,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20171013-110244-Ride.xml"},
  {"date":"2017-10-14","FG":30,"G":148,"RH":0,"SQ":85,"NG":2,"type":"Ride","distance":45877.1,"total_elevation_gain":656.3,"time":45089,"elapsed_time":12198,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20171014-103129-Ride.xml"},
  {"date":"2017-10-15","FG":28,"G":158,"RH":0,"SQ":89,"NG":0},
  {"date":"2017-10-16","FG":29,"G":186,"RH":0,"SQ":76,"NG":4},
  {"date":"2017-10-17","FG":25,"G":129,"RH":0,"SQ":5,"NG":5},
  {"date":"2017-10-18","FG":17,"G":137,"RH":0,"SQ":75,"NG":7,"type":"Ride","distance":28367.7,"total_elevation_gain":120.7,"time":65397,"elapsed_time":3330,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20171018-160957-Ride.xml"},
  {"date":"2017-10-19","FG":28,"G":157,"RH":-1,"SQ":65,"NG":7},
  {"date":"2017-10-20","FG":56,"G":137,"RH":73,"SQ":17,"NG":7},
  {"date":"2017-10-21","FG":50,"G":132,"RH":5,"SQ":50,"NG":5},
  {"date":"2017-10-22","FG":47,"G":108,"RH":132,"SQ":26,"NG":8},
  {"date":"2017-10-23","FG":34,"G":126,"RH":1,"SQ":47,"NG":7},
  {"date":"2017-10-24","FG":46,"G":153,"RH":8,"SQ":0,"NG":8},
  {"date":"2017-10-25","FG":36,"G":142,"RH":-1,"SQ":18,"NG":8},
  {"date":"2017-10-26","FG":25,"G":140,"RH":0,"SQ":23,"NG":8},
  {"date":"2017-10-27","FG":30,"G":118,"RH":4,"SQ":65,"NG":6},
  {"date":"2017-10-28","FG":52,"G":124,"RH":16,"SQ":0,"NG":8,"type":"Ride","distance":17396.4,"total_elevation_gain":47.2,"time":76137,"elapsed_time":2947,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20171028-124151-Ride.xml"},
  {"date":"2017-10-29","FG":50,"G":107,"RH":10,"SQ":47,"NG":6},
  {"date":"2017-10-30","FG":22,"G":83,"RH":-1,"SQ":61,"NG":5},
  {"date":"2017-10-31","FG":36,"G":101,"RH":-1,"SQ":2,"NG":8},
  {"date":"2017-11-01","FG":33,"G":112,"RH":0,"SQ":9,"NG":8},
  {"date":"2017-11-02","FG":24,"G":98,"RH":-1,"SQ":26,"NG":5},
  {"date":"2017-11-03","FG":17,"G":88,"RH":5,"SQ":0,"NG":7},
  {"date":"2017-11-04","FG":34,"G":106,"RH":30,"SQ":34,"NG":7},
  {"date":"2017-11-05","FG":23,"G":78,"RH":48,"SQ":40,"NG":6},
  {"date":"2017-11-06","FG":15,"G":48,"RH":4,"SQ":68,"NG":1},
  {"date":"2017-11-07","FG":13,"G":33,"RH":0,"SQ":76,"NG":3},
  {"date":"2017-11-08","FG":17,"G":59,"RH":0,"SQ":0,"NG":8},
  {"date":"2017-11-09","FG":34,"G":87,"RH":14,"SQ":23,"NG":8},
  {"date":"2017-11-10","FG":43,"G":92,"RH":29,"SQ":32,"NG":6},
  {"date":"2017-11-11","FG":28,"G":66,"RH":37,"SQ":5,"NG":8},
  {"date":"2017-11-12","FG":25,"G":52,"RH":74,"SQ":14,"NG":7},
  {"date":"2017-11-13","FG":28,"G":62,"RH":13,"SQ":62,"NG":5},
  {"date":"2017-11-14","FG":39,"G":77,"RH":4,"SQ":8,"NG":8},
  {"date":"2017-11-15","FG":28,"G":94,"RH":23,"SQ":0,"NG":8},
  {"date":"2017-11-16","FG":28,"G":93,"RH":18,"SQ":0,"NG":7},
  {"date":"2017-11-17","FG":16,"G":56,"RH":0,"SQ":44,"NG":5},
  {"date":"2017-11-18","FG":34,"G":69,"RH":50,"SQ":10,"NG":8},
  {"date":"2017-11-19","FG":32,"G":67,"RH":19,"SQ":45,"NG":5},
  {"date":"2017-11-20","FG":40,"G":78,"RH":97,"SQ":0,"NG":8},
  {"date":"2017-11-21","FG":43,"G":115,"RH":13,"SQ":0,"NG":8},
  {"date":"2017-11-22","FG":63,"G":114,"RH":13,"SQ":37,"NG":5},
  {"date":"2017-11-23","FG":64,"G":111,"RH":8,"SQ":13,"NG":6},
  {"date":"2017-11-24","FG":18,"G":69,"RH":16,"SQ":18,"NG":8},
  {"date":"2017-11-25","FG":26,"G":37,"RH":2,"SQ":21,"NG":5},
  {"date":"2017-11-26","FG":37,"G":53,"RH":57,"SQ":32,"NG":7},
  {"date":"2017-11-27","FG":52,"G":67,"RH":152,"SQ":0,"NG":8},
  {"date":"2017-11-28","FG":31,"G":54,"RH":9,"SQ":14,"NG":5},
  {"date":"2017-11-29","FG":19,"G":29,"RH":1,"SQ":0,"NG":7},
  {"date":"2017-11-30","FG":18,"G":15,"RH":6,"SQ":9,"NG":7},
  {"date":"2017-12-01","FG":13,"G":0,"RH":-1,"SQ":7,"NG":6},
  {"date":"2017-12-02","FG":23,"G":-4,"RH":-1,"SQ":0,"NG":8},
  {"date":"2017-12-03","FG":26,"G":37,"RH":20,"SQ":0,"NG":8,"type":"Ride","distance":44184.0,"total_elevation_gain":0.0,"time":35931,"elapsed_time":4932,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20171203-085851-Ride.xml"},
  {"date":"2017-12-04","FG":26,"G":70,"RH":25,"SQ":9,"NG":8},
  {"date":"2017-12-05","FG":32,"G":76,"RH":0,"SQ":0,"NG":8},
  {"date":"2017-12-06","FG":47,"G":80,"RH":0,"SQ":0,"NG":8},
  {"date":"2017-12-07","FG":62,"G":59,"RH":78,"SQ":0,"NG":7},
  {"date":"2017-12-08","FG":41,"G":26,"RH":154,"SQ":9,"NG":6},
  {"date":"2017-12-09","FG":42,"G":21,"RH":125,"SQ":12,"NG":8},
  {"date":"2017-12-10","FG":49,"G":11,"RH":128,"SQ":0,"NG":8},
  {"date":"2017-12-11","FG":47,"G":-1,"RH":98,"SQ":0,"NG":8},
  {"date":"2017-12-12","FG":32,"G":18,"RH":5,"SQ":35,"NG":6},
  {"date":"2017-12-13","FG":56,"G":40,"RH":138,"SQ":2,"NG":8},
  {"date":"2017-12-14","FG":41,"G":33,"RH":150,"SQ":8,"NG":6},
  {"date":"2017-12-15","FG":25,"G":26,"RH":2,"SQ":0,"NG":7},
  {"date":"2017-12-16","FG":22,"G":27,"RH":14,"SQ":32,"NG":5},
  {"date":"2017-12-17","FG":30,"G":25,"RH":49,"SQ":57,"NG":5},
  {"date":"2017-12-18","FG":31,"G":59,"RH":8,"SQ":0,"NG":8},
  {"date":"2017-12-19","FG":22,"G":52,"RH":-1,"SQ":3,"NG":8},
  {"date":"2017-12-20","FG":16,"G":75,"RH":3,"SQ":2,"NG":8},
  {"date":"2017-12-21","FG":19,"G":84,"RH":3,"SQ":0,"NG":8},
  {"date":"2017-12-22","FG":13,"G":86,"RH":25,"SQ":0,"NG":8},
  {"date":"2017-12-23","FG":48,"G":87,"RH":-1,"SQ":0,"NG":8},
  {"date":"2017-12-24","FG":56,"G":82,"RH":7,"SQ":0,"NG":8},
  {"date":"2017-12-25","FG":62,"G":74,"RH":4,"SQ":0,"NG":7},
  {"date":"2017-12-26","FG":62,"G":58,"RH":12,"SQ":20,"NG":7},
  {"date":"2017-12-27","FG":44,"G":51,"RH":73,"SQ":2,"NG":8},
  {"date":"2017-12-28","FG":36,"G":39,"RH":7,"SQ":44,"NG":7,"type":"Ride","distance":81421.7,"total_elevation_gain":1108.0,"time":41280,"elapsed_time":20193,"url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20171228-102800-Ride.xml"},
  {"date":"2017-12-29","FG":48,"G":28,"RH":67,"SQ":3,"NG":6},
  {"date":"2017-12-30","FG":57,"G":88,"RH":37,"SQ":0,"NG":8},
  {"date":"2017-12-31","FG":62,"G":106,"RH":393,"SQ":2,"NG":8}
  ];


  var
    width = window.innerWidth,
    height = window.innerHeight,
    margin = {
      top: 40,
      right: 20,
      bottom: 20,
      left: 20,
    };

//Colorlegend for colouring arcs
var blue ="rgb(32,126,132)";
var green ="rgb(94,144,81)";
var yellow ="rgb(248,181,0)";
var orange = "rgb(230,109,53)";
var red = "rgb(180,40,30)";

//Calculationvariables
var factorTime = 0.00007292; //Timefactor for arc
var dailySeconds = 86.400; //seconds a day

//Metric calculations
var elapsedTime = d3.sum(jsonRondjes, function(d) {return d.elapsed_time/3600});
var distance = d3.sum(jsonRondjes, function(d) {return d.distance/1000});
var elevationGain = d3.sum(jsonRondjes, function(d) {return d.total_elevation_gain});
var sunHours = d3.sum(jsonRondjes, function(d){ if (d.distance >= 0) {return d.SQ}});
var temperature = d3.mean(jsonRondjes, function(d) {if (d.distance >= 0) {return d.G/10}}); //medium calculation
var rainFall = d3.sum(jsonRondjes, function(d){ if (d.distance >= 0) {return d.RH/10}});
var windSpeed = d3.mean(jsonRondjes, function(d) {if (d.distance >= 0) {return d.FG/10}}); //medium calculation


//Zoom II
var zoom = d3.behavior.zoom().scaleExtent([1, 8]).on("zoom", zoomed);

var svg = d3.select(".chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .call(zoom);

  var rect = svg.append("rect") //rectangle behind SVG to fix zoom also on empty places
    .attr("width", width)
    .attr("height", height)
    .style("fill", "none")
    .style("pointer-events", "all")

  var render = function() {
    vis = svg; // select the svg

    // set constants
    var PI = Math.PI;
    var arcMin = 1; // inner radius of the first arc
    var arcWidth = 1.1; // width
    var arcPad = 0.01; // padding between arcs
    var arcs = vis.selectAll("path.arc-path")
      .data(jsonRondjes);

    // arc accessor
    //  d and i are automatically passed to accessor functions,
    //  with d being the data and i the index of the data
    var drawArc = d3.svg.arc()
      .innerRadius(function(d, i) {
        return arcMin + i * (arcWidth) + arcPad;
      })
      .outerRadius(function(d, i) {
        return arcMin + (i + 1) * (arcWidth);
      })
      .startAngle(
      function(d) {
      return d.time*factorTime
      })
      .endAngle(
        function(d) {
          return dailySeconds*factorTime-(dailySeconds*factorTime-(d.time*factorTime))+(d.elapsed_time*factorTime)
        });


    // draw arcs for new data
    arcs.enter().append("svg:path")
      .attr("class", "arc-path") // assigns a class for easier selecting

      // .attr("transform", "translate(940,200)") // sets position--easier than setting x's and y's
      // .attr('viewBox','0 0 '+Math.min(width,height)+' '+Math.min(width,height))
      .attr('preserveAspectRatio','xMinYMin')
      .attr("transform", "translate(" + Math.abs(width,height) * 0.75 + ", 200)")

      .attr("fill", function (d) {    //calculation if it's a sunny day = (temperate+sunhours)/rainfall
        if (((d.G+10)+(d.SQ+10))/(d.RH+10) >= -1 && ((d.G+10)+(d.SQ+10))/(d.RH+10) <=2.3) {return blue}
        if (((d.G+10)+(d.SQ+10))/(d.RH+10) >= 2.4 && ((d.G+10)+(d.SQ+10))/(d.RH+10) <=6.3) {return green}
        if (((d.G+10)+(d.SQ+10))/(d.RH+10) >= 6.4 && ((d.G+10)+(d.SQ+10))/(d.RH+10) <=14) {return yellow}
        if (((d.G+10)+(d.SQ+10))/(d.RH+10) >= 14.1 && ((d.G+10)+(d.SQ+10))/(d.RH+10) <=22.78) {return orange}
        else {return red}
      })
      .attr("in", "coloredBlur")

      .attr("opacity", function(d) {
        return (d.FG/1.15+30)/100;
      })
      .attr("d", drawArc); // draw the arc
  };

  // drawing the click area
  var initialize = function(d, i) {
    render(i);
  }
  initialize();


//Add variables directly to span
d3.select(".hours")
  .text(d3.format(",.1f")(elapsedTime))
  d3.select(".hours")
    .text(d3.format(",.1f")(elapsedTime))
  d3.select(".distance")
      .text(d3.format(",.1f")(distance))
  d3.select(".elevation")
      .text(d3.format(",.1f")(elevationGain))
  d3.select(".sunhours")
      .text(d3.format(",f")(sunHours))
  d3.select(".temperature")
      .text(d3.format(",.1f")(temperature))
  d3.select(".rainfall")
      .text(d3.format(",.1f")(rainFall))
  d3.select(".windspeed")
      .text(d3.format(",.1f")(windSpeed));

//Add variables with value variables and initMap
  d3.selectAll(".arc-path")
    .each(function(d, i) {
      // console.log(i);
    })

    .on("mouseover", function(d, i) {
      d3.select(".day")
        .text(d.date)
      d3.select(".hours")
        .text(d3.format(",.1f")(d.elapsed_time/3600))
      d3.select(".distance")
          .text(d3.format(",.1f")(d.distance/1000))
      d3.select(".elevation")
          .text(d.total_elevation_gain)
      d3.select(".sunhours")
          .text(d.SQ/10)
      d3.select(".temperature")
              .text(d.G/10)
      d3.select(".rainfall")
              .text(d.RH/10)
      d3.select(".windspeed")
          .text(d.FG/10);
  //Functie loads XML file into maps
      initMap(d.url);
  // Color on mouseover
      d3.select(this)
        // .delay("1") //adding delay
        .attr("fill", "black");
    })

    .on("mouseout", function(d, i) {
      d3.select(".day")
        .text("in 2017")
      d3.select(".hours")
        .text(d3.format(",.1f")(elapsedTime))
      d3.select(".distance")
          .text(d3.format(",.1f")(distance))
      d3.select(".elevation")
          .text(d3.format(",.1f")(elevationGain))
      d3.select(".sunhours")
          .text(d3.format(",f")(sunHours))
      d3.select(".temperature")
          .text(d3.format(",.1f")(temperature))
      d3.select(".rainfall")
          .text(d3.format(",.1f")(rainFall))
      d3.select(".windspeed")
          .text(d3.format(",.1f")(windSpeed));
      initMap("https://rawgit.com/luukvandermeer/Strava_vis/gpx_data/welcome.xml");
      d3.select(this) //return the color arcs to normal
        .attr("fill", function (d, i) {
          if (((d.G+10)+(d.SQ+10))/(d.RH+10) >= -1 && ((d.G+10)+(d.SQ+10))/(d.RH+10) <=2.3) {return blue}
          if (((d.G+10)+(d.SQ+10))/(d.RH+10) >= 2.4 && ((d.G+10)+(d.SQ+10))/(d.RH+10) <=6.3) {return green}
          if (((d.G+10)+(d.SQ+10))/(d.RH+10) >= 6.4 && ((d.G+10)+(d.SQ+10))/(d.RH+10) <=14) {return yellow}
          if (((d.G+10)+(d.SQ+10))/(d.RH+10) >= 14.1 && ((d.G+10)+(d.SQ+10))/(d.RH+10) <=22.78) {return orange}
          else {return red}
        })
    });

function zoomed() {
            vis.attr("transform",
                "translate(" + zoom.translate() + ")" +
                "scale(" + zoom.scale() + ")"
            );
        }

});
