<div id="oneri"></div>
  
  <script>
    function mekanOner() {
      var soru1Cevap = document.querySelector('input[name="soru1"]:checked').value;
      var soru2Cevap = document.querySelector('input[name="soru2"]:checked').value;
      var soru3Cevap = document.querySelector('input[name="soru3"]:checked').value;
      var oneriDiv = document.getElementById("oneri");
      
      var oneriler = {
        kahve: {
          beyoglu: {
            sakin: "Beyoğlu'nda sakin bir kafe öneririm.",
            canli: "Beyoğlu'nda canlı bir kafe öneririm.",
            romantik: "Beyoğlu'nda romantik bir kafe öneririm."
          },
          kadikoy: {
            sakin: "Kadıköy'de sakin bir kafe öneririm.",
            canli: "Kadıköy'de canlı bir kafe öneririm.",
            romantik: "Kadıköy'de romantik bir kafe öneririm."
          },
          besiktas: {
            sakin: "Beşiktaş'ta sakin bir kafe öneririm.",
            canli: "Beşiktaş'ta canlı bir kafe öneririm.",
            romantik: "Beşiktaş'ta romantik bir kafe öneririm."
}
},
restoran: {
beyoglu: {
sakin: "Beyoğlu'nda sakin bir restoran öneririm.",
canli: "Beyoğlu'nda canlı bir restoran öneririm.",
romantik: "Beyoğlu'nda romantik bir restoran öneririm."
},
kadikoy: {
sakin: "Kadıköy'de sakin bir restoran öneririm.",
canli: "Kadıköy'de canlı bir restoran öneririm.",
romantik: "Kadıköy'de romantik bir restoran öneririm."
},
besiktas: {
sakin: "Beşiktaş'ta sakin bir restoran öneririm.",
canli: "Beşiktaş'ta canlı bir restoran öneririm.",
romantik: "Beşiktaş'ta romantik bir restoran öneririm."
}
},
"gece-klubu": {
beyoglu: {
sakin: "Beyoğlu'nda sakin bir gece kulübü öneririm.",
canli: "Beyoğlu'nda canlı bir gece kulübü öneririm.",
romantik: "Beyoğlu'nda romantik bir gece kulübü öneririm."
},
kadikoy: {
sakin: "Kadıköy'de sakin bir gece kulübü öneririm.",
canli: "Kadıköy'de canlı bir gece kulübü öneririm.",
romantik: "Kadıköy'de romantik bir gece kulübü öneririm."
},
besiktas: {
sakin: "Beşiktaş'ta sakin bir gece kulübü öneririm.",
canli: "Beşiktaş'ta canlı bir gece kulübü öneririm.",
romantik: "Beşiktaş'ta romantik bir gece kulübü öneririm."
}
}
}; var oneri = oneriler[soru1Cevap][soru2Cevap][soru3Cevap];
  oneriDiv.innerHTML = oneri;
}  
</script>