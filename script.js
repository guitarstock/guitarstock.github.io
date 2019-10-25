if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready)
} else {
  ready()
}

function ready() {

// DOLLAR SIGN FUNCTION
function $(x) {
  return document.getElementById(x)
}
function $$(x) {
  return document.getElementsByClassName(x)
}

//scroll down the page
if ($("scroller_down") != null) {
$("scroller_down").addEventListener('click', () => {
  console.log("hi")
  location.hash = "body_03"
})
}

//remove cart Item
for (var r = 0; r < $$("body_cart_remove_button").length; r++) {
  $$("body_cart_remove_button")[r].addEventListener("click", function(){
    event.target.parentElement.parentElement.remove();
    updateCartTotal()
  })
}
function updateCartTotal() {
  var cartItemContainer = $$("body_cart_item")[0]
  var cartRows = cartItemContainer.getElementsByClassName("body_cart_row")
  for (var r = 0; r < cartRows.length; r++) {
    var cartRow = cartRows[r]
    var priceElement = cartRow.getElementsByClassName("body_cart_column_price")[0]
    var price = parseFloat(priceElement.innerText.replace("€", ""))
    console.log(price)
  } 
  $$("body_cart_total_price")[0].innerText = "€" + price
}




// video autoplay
const videoHover = () => {
for (let i = 0; i < $$(`video`).length; i++) {
  $$(`video`)[i].addEventListener(`mouseover`, function(e) { 
      $$(`video`)[i].play()
    })
    $$('video')[i].addEventListener(`mouseout`, function(e) {
      $$('video')[i].pause() 
    })}
}
videoHover()

//add video to cart
var cart = [];
for (let x = 0; x < $$(`video`).length; x++) {
$$(`video`)[x].addEventListener('click', function() {
      if (this.style.opacity === '0.4') {
        //visual input of clicked video
          this.style.opacity = '1'
        //remove item from Cart
          console.clear();
          $$(`video`)[x] = false;
          cart.pop([x])
          
          console.log(cart)
        //update cart badge
        
        //$(this).parent().remove('<div>Added to Cart</div>').removeClass("cart_added")
      } else {
        //visual input of clicked video
          this.style.opacity = '0.4'
        //add item to Cart
          console.clear();
          $$(`video`)[x] = true;
          cart.push([x])
          console.log(cart)
          //update cart badge
          //cart.forEach(function() {}
          $("cart_badge").innerHTML = cart[x]
          
          
          //this.parent().append('<div>Added to Cart</div>').classList.add("cart_added")
      }
    })
  }

//search

if ($("search_button") != null) {
$("search_button").addEventListener("click", () => {
    //update keyword value
    $("body_text_keyword").innerHTML = search_bar.value.toLowerCase()
      if ($("search_bar").value !== "") {
        if(window.getComputedStyle($("body_01")).display === "block") {
          $("body_01").style.display ="none"
        }
        // re-start videoHover function
        videoHover()
        // show search content
        $("body_03").style.display="block"
        // scroll down 
        location.hash = "body_03" 
        // show "results for"
        $("body_text_yourSearch").style.display ="block"
        // remove body content
        } else {
          // hide "results for"
          $("body_text_yourSearch").style.display ="none"
          //alert 
          alert("Insert keyword")
          // hide search content
          $("body_03").style.display="none"
        }})
}

}

/*
    function myFunction() {
        // Declare variables
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName('li');
      
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      }
*/
// https://osvaldas.info/real-time-search-in-javascript

/*
const keywords = [acoustic, bandsaw, bass, board, broken, build, carpenter, carving, chips, chord, closeup, cloth, construction, cord, 
    cut, cutting, decoration, detail, drill, electric,fingerboard, fix, fret, fretboard, frets, glue, guitar, guitarist, hammer, hand, 
    wooden, hardwood, headstock, joiner, joinery, lumber, lute, luter, luther, luthier, lutist, 
    machine, maker, neck, panel, pick, pickup, plane, plank, plectrum, 
    renovation, repair, repairing, restore, restring, 
    rosewood, saw, sawdust, sawing, screw, screwdriver, slow, motion, string, stringed, 
    timber, tune, tuning, wood, wooden, workbench,]






threejs
openframworks
deckgl
vis.academy
sass
*/
