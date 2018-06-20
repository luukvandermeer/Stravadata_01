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
      "day": 0.4,
      "url": "https://rawgit.com/luukvandermeer/Strava_vis/master/test.xml",
    },
    {
      "rondje": 0,
      "test": "extra",
      "day": 0.5,
      "url": "https://rawgit.com/luukvandermeer/Strava_vis/master/Ride.xml",
    },
    {
      "rondje": 0,
      "test": "extra",
      "day": 0.6,
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
      "rondje": 0.5,
      "test": "extra",
      "day": 0.8,
      "url": "https://rawgit.com/luukvandermeer/Strava_vis/master/Ride.xml",
    },
    {
      "rondje": 5,
      "test": "extra",
      "day": 0.9,
      "url": "https://rawgit.com/luukvandermeer/Strava_vis/master/Ride.xml",
    }
  ];

  console.log(d3.select("body").append("svg").attr("rondje", 200).data(jsonRondjes).enter()); //code laat array zien in console, jeej

  var
    width = 500,
    height = 300,
    //    width = window.innerWidth,
    //   height = window.innerHeight,
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
    // var le_data = d3.selectAll(data).data(function (d, i) {
    //console.log(d);
    //   return d.value
    //});
    //  var start_time = [0];    //startdataset

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
      .endAngle(
        function(d) {
          return d.rondje
        });

    //Code om endAngel te bewerken return d * 6 * (PI /180)
    //        * 6 * (PI / 180)
    // });

    /*
        // bind the data
        var arcs = vis.selectAll("path.arc-path").data(function (d, i) {
            console.log(d);
            console.log(i);
            return d.value
        });
*/




    //data in een array
    //data([10,20,34,23,23,23,45,7,8,56,34,23,23,23,45,7,8,56]);
    //function (d) {return d.value*10});

    /* Comment --> overbodige code welke een functie aanroept om de kleuren aan te passen
              // *** update existing arcs -- redraw them ***
            arcs.attr("d", drawArc)
                .attr("fill", function(d){
                    // we need to redefine the fills as well since we have new data,
                    //  otherwise the colors would no longer be relative to the data
                    //  values (and arc length). if your fills weren't relative to
                    //  the data, this would not be necessary
                  var grn = Math.floor((1 - d/60)*255);
                  return "rgb(0, "+ grn +", 0)";
                });
    */

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

  /*
      //Code aangepast waardoor deze functie niet meer nodig is
      var generateTimes = function (quantity) {
          var i, times = [];

          for (i = 0; i < quantity; i++) {
              times.push(Math.round(Math.random() * 60));
          }
          return times;
      };
  */

  // drawing the click area
  var initialize = function(d, i) {
    render(i);
  }



  /* functie aangepast naar bovestaande initialize
  var initialize = function () {
          var arcMin = 365 / 2; // this should match the arcMin in render()
          var times = generateTimes(300);
          render(times);
  */
  /* Comment --> Maakt een innercircle welke niet nodig is

            // making the click circle
          if(!d3.selectAll("circle.click-circle")[0].length) {    // if there is no click area..
            d3.select("svg").append("circle")
                .attr("class", 'click-circle')
                .attr("transform", "translate(400,200)")
                .attr("r", arcMin*0.85)
                .attr("fill", "rgba(201, 201, 201, 0.5)")
                .on("click", function(d) {
                  times = generateTimes(6);
                  render(times);
                });
          }
  */


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

      //  "https://rawgit.com/luukvandermeer/Strava_vis/master/test.xml");
      //  loadGPXFileIntoGoogleMap(map, d3.select(".click_route")
      //        .text(d.url));
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

      /*  .on("click", function (d,i){
          d3.select(this)
          .text('test' + d.rondje);
        });*/
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
  //console.log(input);
});
