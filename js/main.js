   document.getElementById("myBtn").addEventListener("click", function px_to_em() {
      const px = 16;
      const b = document.getElementById('txt').value;
      const em = b / px;
      document.getElementById('disp').innerText = em + " em";
      
  });