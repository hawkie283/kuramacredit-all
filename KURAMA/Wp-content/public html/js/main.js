
var jsondata = null;
var originaldata = null;


// SLIDER RANGE

$(function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 18000,
    values: [ 300, 18000 ],
    slide: function( event, ui ) {
      $( "#amount" ).val(  + ui.values[ 0 ] );
      $( "#amount-1" ).val( + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( + $( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount-1" ).val(  + $( "#slider-range" ).slider( "values", 1 ) );
}());



$('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
  e.preventDefault();
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

// owl carousel

$(function () {
  $('.slider-block').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots: false,
    items: 4,
    navText: ['<img src="img/svg/left.svg">','<img src="img/svg/right.svg">'],
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:3
        },
        992:{
            items:3
        },
        1200: {
           items: 4
        }
    }
});

$('.news__block-second').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots: false,
  items: 4,
  // navText: ['<img src="img/svg/left.svg">','<img src="img/svg/right.svg">'],
  responsive:{
      0:{
          items:1
      },
      575:{
          items:1
      },
      768:{
          items:2
      },
      992:{
          items:3
      },
      1200:{
          items:4
      }
  }
});

$('.experts__info-items').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  dots: false,
  items: 4,
  // navText: ['<img src="img/svg/left.svg">','<img src="img/svg/right.svg">'],
  responsive:{
      0:{
          items:1
      },
      575:{
          items:1
      },
      768:{
          items:3
      },
      992:{
          items:3
      },
      1200: {
          items:4
      }
  }
});
});



// menu nav toggle

$(".nav-toggle").on("click", function(event) {
  event.preventDefault();

  $(this).toggleClass("active");
  $("#nav").toggleClass("active");
});




$("#sidebar-toggle").on("click", function(event) {
  event.preventDefault();

  $(this).toggleClass("active");
  $("#sidebar-filter").toggleClass("active");
});



// sort amount

$(".sort_amount").on("click", function(event) {
    event.preventDefault();
    console.log("sort")
    if($(this).hasClass("sort_desc")){
        jsondata = _.sortBy(jsondata, "amount_min")
    } else {
        jsondata = _.sortBy(jsondata, "amount_max").reverse();
    }
    render();
     $(this).toggleClass("sort_desc");
    // $("#nav").toggleClass("active");
  });

  
// sort amount

$(".sort_rate").on("click", function(event) {
    event.preventDefault();

    if($(this).hasClass("sort_desc")){
        jsondata = _.sortBy(jsondata, "rate")
    } else {
        jsondata = _.sortBy(jsondata, "rate").reverse();
    }
    render();
     $(this).toggleClass("sort_desc");
    // $("#nav").toggleClass("active");
  });

  $(".sort_period_min").on("click", function(event) {
    event.preventDefault();

    if($(this).hasClass("sort_desc")){
        jsondata = _.sortBy(jsondata, "period_min")
    } else {
        jsondata = _.sortBy(jsondata, "period_max").reverse();
    }
    render();
     $(this).toggleClass("sort_desc");
    // $("#nav").toggleClass("active");
  });
//   SORTAREA DE CLICK PENTRU SCHIMBAREA SAGETILOR DIN MENU

  $(".sort_age_min").on("click", function(event) {
    event.preventDefault();
    
    if($(this).hasClass("sort_desc")){
        jsondata = _.sortBy(jsondata, "age_min")
    } else {
        jsondata = _.sortBy(jsondata, "age_min").reverse();
    }
    render();
     $(this).toggleClass("sort_desc");
    // $("#nav").toggleClass("active");
  });

  $(".sort_decision").on("click", function(event) {
    event.preventDefault();
    
    if($(this).hasClass("sort_desc")){
        jsondata = _.sortBy(jsondata, "decision")
    } else {
        jsondata = _.sortBy(jsondata, "decision").reverse();
    }
    render();
     $(this).toggleClass("sort_desc");
    // $("#nav").toggleClass("active");
  });

  $(".sort_approval").on("click", function(event) {
    event.preventDefault();
   
    if($(this).hasClass("sort_desc")){
        jsondata = _.sortBy(jsondata, "approval")
    } else {
        jsondata = _.sortBy(jsondata, "approval").reverse();
    }
    render();
     $(this).toggleClass("sort_desc");
    // $("#nav").toggleClass("active");
  });


  
