
window.addEventListener('scroll', () => {
    let parent =  document.getElementById('parallax-container');
    let children = parent.getElementsByTagName('div');
      for(let i = 0; i < children.length; i++) {
        let b = 2;        
        console.log(i, children[i].className, children[i].className.indexOf("lead"));
        if (children[i].className.indexOf("lead")==0) {
          b=-150; 
          console.log(children[i].className);
        }
        children[i].style.transform = 'translateY(-' + (window.pageYOffset * (i * b) / children.length) + 'px)';        
      }
  }, false)