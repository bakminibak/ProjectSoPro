
window.addEventListener('scroll', () => {
    let parent =  document.getElementById('parallax-container');
    let children = parent.getElementsByTagName('div');
    let logo =  document.getElementById('logo');
    console.log(window.pageYOffset);
    if (window.pageYOffset>20) { 
      logo.className = 'animateSmall';
    }
    else {
      logo.className = 'animateBig';
    }

      for(let i = 0; i < children.length; i++) {
        let b = 2;        
       
        if (children[i].className.indexOf("lead")==0) {
          b=-150; 
        }
        children[i].style.transform = 'translateY(-' + (window.pageYOffset * (i * b) / children.length) + 'px)';        
      }
  }, false)