// FILTRAREA DIN PARTEA DREAPTA
  $(".filter_student").on("click", function(event) {
    event.preventDefault();
   
    if($(this).hasClass("filter")){
       jsondata =  _.where(originaldata, {student:true});
    } else {
        jsondata = originaldata
    }
    render();
     $(this).toggleClass("filter");
     $(this).parent("li") .toggleClass("active");
    // $("#nav").toggleClass("active");
  });

  $(".filter_seniors").on("click", function(event) {
    event.preventDefault();
   
    if($(this).hasClass("filter")){
       jsondata =  _.where(originaldata, {student:true});
    } else {
        jsondata = originaldata
    }
    render();
     $(this).toggleClass("filter");
     $(this).parent("li") .toggleClass("active");
    // $("#nav").toggleClass("active");
  });

  $(".filter_unemployed").on("click", function(event) {
    event.preventDefault();
   
    if($(this).hasClass("filter")){
       jsondata =  _.where(originaldata, {student:true});
    } else {
        jsondata = originaldata
    }
    render();
     $(this).toggleClass("filter");
     $(this).parent("li") .toggleClass("active");
    // $("#nav").toggleClass("active");
  });

  $(".filter_age").on("click", function(event) {
    event.preventDefault();
   
    if($(this).hasClass("filter")){
       jsondata =  _.where(originaldata, {age:true});
    } else {
        jsondata = originaldata
    }
    render();
     $(this).toggleClass("filter");
     $(this).parent("li") .toggleClass("active");
    // $("#nav").toggleClass("active");
  });


  $(".filter_card").on("click", function(event) {
    event.preventDefault();
   
    if($(this).hasClass("filter")){
       jsondata =  _.where(originaldata, {student:true});
    } else {
        jsondata = originaldata
    }
    render();
     $(this).toggleClass("filter");
     $(this).parent("li") .toggleClass("active");
    // $("#nav").toggleClass("active");
  });

  $(".filter_cash").on("click", function(event) {
    event.preventDefault();
   
    if($(this).hasClass("filter")){
       jsondata =  _.where(originaldata, {student:true});
    } else {
        jsondata = originaldata
    }
    render();
     $(this).toggleClass("filter");
     $(this).parent("li") .toggleClass("active");
    // $("#nav").toggleClass("active");
  });

  $(".filter_service").on("click", function(event) {
    event.preventDefault();
   
    if($(this).hasClass("filter")){
       jsondata =  _.where(originaldata, {student:true});
    } else {
        jsondata = originaldata
    }
    render();
     $(this).toggleClass("filter");
     $(this).parent("li") .toggleClass("active");
    // $("#nav").toggleClass("active");
  });


  $(".filter_overdue").on("click", function(event) {
    event.preventDefault();
   
    if($(this).hasClass("filter")){
       jsondata =  _.where(originaldata, {student:true});
    } else {
        jsondata = originaldata
    }
    render();
     $(this).toggleClass("filter");
     $(this).parent("li") .toggleClass("active");
    // $("#nav").toggleClass("active");
  });

  $(".filter_check").on("click", function(event) {
    event.preventDefault();
   
    if($(this).hasClass("filter")){
       jsondata =  _.where(originaldata, {student:true});
    } else {
        jsondata = originaldata
    }
    render();
     $(this).toggleClass("filter");
     $(this).parent("li") .toggleClass("active");
    // $("#nav").toggleClass("active");
  });

  $(".filter_money").on("click", function(event) {
    event.preventDefault();
   
    if($(this).hasClass("filter")){
       jsondata =  _.where(originaldata, {student:true});
    } else {
        jsondata = originaldata
    }
    render();
     $(this).toggleClass("filter");
     $(this).parent("li") .toggleClass("active");
    // $("#nav").toggleClass("active");
  });


// DROPDOWN
  $(".dropdown-menu .dropdown-item").on("click", function(event) {
    event.preventDefault();
    $("#navbarDropdown").html($(this).html());

    // $(this).toggleClass("sort_desc");
  });

// LINK VIEW ALL 
$(".view__all-link").on("click", function(event) {
    event.preventDefault();

    if($(this).hasClass("view__all-link")){
      render(10)
  } else {
    render()
  }

  // render();
  //   render(10);
   
    $(this).toggleClass("view__all-link");

    // $("#navbarDropdown").html($(this).html());
  });
 


 

