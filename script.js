    var currentSoru = 1;

    function ileri() {
      if (currentSoru === 1) {
        document.getElementById("soru1").style.display = "none";
        document.getElementById("soru2").style.display = "block";
        currentSoru = 2;
      } else if (currentSoru === 2) {
        document.getElementById("soru2").style.display = "none";
        document.getElementById("soru3").style.display = "block";
        currentSoru = 3;
      } else if (currentSoru === 3) {
        document.getElementById("soru3").style.display = "none";
        document.getElementById("soru4").style.display = "block";
        currentSoru = 4;
      }
    }

    function geri() {
      if (currentSoru === 2) {
        document.getElementById("soru2").style.display = "none";
        document.getElementById("soru1").style.display = "block";
        currentSoru = 1;
      } else if (currentSoru === 3) {
        document.getElementById("soru3").style.display = "none";
        document.getElementById("soru2").style.display = "block";
        currentSoru = 2;
      } else if (currentSoru === 4) {
        document.getElementById("soru4").style.display = "none";
        document.getElementById("soru3").style.display = "block";
        currentSoru = 3;
      }
    }

    function mekanOner() {
      var soru1Cevap = document.querySelector('input[name="soru1"]:checked').value;
      var soru2Cevap = document.querySelector('input[name="soru2"]:checked').value;
      var soru3Cevap = document.querySelector('input[name="soru3"]:checked').value;
      var soru4Cevap = document.querySelector('input[name="soru4"]:checked').value;
      var oneriDiv = document.getElementById("sonuc");

      var oneriler = {
        kahve: {
          sicak: {
            sakin: {
              arkadaslarimla: { 
                ad:"Petra Roasting Co. Karaköy",
                adres: "Adres: Kemankeş Karamustafa Paşa Mahallesi, Mumhane Cd. No:47, 34425 Beyoğlu/İstanbul",
                aciklama:" Petra Roasting Co., Karaköy'de bulunan bir kafe ve kavurma atölyesi. Burada taze kavrulmuş kahve çeşitlerini deneyebilir ve kaliteli bir kahve deneyimi yaşayabilirsiniz. Rahat bir ortamda arkadaşlarınızla buluşarak sohbet edebilir ve özel kahve çeşitlerinin tadını çıkarabilirsiniz.",
                foto:"mekanlar/mekan1.png"
                
              } ,
              yalniz:{
                ad:"Geyik Coffee Roastery & Cocktail Bar",
                adres: "Adres: Şahkulu Mahallesi, Serdar-ı Ekrem Cd. No:7/A, 34425 Beyoğlu/İstanbul",
                aciklama:" Geyik Coffee Roastery & Cocktail Bar, şık ve rahat bir ortama sahip olan bir mekan. Hem kahve çekirdeklerini kavuran bir kavurma atölyesi hem de kokteyl barı olarak hizmet veriyor. Burada kaliteli kahvelerin yanı sıra özel kokteyller de bulabilirsiniz. Yalnız olarak sessiz bir köşede kahvenizi içebilir veya biraz daha sosyal bir ortamda diğer kahve severlerle sohbet edebilirsiniz.",
                foto:"mekanlar/mekan2.png"
              }
            },
            canli: {
              arkadaslarimla: {
                ad:"Mandabatmaz",
                adres: "Caferağa Mahallesi, Bademaltı Sokak No:23A, Kadıköy/İstanbul",
                aciklama:" Mandabatmaz, Kadıköy'de yer alan ünlü bir kahve dükkanıdır. Burada Türk kahvesi ve filtre kahve gibi çeşitli kahve çeşitleri sunulmaktadır. Mekan sade ve minimalist bir dekorasyona sahiptir ve canlı bir atmosferde arkadaşlarınızla keyifli bir zaman geçirebilirsiniz.",
                foto:"mekanlar/mekan3.png"
              },
              yalniz: {
                ad:"Mangerie Bebek",
                adres: "Adres: Cevdet Paşa Caddesi No:69, Bebek/İstanbul",
                aciklama:" Mangerie Bebek, Boğaz manzarasıyla ünlü Bebek semtinde yer alan bir kafe-restoran. Burada hem iç mekan hem de dış mekan teras seçenekleri mevcuttur. Mekanın canlı atmosferi ve güzel manzarasıyla keyifli bir kahve deneyimi yaşayabilirsiniz. Yalnız olarak rahat bir köşede oturup çevrenin keyfini çıkarabilirsiniz.",
                foto:"mekanlar/mekan4.png"
              }
            },
            romantik: {
              arkadaslarimla:{
                ad:"The House Café Ortaköy",
                adres: "Adres: Mecidiye Mahallesi, Mecidiye Köprüsü Sk. No:1, Beşiktaş/İstanbul",
                aciklama:" The House Café Ortaköy, Boğaz'ın güzelliklerini gözlemleyebileceğiniz ve romantik bir atmosferde keyifli bir kahve deneyimi yaşayabileceğiniz bir mekandır. Tarihi Ortaköy semtinde bulunan bu kafe, hem iç mekan hem de dış mekan teras seçenekleri sunar. Burada güzel bir manzara eşliğinde kahvenizi yudumlayabilir ve huzurlu bir ortamda vakit geçirebilirsiniz.",
                foto:"mekanlar/mekan5y.png"
              },
              yalniz: {
                 ad:"Java Coffee House",
                adres: "Adres: Kuruçeşme Mahallesi, Muallim Naci Caddesi No:61, Beşiktaş/İstanbul",
                aciklama:" Java Coffee House, Boğaz'ın hemen yanında yer alan şık bir kahve dükkanıdır. Burası sakin ve romantik bir atmosfere sahip olup, yalnız başına kahvenizi içebileceğiniz ideal bir mekandır. Özel kahve çeşitleri ve lezzetli atıştırmalıklarıyla bilinir. Ayrıca, güzel bir terası vardır ve Boğaz manzarasının tadını çıkarmanızı sağlar.",
                foto:"mekanlar/mekan6.png"
              },
            }
          },
          yagisli: {
            sakin: {
              arkadaslarimla:{
                ad:"MOC Karaköy",
                adres: "Adres: Kemankeş Karamustafa Paşa Mahallesi, Kemankeş Cd. No:37, 34425 Beyoğlu/İstanbul",
                aciklama:" MOC Karaköy, Karaköy semtinde bulunan şık bir kafe ve kahve dükkanıdır. Burası lezzetli kahveleri ve rahat atmosferiyle öne çıkar. Geniş ve ferah bir iç mekana sahiptir, bu yüzden yağışlı bir günde rahatça oturabilirsiniz. Arkadaşlarınızla birlikte keyifli bir sohbet eşliğinde çeşitli kahve seçeneklerini deneyebilirsiniz.",
                foto:"mekanlar/mekan7.png"
              },
              yalniz:{
                ad:"Fil Kafe",
                adres: "Adres: Hüsrev Gerede Caddesi, No: 5, Cihangir, Beyoğlu/İstanbul",
                aciklama:"  Fil Kafe, Cihangir semtinde yer alan huzurlu bir kafe. Burada sakin bir atmosferde kahvenizi yudumlarken, kitabınızı okuyabilir veya müziğin keyfini çıkarabilirsiniz. Rahat bir dekorasyona sahip olan Fil Kafe, kahve çeşitleri ve atıştırmalıkları ile ünlüdür. Yalnız başınıza kahvenizi içmek için ideal bir mekan.",
                foto:"mekanlar/mekan8.png"
              }
            },
            canli: {
              arkadaslarimla: {
                ad:"Federal Coffee Company",
                adres: "Adres: Kemankeş Karamustafa Paşa Mahallesi, Mumhane Cd. No:33, 34425 Beyoğlu/İstanbul",
                aciklama:"  Federal Coffee Company, Karaköy semtinde yer alan popüler bir kahve dükkanıdır. Burada özenle seçilmiş kahve çekirdekleriyle hazırlanan çeşitli kahve çeşitleri sunulmaktadır. Sıcak bir atmosferi ve modern dekorasyonuyla dikkat çeken mekan, kahve tutkunları arasında tercih edilen bir noktadır. Arkadaşlarınızla  keyifli bir kahve deneyimi yaşayabileceğiniz bir ortam sunar.",
                foto:"mekanlar/mekan9.png"
              },
              yalniz: {
                ad:"Mavra Café & Bistro",
                adres: "Adres: Serasker Cad. No: 33/A, Osmanbey, Şişli, İstanbul",
                aciklama:"   Mavra Café & Bistro, şık ve modern bir kafe atmosferine sahip olan bir mekandır. Burada kaliteli kahveler, çeşitli içecekler ve lezzetli atıştırmalıklar bulabilirsiniz. Yalnız olarak gidebileceğiniz sessiz bir ortamı vardır ve huzurlu bir kahve deneyimi sunar.",
                foto:"mekanlar/mekan10.png"
              }
            },
            romantik: {
              arkadaslarimla: {
                ad:"Nopa Coffee",
                adres: "Adres: Kuloğlu Mahallesi, Çukur Cuma Cd. No:10, Beyoğlu/İstanbul",
                aciklama:"Nopa Coffee, Beyoğlu'nda yer alan modern ve şık bir kahve dükkanıdır. Burası canlı bir atmosfere sahip olup arkadaşlarınızla keyifli bir kahve deneyimi yaşayabileceğiniz bir mekandır. Geniş bir kahve menüsü sunan Nopa Coffee, aynı zamanda lezzetli atıştırmalıklar da sunmaktadır. İç mekanın sıcak ve samimi atmosferi, yagisli bir günde romantik bir ortam yaratmanıza yardımcı olabilir.",
                foto:"mekanlar/mekan11.png"
              },
              yalniz: {
                ad:"Kronotrop Coffee Bar & Roastery",
                adres: "Adres: Kuloğlu Mahallesi, Faik Paşa Cd. No:24/A, 34433 Beyoğlu/İstanbul",
                aciklama:"Kronotrop Coffee Bar & Roastery, taze kavrulmuş kahve çekirdekleriyle ünlü bir mekan. Burada çeşitli kahve çeşitleri ve lezzetli atıştırmalıklar sunuluyor. Sakin ve samimi bir ortamda keyifli bir kahve deneyimi yaşayabilirsiniz.",
                foto:"mekanlar/mekan12.png"
              }
            }
          }
        },
        restoran: {
          sicak: {
            sakin: {
              arkadaslarimla: {
                ad:"Nicole Restaurant",
                adres: "Adres: Kuruçeşme Mahallesi, Muallim Naci Caddesi No: 72, 34345 Beşiktaş/İstanbul",
                aciklama:"Nicole Restaurant, Boğaz manzarası eşliğinde sakin ve şık bir ortamda lezzetli yemekler sunan bir restorandır. Hem Türk hem de uluslararası mutfaklardan seçkin lezzetlerin yer aldığı menüsüyle keyifli bir deneyim sunmaktadır. Arkadaşlarınızla güzel bir akşam yemeği için tercih edebilirsiniz.",
                foto:"mekanlar/mekan13.png"
              },
              yalniz: {
                ad:"Mikla Restaurant",
                adres: "Adres: The Marmara Pera, Meşrutiyet Cd. No:15, 34430 Beyoğlu/İstanbul",
                aciklama:"Mikla Restaurant, modern Türk ve uluslararası mutfakların harmanlandığı bir restorandır. Yüksek bir binanın çatı katında yer aldığı için İstanbul'un nefes kesen manzarasını sunar. Sıcak ve sofistike bir atmosfere sahiptir. Yalnız olarak sakin bir ortamda lezzetli yemeklerin tadını çıkarabilirsiniz.",
                foto:"mekanlar/mekan14.png"
              }
            },
            canli: {
              arkadaslarimla: {
                ad:"Asitane Restaurant",
                adres: "Adres: Kariye Camii Sokak No:6, Edirnekapı, Fatih/İstanbul",
                aciklama:"Asitane Restaurant, Osmanlı mutfağına özgü lezzetler sunan bir restorandır. Tarihi bir mekanda hizmet veren restoran, otantik atmosferiyle dikkat çekmektedir. Osmanlı saray mutfağından esinlenen özel tarifler ve zengin menü seçenekleriyle unutulmaz bir yemek deneyimi yaşayabilirsiniz.",
                foto:"mekanlar/mekan16.png"
              },
              yalniz: {
                ad:"360 İstanbul",
                adres: "Adres: Tomtom Mahallesi, İstiklal Cd. No:8, 34433 Beyoğlu/İstanbul",
                aciklama:"360 İstanbul, muhteşem Boğaz manzarası eşliğinde lezzetli yemekler sunan bir restorandır. Modern ve zarif bir atmosferi vardır. Türk ve dünya mutfağının lezzetlerini bir araya getiren menüsüyle ön plana çıkar. Arkadaşlarınızla unutulmaz bir akşam yemeği için tercih edebilirsiniz.",
                foto:"mekanlar/mekan15.png"
              }
            },
            romantik: {
              arkadaslarimla: {
                ad:"Park Fora Restaurant",
                adres: "Adres: Kuruçeşme Mahallesi, Muallim Naci Caddesi, No: 54, Beşiktaş/İstanbul",
                aciklama:"Park Fora Restaurant, Boğaz manzarasıyla ünlü Kuruçeşme'de yer alan romantik bir restorandır. Şık ve zarif dekorasyonu, romantik atmosferi ve lezzetli yemekleriyle bilinir. Boğaz'ın eşsiz manzarasına karşı sevdiklerinizle unutulmaz bir akşam yemeği deneyimi yaşayabilirsiniz.",
                foto:"mekanlar/mekan17.png"
              },
              yalniz: {
                ad:"Lacivert Restaurant",
                adres: "Adres: Anadolu Hisarı, Körfez Cd. No:57, 34810 Beykoz/İstanbul",
                aciklama:"Lacivert Restaurant, Boğaz'ın muhteşem manzarasına sahip olan Anadolu Hisarı'nda yer alan şık bir restorandır. Romantik bir atmosferde, kaliteli ve lezzetli yemeklerin tadını çıkarabilirsiniz. Özellikle akşam saatlerinde Boğaz'ın ışıklarını seyrederek unutulmaz bir deneyim yaşayabilirsiniz.",
                foto:"mekanlar/mekan18.png"
              }
            }
          },
          yagisli: {
            sakin: {
              arkadaslarimla:{
                ad:"Gram Karaköy",
                adres: "Adres: Kemankeş Karamustafa Paşa Mahallesi, Mumhane Cd. No:45/A, 34425 Beyoğlu/İstanbul",
                aciklama:" Gram Karaköy, Karaköy semtinde yer alan modern ve şık bir restorandır. Lezzetli ve sağlıklı yemeklerin sunulduğu mekan, organik ve yerel ürünleri tercih eder. Huzurlu bir atmosferde arkadaşlarınızla keyifli bir yemek deneyimi yaşayabilirsiniz.",
                foto:"mekanlar/mekan19.png"
              },
              yalniz: {
                ad:"Chilai Bosphorus",
                adres: "Adres: Muallim Naci Caddesi, No:71, Ortaköy, Beşiktaş, İstanbul",
                aciklama:"  Chilai Bosphorus, muhteşem Boğaz manzarasına sahip olan şık ve romantik bir restorandır. Burada Türk ve uluslararası mutfaktan lezzetler sunulmaktadır. Yalnız başınıza sakin ve keyifli bir yemek deneyimi yaşayabilir ve güzel manzara eşliğinde kendinizi dinleyebilirsiniz.",
                foto:"mekanlar/mekan20.png"
              }
            },
            canli: {
              arkadaslarimla: {
                ad:"Teos Kınalıada",
                adres: "Adres: Kınalıada, Marmara Denizi, İstanbul",
                aciklama:"  Teos Kınalı Ada , İstanbul'un adalarından biri olan Kınalıada'da yer alan popüler bir balık restoranıdır. Burada taze deniz ürünleri ve lezzetli balık yemekleri sunulmaktadır. Canlı bir ortamda, deniz manzarası eşliğinde arkadaşlarınızla keyifli bir akşam geçirebilirsiniz.",
                foto:"mekanlar/mekan21.png"
              },
              yalniz: {
                 ad:"Demeti",
                adres: "Adres: Arnavutköy Mahallesi, Bebek Arnavutköy Cd. No:36, 34345 Beşiktaş/İstanbul",
                aciklama:"Demeti, Boğaz manzarasıyla ünlü Bebek semtinde yer alan şık bir restoran. Burada hem Türk hem de dünya mutfaklarından lezzetler sunuluyor. Canlı müzik performansları eşliğinde yemeklerinizi tadabilir ve yalnız başınıza keyifli bir akşam geçirebilirsiniz.",
                foto:"mekanlar/mekan22.png"
              }
            },
            romantik: {
              arkadaslarimla: {
                ad:"Sunset Grill & Bar",
                adres: "Adres: Kuruçeşme Mahallesi, Muallim Naci Caddesi No:54, 34345 Beşiktaş/İstanbul",
                aciklama:"Sunset Grill & Bar, Boğaz manzarasıyla ünlü olan prestijli bir restorandır. Şık ve modern dekorasyonu, özenli servisi ve zengin menüsüyle dikkat çeker. Burada hem Türk hem de uluslararası mutfağın lezzetlerini deneyebilirsiniz. Romantik bir atmosferde arkadaşlarınızla keyifli bir akşam geçirebilirsiniz.",
                foto:"mekanlar/mekan23.png"
              },
              yalniz: {
                 ad:"Maison Française",
                adres: "Adres: Sıraselviler Cad. No:71, 34433 Beyoğlu/İstanbul",
                aciklama:"Maison Française, Fransız mutfağına özgü lezzetler sunan şık bir restorandır. Şehrin kalbinde yer alan bu mekan, romantik bir atmosfer sunar. Özenle hazırlanan yemekler, seçkin şaraplar ve zarif dekorasyon ile Maison Française, keyifli bir yemek deneyimi için mükemmel bir seçenektir. Yalnız başınıza keyifli ve romantik bir akşam geçirmek için ideal bir mekan olabilir.",
                foto:"mekanlar/mekan24.png"
              }
            }
          },
          soguk: {
            sakin: {
              arkadaslarimla: {
                 ad:"Yeni Lokanta",
                adres: "Adres: Kumbaracı Yokuşu No:66, 34425 Beyoğlu/İstanbul",
                aciklama:"Yeni Lokanta, Türk mutfağına modern bir yaklaşım sunan ünlü bir restorandır. Lezzetli ve özgün yemekleriyle tanınan mekan, sakin bir atmosfere sahiptir. Yaratıcı şeflerin hazırladığı özenli menüler, kaliteli malzemelerle hazırlanmış lezzetler sunar. Arkadaşlarınızla birlikte keyifli bir yemek deneyimi yaşayabileceğiniz Yeni Lokanta, İstanbul'da yeni bir deneyim arayanlar için harika bir seçenektir.",
                foto:"mekanlar/mekan25.png"
              },
              yalniz:{
                ad:"Müzedechanga",
                adres: "Adres: Meşrutiyet Caddesi No:56, Tepebaşı, Beyoğlu, İstanbul",
                aciklama:"Müzedechanga, İstanbul Modern Sanat Müzesi'nde yer alan bir restorandır ve sakin bir atmosfere sahiptir. Hem iç mekanında hem de dış terasında oturabilirsiniz. Restoran, modern Türk ve dünya mutfağından lezzetler sunmaktadır. Menüsünde çeşitli soğuk mezeler, salatalar, ana yemekler ve tatlılar bulunmaktadır.Müzedechanga, şehir manzarasına hakim bir konumda yer alır ve boğaz manzarası eşliğinde yemek keyfi yapabilirsiniz.",
                foto:"mekanlar/mekan26.png"
              }
            },
            canli: {
              arkadaslarimla: {
                 ad:"Kiva Restoran",
                adres: "Adres:Tarihi Bomonti Bira Fabrikası, Birahane Sk. No:1/A Bomonti/İstanbul",
                aciklama:"Bomontiada Restoran'ın menüsünde çeşitli lezzetler bulunmaktadır. Türk ve dünya mutfağından örnekler sunan restoran, geniş bir içecek ve kokteyl seçeneği de sunmaktadır.Bomontiada, farklı atmosferi ve etkinlikleriyle dikkat çeken bir mekan olduğu için arkadaşlarınızla keyifli bir akşam geçirebileceğiniz bir seçenek olabilir. ",
                foto:"mekanlar/mekan27.png"
              },
              yalniz: {
                ad:"Karaköy Lokantası",
                adres: " Kemankeş Karamustafa Paşa Mahallesi, Mumhane Caddesi No: 66/A, Karaköy, Beyoğlu, İstanbul",
                aciklama:"Karaköy Lokantası, geleneksel Türk mutfağını modern bir yaklaşımla sunan bir restorandır. Karaköy semtinde bulunan bu mekan, ferah bir atmosfere sahip olup sakin bir ortamda yemek yiyebilmeniz için idealdir. ",
                foto:"mekanlar/mekan28.png"
              }
            },
            romantik: {
              arkadaslarimla: {
                ad:"Duble Meze Bar",
                adres: " Adres: Kuruçeşme Mahallesi, Muallim Naci Caddesi No:54, Beşiktaş, İstanbul",
                aciklama:"Duble Meze Bar, Boğaz'ın güzel manzarasına sahip olan Kuruçeşme'de bulunan bir restorandır. Romantik bir atmosfere sahip olan mekan, lezzetli mezeler ve Türk mutfağından örnekler sunmaktadır. ",
                foto:"mekanlar/mekan29.png"
              },
              yalniz: {
                ad:"Gram Karaköy",
                adres: "Adres: Kemankeş Karamustafa Paşa Mahallesi, Mumhane Cd. No:45/A, 34425 Beyoğlu/İstanbul",
                aciklama:" Gram Karaköy, Karaköy semtinde yer alan modern ve şık bir restorandır. Lezzetli ve sağlıklı yemeklerin sunulduğu mekan, organik ve yerel ürünleri tercih eder. Huzurlu bir atmosferde arkadaşlarınızla keyifli bir yemek deneyimi yaşayabilirsiniz.",
                foto:"mekanlar/mekan19.png"
              }
            }
          }
        },
        
        ders: {
          sicak: {
            sakin: {
              arkadaslarimla: {
                ad:"İstanbul Kitapçısı",
                adres: "Adres:Şehir Hatları Eminönü – Karaköy İskelesi İçi 2.Kat Rıhtım Caddesi / Kadıköy",
                aciklama:" Sekiz şubesiyle hizmet veren İstanbul Kitapçısı’nın beş şubesinde, kahvenizi alıp kitabınızı okurken, doğanın ve denizin tadını çıkarabilirsiniz. İstanbul’un birbirinden güzel yerlerine konumlandırılmış beş kitap kafe konseptli İstanbul Kitapçısı’nda, kitap ve kahve kokusuyla İstanbul’a yeniden âşık olacağınız, sayfa sayfa okuyup sevdiklerinizle paylaşacağınız çok özel anlar sizleri bekliyor.",
                foto:"mekanlar/mekan30.png"
              },
              yalniz:{
                ad:"Minoa Books & Coffee",
                adres: "Adres: Vişnezade, Süleyman Seba Cd. No:52/A, 34357 Beşiktaş/İstanbul",
                aciklama:" Minoa, bağımsız bir kitabevi olarak 2014 yılında Beşiktaş Akaretler’de faaliyet göstermeye başladı. Akaretler’de üç katlı kitabevinin içinde 80 misafir kapasiteli bir kafe-brasserie bölümü yer alan Minoa aynı zamanda Nişantaşı, Levent ve Etiler’de de hem kitabevi hem de kafe olarak hizmet veriyor. Minoa kitap kafelerinde, edebiyattan sanata, fotoğrafçılıktan grafik tasarıma, bahçecilikten yeme-içme kültürüne, çocuk kitaplarından çizgi romanlara kadar pek çok alanda, sayısı 45.000’in üzerindeki Türkçe ve İngilizce kitapları bulabilir, dilediğiniz kitabı okurken kahvenizi yudumlayabilirsiniz.",
                foto:"mekanlar/mekan31.png"
              }
            },
            canli: {
              arkadaslarimla: {
                ad:"Kırmızı Kedi Books & Coffee",
                adres: "Adres: Cumhuriyet Mahallesi Çandarlı Sokak, Atatürk Blv. No:28 Atatürk Kültür Merkezi Beylikdüzü / İstanbul",
                aciklama:" Kaliteli bir kahve ile kitap keyfi yapmak isteyenlere rahat mekanlar yaratmak hedefiyle yola çıkan Books and Coffee, geliştirdiği konseptle yaşanabilir mekanlar sunuyor. Her şubesinde aynı kahvenin aynı özenle demlendiği Books and Coffee’nin inceliği, mekanın her noktasında fark ediliyor.",
                foto:"mekanlar/mekan32.png"
              },
              yalniz: {
                ad:"Tasarım Bookshop & Cafe",
                adres: "Adres: Osmanağa Mahallesi, Nevzemin sk. No:6A Bahariye / Kadıköy / İstanbul",
                aciklama:" Tasarım Bookshop & Cafe, Türkiye ve dünyadan başlıca mimarlık, dekorasyon, sanat, moda, grafik, edebiyat ve roman alanlarında sayısız yayını bünyesinde barındırıyor. Keyifli zaman geçirmek için ideal bir mekân olan Tasarım Bokkshop & Cafe’nin sakin ortamında araştırma ve çalışmaların yapılabileceği gibi kitaplar arasında keyifli sohbetler edebilir, menüdeki birbirinden lezzetli tatları deneyimleyebilirsiniz",
                foto:"mekanlar/mekan33.png"
              }
            },
            romantik: {
              arkadaslarimla: {
                ad:"Cafe Lumiere Çukurcuma",
                adres: "Adres: Kuloğlu Mah. Altıpatlar Sk. No:7, 34433 Beyoğlu / İstanbul",
                aciklama:" Hem kitaplarla dolu bir atmosfere sahip olması hem de sakin bir ortam sunmasıyla ders çalışmak için ideal bir mekandır.",
                foto:"mekanlar/mekan34.png"
              },
              yalniz: {
                ad:"Hypatia İstanbul Kitabevi & Restoran & Kafe",
                adres: "Adres: Vişnezade, Süleyman Seba Cd. No:45, 34357 Beşiktaş / İstanbul",
                aciklama:" Hem kitaplarla dolu bir atmosfere sahip olması hem de sakin bir ortam sunmasıyla ders çalışmak için ideal bir mekandır.",
                foto:"mekanlar/mekan35.png"
              }
            }
          },
          yagisli: {
            sakin: {
              arkadaslarimla:{
                 ad:" Coffee Sapiens",
                adres: "Adres: Bağdat Caddesi No:320, Caddebostan, Kadıköy, İstanbul",
                aciklama:"Coffee Sapiens, Caddebostan'da yer alan bir kahve dükkanıdır. Burası sakin bir atmosferde ders çalışmak için ideal bir mekan olabilir. Kahve dükkanının rahat ve sıcak bir ortamı bulunur, böylece odaklanmanızı kolaylaştırır.",
                foto:"mekanlar/mekan36.png"
              },
              yalniz:{
                ad:"Coffee Department",
                adres: "Adres: Tomtom Mahallesi, İstiklal Caddesi No:146, Beyoğlu, İstanbul",
                aciklama:"Coffee Department, İstiklal Caddesi üzerinde yer alan bir kahve dükkanıdır. Burası sessiz ve sakin bir atmosfere sahiptir, bu da yalnız başına ders çalışman için ideal bir ortam sunar.",
                foto:"mekanlar/mekan37.png"
              }
            },
            canli: {
              arkadaslarimla: {
                ad:"Bloom Coffee Co.",
                adres: "Adres: Cihangir Mahallesi, Sıraselviler Caddesi No:49/A, Beyoğlu, İstanbul",
                aciklama:"Bloom Coffee Co., canlı bir ortama sahip olan bir kafe ve ders çalışma mekanıdır. İstanbul'un Cihangir semtinde bulunur ve arkadaşlarınızla birlikte verimli bir ders çalışma deneyimi sunabilir.",
                foto:"mekanlar/mekan38.png"
              },
              yalniz: {
                 ad:"Drip Coffee & Books",
                adres: "Adres: Caferağa Mahallesi, Bademaltı Sokak No: 23/A, Kadıköy, İstanbul",
                aciklama:"Drip Coffee & Books, sakin bir atmosferde yalnız başına ders çalışabileceğin bir kahve ve kitap mekanıdır. Kadıköy'ün Caferağa Mahallesi'nde bulunur ve sessiz bir çalışma ortamı sunar.",
                foto:"mekanlar/mekan39.png"
              }
            },
            romantik: {
              arkadaslarimla:{
                  ad:"Petit Bistro & Café",
                adres: "Adres: Sakız Sokak No: 5, Nişantaşı, İstanbul",
                aciklama:"Petit Bistro & Café, romantik bir atmosfere sahip olan ve yalnız başına ders çalışmak için uygun bir mekandır. Nişantaşı'nda bulunan bu mekan, sakin ve huzurlu bir ortam sunar.",
                foto:"mekanlar/mekan41.png"
              },
              yalniz: {
                 ad:"Çorlulu Ali Paşa Medresesi",
                adres: "Adres: Piyer Loti Cad. No:13, Eyüp, İstanbul",
                aciklama:"Çorlulu Ali Paşa Medresesi, tarihi ve romantik bir atmosfere sahip olan bir mekandır. Eyüp semtinde bulunan bu medrese, sessiz ve sakin bir ortamda ders çalışmanızı sağlayabilir.",
                foto:"mekanlar/mekan40.png"
              }
            }
          },
          soguk: {
            sakin: {
              arkadaslarimla: {
                   ad:"Zencefil Café & Kitchen",
                adres: "Adres: Caddebostan Mahallesi, Bağdat Caddesi No: 349, Kadıköy, İstanbul",
                aciklama:"Zencefil Café & Kitchen, sıcak ve sakin bir ortama sahip olan bir mekandır. Kadıköy'ün Caddebostan Mahallesi'nde bulunur ve arkadaşlarınızla birlikte rahat bir ders çalışma ortamı sunar.",
                foto:"mekanlar/mekan42.png"
              },
              yalniz:{
                  ad:"Daire Cafe",
                adres: "Adres: Halaskargazi Cad. No: 35, Osmanbey, Şişli, İstanbul",
                aciklama:"Daire Cafe, sessiz ve huzurlu bir atmosfere sahip olan bir mekandır. Şişli'de bulunan bu mekan, yalnız başına ders çalışmak için ideal bir seçenektir.",
                foto:"mekanlar/mekan43.png"
              }
            },
            canli: {
              arkadaslarimla: {
                ad:" Ortaköy Kahve Akademisi ",
                adres: "Adres: Mecidiye Mahallesi, Ortaköy Meydanı No: 1, Beşiktaş, İstanbul",
                aciklama:"Ortaköy Kahve Akademisi, canlı bir atmosfere sahip olan bir mekandır. Ortaköy Meydanı'nda bulunan bu mekan, arkadaşlarınla birlikte enerjik bir çalışma ortamı sunar.",
                foto:"mekanlar/mekan44.png"
              },
              yalniz: {
                ad:" Brew Lab Coffee ",
                adres: "Adres: Caddebostan Mahallesi, Bağdat Caddesi No: 373, Kadıköy, İstanbul",
                aciklama:"Brew Lab Coffee, canlı bir atmosfere sahip olan ve yalnız başına ders çalışmak için ideal bir mekandır. Kadıköy'ün Caddebostan Mahallesi'nde bulunur.",
                foto:"mekanlar/mekan44.png"
              }
            },
            romantik: {
              arkadaslarimla: {
                ad:" Urban Station ",
                adres: "Adres: Şakayık Sk. No: 5, Akaretler, Beşiktaş, İstanbul",
                aciklama:"Urban Station, romantik bir atmosfere sahip olan ve arkadaşlarınla birlikte ders çalışabileceğin bir mekandır. Beşiktaş'ın Akaretler semtinde yer alır.Mekanın iç dekorasyonu şık ve modern bir tarza sahiptir. Rahat oturma alanları, geniş masalar ve hoş bir aydınlatma mevcuttur. Burada arkadaşlarınla romantik bir atmosferde ders çalışabilirsiniz.",
               foto:"mekanlar/mekan45.png"
              },
              yalniz: { 
                ad:" The House Café ",
                adres: "Adres: Abdi İpekçi Caddesi No: 7, Nişantaşı, Şişli, İstanbul",
                aciklama:"The House Café, yalnız başına ders çalışabileceğin ve romantik bir atmosferde vakit geçirebileceğin bir mekandır. Nişantaşı'ndaki Abdi İpekçi Caddesi üzerinde bulunur.Mekan, sıcak ve şık bir dekorasyona sahiptir. Rahat koltukları ve masalarıyla huzurlu bir çalışma ortamı sunar. Burada yalnız başına derslerine odaklanabilirsin.",
               foto:"mekanlar/son.png"

              }
            }
          }
        }

      };

      var oneri = oneriler[soru1Cevap][soru2Cevap][soru3Cevap][soru4Cevap];
      console.log(soru1Cevap,soru2Cevap,soru3Cevap,soru4Cevap,oneri);
      document.getElementById("soru4").style.display = "none";
      document.getElementById("mekanAdi").innerHTML = oneri.ad ;
      document.getElementById("sonuc").style.display = "block";

      document.getElementById("mekanAciklama").innerHTML=oneri.aciklama;
      document.getElementById("mekanAdres").innerHTML=oneri.adres;
    document.getElementById("mekanResim").src=oneri.foto;
    }
