d3.json("test.json", function(data) {
  //console.log(function(d) {
  //  return d.rondje * 20;
  //  });

  var jsonRondjes = [{
      "rondje": 1,
      "test": "extra",
      "day": 0.1,
      "url": "https://rawgit.com/luukvandermeer/Strava_vis/master/Ride.xml",
    },
    {
      "rondje": 2,
      "test": "extra",
      "day": 0.2,
      "url": "https://rawgit.com/luukvandermeer/Strava_vis/master/test.xml",
    },
    {
      "rondje": 3,
      "test": "extra",
      "day": 0.3,
      "url": "https://rawgit.com/luukvandermeer/Strava_vis/master/test.xml",
    },
    {
      "rondje": 0,
      "test": "extra",
      "day": 0,
      "url": "https://rawgit.com/luukvandermeer/Strava_vis/master/test.xml",
    },
    {
      "rondje": 0,
      "test": "extra",
      "day": 0,
      "url": "https://rawgit.com/luukvandermeer/Strava_vis/master/Ride.xml",
    },
    {
      "rondje": 0,
      "test": "extra",
      "day": 0,
      "url": "https://rawgit.com/luukvandermeer/Strava_vis/master/Ride.xml",
    },
    {
      "rondje": 5,
      "test": "extra",
      "day": 0.7,
      "url": "https://rawgit.com/luukvandermeer/Strava_vis/master/test.xml",
    },
    {
      "rondje": 5,
      "test": "extra",
      "day": 0.5,
      "url": "https://rawgit.com/luukvandermeer/Strava_vis/master/Ride.xml",
    },
    {
      "rondje": 4,
      "test": "extra",
      "day": 0.6,
      "url": "https://rawgit.com/luukvandermeer/Strava_vis/master/test.xml",
    },
    {
      "rondje": 2,
      "test": "extra",
      "day": 0.7,
      "url": "https://rawgit.com/luukvandermeer/Strava_vis/master/Ride.xml",

    },
    {
      "rondje": 1,
      "test": "extra",
      "day": 0.5,
      "url": "https://rawgit.com/luukvandermeer/Strava_vis/master/Ride.xml",
    },
    {
      "rondje": 0,
      "test": "extra",
      "day": 0.6,
      "url": "https://rawgit.com/luukvandermeer/Strava_vis/master/test.xml",
    },
    {
      "rondje": 5,
      "test": "extra",
      "day": 0.7,
      "url": "https://rawgit.com/luukvandermeer/Strava_vis/master/test.xml",
    },
    {
      "rondje": 1,
      "test": "extra",
      "day": 0.5,
      "url": "https://rawgit.com/luukvandermeer/Strava_vis/master/test.xml",
    },
    {
      "rondje": 4,
      "test": "extra",
      "day": 0.6,
      "url": "https://rawgit.com/luukvandermeer/Strava_vis/master/Ride.xml",
    },
    {
      "rondje": 2,
      "test": "extra",
      "day": 0.7,
      "url": "https://rawgit.com/luukvandermeer/Strava_vis/master/Ride.xml",
    },
    {
      "rondje": 0,
      "test": "extra",
      "day": 0.8,
      "url": "https://rawgit.com/luukvandermeer/Strava_vis/master/Ride.xml",
    },
    {
      "rondje": 6.3,
      "test": "extra",
      "day": 0.8,
      "url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170108-075656-Ride.xml",
    }, {
      "date": "2017-01-08",
      "FG": 14,
      "G": 43,
      "RH": 0,
      "NG": 8,
      "type": "Ride",
      "distance": 17837.2,
      "total_elevation_gain": 24.7,
      "time": 32216,
      "elapsed_time": 2587,
      "url": "https://rawgit.com/luukvandermeer/Strava_vis/master/gpx_data/20170108-075656-Ride.xml"
    }
  ];

  //console.log(d3.select("body").append("svg").attr("rondje", 200).data(jsonRondjes).enter()); //code laat array zien in console, jeej

  var
    width = 500,
    height = 300,
    margin = {
      top: 40,
      right: 20,
      bottom: 20,
      left: 500
    };

  // append svg to the DIV
  d3.select(".chart").append("svg:svg")
    .attr("width", width)
    .attr("height", height)


  var render = function() {
    vis = d3.select("svg"); // select the svg

    // set constants
    var PI = Math.PI;
    var arcMin = 5; // inner radius of the first arc
    var arcWidth = 5; // width
    var arcPad = 1; // padding between arcs
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
      .startAngle(0)
      // function(d) {
      // return d.day
      // })
      .endAngle(
        function(d) {
          return d.rondje
        });



    // draw arcs for new data
    arcs.enter().append("svg:path")
      .attr("class", "arc-path") // assigns a class for easier selecting
      .attr("transform", "translate(400,200)") // sets position--easier than setting x's and y's
      .attr("fill", "rgb(0, 204, 204)")
      .attr("in", "coloredBlur")
      //functie toegevoegd om de opacity aan te passen afhankelijk van een waarde
      .attr("opacity", function(d) {
        return d.day;
      })
      //      .on('mouseover', tip.show)
      //    .on('mouseout', tip.hide)

      /* code om o.b.v. waarde en een functie de kleur aan te passen
                  .attr("fill", function(d){
                        // fill is an rgb value with the green value determined by the data
                        // smaller numbers result in a higher green value (1 - d/60)
                        // you should also look into using d3 scales to create gradients
                      var grn = Math.floor((1 - d/60)*15);
                      return "rgb(0, "+ grn +", 0)";
                    })
      */

      .attr("d", drawArc); // draw the arc
  };

  // drawing the click area
  var initialize = function(d, i) {
    render(i);
  }

  initialize();

  //Hoverstate toevoegen aan visualisation

  d3.selectAll(".arc-path")
    .each(function(d, i) {
      console.log(i);
    })
    .on("mouseover", function(d, i) {
      //  console.log(d);
      //  console.log(d.rondje);
      //  console.log(d.url); //data url is available
      d3.select(".click_arc") //tekst toevoegen in de DIV
        .text(d.day);
      d3.select(".click_day")
        .text(d.rondje);

  //Functie loads XML file into maps
      initMap(d.url);
      d3.select(".click_route")
        .text(d.url);

  // Color on mouseover
      d3.select(this)
        .attr("fill", "orange");
      /*.attr("opacity", 1)*/
    })
    .on("mouseout", function(d, i) {
      d3.select(".click_arc") //tekst toevoegen in de DIV
        .text("x km");
      d3.select(".click_day")
        .text("sunhours");
      d3.select(this)
        .attr("fill", "rgb(0, 204, 204)");
    });

  var input = function() {
    d3.selectAll(".arc-path")
      .each(function(d, i) {
        console.log(i)
          .on("mouseover", function(d, i) {
            return d.ronde
          })
      })
  }
});
