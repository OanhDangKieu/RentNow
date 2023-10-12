$(function() {
    var INDEX = 0;
  
    $("#chat-submit").click(function(e) {
        e.preventDefault();
        var msg = $("#chat-input").val();
  
        if (msg.trim() == '') {
            return false;
        }
  
        generate_message(msg, 'self');
  
        setTimeout(function() {
            if (msg.trim() === "Tôi cần thuê một bộ đầm đi dự tiệc") {
                show_furniture_images();
            }
            else if(msg.trim() === "Cảm ơn"){
              generate_message("Rất vui khi được giúp bạn!", 'user');
            }
  
            else {
                generate_message("Xin lỗi tôi không thể trả lời câu hỏi này ", 'user');
               
            }
        }, 1000);
    });
  
    function generate_message(msg, type) {
        INDEX++;
        var str = "";
        str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + "\">";
        str += "          <\/span>";
        str += "          <div class=\"cm-msg-text\">";
        str += msg;
        str += "          <\/div>";
        str += "        <\/div>";
        $(".chat-logs").append(str);
        $("#cm-msg-" + INDEX).hide().fadeIn(300);
  
        if (type == 'self') {
            $("#chat-input").val('');
        }
  
        $(".chat-logs").stop().animate({
            scrollTop: $(".chat-logs")[0].scrollHeight
        }, 1000);
    }
  
    function show_furniture_images() {
      INDEX++;
      var str = "";
      str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg bot\">";
      str += "  <\/span>";
      str += "  <div class=\"cm-msg-text\">";
      str += "    <p>Dưới đây là một số sản phẩm gợi ý:</p>";
      str += "    <div id='myCarousel' class='carousel slide' data-ride='carousel'>";
      str += "        <div class='carousel-inner'>";
      str += "            <div class='carousel-item active'>";
      str += "                <img src='./assets/images/hintchatbot/2.webp' class='d-block w-100' alt='Nội thất 1' onclick='redirectToDetail()'>";
      str += "            </div>";
      str += "            <div class='carousel-item'>";
      str += "                <img src='./assets/images/hintchatbot/1.jpeg' class='d-block w-100' alt='Nội thất 2'>";
      str += "            </div>";
      str += "            <div class='carousel-item'>";
      str += "                <img src='./assets/images/hintchatbot/3.jpeg' class='d-block w-100' alt='Nội thất 3'>";
      str += "            </div>";
      str += "            <div class='carousel-item'>";
      str += "                <img src='./assets/images/hintchatbot/4.jpeg' class='d-block w-100' alt='Nội thất 4'>";
      str += "            </div>";
      // Add more carousel items as needed
      str += "        </div>";
      str += "        <a class='carousel-control-prev' href='#myCarousel' role='button' data-slide='prev' onclick='showPreviousImage()' style='color:black'>";
      str += "            <span class='carousel-control-prev-icon' aria-hidden='true'></span>";
      str += "            <span class='visually-hidden'>Previous</span>";
      str += "        </a>";
      str += "        <a class='carousel-control-next' href='#myCarousel' role='button' data-slide='next' onclick='showNextImage()'>";
      str += "            <span class='carousel-control-next-icon' aria-hidden='true'></span>";
      str += "            <span class='visually-hidden'>Next</span>";
      str += "        </a>";
      str += "    </div>";
      str += "  <\/div>";
      str += "<\/div>";
      $(".chat-logs").append(str);
      $("#cm-msg-" + INDEX).hide().fadeIn(500);
      $(".chat-logs").stop().animate({
          scrollTop: $(".chat-logs")[0].scrollHeight
      }, 1000);
  }
  
  function showPreviousImage() {
      $('#myCarousel').carousel('prev');
  }
  
  function showNextImage() {
      $('#myCarousel').carousel('next');
  }
  function redirectToDetail() {
    window.location.href = './detail.html';
  }
  
  
  
  
    $("#chat-circle").click(function() {
        $("#chat-circle").toggle('scale');
        $(".chat-box").toggle('scale');
    })
  
    $(".chat-box-toggle").click(function() {
        $("#chat-circle").toggle('scale');
        $(".chat-box").toggle('scale');
    })
  });
  