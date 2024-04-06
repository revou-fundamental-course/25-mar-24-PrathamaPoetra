function hitung(){

        var angkaTinggi = document.getElementById("tinggi").value;
        var meter = parseInt(angkaTinggi) / 100;
        var kuadratTinggi = meter ** 2;
         
        let berat = document.getElementById("berat").value;
        let tinggi = document.getElementById("tinggi").value;

            
        let hasilHitung = parseInt(berat) / parseInt(kuadratTinggi);
        console.log (hasilHitung);

        let bulat = Math.round(hasilHitung);
        console.log(bulat);

        let hasilOutput = document.getElementById ("outputHasil");
        hasilOutput.innerHTML = bulat;
        }

