document.addEventListener('DOMContentLoaded', ()=> {
   const menuIcon = document.getElementById('menuIcon');
   const navMenu = document.getElementById('navMenu');
   const portfolioItems = document.querySelectorAll('.portfolio-item');
   const modal = document.getElementById('portfolioModal');
   const modalTitle = document.getElementById('modalTitle');
   const modalImage = document.getElementById('modalImage');
   const modalDescription = document.getElementById('modalDescription');
   const closeBtn = document.querySelector('.close');
   
   menuIcon.addEventListener('click', ()=> {
      navMenu.classList.toggle('show');
   });
   
   portfolioItems.forEach(item => {
      item.addEventListener('click', function() {
         const id = this.getAttribute('data-id');
         const title = this.querySelector('h3').textContent;
         const imageSrc = this.querySelector('img').src;
         
         modalTitle.textContent = title;
         modalImage.src = imageSrc;
         modalDescription.textContent = getProjectDescription(id);
         
         modal.style.display = 'block';
      });
   });
   
   closeBtn.addEventListener('click', closeModal);
   window.addEventListener('click', (event)=> {
      if (event.target === modal) {
         closeModal();
      }
   });
   
   function closeModal() {
      modal.style.display = 'none';
   }
   
   function getProjectDescription(id) {
      const descriptions = {
         '1': 'Fetching Pokemon API with react js and axios',
         '2': 'Bookshelf app with vanila javascript',
         '3': 'Job Vacancy website with react js, daisy ui'
      };
      return descriptions[id] || 'No description';
   }
});