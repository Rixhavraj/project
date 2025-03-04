document.addEventListener('DOMContentLoaded', () => {
    fetchImages();
  });
  
  function fetchImages() {
    // This is where you can fetch images from your server/database
    // For now, we will use placeholder images
    const images=[
    { name: 'Image 0', path: 'WhatsApp Image 2025-02-17 at 22.45.17_73abac2d.jpg'},
    { name: 'Image 1', path: 'WhatsApp Image 2025-02-20 at 21.00.13_7fcdb9ed.jpg' },
    { name: 'Image 2', path: 'WhatsApp Image 2025-02-20 at 21.00.14_7c9912ae.jpg' },
    { name: 'Image 3', path: 'WhatsApp Image 2025-02-20 at 21.00.15_9e105322.jpg'},
    { name: 'Image 4', path: 'raining.png'},
    { name: 'Image 5', path: 'miyamoto-musashi-bloody-katana-vagabond-thumb.jpg'},
      { name: 'Image 6', path: 'WhatsApp Image 2025-02-19 at 13.24.50_d5833ead.jpg' },
      { name: 'Image 7', path: 'WhatsApp Image 2025-02-20 at 21.00.19_c1f94617.jpg' },
      {name: 'Image 8', path: 'WhatsApp Image 2025-02-20 at 21.00.15_73ff9107.jpg'},
      {name: 'Image 9', path: 'WhatsApp Image 2025-02-20 at 21.00.15_13580026.jpg'},
      {name: 'Image 10', path: 'WhatsApp Image 2025-02-20 at 21.00.17_02a2be0e.jpg'},
      {name: 'Image 11', path: 'WhatsApp Image 2025-02-20 at 21.00.15_c62d9499.jpg'},
      {name: 'Image 12', path: 'WhatsApp Image 2025-02-20 at 21.00.16_6f5c059b.jpg'},
      {name: 'Image 13', path: 'WhatsApp Image 2025-02-20 at 21.00.16_7153dc1d.jpg'},
      {name: 'Image 14', path: 'WhatsApp Image 2025-02-20 at 21.00.17_b8dd0e4d.jpg'},
      {name: 'Image 15', path: 'WhatsApp Image 2025-02-20 at 21.00.18_ae57aca4.jpg'},
      {name: 'Image 16', path: 'WhatsApp Image 2025-02-20 at 21.00.17_f7f566d1.jpg'},
      {name: 'Image 17', path: 'WhatsApp Image 2025-02-20 at 21.00.18_00d6c1f2.jpg'},
      {name: 'Image 18', path: 'WhatsApp Image 2025-02-20 at 21.00.18_74dea4e3.jpg'},
      {name: 'Image 18', path: 'WhatsApp Image 2025-02-20 at 21.00.19_65f292be.jpg'},
      {name:'Image 19', path: 'WhatsApp Image 2025-02-20 at 21.00.20_36ead0e8.jpg'},
      {name: 'Image 19', path: 'WhatsApp Image 2025-02-20 at 21.00.19_085213ef.jpg'},
      {name:'Image 20', path: 'WhatsApp Image 2025-02-20 at 21.00.20_e90973d1.jpg'},
      {name: 'Image 21', path: 'WhatsApp Image 2025-02-20 at 21.00.21_993dff6b.jpg'},
      {name: 'Image 22', path:'WhatsApp Image 2025-02-20 at 21.00.21_484216c3.jpg'},
      {name: 'Image 23', path: 'WhatsApp Image 2025-02-20 at 21.00.21_fe588120.jpg'
      },
      {name: 'Image 24', path: 'WhatsApp Image 2025-02-20 at 21.00.20_38329a81.jpg'}
      
    
  ];

  
    const galleryContainer = document.getElementById('gallery-container');
    galleryContainer.innerHTML = ''; // Clear existing content
  
    images.forEach(image => {
      const galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery-item');
      
      const imgElement = document.createElement('img');
      imgElement.src = image.path;
      imgElement.alt = image.name;
  
      const downloadBtn = document.createElement('button');
      downloadBtn.classList.add('download-btn');
      downloadBtn.innerText = 'Download';
      downloadBtn.onclick = () => downloadImage(image.path);
  
      galleryItem.appendChild(imgElement);
      galleryItem.appendChild(downloadBtn);
      galleryContainer.appendChild(galleryItem);
    });
  }
  
  function downloadImage(imagePath) {
    const a = document.createElement('a');
    a.href = imagePath;
    a.download = imagePath.split('/').pop(); // Use image filename as download name
    a.click();
  }
  