
(function(){

    const wrapEl = document.querySelector('.wrap');
    
    function speedGame(e){

        if(e.target.parentNode.classList.contains('box')){
          e.target.parentNode.classList.add('active');
        }
    }

    // function speedGame(e){

    //     if(e.target.classList.contains('box')){
    //         e.currentTarget.removeChild(e.target)
    //         console.log(e.target)
    //     }
    // }

    wrapEl.addEventListener('click', speedGame)


})();