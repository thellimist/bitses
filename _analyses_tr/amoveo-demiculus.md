---
layout: analysis
coin: amoveo
tldr: "Oracle Makinesi"
score: 3
researcher: demiculus
date: 2018-05-15
conclusion: "Teknoloji güçlü gözüküyor ama market egemenliğine giden yol net değil. Zack(kurucu)'in bununla alakalı fikirleri var. Yani bekleyip görmemiz gerekiyor neler olacağını. Fiyatının genel olarak artacağını düşünüyorum insanlar bunu keşfettikçe. Rahat bir şekilde coinmarketcap.com'de ilk 100e girer, muhtemelen ilk 30a da girer.
---

- Hiç bir borsada yok. ICO yapmadı.
- Kurucu(Zack) Augur ve Aeternityi kodladı. İkisi de henüz piyasaya giremedi fakat Amoveo Mart 2018de ana blokzinciri ile piyasaya girişini yaptı.
- Zack tek kurucu. Takımı yok. İşletmeci ve pazarlamacıya ihtiyacı var daha hızlı büyüyebilmesi için.
- İyi yazılım geliştiricileri kendine çekmeyi başarmış ve erkenden güçlü bir topluluk oluşturmuş.
- Naval ve Nick Szabo gibi güçlü isimler onu twitterda takip ediyor.
- Her şeyi github üzerinden yapıyorlar. Websitesi gibi şeyleri yok.
- MarketCap $6M ama henüz sadece 2 aydır kazılıyor. Yani daha bir çok koin oluşturulmamış durumda.
- Bu market cap'in baya bir artacağını fakat koin fiyatının bir okadar artmayacağını gösteriyor. Ayrıca blokzinciri içerisine kurulu yönetim modeli var, insanlar Futarchy sistemiyle nekadar token kazılabileceğini belirleyebiliyor.
- Bu da kazanların, yatırımcılara göre daha fazla dedğeri yakalayabileceğini gösteriyor.
- Tahmin piyasası oluşturarak inssanların tahminlerine iddaya girmeleri sağlanıyor. Sonuçları da oraclelar ile güvence altına alınıyor.
- POW kullanıyor (nakamoto consensus)
- Misyon açıklamasında Amoveo, derivativ piyasası için var yazıyor: https://github.com/zack-bitcoin/amoveo/blob/master/docs/mission_statement.md
- Derivativ piyasası gelişmiş ülkelerde ilerlemiş durumda fakat güney doğu asya ve Afrika bölgelerinde geride olduğundan hedef marketleri biraz daha oralar.
- 2 yönlü kanal teknolojisi mevcut. Aynı zamanda lightning network kullanarak çok yönlü takas da yapılabilir.
- Akıllı kontratlar kanalların içerisinde
- Amoveoda derivativler var, alt para birimleri değil. Böylece euro, lira, bitcoin, buğday, kahve, petrol gibi şeyleri gerçek fiyatıyla takas etmek mümkün.
- Nash dengesi insanların dürüst olmasını güvence altına alıyor. Kullanıcılar dürüst olmadığı durumda çatallanma yaşanıyor. Böylece doğruyu düşünen insanlar doğru çatala geçebiliyor. Kazıcılar doğru çatalı koruduklarında ekstra gelir elde ediyorlar ve böylece doğru çatalı korumaya çalışıyorlar.
- Zack Jae Kwon (tendermint'in kurucusu) ile bir kaç ay birlikte yaşamış.

Sorular

1. Oyun teorisi çalışıyor mu?
2. Tahmin marketleri için nekadar Txps gerekiyor? Amoveonun nekadar var?
3. Enflasyon miktarı nekadar?
4. Zack neden ASIC oluşturtmak istiyor?

Cevaplar

1. Teorik olarak oyun teorisinin çalışıyor olması gerek: https://github.com/zack-bitcoin/amoveo/blob/master/docs/design/oracle_motivations.md
2. Tahmin marketleri 1 kişi için aylık 1Tx gerektiriyor. Büyük bloklar ve sharding ile aylık 10Milyar Tx'e ulaşılabilir. En iyi çözüm değil fakat çalışan bir çözüm: https://github.com/zack-bitcoin/amoveo/blob/master/docs/design/scalability.md
3. Enflasyon miktarı optimale yakın: https://www.reddit.com/r/Amoveo/comments/8kqhwn/
4. Madencilerin sadece Amoveo kazabiliyor olmalarını istiyor. Neden diye sorduğumda da https://www.reddit.com/r/Amoveo/comments/8kqk1n/why_does_amoveo_want_asics/

Riskler

1. Futarchy sistemi blok başına 2-3-5-10 veo kazdırtabilir böylece token satın almak okadar da karlı olmayabilir. (araştırmam sonucu okadar da olası gözükmüyor)
2. Saldırılar koini komple kırabilir. (henüz saldırılar pek efektif olamadı)
3. Temelde bir teori hatalı olabilir ve sistem çalışmayabilir.
4. Aeternity, Augur takımları gibi başka birileri Amoveo teknolojisini çatallandırıp kendi pazarlama güçleriyle oracle sektörünü ele geçirebilir.
5. Zackin canı sıkılıp çalışmayı bırakabilir. (olası gözükmüyor olduğu taktirde bile Mr Flintstone gibi başka geliştiriciler projeyi devam ettirebilir)