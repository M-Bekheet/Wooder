
(function(){
    /*
      > Toggle Navbar
    */
    const toggleNav = document.querySelector('.toggle-nav');
    const nav = document.querySelector('.nav');

    toggleNav.addEventListener('click', () => {
      nav.classList.toggle('open');
    })


    /*
      > Toggle Video Modal
    */

    let modal = document.querySelector('.modal')

    document.querySelectorAll('.watch-btn').forEach(btn => btn.addEventListener('click', () => {
      modal.classList.add('active');
    }))

    const closeBtns = Array.from(document.querySelectorAll('.close'));

    closeBtns.forEach(closeBtn => closeBtn.addEventListener('click', function (e) {
      const modal = this.closest('.modal');
      let iframe = modal.querySelector('iframe');

      const video = modal.querySelector('video');
      if (iframe) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
      }
      if (video) {
        video.pause();
      }
      modal.classList.remove('active');

    }))

    modal.querySelector('.modal-overlay').addEventListener('click', function () {
      modal.classList.remove('active')
    })
})()
