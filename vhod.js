$(document).ready(function(){
    $(".header").click(function(){
      $(".header__logo").toggleClass('flip');
      $(".header__logo").text("Serious and interesting animation");
      $(".header__logo").css({"color": "#fd0000"});
  
      console.log(852);
    });
  });

      
      
        function LogIn(){
            event.preventDefault();
            let log_em = document.getElementById("username").value;
            let log_pass = document.getElementById("password").value;

            if(log_em == "admin" && log_pass == "password"){
                document.location.href = "adminpanel.html";
                console.log("ff");
            }
            for (i = 1; i>=0; i++){
                let user = localStorage.getItem(i);
                let data = JSON.parse(user);
                if (data == null){
      document.getElementById("result").innerHTML = "Please, type your login and password correctly";
                    console.log("ghj")
                    break;
                }
                else{
                    if(log_em == data.Name && log_pass == data.Password){
                        if(data.allowed == true){
                            console.log("gooo");
                            document.location.href = "main.html";
                            break;
                        }
                        else{
                            document.getElementById("result").innerHTML = "Your account is disabled";
                        }
                    }
                }
            }
        }
