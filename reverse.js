// const backButton = document.querySelector('#regresar');

// const visitedHomePage = false;

// console.log(visitedHomePage)

// backButton.addEventListener("click", function() {
   
//     const homePage = "http://127.0.0.1:5500/"; 
//     if (visitedHomePage) {
     
//       if (document.referrer === homePage) {
//         location.href = document.referrer;
//       } else {
//         history.back();
//       }
//     } else {
 
//      location.href = homePage;
      
//     }
//   });

// Función para establecer una cookie con un nombre, un valor y una duración en días
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }
  
  // Función para obtener el valor de una cookie por su nombre
  function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
      let c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
  
  const backButton = document.querySelector('#regresar');
  
  let visitedHomePage = getCookie('visitedHomePage');
  if (!visitedHomePage) {
    visitedHomePage = false;
    setCookie('visitedHomePage', visitedHomePage, null); // Establecer la cookie sin fecha de expiración
  }
  
  console.log(visitedHomePage);
  
  backButton.addEventListener("click", function() {
    const homePage = "http://127.0.0.1:5500/"; 
    setCookie('visitedHomePage', true, null); // Establecer la cookie sin fecha de expiración
    if (visitedHomePage) {
      if (document.referrer === homePage) {
        location.href = document.referrer;
      } else {
        history.back();
      }
    } else {
      location.href = homePage;
    }
  });
  