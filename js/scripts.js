$(function() {

  "use strict";

  /*===============================================
    Preloader
  ===============================================*/
  $(window).load(function () {
    $("body").addClass("loaded");
  });

  /*===============================================
    Scroll Spy
  ===============================================*/
  $('body').scrollspy({ 
    target: '.menu', 
    offset: 50 
  });

  /*===============================================
    Smooth Scrolling
  ===============================================*/
  var htmlBody = $("html,body");

  $(document).ready(function(e) {
    $(".menu li a, .arrow-down a").on("click", function(e) {
        htmlBody.animate({scrollTop: $(this.hash).offset().top}, 800, "easeInOutQuart");  
      e.preventDefault();
    });
  });

  /*===============================================
    Toggle Menu
  ===============================================*/
  var menu = $(".menu");
  var toggleBtn = $(".toggle-btn");

  toggleBtn.on("click", function(e) {
    if (menu.hasClass("show-menu")) {
      menu.removeClass("show-menu");
    }
    else {
      menu.addClass("show-menu");
    }
    e.stopPropagation();
  });

  // Navicon transform into X //
  toggleBtn.on("click", function() {
    if (toggleBtn.hasClass("toggle-close")) {
      toggleBtn.removeClass("toggle-close");
    }
    else {
      toggleBtn.addClass("toggle-close");
    }
  });

  /*===============================================
    Parallax
  ===============================================*/
  $(".parallax-section").parallax({ 
    speed : 0.3 
  });

  /*===============================================
    Owl Carousel
  ===============================================*/

  // Blog Slider
  $("#blogSlider").owlCarousel({
    items: 2,
    itemsDesktop: [1199,2], // Show 2 items on Desktop
    itemsDesktopSmall: [979,2], // 2 items on Small Deskktop
    itemsTablet: [768,1], // 1 item on Tablet
    itemsMobile: [479,1], // 1 item on Mobile
    slideSpeed: 500, // 0.5 seconds
    pagination: false,
    navigation: false,
    rewindSpeed: 700
  });

  // Custom Navigation
  var blogNavigation = $("#blogSlider");
 
  // Events
  $("#next").on("click", function(){
    blogNavigation.trigger('owl.next');
  })
  $("#prev").on("click", function(){
    blogNavigation.trigger('owl.prev');
  })
  // end Custom Navigation

  // Blog Page
  $("#postSlider").owlCarousel({
    slideSpeed: 500, // 0.5 seconds
    pagination: false,
    navigation: true,
    navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    rewindSpeed: 700,
    singleItem: true
  });

  /*===============================================
    Counter
  ===============================================*/
  $("#skills [data-to]").each(function() {
    var $this = $(this);
    $this.appear(function() {
      $this.countTo({
        speed: 1500
      });
    }, {accX: 0, accY: -10});
  });

  /*===============================================
    Isotope
  ===============================================*/
  var $masonryGrid = $("#masonryGrid").isotope({itemSelector: '.portfolio-box'});

  // Layout Isotope after each image loads
  $masonryGrid.imagesLoaded().progress( function() {
    $masonryGrid.isotope('layout');
  });

  // bind filter button
  var btnGroup = $("#button-group");

  btnGroup.on('click', 'li', function() {
    var filterValue = $(this).attr('data-filter');

    $masonryGrid.isotope({filter: filterValue});
  });

  // Change active class on buttons
  btnGroup.each( function( i, buttonGroup ) {
    var $buttonGroup = $(buttonGroup);

    $buttonGroup.on( 'click', 'li', function() {
      $buttonGroup.find('.active').removeClass('active');
      $(this).addClass('active');
    });
  });

  /*===============================================
    Magnific Popup
  ===============================================*/
  $('.lightbox').magnificPopup({ 
    type:'inline',
    fixedContentPos: false,
    removalDelay: 100,
    closeBtnInside: true,
    preloader: false,
    mainClass: 'mfp-fade'
  });

  /*===============================================
    Contact Form
  ===============================================*/
  $("#contactform").on('FAKE',function(e) {
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var message = $("#message").val();
    if (name == '') {
      $("#name").css('border-color','rgba(255, 0, 0, 0.5)');
    }
    if (email == '') {
      $("#email").css('border-color','rgba(255, 0, 0, 0.5)');
    }
    if (phone == '') {
      $("#phone").css('border-color','rgba(255, 0, 0, 0.5)');
    }
    if (message == '') {
      $("#message").css('border-color','rgba(255, 0, 0, 0.5)');
    }
    else {
      $.ajax({
        url:'contact_form.php',
        data:$(this).serialize(),
        type:'POST',
        success:function(data){
          $("#success").show().fadeIn(1000); //=== Show Success Message==
          $('#contactform').each(function(){
            this.reset();
          });
        },
        error:function(data){
          $("#error").show().fadeIn(1000); //===Show Error Message====
        }
      });
    }
    e.preventDefault();
  });

  /*===============================================
    Google Maps
  ===============================================*/
  var markerIcon = "images/marker.png";
  // Map Initial Location
  var initLatitude = 45.52345; // <- Latitude here
  var initLongitude = -122.67621; // <- Longitude here
  
  var map = new GMaps({
    el: '#map-canvas',
    lat: initLatitude,
    lng: initLongitude,
    zoom: 10,
    scrollwheel: false
  });
  map.addMarker({
    lat : initLatitude,
    lng : initLongitude,
    icon: markerIcon
  });
  /*===============================================
    end Google Maps
  ===============================================*/

});


