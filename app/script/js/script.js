
$(document).ready(function () {

  $('#alx-pagepiling').pagepiling({
    anchors: ['home', 'industries', 'solutions', 'services', 'partners', 'client', 'about-us', 'careers', 'blog', 'contact', 'coming-soon'],
  });

});
$(document).ready(function () {
  $('.successMsg').hide();
  $('.errorMsg').hide();
  $(".sumbit").click(function () {
    var email = $('.email').val();
    var name = $('.name').val();
    var phoneNo = $('.phoneNo').val();
    var about = $('.about').val();
    var pattern = new RegExp("^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
    var result = pattern.test(email, name, phoneNo, about);
    if (result) {


      var mailID = {emailID: email, Name: name, Number: phoneNo, About: about};
      $.ajax({
        url: 'https://hookb.in/6JyKx9JpkxT2Z20mYwRK',
        type: 'POST',
        data: JSON.stringify(mailID),
        contentType: "application/json",
        dataType: 'json',
        async: false,
        success: function (msg) {
          console.log('value', mailID);
          $('.successMsg').show();
          $('.successMsg').text('Thank you, your message has been  successfully sent! ');
          setTimeout(function () {
            $('.successMsg').fadeOut();
            $('.email').val('');
            $('.name').val('');
            $('.phoneNo').val('');
            $('.about').val('');
          }, 3000);
        }
      });
//console.log( JSON.stringify(mailID))

    }
  });
});
$(document).ready(function () {
  $('.successMsg1').hide();
  $('.errorMsg').hide();
  $(".sumbit1").click(function () {
    var email = $('.email1').val();
    var name = $('.name1').val();
    var phoneNo = $('.phoneNo1').val();
    var about = $('.about1').val();
    var pattern = new RegExp("^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
    var result1 = pattern.test(email, name, phoneNo, about);
    if (result1) {
      var mailID1 = {emailID: email, Name: name, Number: phoneNo, About: about};

      $.ajax({
        url: 'https://hookb.in/6JyKx9JpkxT2Z20mYwRK',
        type: 'POST',
        data: JSON.stringify(mailID1),
        contentType: "application/json",
        dataType: 'json',
        async: false,
        success: function (msg) {
          console.log('value', mailID1);
          $('.successMsg1').show();
          $('.successMsg1').text('Thank you, your message has been  successfully sent! ');
          setTimeout(function () {
            $('.successMsg1').fadeOut();
            $('.email1').val('');
            $('.name1').val('');
            $('.phoneNo1').val('');
            $('.about1').val('');
          }, 3000);
        }
      });
    //console.log( JSON.stringify(mailID))

    }
  });
});

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 280,
      "density": {
        "enable": true,
        "value_area": 600
      }
    },
    "color": {
      "value": "#3e61ff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },

    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0.7,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#3e61ff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
particlesJS("particles-js1", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 600
      }
    },
    "color": {
      "value": "#3e61ff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0.7,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#3e61ff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
particlesJS("particles-js2", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 600
      }
    },
    "color": {
      "value": "#3e61ff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0.7,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#3e61ff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
particlesJS("alx-particles1", {
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },

    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0.7,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#fff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
$(document).ready(function () {
  $('.close').click(function () {
    $('.embed-responsive').hide();
  });
  $(".window .alx-sidebar-menu  a").click(function () {
    $(".window .alx-aside-sidebar").removeClass("alx-aside-sidebar__open");
    $(".window .alx-burger").removeClass("on");
  });
});
function goBack() {
  window.history.back();
}
function isNumber(event) {
  if ( event.keyCode == 46 || event.keyCode == 8 || (event.keyCode >=48 && event.keyCode <=57)) {
    // let it happen, don't do anything
  }
  else {
    // Ensure that it is a number and stop the keypress
    event.preventDefault();
  }
}


$(document).ready(function () {
  $("#side").hide();
  $("#toggle" ).removeClass( "on" );

  $("#toggle").click(function () {
    $("#side").toggle();

  });
  $("#alx-sidebar-menuid  a").click(function () {
    $("#side").hide();
    $("#toggle").show();
    //alert("in hide")
    //$( ".mobile #side" ).removeClass( "alx-aside-sidebar__open" );
    // $( ".mobile #toggle" ).removeClass( "on" );
  });
});