function render(amount=3){
    var items = [];
   
    $.each(jsondata, function(key, val){
      console.log(key,val)
      amount -- 
      if (amount>=0) {
        
      
       items.push(
      
      
      `
      <div class="companies__content">
      <div class="companies">
                        <div class="companies__left-side">
                            <div class="company-logo">
                                <img class="logo-img" src="${val.logo}" alt="IuteCredit">
                            </div>
                            <div class="company__info">
                                <div class="company__info-item">
                                    <img src="img/tel-icon.png" alt="Telephone">
                                    <a href="tel:+373 22 801 500" class="company__info-link">
                                        +373 22 801 500
                                    </a>
                                </div>
                                <div class="company__info-item">
                                    <img src="img/union-icon.png" alt="Mail">
                                    <a href="#" class="company__info-link">
                                        info@iutecredit.md
                                    </a>
                                </div>
                                <div class="company__info-item">
                                    <img src="img/map-icon.png" alt="Map">
                                    <a href="#" class="company__info-link">
                                        Str. Vasile Lupu 21/15
                                    </a>
                                </div> 
                            </div>
                        </div>
                        <div class="companies__right-side">
                            <div class="companies__info">
                                <div class="sorting__companies-items">
                                    <p class="sorting__companies-items-text">
                                        Ставка<br>
                                        <span class="sorting__companies-items-text-bottom"><strong>${val.rate}%</strong> в день</span>
                                    </p>
                                    <p class="sorting__companies-items-text">
                                        Сумма<br>
                                        <span class="sorting__companies-items-text-bottom"><strong>${val.amount_min} - ${val.amount_max} </strong> лей</span>
                                    </p>
                                    <p class="sorting__companies-items-text">
                                        Срок<br>
                                        <span class="sorting__companies-items-text-bottom">от <strong>${val.period_min}</strong> до <strong>${val.period_max}</strong> дней</span>
                                    </p>
                                    <p class="sorting__companies-items-text">
                                        Возраст<br>
                                        <span class="sorting__companies-items-text-bottom">от <strong>${val.age_min}</strong> лет</span>
                                    </p>
                                </div>
                                <div class="sorting__companies-info-bottom">
                                    <div>
                                        <h4 class="sorting__companies-info-bottom-title">
                                            ${val.name}
                                        </h4>
                                        <p class="sorting__companies-info-bottom-text">
                                          10 000 lei, cu 0% 1 lună Împrumut în 8 minute!.
                                        </p>
                                    </div>
                                    <div>
                                        <div class="sorting__companies-info-bottom-button">
                                            <a href="#" class="button-link btn-main">
                                                Aplică
                                            </a>
                                            <a href="#" class="button-detail">
                                                Detalii
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>      
                        </div>  
                    </div> 
                  </div>
      
      `);
    }
    });
    

       $('.companies-content-wrapper').html(items.join(''))
}

// load date

$(function() {
  $.getJSON('ajax/Home.json', function(data){
    jsondata = data;
    jsondata = _.sortBy(jsondata, "amount_min")
    originaldata = jsondata
    render();
    
   
    // $('<ul/>', {
    //   'class': 'my-new-list',
    //   html: items.join('')
    // }).appendTo('body');
  });
}());

$(function() {
  $.getJSON('ajax/Companii.json', function(data){
    jsondata = data;
    jsondata = _.sortBy(jsondata, "amount_min")
    originaldata = jsondata
    render();
    
   
    // $('<ul/>', {
    //   'class': 'my-new-list',
    //   html: items.join('')
    // }).appendTo('body');
  });
}());


function render(){
  var items = [];
 
  $.each(jsondata, function(key, val){
    console.log(key,val)

     items.push(
    
    
    `
    <div class="companies__content">
    <div class="companies">
                      <div class="companies__left-side">
                          <div class="company-logo">
                              <img class="logo-img" src="${val.logo}" alt="IuteCredit">
                          </div>
                          <div class="company__info">
                              <div class="company__info-item">
                                  <img src="img/tel-icon.png" alt="Telephone">
                                  <a href="tel:+373 22 801 500" class="company__info-link">
                                      +373 22 801 500
                                  </a>
                              </div>
                              <div class="company__info-item">
                                  <img src="img/union-icon.png" alt="Mail">
                                  <a href="#" class="company__info-link">
                                      info@iutecredit.md
                                  </a>
                              </div>
                              <div class="company__info-item">
                                  <img src="img/map-icon.png" alt="Map">
                                  <a href="#" class="company__info-link">
                                      Str. Vasile Lupu 21/15
                                  </a>
                              </div> 
                          </div>
                      </div>
                      <div class="companies__right-side">
                          <div class="companies__info">
                              <div class="sorting__companies-items">
                                  <p class="sorting__companies-items-text mobile">
                                      Ставка<br>
                                      <span class="sorting__companies-items-text-bottom"><strong>${val.rate}%</strong> в день</span>
                                  </p>
                                  <p class="sorting__companies-items-text">
                                      Сумма<br>
                                      <span class="sorting__companies-items-text-bottom"><strong>${val.amount_min} - ${val.amount_max} </strong> лей</span>
                                  </p>
                                  <p class="sorting__companies-items-text mobile">
                                      Срок<br>
                                      <span class="sorting__companies-items-text-bottom">от <strong>${val.period_min}</strong> до <strong>${val.period_max}</strong> дней</span>
                                  </p>
                                  <p class="sorting__companies-items-text">
                                      Возраст<br>
                                      <span class="sorting__companies-items-text-bottom">от <strong>${val.age_min}</strong> лет</span>
                                  </p>
                              </div>
                              <div class="sorting__companies-info-bottom">
                                  <div>
                                      <h4 class="sorting__companies-info-bottom-title">
                                          ${val.name}
                                      </h4>
                                      <p class="sorting__companies-info-bottom-text">
                                        10 000 lei, cu 0% 1 lună Împrumut în 8 minute!.
                                      </p>
                                  </div>
                                  <div>
                                      <div class="sorting__companies-info-bottom-button">
                                          <a href="#" class="button-link btn-main">
                                              Aplică
                                          </a>
                                          <a href="#" class="button-detail">
                                              Detalii
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>      
                      </div>  
                  </div> 
                </div>
    
    `);
  
  });
  

     $('.companies-multiple-content-wrapper').html(items.join(''))
}