var jobs = [
  {
    company: "UBQ Labs",
    title: "VP of Product",
    time: "Current",
    description: "Designing `Human In The Loop` solutions for Machine Learning & AI."
  },
  {
    company: "Union Station",
    title: "Interum CTO",
    time: "Summer 2016",
    description: "Installed an Engineering & Product strategy to help increase conversion rates, and secure funding."
  },
  {
    company: "Augmate",
    title: "VP of Engineering",
    time: "2015 - 2016",
    description: "Built the (WE) Manage platform to facilitate the adoption of wearable technology in enterprise. Installed and lead the development, hiring, and partnership strategis."
  },
  {
    company: "Peachpit Press",
    title: "Author",
    time: "Spring 2015",
    description: "Authored a book on the Dart programming language titled 'Write Web Apps with Dart: Develop and Design 1st Edition'. Printed & Published by PeachPit Press Fall 2015."
  },
  {
    company: "Imprint",
    title: "Lead Engineer",
    time: "2014 - 2015",
    description: "Worked with non-technical founder to build an iterative product roadmap and delivery schedule. Transitioned company to Kanban, and implemented data driven decision making worflow."
  },
  {
    company: "Proquest",
    title: "Product Consultant",
    time: "2013 - 2014",
    description: "Modernized design & front end development processes for internal CMS systems."
  },
  {
    company: "Kixeye",
    title: "Software Consultant",
    time: "2012 - 2013",
    description: "Architected and implemented data-driven UI components to manage monthly in-game multiplayer championships. Supported 100K Daily Active Users"
  },
  {
    company: "Idle Games",
    title: "Software Engineer",
    time: "2010 - 2012",
    description: "Early contributor on the award winning game 'Idle Worship' implementing highly performant pattern based flash client game components in ActionScript 3 and JavaScript."
  },
  {
    company: "PlayFirst",
    title: "Software Engineer",
    time: "2009 - 2010",
    description: "Development of scalable Flash game clients supporting up to 2.6 million Monthly Active Users."
  },
  {
    company: "Gazillion",
    title: "Interaction Designer",
    time: "2008 - 2009",
    description: "Platform design and brand development of SmartyCard.com children's educational gaming site: pre-launch, launch, and post-launch."
  },
  {
    company: "SFGov.org",
    title: "New Media Consultant",
    time: "2008",
    description: "Designed and developer a Multimedia Portal for the Gavin Newsom of the Mayors Office and Board of Supervisor."
  },
  {
    company: "The Paragon Concept",
    title: "Owner",
    time: "2002 - 2007",
    description: "Owned and operated a small multimedia production company specializing in Graphic Design, Web Development, Unix / Linux System Administration, and Web Hosting."
  },
  {
    company: "Innovative Science",
    title: "Developer",
    time: "2001 - 2006",
    description: "Researched, recommended, and implemented new web technologies. Delivered various Flash XML and deployed E-commerce solutions, and MySQL database driven sites."
  }
];

$(document).ready(function() {
  var CLASSA = ".education-content";
  var CLASSB = ".employment-content";

  var target = CLASSA;

  jobs.forEach(function(job, index) {
    var myContent = document.querySelector('#resumeBoxTemplate').content;
    myContent.querySelector('h3').textContent = job.company;
    myContent.querySelector('span').textContent = job.time;
    myContent.querySelector('p').textContent = job.title + " - " + job.description;

    document.querySelector(target).appendChild(
      document.importNode(myContent, true)
    )

    target = (target == CLASSA) ? CLASSB : CLASSA;
  })
});

