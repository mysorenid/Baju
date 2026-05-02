function bukaModalBaju() {
  document.getElementById('modal-baju').style.display = "block";
}

function tutupModal() {
  document.getElementById('modal-baju').style.display = "none";
}

// Tutup modal kalau user klik di luar kotak putih
window.onclick = function(event) {
  let modal = document.getElementById('modal-baju');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
