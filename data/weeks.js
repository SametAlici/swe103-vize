window.WEEKS = [
/* ================= WEEK 1 ================= */
{ id: 1,
  title: ['Giriş, ders planı ve yönetmelikler', 'Introduction, course plan and regulations'],
  sub: ['Yazılım mühendisliği nedir? Bilgi–beceri–yetkinlik, müfredat, değerlendirme, mezuniyet ve staj', 'What is software engineering? Knowledge–skill–competence, curriculum, assessment, graduation and internship'],
  html: {
tr: `
<h2>Dersin amacı</h2>
<p>SWE 103, yazılım mühendisliği hakkında temel bilgileri verir; bölümün öğretim üyeleri ve uzmanlık alanları tanıtılır, dört yıl boyunca hangi derslerin işleneceği konuşulur. Değerlendirme kısa sınavlar/projeler, vize ve final ile yapılır. Beklenen çıktı: <b>sorunsuz bir yazılım mühendisliği lisans eğitimi</b>.</p>
<p>Bu haftanın sonunda şu sorular cevaplanabilmelidir: Yazılım mühendisliği nedir? Müfredat (curriculum) ve ders planı nedir? Mezuniyet koşulları nelerdir? Yönetmelik, yönerge ve senato kararlarına nereden bakılır?</p>

<h2>Üniversite eğitimi: Bilgi, Beceri, Yetkinlik</h2>
<div class="tw"><table>
<tr><th>Kavram</th><th>Tanım</th><th>Nasıl kazanılır / örnek</th></tr>
<tr><td><b>Bilgi</b> (Knowledge)</td><td>Bir konuyu/alanı anlamaktır; beceri ve yetkinlik gelişiminin <b>temelidir</b>.</td><td>Kitap, doküman okumak, ilgili videoları izlemek.</td></tr>
<tr><td><b>Beceri</b> (Skill)</td><td>Eğitim, pratik ve deneyimle kazanılan <b>belirli yetenekler</b>.</td><td>Yazılım problemleri çözmek, kodlama.</td></tr>
<tr><td><b>Yetkinlik</b> (Competence)</td><td>Bir işi/etkinliği <b>etkili biçimde yapabilme</b> yeteneği; sadece bilgi veya beceriye sahip olmanın ötesindedir.</td><td>Analiz, tasarım ve gerçekleştirme (implementation) kabiliyetleri.</td></tr>
</table></div>
<p>Öğrenciden yazılım mühendisliği alanında bu üçünü birlikte geliştirmesi beklenir.</p>

<h2>Yazılım mühendisliği nedir?</h2>
<ul>
<li><b>Genel tanım:</b> Kullanıcı gereksinimlerini analiz edip, bu gereksinimleri karşılayacak yazılım uygulamasını <b>tasarlama, inşa etme ve test etme</b> sürecidir.</li>
<li><b>IEEE 610.12-1990:</b> Yazılımın <b>geliştirilmesi, işletilmesi ve bakımı</b> için sistematik, disiplinli, ölçülebilir (hesaplanabilir) bir yaklaşımın uygulanmasıdır.</li>
<li><b>MÜDEK</b> (adında “yazılım” geçen programlar için ek konular):
  <ul><li>Gereksinim analizi, doğrulaması, sınaması, yönetimi ve testini içeren <b>gereksinim mühendisliği</b>,</li>
  <li><b>yazılım mimarisi</b>,</li>
  <li>karmaşık yazılım sistemlerinin doğrulanması, sınanması ve yönetimini kapsayan <b>yazılım kalite güvencesi</b> uygulamaları.</li></ul></li>
</ul>

<h2>Bölüm ve müfredat</h2>
<p>Bölüm web sitesi <code>seng.sakarya.edu.tr</code>; akademik kadro bu sitede listelenir. Ders planı (müfredat) Eğitim Bilgi Sistemi’nde (<code>ebs.sakarya.edu.tr</code>) yer alır. Bu yıl ders planı güncellenmiştir.</p>
<p>SWE 103 haftalık konuları: 1) Bölüm ve yazılım mühendisliğine giriş (oryantasyon), 2) Bilgisayar donanımı ve yazılımı, programlama temelleri, 3) Programlama dilleri ve geliştirme ortamları: editör, derleyici, hata ayıklayıcı, 4) Sürüm kontrol sistemleri: Git, GitHub hesabı, 5) Algoritmalar, 6) Yazılım mühendisliğinde etik değerler, 7) İşletim sistemleri, ikinci işletim sistemi (Linux) kurulumu…</p>

<h2>Değerlendirme</h2>
<div class="tw"><table>
<tr><th>Adet</th><th>Değerlendirme</th><th>Ağırlık</th></tr>
<tr><td>1</td><td>Vize (Midterm)</td><td>%24</td></tr>
<tr><td>4</td><td>Proje çalışması</td><td>%6 + %6 + %12 + %12 = %36</td></tr>
<tr><td>1</td><td>Final</td><td>%40</td></tr>
</table></div>
<div class="key">Toplam: 24 + 36 + 40 = <b>%100</b>. Yıl içi (vize + projeler) = %60, final = %40.</div>

<h2>Mevzuat hiyerarşisi</h2>
<p><b>Anayasa → Kanun → Yönetmelik → Yönerge → Senato esasları.</b> Üniversitenin önlisans/lisans eğitim-öğretim yönetmeliği resmî mevzuat sisteminden (KAYSİS) okunabilir.</p>

<h3>Kayıt yenileme ve derse yazılma (Madde 7, özet)</h3>
<ul>
<li>Öğrenci akademik takvimde belirtilen tarihlerde elektronik ortamda derse yazılarak kaydını yeniler ve <b>aktif öğrenci</b> statüsü kazanır; kaydını yenilemeyen öğrenci pasif statüye girer (bu dönemler öğrenim süresinden sayılır).</li>
<li>Öğrenci, alt dönemlerden <b>başarısız olduğu, hiç almadığı veya devam şartını sağlamadığı</b> derslere öncelikle yazılmak zorundadır.</li>
<li>İlk iki yarıyıl sonundan itibaren, bulunduğu döneme kadarki tüm dersleri alıp başarmış ve <b>GNO ≥ 3,00</b> olan öğrenciler bir üst sınıftan ders alabilir.</li>
<li>İkinci yarıyıldan sonra: <b>GNO &lt; 1,80</b> ise en fazla <b>25 AKTS</b>; <b>GNO ≥ 1,80</b> ise <b>30 AKTS + 10 AKTS’lik veya 2 ders</b> daha kayıt yaptırabilir.</li>
</ul>

<h3>Ders başarı notu (Madde 19)</h3>
<div class="tw"><table>
<tr><th>Derece</th><th>Not aralığı</th><th>Harf</th><th>Katsayı</th></tr>
<tr><td>Pekiyi</td><td>90–100</td><td>AA</td><td>4,00</td></tr>
<tr><td>İyi-Pekiyi</td><td>85–89,99</td><td>BA</td><td>3,50</td></tr>
<tr><td>İyi</td><td>80–84,99</td><td>BB</td><td>3,00</td></tr>
<tr><td>Orta-İyi</td><td>75–79,99</td><td>CB</td><td>2,50</td></tr>
<tr><td>Orta</td><td>65–74,99</td><td>CC</td><td>2,00</td></tr>
<tr><td>Zayıf-Orta</td><td>58–64,99</td><td>DC</td><td>1,50</td></tr>
<tr><td>Zayıf</td><td>50–57,99</td><td>DD</td><td>1,00</td></tr>
<tr><td>Başarısız</td><td>40–49,99</td><td>FD</td><td>0,50</td></tr>
<tr><td>Başarısız</td><td>0–39,99</td><td>FF</td><td>0,00</td></tr>
<tr><td>Devamsız / Sınava girmedi</td><td>—</td><td>DZ / GR</td><td>0,00</td></tr>
<tr><td>Yeterli / Yetersiz / Muaf</td><td>—</td><td>YT / YZ / MU</td><td>—</td></tr>
</table></div>

<h3>Mezuniyet (Madde 35, özet)</h3>
<ul>
<li>Öğretim planındaki <b>tüm dersleri almak ve başarmak</b>,</li>
<li><b>GNO ≥ 2,00</b> koşulunu sağlamak,</li>
<li>Dört yıllık lisans için <b>240 AKTS</b> tamamlamak (5 yıllık: 300, 6 yıllık: 360, önlisans: 120).</li>
</ul>

<h3>Staj</h3>
<p>Stajlar <b>4. ve 6. yarıyıllardan sonra</b> yapılır. Toplam <b>40 iş günü (8 hafta)</b>, her biri kesintisiz <b>20’şer iş günlük iki kısım</b>. İlk staj için en az ilk dört yarıyılın tüm derslerini almış olmak gerekir. Stajlar öğretim ve sınav dönemleri dışında yapılır.</p>
`,
en: `
<h2>Purpose of the course</h2>
<p>SWE 103 teaches the basics of software engineering; faculty members and their expertise areas are introduced and the courses of the four-year program are discussed. Assessment: quizzes/projects, a midterm and a final exam. Expected outcome: <b>a problem-free software engineering undergraduate education</b>.</p>
<p>After this week you should be able to answer: What is software engineering? What are the curriculum and course plan? What are the graduation requirements? Where can regulations, directives and senate decisions be found?</p>

<h2>University education: Knowledge, Skill, Competence</h2>
<div class="tw"><table>
<tr><th>Concept</th><th>Definition</th><th>How it is gained / example</th></tr>
<tr><td><b>Knowledge</b></td><td>Understanding of a subject or field; the <b>foundation</b> for developing skill and competence.</td><td>Reading books and documents, watching relevant videos.</td></tr>
<tr><td><b>Skill</b></td><td><b>Specific abilities</b> acquired through training, practice and experience.</td><td>Solving software problems, coding.</td></tr>
<tr><td><b>Competence</b></td><td>The ability to <b>effectively perform</b> a task or activity; goes beyond possessing knowledge or skills alone.</td><td>Analysis, design and implementation capabilities.</td></tr>
</table></div>
<p>Students are expected to develop all three in software engineering.</p>

<h2>What is software engineering?</h2>
<ul>
<li><b>General definition:</b> the process of analyzing user requirements and then <b>designing, building and testing</b> a software application that satisfies those requirements.</li>
<li><b>IEEE 610.12-1990:</b> the application of a systematic, disciplined, quantifiable (computable) approach to the <b>development, operation and maintenance</b> of software.</li>
<li><b>MÜDEK</b> (Turkish engineering accreditation; extra topics for programs with “software” in their name):
  <ul><li><b>requirements engineering</b> — analysis, validation, verification, management and testing of requirements,</li>
  <li><b>software architecture</b>,</li>
  <li><b>software quality assurance</b> — verification, testing and management of complex software systems.</li></ul></li>
</ul>

<h2>Department and curriculum</h2>
<p>Department web site: <code>seng.sakarya.edu.tr</code> (the academic staff is listed there). The curriculum is published in the Education Information System (<code>ebs.sakarya.edu.tr</code>). The course plan was updated this year.</p>
<p>SWE 103 weekly topics: 1) Introduction to the department and software engineering (orientation), 2) Computer hardware and software, programming fundamentals, 3) Programming languages and development environments: editors, compilers, debuggers, 4) Version control: Git, having a GitHub account, 5) Algorithms, 6) Ethics in software engineering, 7) Operating systems, installing a second OS (Linux)…</p>

<h2>Assessment</h2>
<div class="tw"><table>
<tr><th>Quantity</th><th>Assessment</th><th>Weight</th></tr>
<tr><td>1</td><td>Midterm</td><td>24%</td></tr>
<tr><td>4</td><td>Project work</td><td>6% + 6% + 12% + 12% = 36%</td></tr>
<tr><td>1</td><td>Final</td><td>40%</td></tr>
</table></div>
<div class="key">Total: 24 + 36 + 40 = <b>100%</b>. In-term (midterm + projects) = 60%, final = 40%.</div>

<h2>Legislation hierarchy</h2>
<p><b>Constitution → Law → Regulation → Directive → Senate principles</b> (Anayasa, kanun, yönetmelik, yönerge, senato esasları). The university’s undergraduate education regulation can be read on the official legislation system (KAYSİS).</p>

<h3>Registration and course enrollment (Article 7, summary)</h3>
<ul>
<li>Students renew their registration by enrolling in courses online on the dates in the academic calendar and become <b>active students</b>; those who do not renew become passive (these semesters still count toward the study period).</li>
<li>Students must first enroll in lower-semester courses they <b>failed, never took, or did not meet attendance</b> for.</li>
<li>From the end of the first two semesters, students who have taken and passed all courses up to their semester and have a <b>GPA ≥ 3.00</b> may take courses from one class above.</li>
<li>After the second semester: with <b>GPA &lt; 1.80</b> at most <b>25 ECTS</b>; with <b>GPA ≥ 1.80</b> <b>30 ECTS + another 10 ECTS or 2 courses</b>.</li>
</ul>

<h3>Course grades (Article 19)</h3>
<div class="tw"><table>
<tr><th>Degree</th><th>Score</th><th>Letter</th><th>Coefficient</th></tr>
<tr><td>Excellent</td><td>90–100</td><td>AA</td><td>4.00</td></tr>
<tr><td>Very good</td><td>85–89.99</td><td>BA</td><td>3.50</td></tr>
<tr><td>Good</td><td>80–84.99</td><td>BB</td><td>3.00</td></tr>
<tr><td>Fairly good</td><td>75–79.99</td><td>CB</td><td>2.50</td></tr>
<tr><td>Average</td><td>65–74.99</td><td>CC</td><td>2.00</td></tr>
<tr><td>Below average</td><td>58–64.99</td><td>DC</td><td>1.50</td></tr>
<tr><td>Poor</td><td>50–57.99</td><td>DD</td><td>1.00</td></tr>
<tr><td>Fail</td><td>40–49.99</td><td>FD</td><td>0.50</td></tr>
<tr><td>Fail</td><td>0–39.99</td><td>FF</td><td>0.00</td></tr>
<tr><td>Absent / Did not take exam</td><td>—</td><td>DZ / GR</td><td>0.00</td></tr>
<tr><td>Sufficient / Insufficient / Exempt</td><td>—</td><td>YT / YZ / MU</td><td>—</td></tr>
</table></div>

<h3>Graduation (Article 35, summary)</h3>
<ul>
<li>Take and <b>pass all courses</b> in the curriculum,</li>
<li>have a <b>GPA ≥ 2.00</b>,</li>
<li>complete <b>240 ECTS</b> for a four-year bachelor’s degree (5-year: 300, 6-year: 360, associate: 120).</li>
</ul>

<h3>Internship</h3>
<p>Internships are done <b>after the 4th and 6th semesters</b>: a total of <b>40 working days (8 weeks)</b> in <b>two uninterrupted parts of 20 working days</b>. For the first internship, all courses of at least the first four semesters must have been taken. Internships are done outside teaching and exam periods.</p>
`}},

/* ================= WEEK 2 ================= */
{ id: 2,
  title: ['Bilgisayar ve yazılım', 'Computer and software'],
  sub: ['Bilgisayar mimarisi, veri gösterimi, sayı sistemleri, ASCII/UTF, görüntüler, program, derleyiciler, hata türleri', 'Computer architecture, data representation, number systems, ASCII/UTF, images, programs, compilers, error types'],
  html: {
tr: `
<h2>Bilgisayar nedir?</h2>
<p>Oxford tanımı: Bilgiyi <b>depolayabilen, düzenleyebilen ve bulabilen</b>, sayılar ve diğer verilerle işlem yapabilen ve <b>başka makineleri kontrol edebilen</b> elektronik makine.</p>

<h2>Bilgisayarın yapısı</h2>
<p>Modern bilgisayarda <b>CPU</b>, <b>bellek (memory)</b> ve <b>G/Ç (IO) aygıtları</b> ortak bir yol (bus) üzerinden haberleşir. Aygıtlar doğrudan değil, <b>denetleyiciler</b> üzerinden bağlanır: diskler → <i>disk controller</i>, fare/klavye/yazıcı → <i>USB controller</i>, monitör → <i>graphics adapter</i>.</p>
<h3>CPU (Merkezi İşlem Birimi)</h3>
<ul>
<li><b>Kontrol birimi (Control Unit)</b> – komutların yürütülmesini yönetir,</li>
<li><b>Aritmetik/Mantık birimi (ALU)</b> – aritmetik ve mantıksal işlemler,</li>
<li><b>Yazmaçlar (Registers)</b> – CPU içindeki çok hızlı küçük depolama alanları.</li>
</ul>
<p>CPU bellek birimiyle karşılıklı veri alışverişi yapar; girdi aygıtından gelen veri işlenir, çıktı aygıtına gönderilir.</p>
<h3>RAM ve DRAM</h3>
<p><b>RAM</b> = Random Access Memory. <b>DRAM</b> (Dinamik RAM) 1966’da IBM’de <b>Robert Dennard</b> tarafından icat edildi. Temel hücre <b>bir transistör + bir kondansatör</b>dür: <b>dolu kondansatör = 1</b>, <b>boş kondansatör = 0</b>. Yazma/okuma <i>wordline</i> ve <i>bitline</i> üzerinden yapılır.</p>
<h3>Depolama: HDD ve SSD</h3>
<ul>
<li><b>HDD</b> (Hard Disk Drive): mekanik — plakalar (platters), mil (spindle), okuma/yazma kafası (R/W head), aktüatör kolu.</li>
<li><b>SSD</b> (Solid State Drive): hareketli parça yok — <b>NAND flash bellek</b>, denetleyici (controller), önbellek (cache).</li>
</ul>
<h3>USB</h3><p><b>Universal Serial Bus</b> – evrensel seri veri yolu.</p>

<h2>Veri bilgisayarda nasıl saklanır?</h2>
<p>Veri bir sayı, bir karakter, bir görüntü ya da bir nesne olabilir; hepsi sonunda <b>bit</b>lerle (0/1) temsil edilir.</p>
<div class="tw"><table>
<tr><th>Birim</th><th>Bit</th><th>İşaretsiz aralık</th></tr>
<tr><td>Bit</td><td>1</td><td>0–1</td></tr>
<tr><td>Nibble</td><td>4</td><td>0–15</td></tr>
<tr><td>Byte</td><td>8</td><td>0–255</td></tr>
<tr><td>Word</td><td>16</td><td>0–65 535</td></tr>
<tr><td>Double word (DWORD)</td><td>32</td><td>0–4 294 967 295</td></tr>
<tr><td>Quad word (QWORD)</td><td>64</td><td>0–18 446 744 073 709 551 615</td></tr>
</table></div>
<div class="key">n bit ile 2<sup>n</sup> farklı değer, işaretsiz olarak 0 … 2<sup>n</sup>−1 aralığı gösterilir. Günümüz bilgisayarları <b>64 bit</b> genişliğinde veri yoluna sahiptir.</div>

<h2>Sayı sistemleri</h2>
<p>Onluk (decimal, taban 10), ikilik (binary, 2), sekizlik (octal, 8), onaltılık (hexadecimal, 16). Onaltılıkta 10–15 → <b>A–F</b>.</p>
<div class="tw"><table>
<tr><th>Dec</th><th>Bin</th><th>Oct</th><th>Hex</th></tr>
<tr><td>8</td><td>1000</td><td>10</td><td>8</td></tr>
<tr><td>10</td><td>1010</td><td>12</td><td>A</td></tr>
<tr><td>12</td><td>1100</td><td>14</td><td>C</td></tr>
<tr><td>15</td><td>1111</td><td>17</td><td>F</td></tr>
</table></div>
<h3>Örnek: 348<sub>10</sub></h3>
<ul>
<li><b>Onluk → ikilik:</b> 348 = 256 + 64 + 16 + 8 + 4 → <b>101011100<sub>2</sub></b></li>
<li><b>İkilik → sekizlik:</b> sağdan 3’erli grupla: 101 011 100 → <b>534<sub>8</sub></b></li>
<li><b>İkilik → onaltılık:</b> sağdan 4’erli grupla: 1 0101 1100 → 1 5 C → <b>15C<sub>16</sub></b></li>
<li><b>Kontrol:</b> 1·256 + 5·16 + 12 = 348 ✓; 5·64 + 3·8 + 4 = 348 ✓</li>
</ul>
<p>Kural: bir sekizlik basamak = 3 bit, bir onaltılık basamak = 4 bit (= 1 nibble). Onluktan ikiliğe çevirmek için sürekli 2’ye bölünüp kalanlar alttan yukarı okunur.</p>

<h2>Karakterler: ASCII ve UTF</h2>
<p><b>ASCII</b> = American Standard Code for Information Interchange. <b>7 bit</b>, <b>128 karakter</b> (0–127).</p>
<ul>
<li>0–31: <b>kontrol karakterleri</b> (ör. NUL=0, BEL=7, BS=8, HT=9, <b>LF=10</b>, <b>CR=13</b>, ESC=27); 127 = DEL</li>
<li>32 = <b>boşluk</b> (0x20); <b>'0'</b> = 48 (0x30) … '9' = 57</li>
<li><b>'A'</b> = 65 (0x41) … 'Z' = 90; <b>'a'</b> = 97 (0x61) … 'z' = 122</li>
<li>Büyük ve küçük harf arasındaki fark <b>32</b>’dir (0x20).</li>
</ul>
<p>ASCII Türkçe/Kiril gibi harfleri kapsamaz. <b>UTF</b> = Unicode Transformation Format. <b>UTF-8</b> değişken uzunluklu (1–4 bayt) kodlamadır ve ilk 128 karakteri ASCII ile aynıdır; <b>UTF-16</b> 16 bitlik birimler kullanır.</p>

<h2>Görüntüler nasıl temsil edilir?</h2>
<p>Görüntü, <b>piksel</b>lerden oluşan bir sayı matrisidir. Gri tonlamalı görüntüde her piksel bir sayıdır (genelde 0 = siyah, 255 = beyaz; 1 bayt). Renkli görüntüde <b>3 renk kanalı</b> (R, G, B) vardır; örneğin 4×4 piksellik renkli görüntü 4·4·3 = <b>48</b> sayı ile ifade edilir ve bu sayılar tek bir vektöre (x) dizilebilir.</p>

<h2>Bilgisayar programı ve akış şeması</h2>
<p><b>Program:</b> Bir programlama dilinde yazılmış, bilgisayarın yürüteceği <b>komutlar dizisi/kümesi</b>.</p>
<p><b>Akış şeması (flowchart):</b> Bir algoritmayı, iş akışını ya da süreci temsil eden diyagram; adımlar çeşitli kutularla gösterilir ve sırası oklarla bağlanır. Süreci kelimeler yerine <b>sembollerle</b> anlatır — kısaca veri akışının görsel temsili.</p>
<p>Diller: C, C++, Fortran, Java, Kotlin, .NET (C#, VB…), Python, Go, JavaScript, Scala…</p>

<h2>Araçlar: editör, derleyici</h2>
<ul>
<li><b>Editör (metin editörü):</b> Kullanıcının metin dosyaları oluşturup düzenlemesini sağlayan program.</li>
<li><b>Derleyici (compiler):</b> Bir programlama dilindeki kaynak kodu <b>makine koduna, bytecode’a veya başka bir programlama diline</b> çeviren özel program. Yüksek seviyeli program → derleyici → düşük seviyeli program.</li>
</ul>
<h3>C/C++ derleme zinciri</h3>
<p><code>.c/.cpp</code> kaynak kod → <b>derleyici</b> (hatalar burada raporlanır) → <code>.obj</code> nesne kodu → (bağlayıcı/linker) → <code>.exe</code> çalıştırılabilir kod → girdi alır, çıktı üretir. GNU dünyasında derleyici <b>GCC</b>’dir.</p>
<h3>Java</h3>
<p>Geliştirici <code>Test.java</code> yazar → <b>javac</b> derler → <b>bytecode</b> (<code>.class</code>) üretilir → <b>JVM</b> (Java Virtual Machine) bytecode’u işletim sistemi üzerinde yorumlar/çalıştırır.</p>
<h3>.NET</h3>
<p>C#, F#, VB derleyicileri ortak ara dile (<b>MSIL</b> + metadata) derler; <b>FCL</b> (Framework Class Library) kullanılır; <b>CLR</b> içindeki <b>JIT</b> derleyici ara kodu çalışma anında <b>native (makine) koda</b> çevirir.</p>
<h3>Python</h3>
<p>Python yorumlayıcısı (interpreter) içinde: kaynak kod → derleyici → <b>bytecode</b> → <b>Python Virtual Machine (PVM)</b>; PVM girdi ve kütüphane modüllerini kullanarak kodu çalıştırır.</p>
<h3>JavaScript</h3>
<p>Tarayıcıda (veya Node gibi bir sanal makinede) çalışır; motor kaynağı önce <b>soyut sözdizimi ağacına (AST — Abstract Syntax Tree)</b> çevirir. Java ile JavaScript farklı dillerdir.</p>

<h2>Programlama hataları ve kim yakalar?</h2>
<div class="tw"><table>
<tr><th>Hata türü</th><th>Yakalayan</th></tr>
<tr><td>Sözdizimi (syntax) ve anlamsal (semantic) hatalar</td><td><b>Derleyici</b></td></tr>
<tr><td>Çalışma zamanı (runtime) hataları</td><td><b>Hata ayıklayıcı (debugger)</b></td></tr>
<tr><td>Bağlayıcı (linker) hataları</td><td><b>Linker</b></td></tr>
<tr><td>Mantık (logical) hataları</td><td><b>Kapsamlı testler</b></td></tr>
</table></div>
`,
en: `
<h2>What is a computer?</h2>
<p>Oxford definition: an electronic machine that can <b>store, organize and find</b> information, do processes with numbers and other data, and <b>control other machines</b>.</p>

<h2>Computer structure</h2>
<p>In a modern computer the <b>CPU</b>, <b>memory</b> and <b>IO devices</b> communicate over a shared bus. Devices are attached through <b>controllers</b>: disks → <i>disk controller</i>, mouse/keyboard/printer → <i>USB controller</i>, monitor → <i>graphics adapter</i>.</p>
<h3>CPU (Central Processing Unit)</h3>
<ul>
<li><b>Control Unit</b> – directs the execution of instructions,</li>
<li><b>Arithmetic/Logical Unit (ALU)</b> – arithmetic and logic operations,</li>
<li><b>Registers</b> – very fast small storage inside the CPU.</li>
</ul>
<p>The CPU exchanges data with the memory unit; input from a device is processed and sent to an output device.</p>
<h3>RAM and DRAM</h3>
<p><b>RAM</b> = Random Access Memory. <b>DRAM</b> (Dynamic RAM) was invented by <b>Robert Dennard</b> at IBM in 1966. Its basic cell is <b>one transistor + one capacitor</b>: <b>charged capacitor = 1</b>, <b>discharged = 0</b>. Charging/discharging is done via the <i>wordline</i> and <i>bitline</i>.</p>
<h3>Storage: HDD and SSD</h3>
<ul>
<li><b>HDD</b> (Hard Disk Drive): mechanical — platters, spindle, read/write head, actuator arm.</li>
<li><b>SSD</b> (Solid State Drive): no moving parts — <b>NAND flash memory</b>, controller, cache.</li>
</ul>
<h3>USB</h3><p><b>Universal Serial Bus</b>.</p>

<h2>How is data stored?</h2>
<p>Data can be a number, a character, an image or an object; all are ultimately represented with <b>bits</b> (0/1).</p>
<div class="tw"><table>
<tr><th>Unit</th><th>Bits</th><th>Unsigned range</th></tr>
<tr><td>Bit</td><td>1</td><td>0–1</td></tr>
<tr><td>Nibble</td><td>4</td><td>0–15</td></tr>
<tr><td>Byte</td><td>8</td><td>0–255</td></tr>
<tr><td>Word</td><td>16</td><td>0–65,535</td></tr>
<tr><td>Double word (DWORD)</td><td>32</td><td>0–4,294,967,295</td></tr>
<tr><td>Quad word (QWORD)</td><td>64</td><td>0–18,446,744,073,709,551,615</td></tr>
</table></div>
<div class="key">n bits give 2<sup>n</sup> values, i.e. 0 … 2<sup>n</sup>−1 unsigned. Current computers have a <b>64-bit</b> wide data path.</div>

<h2>Number systems</h2>
<p>Decimal (base 10), binary (2), octal (8), hexadecimal (16). In hex, 10–15 → <b>A–F</b>.</p>
<div class="tw"><table>
<tr><th>Dec</th><th>Bin</th><th>Oct</th><th>Hex</th></tr>
<tr><td>8</td><td>1000</td><td>10</td><td>8</td></tr>
<tr><td>10</td><td>1010</td><td>12</td><td>A</td></tr>
<tr><td>12</td><td>1100</td><td>14</td><td>C</td></tr>
<tr><td>15</td><td>1111</td><td>17</td><td>F</td></tr>
</table></div>
<h3>Example: 348<sub>10</sub></h3>
<ul>
<li><b>Decimal → binary:</b> 348 = 256 + 64 + 16 + 8 + 4 → <b>101011100<sub>2</sub></b></li>
<li><b>Binary → octal:</b> group by 3 from the right: 101 011 100 → <b>534<sub>8</sub></b></li>
<li><b>Binary → hex:</b> group by 4 from the right: 1 0101 1100 → 1 5 C → <b>15C<sub>16</sub></b></li>
<li><b>Check:</b> 1·256 + 5·16 + 12 = 348 ✓; 5·64 + 3·8 + 4 = 348 ✓</li>
</ul>
<p>Rule: one octal digit = 3 bits, one hex digit = 4 bits (= one nibble). To convert decimal to binary, divide by 2 repeatedly and read the remainders from bottom to top.</p>

<h2>Characters: ASCII and UTF</h2>
<p><b>ASCII</b> = American Standard Code for Information Interchange. <b>7 bits</b>, <b>128 characters</b> (0–127).</p>
<ul>
<li>0–31: <b>control characters</b> (e.g. NUL=0, BEL=7, BS=8, HT=9, <b>LF=10</b>, <b>CR=13</b>, ESC=27); 127 = DEL</li>
<li>32 = <b>space</b> (0x20); <b>'0'</b> = 48 (0x30) … '9' = 57</li>
<li><b>'A'</b> = 65 (0x41) … 'Z' = 90; <b>'a'</b> = 97 (0x61) … 'z' = 122</li>
<li>Upper and lower case letters differ by <b>32</b> (0x20).</li>
</ul>
<p>ASCII does not cover Turkish or Cyrillic letters. <b>UTF</b> = Unicode Transformation Format. <b>UTF-8</b> is a variable-length (1–4 byte) encoding whose first 128 characters are identical to ASCII; <b>UTF-16</b> uses 16-bit units.</p>

<h2>How are images represented?</h2>
<p>An image is a matrix of numbers made of <b>pixels</b>. In a grayscale image each pixel is one number (typically 0 = black, 255 = white; one byte). A color image has <b>3 color channels</b> (R, G, B); e.g. a 4×4-pixel color image is described by 4·4·3 = <b>48</b> numbers, which can be flattened into one vector (x).</p>

<h2>Computer program and flowchart</h2>
<p><b>Program:</b> a sequence or set of <b>instructions</b> in a programming language for a computer to execute.</p>
<p><b>Flowchart:</b> a diagram representing an algorithm, workflow or process; steps are shown as boxes of various kinds, ordered by connecting arrows. It describes a process using <b>symbols rather than words</b> — simply, a visual representation of data flow.</p>
<p>Languages: C, C++, Fortran, Java, Kotlin, .NET (C#, VB…), Python, Go, JavaScript, Scala…</p>

<h2>Tools: editor, compiler</h2>
<ul>
<li><b>Editor (text editor):</b> software that lets the user create and edit text files.</li>
<li><b>Compiler:</b> a special program that translates source code into <b>machine code, bytecode or another programming language</b>. High-level program → compiler → low-level program.</li>
</ul>
<h3>C/C++ build chain</h3>
<p><code>.c/.cpp</code> source code → <b>compiler</b> (errors reported here) → <code>.obj</code> object code → (linker) → <code>.exe</code> executable → takes input, produces output. In the GNU world the compiler is <b>GCC</b>.</p>
<h3>Java</h3>
<p>The developer writes <code>Test.java</code> → <b>javac</b> compiles it → <b>bytecode</b> (<code>.class</code>) is generated → the <b>JVM</b> (Java Virtual Machine) interprets/executes it on the operating system.</p>
<h3>.NET</h3>
<p>C#, F#, VB compilers produce a common intermediate language (<b>MSIL</b> + metadata), using the <b>FCL</b> (Framework Class Library); the <b>JIT</b> compiler inside the <b>CLR</b> turns it into <b>native code</b> at run time.</p>
<h3>Python</h3>
<p>Inside the Python interpreter: source code → compiler → <b>bytecode</b> → <b>Python Virtual Machine (PVM)</b>, which runs the code using input and library modules.</p>
<h3>JavaScript</h3>
<p>Runs in the browser (or a virtual machine such as Node); the engine first turns the source into an <b>Abstract Syntax Tree (AST)</b>. Java and JavaScript are different languages.</p>

<h2>Programming errors and who catches them</h2>
<div class="tw"><table>
<tr><th>Error type</th><th>Caught by</th></tr>
<tr><td>Syntax and semantic errors</td><td><b>Compiler</b></td></tr>
<tr><td>Runtime errors</td><td><b>Debugger</b></td></tr>
<tr><td>Linker errors</td><td><b>Linker</b></td></tr>
<tr><td>Logical errors</td><td><b>Extensive tests</b></td></tr>
</table></div>
`}},

/* ================= WEEK 3 ================= */
{ id: 3,
  title: ['Yazılım geliştirme araçları ve deneyim', 'Software development tools and experience'],
  sub: ['Dosyalar (metin/ikili/görüntü), örnek proje C/Java/Python/C#/JS, assembler, program vs süreç, hata ayıklama, IDE’ler', 'Files (text/binary/image), sample project in C/Java/Python/C#/JS, assembler, program vs process, debugging, IDEs'],
  html: {
tr: `
<h2>Dosyalar</h2>
<p>Dosya türü genelde <b>dosya adı uzantısı</b>ndan anlaşılır (<code>.txt</code>, <code>.c</code>, <code>.jpg</code>, <code>.class</code>…). Ancak her dosya sonuçta baytlardan oluşur.</p>
<ul>
<li><b>Metin dosyası:</b> <code>gedit f1.txt</code> ile düzenlenir; <code>hexedit f1.txt</code> ile aynı dosyanın baytları onaltılık (hex) olarak görülür — her karakter ASCII/UTF kodudur.</li>
<li><b>İkili (binary) ve görüntü dosyaları:</b> Bazı editörlerin <b>hex modu</b> vardır; örn. <b>Emacs</b> ikili içeriği gösterebilir. Ünlü test görüntüsü “Lena” (<code>story_lena_lenna_1.jpg</code>) bu şekilde incelenmiştir.</li>
<li><b>Emacs</b>: ücretsiz, çok işlevli editör; hem metin hem ikili dosyaları düzenleyebilir.</li>
</ul>

<h2>Örnek proje: 0–9 arası 10 rastgele tam sayı üret</h2>
<p>Önce akış şeması (ör. <b>StarUML</b> ile) çizilir, sonra aynı problem farklı dillerde yazılır.</p>
<h3>C</h3>
<pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;time.h&gt;
int main() {
    srand(time(0));                 // tohum (seed)
    for (int counter = 0; counter &lt; 10; counter++) {
        int n = rand() % 10;        // 0..9
        printf("counter = %d \\tn = %d\\n", counter, n);
    }
    return 0;
}</code></pre>
<ul>
<li>Derleyici: <b>GNU C Compiler (gcc)</b>.</li>
<li>Bir fonksiyonun kullanımı için Linux kılavuz sayfaları: <code>man srand</code>.</li>
<li><code>gcc -S p2.c</code> → <code>p2.s</code>: <b>assembler (Intel x86_64 komutları)</b> kodu üretir. <code>p2.c</code> yüksek seviyeli kaynak kod, <code>p2.s</code> derlenmiş assembler kodu, <code>p2</code> makine kodu (çalıştırılabilir). Assembler kodu da derlenebilir.</li>
</ul>
<h3>Java</h3>
<p>Kaynak dosya <code>Rnd.java</code> → <code>javac Rnd.java</code> → bytecode dosyası <code>Rnd.class</code>. <code>java Rnd</code> yazılınca <b>Java VM</b> başlar ve bytecode’u makine diline çevirir.</p>
<h3>Python</h3>
<p><b>Derleme adımı yok</b> (kullanıcı açısından). Python <b>yorumlanan (interpreter)</b> bir dildir: anında (on-the-fly) derlenir ve hemen çalıştırılır. Bir <b>sözdizimi hatası</b> varsa çalıştırma <b>hiç başlamaz</b>.</p>
<h3>C#</h3>
<p>Linux’ta <b>mono</b> ile derlenir; Windows’ta derleyici <code>csc.exe</code>’dir.</p>
<h3>JavaScript</h3>
<p>Bilgisayarda çalıştırmak için <b>Node</b> (nodejs.org) kurulu olmalıdır. Tarayıcıda ise <b>geliştirici araçları</b> <kbd>F12</kbd> veya <kbd>Ctrl+Shift+I</kbd> ile açılır ve konsolda JS çalıştırılabilir.</p>

<h2>Program ve süreç (process)</h2>
<div class="tw"><table>
<tr><th>Program</th><th>Süreç (Process)</th></tr>
<tr><td>Belirli bir işi yapmak için yazılmış komutları içeren <b>dosya</b>.</td><td>Bir programın <b>yürütülmesi (çalışan hâli)</b>.</td></tr>
<tr><td><b>Pasif</b> varlık.</td><td><b>Aktif</b> varlık.</td></tr>
</table></div>
<p>Aynı programdan birden çok süreç çalışabilir. Süreçler Linux’ta (ör. <code>ps</code>, <code>top</code>) ve Windows’ta (Görev Yöneticisi) izlenebilir.</p>

<h2>Hata ayıklama (debugging)</h2>
<p>Bilgisayar programlarında, yazılımlarda veya sistemlerde doğru çalışmayı engelleyen <b>hataları (bug) bulma ve giderme</b> sürecidir. Taktikler: etkileşimli hata ayıklama, kontrol akışı analizi, birim testi, entegrasyon testi, log analizi, uygulama/sistem düzeyinde izleme, bellek dökümleri (memory dump), profilleme. Bu işe yarayan programlara <b>debugger</b> denir.</p>
<ul>
<li>GNU C/C++ hata ayıklayıcısı: <b>gdb</b>.</li>
<li>Hata ayıklayıcı ile program adım adım çalıştırılarak <b>hatalı satır bulunur</b>.</li>
</ul>

<h2>IDE’ler</h2>
<p><b>IDE</b> (Integrated Development Environment): <b>editör, derleyici ve hata ayıklayıcı</b> bir arada. Çoğu IDE öğrencilere ücretsizdir.</p>
<div class="tw"><table>
<tr><th>Dil</th><th>IDE’ler</th></tr>
<tr><td>C/C++</td><td>CLion (JetBrains), Eclipse (ücretsiz, açık kaynak), Visual Studio (ücretli)</td></tr>
<tr><td>Java</td><td>IntelliJ IDEA (JetBrains, ücretli), Eclipse, NetBeans (Oracle, ücretsiz)</td></tr>
<tr><td>C#</td><td>Visual Studio (ücretli), VS Code (ücretsiz)</td></tr>
<tr><td>Python</td><td>PyCharm (JetBrains, ücretli), VS Code, Jupyter, Spyder (ücretsiz/açık kaynak)</td></tr>
<tr><td>JavaScript</td><td>WebStorm (JetBrains, ücretli), Eclipse, Komodo (ücretli)</td></tr>
</table></div>
`,
en: `
<h2>Files</h2>
<p>A file’s type is usually indicated by its <b>file name extension</b> (<code>.txt</code>, <code>.c</code>, <code>.jpg</code>, <code>.class</code>…), but every file is ultimately just bytes.</p>
<ul>
<li><b>Text file:</b> edited with <code>gedit f1.txt</code>; <code>hexedit f1.txt</code> shows the same file’s bytes in hexadecimal — each character is its ASCII/UTF code.</li>
<li><b>Binary and image files:</b> some editors have a <b>hex mode</b>; e.g. <b>Emacs</b> can show binary content. The well-known test image “Lena” (<code>story_lena_lenna_1.jpg</code>) was examined this way.</li>
<li><b>Emacs</b>: a free, multifunctional editor that can edit both text and binary files.</li>
</ul>

<h2>Sample project: generate 10 random integers in [0–9]</h2>
<p>First a flowchart is drawn (e.g. with <b>StarUML</b>), then the same problem is coded in several languages.</p>
<h3>C</h3>
<pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;time.h&gt;
int main() {
    srand(time(0));                 // seed
    for (int counter = 0; counter &lt; 10; counter++) {
        int n = rand() % 10;        // 0..9
        printf("counter = %d \\tn = %d\\n", counter, n);
    }
    return 0;
}</code></pre>
<ul>
<li>Compiler: <b>GNU C Compiler (gcc)</b>.</li>
<li>Linux manual pages explain a function: <code>man srand</code>.</li>
<li><code>gcc -S p2.c</code> → <code>p2.s</code>: produces <b>assembler code (Intel x86_64 instructions)</b>. <code>p2.c</code> is high-level source, <code>p2.s</code> compiled assembler code, <code>p2</code> machine code (executable). Assembler code can be compiled as well.</li>
</ul>
<h3>Java</h3>
<p>Source file <code>Rnd.java</code> → <code>javac Rnd.java</code> → bytecode file <code>Rnd.class</code>. Typing <code>java Rnd</code> starts the <b>Java VM</b>, which converts the bytecode to machine language.</p>
<h3>Python</h3>
<p><b>No (visible) compilation step.</b> Python is an <b>interpreted</b> language: it is compiled on the fly and executed immediately. If a <b>syntax error</b> is found, execution <b>will not start</b>.</p>
<h3>C#</h3>
<p>Compiled with <b>mono</b> on Linux; on Windows the compiler is <code>csc.exe</code>.</p>
<h3>JavaScript</h3>
<p><b>Node</b> (nodejs.org) must be installed to run it on your computer. In a browser, <b>developer tools</b> open with <kbd>F12</kbd> or <kbd>Ctrl+Shift+I</kbd>, and JS can be run in the console.</p>

<h2>Programs versus processes</h2>
<div class="tw"><table>
<tr><th>Program</th><th>Process</th></tr>
<tr><td>A <b>file</b> containing a set of instructions written to complete a specific job.</td><td>An <b>execution</b> of a specific program.</td></tr>
<tr><td><b>Passive</b> entity.</td><td><b>Active</b> entity.</td></tr>
</table></div>
<p>Several processes can run from the same program. Processes can be viewed on Linux (e.g. <code>ps</code>, <code>top</code>) and Windows (Task Manager).</p>

<h2>Debugging</h2>
<p>The process of <b>finding and resolving bugs</b> (defects that prevent correct operation) in programs, software or systems. Tactics: interactive debugging, control-flow analysis, unit testing, integration testing, log-file analysis, application/system-level monitoring, memory dumps and profiling. Programs that help with this are called <b>debuggers</b>.</p>
<ul>
<li>GNU C/C++ debugger: <b>gdb</b>.</li>
<li>With a debugger you step through the program to <b>find the erroneous line</b>.</li>
</ul>

<h2>IDEs</h2>
<p><b>IDE</b> (Integrated Development Environment): <b>editor, compiler and debugger</b> integrated. Most IDEs are free for students.</p>
<div class="tw"><table>
<tr><th>Language</th><th>IDEs</th></tr>
<tr><td>C/C++</td><td>CLion (JetBrains), Eclipse (free, open source), Visual Studio (paid)</td></tr>
<tr><td>Java</td><td>IntelliJ IDEA (JetBrains, paid), Eclipse, NetBeans (Oracle, free)</td></tr>
<tr><td>C#</td><td>Visual Studio (paid), VS Code (free)</td></tr>
<tr><td>Python</td><td>PyCharm (JetBrains, paid), VS Code, Jupyter, Spyder (free/open source)</td></tr>
<tr><td>JavaScript</td><td>WebStorm (JetBrains, paid), Eclipse, Komodo (paid)</td></tr>
</table></div>
`}},

/* ================= WEEK 4 ================= */
{ id: 4,
  title: ['Sürüm kontrolü ve Git', 'Revision control and Git'],
  sub: ['Dosya paylaşımı, RCS, Git, GitHub; clone/add/commit/push/pull, branch/checkout/status, pull request, GitHub Desktop', 'File sharing, RCS, Git, GitHub; clone/add/commit/push/pull, branch/checkout/status, pull request, GitHub Desktop'],
  html: {
tr: `
<h2>Dosya paylaşım araçları ve sürüm kontrolü</h2>
<p><b>Google Drive</b>, <b>Dropbox</b> gibi araçlar dosyaları bulutta paylaşmak/eşitlemek için kullanılır. Ancak yazılım geliştirmede kimin neyi, ne zaman, neden değiştirdiğini izlemek, değişiklikleri birleştirmek ve eski sürümlere dönebilmek gerekir: bunun için <b>sürüm kontrol sistemleri (VCS)</b> kullanılır.</p>

<h2>RCS (eski)</h2>
<p><b>Revision Control System</b>, dosyaların birden çok revizyonunu yönetir; revizyonların <b>saklanmasını, geri alınmasını, kaydının tutulmasını, tanımlanmasını ve birleştirilmesini</b> otomatikleştirir. Kaynak kod, doküman gibi sık değişen metinler için uygundur. İlk olarak 1980’lerin başında <b>Purdue Üniversitesi</b>’nde <b>Walter F. Tichy</b> tarafından geliştirildi (GNU projesi).</p>

<h2>Git (yeni)</h2>
<p><b>Git</b>, herhangi bir bilgisayar dosyası kümesindeki değişiklikleri izleyen <b>dağıtık (distributed)</b> bir sürüm kontrol sistemidir. Her geliştiricinin bilgisayarında deponun tam bir kopyası (yerel depo) bulunur.</p>

<h2>GitHub</h2>
<p>Git kullanarak yazılım geliştirme ve sürüm kontrolü için <b>bulut tabanlı bir platform</b>dur. Git’in dağıtık sürüm kontrolüne ek olarak <b>erişim kontrolü, hata takibi (bug tracking), özellik istekleri, görev yönetimi, sürekli entegrasyon (CI) ve wiki</b> sağlar. Merkezi Kaliforniya’dadır; <b>2018’den beri Microsoft</b>’un yan kuruluşudur. Alternatif: <b>Bitbucket</b>.</p>

<h2>Temel Git komutları</h2>
<div class="tw"><table>
<tr><th>Komut</th><th>İşlev</th></tr>
<tr><td><code>git clone &lt;adres&gt;</code></td><td>Uzak depoyu yerele kopyalar.</td></tr>
<tr><td><code>git init</code></td><td>Yeni (boş) bir depo başlatır.</td></tr>
<tr><td><code>git add &lt;dosya&gt;</code> / <code>git add .</code></td><td>Değişikliği <b>sahneler (staging)</b>; “.” tüm değişiklikleri ekler.</td></tr>
<tr><td><code>git commit -m "mesaj"</code></td><td>Sahnelenmiş değişiklikleri <b>yerel depoya</b> kaydeder.</td></tr>
<tr><td><code>git push origin main</code></td><td>Yerel commit’leri <b>uzak depoya</b> (origin) gönderir.</td></tr>
<tr><td><code>git pull origin main</code></td><td>Başka geliştiricinin uzaktaki değişikliklerini alır ve mevcut dala <b>birleştirir</b> (fetch + merge).</td></tr>
<tr><td><code>git fetch origin main</code></td><td>Değişiklikleri indirir ama yerel dalları değiştirmez.</td></tr>
<tr><td><code>git status</code></td><td>Aktif dalın durumunu gösterir (değişmiş/izlenmeyen dosyalar).</td></tr>
<tr><td><code>git branch</code></td><td>Yerel dalları listeler (aktif dal <b>*</b> ile işaretli); <code>git branch test</code> yeni dal oluşturur ama <b>aktif dal değişmez</b>.</td></tr>
<tr><td><code>git checkout &lt;dal&gt;</code> / <code>git switch &lt;dal&gt;</code></td><td>Dallar arasında geçiş.</td></tr>
<tr><td><code>git checkout -b &lt;dal&gt;</code> / <code>git switch -c &lt;dal&gt;</code></td><td>Yeni dal oluşturur ve <b>hemen ona geçer</b>.</td></tr>
<tr><td><code>git merge &lt;dal&gt;</code></td><td>Verilen dalı aktif dala birleştirir.</td></tr>
<tr><td><code>git log --oneline</code></td><td>Commit geçmişi.</td></tr>
<tr><td><code>git diff</code></td><td>Sahnelenmemiş değişiklikler (<code>--staged</code>: sahnelenmiş olanlar).</td></tr>
</table></div>
<p>Örnek akış (slayttaki gibi):</p>
<pre><code>git clone git@github.com:kullanici/SWE103.git
cd SWE103
git add .
git commit -m "A file is added."
git push origin main</code></pre>

<h2>Dallar (branch), status ve pull request</h2>
<ul>
<li><code>git branch test</code> → “test” dalı oluşur, aktif dal hâlâ <b>main</b>. <code>git checkout test</code> → test’e geçilir. <code>git branch -a</code> yerel ve uzak dalları gösterir.</li>
<li>Yeni dalı uzağa göndermek: <code>git push origin test</code> (ilk kez: <code>git push -u origin test</code>).</li>
<li>Yeni dosya oluşturulunca <code>git status</code> dalın “kirli” (dirty) olduğunu gösterir; commit + push sonrası temizlenir.</li>
<li>Farklı dallarda bağımsız çalışılır, sonunda dal <b>main</b> ile birleştirilir. GitHub’da birleştirme isteği <b>Pull Request</b> ile yapılır (“Compare & pull request” → “Merge”).</li>
</ul>

<h2>GitHub web ve GitHub Desktop</h2>
<p>GitHub web arayüzünde depo oluşturulabilir, kaynak dosyalar görüntülenip <b>tarayıcıda düzenlenebilir</b>. <b>GitHub Desktop</b>’ta ekleme (stage), commit ve push adımları grafik arayüzle yapılır.</p>

<h2>Git cheat sheet’ten ek bilgiler</h2>
<ul>
<li><code>git restore --staged &lt;dosya&gt;</code> veya <code>git reset &lt;dosya&gt;</code>: dosyayı sahneden çıkarır.</li>
<li><code>git reset HEAD^</code>: son commit’i “geri alır”, çalışma dizinini aynı bırakır. <code>git commit --amend</code>: son commit mesajını değiştirir.</li>
<li><code>git stash</code>: değişiklikleri geçici olarak saklar. <code>git clean</code>: izlenmeyen dosyaları siler.</li>
<li><code>git rebase main</code> dalı main’in üstüne taşır; <code>git merge</code> birleştirme commit’i oluşturur; dallar ayrışmamışsa merge <b>fast-forward</b> olur.</li>
<li>Commit’e başvurma: dal adı (<code>main</code>), etiket (<code>v0.1</code>), commit kimliği (<code>3e887ab</code>), <code>origin/main</code>, <code>HEAD</code>, <code>HEAD~3</code>.</li>
<li>Önemli dosyalar: <code>.git/config</code> (yerel ayar), <code>~/.gitconfig</code> (global ayar), <code>.gitignore</code> (yok sayılacak dosyalar).</li>
</ul>
`,
en: `
<h2>File sharing and version control</h2>
<p>Tools such as <b>Google Drive</b> and <b>Dropbox</b> share/sync files in the cloud. In software development, however, we must track who changed what, when and why, merge changes and return to old versions: that is what <b>version control systems (VCS)</b> are for.</p>

<h2>RCS (old)</h2>
<p>The <b>Revision Control System</b> manages multiple revisions of files and automates the <b>storing, retrieval, logging, identification and merging</b> of revisions. It suits frequently revised text such as source code and documentation. It was first developed by <b>Walter F. Tichy</b> at <b>Purdue University</b> in the early 1980s (a GNU project).</p>

<h2>Git (new)</h2>
<p><b>Git</b> is a <b>distributed</b> version control system that tracks changes in any set of computer files. Every developer’s computer holds a full copy of the repository (local repository).</p>

<h2>GitHub</h2>
<p>A <b>cloud-based platform</b> for software development and version control using Git. On top of Git’s distributed version control it provides <b>access control, bug tracking, feature requests, task management, continuous integration and wikis</b>. Headquartered in California; a <b>subsidiary of Microsoft since 2018</b>. Alternative: <b>Bitbucket</b>.</p>

<h2>Basic Git commands</h2>
<div class="tw"><table>
<tr><th>Command</th><th>Purpose</th></tr>
<tr><td><code>git clone &lt;address&gt;</code></td><td>Copies a remote repository locally.</td></tr>
<tr><td><code>git init</code></td><td>Starts a new (empty) repository.</td></tr>
<tr><td><code>git add &lt;file&gt;</code> / <code>git add .</code></td><td><b>Stages</b> a change; “.” adds all changes.</td></tr>
<tr><td><code>git commit -m "message"</code></td><td>Records staged changes in the <b>local repository</b>.</td></tr>
<tr><td><code>git push origin main</code></td><td>Sends local commits to the <b>remote repository</b> (origin).</td></tr>
<tr><td><code>git pull origin main</code></td><td>Gets another developer’s remote changes and <b>merges</b> them into the current branch (fetch + merge).</td></tr>
<tr><td><code>git fetch origin main</code></td><td>Downloads changes without changing local branches.</td></tr>
<tr><td><code>git status</code></td><td>Shows the state of the active branch (modified/untracked files).</td></tr>
<tr><td><code>git branch</code></td><td>Lists local branches (active one marked with <b>*</b>); <code>git branch test</code> creates a branch but the <b>active branch does not change</b>.</td></tr>
<tr><td><code>git checkout &lt;branch&gt;</code> / <code>git switch &lt;branch&gt;</code></td><td>Switch between branches.</td></tr>
<tr><td><code>git checkout -b &lt;branch&gt;</code> / <code>git switch -c &lt;branch&gt;</code></td><td>Creates a branch and <b>switches to it immediately</b>.</td></tr>
<tr><td><code>git merge &lt;branch&gt;</code></td><td>Merges the given branch into the active one.</td></tr>
<tr><td><code>git log --oneline</code></td><td>Commit history.</td></tr>
<tr><td><code>git diff</code></td><td>Unstaged changes (<code>--staged</code>: staged ones).</td></tr>
</table></div>
<p>Example flow (as on the slides):</p>
<pre><code>git clone git@github.com:user/SWE103.git
cd SWE103
git add .
git commit -m "A file is added."
git push origin main</code></pre>

<h2>Branches, status and pull requests</h2>
<ul>
<li><code>git branch test</code> → branch “test” is created, the active branch is still <b>main</b>. <code>git checkout test</code> → switch to test. <code>git branch -a</code> shows local and remote branches.</li>
<li>Pushing the new branch: <code>git push origin test</code> (first time: <code>git push -u origin test</code>).</li>
<li>After creating a new file, <code>git status</code> shows the branch is “dirty”; after commit + push it is clean again.</li>
<li>Work independently on different branches and finally merge a branch into <b>main</b>. On GitHub, merging is requested with a <b>Pull Request</b> (“Compare & pull request” → “Merge”).</li>
</ul>

<h2>GitHub web and GitHub Desktop</h2>
<p>The GitHub web interface can create repositories, view source files and <b>edit them in the browser</b>. In <b>GitHub Desktop</b>, staging (add), commit and push are done through a GUI.</p>

<h2>Extras from the Git cheat sheet</h2>
<ul>
<li><code>git restore --staged &lt;file&gt;</code> or <code>git reset &lt;file&gt;</code>: unstage a file.</li>
<li><code>git reset HEAD^</code>: “undo” the most recent commit, keeping the working directory. <code>git commit --amend</code>: change the last commit message.</li>
<li><code>git stash</code>: stash changes temporarily. <code>git clean</code>: delete untracked files.</li>
<li><code>git rebase main</code> replays the branch on top of main; <code>git merge</code> creates a merge commit; if the branches have not diverged, merge is a <b>fast-forward</b>.</li>
<li>Referring to a commit: branch name (<code>main</code>), tag (<code>v0.1</code>), commit ID (<code>3e887ab</code>), <code>origin/main</code>, <code>HEAD</code>, <code>HEAD~3</code>.</li>
<li>Important files: <code>.git/config</code> (local config), <code>~/.gitconfig</code> (global config), <code>.gitignore</code> (files to ignore).</li>
</ul>
`}},

/* ================= WEEK 5 ================= */
{ id: 5,
  title: ['IDE’lerle Git, HTML/Markdown ve algoritmalar', 'Git with IDEs, HTML/Markdown and algorithms'],
  sub: ['VS Code ve CLion ile GitHub, HTML ve Markdown, algoritma tanımı ve algoritma analizi', 'GitHub with VS Code and CLion, HTML and Markdown, algorithm definition and algorithm analysis'],
  html: {
tr: `
<h2>Yerel ve uzak depolar</h2>
<p>Ekip çalışmasında GitHub’daki <b>uzak depo</b> merkezdedir; “benim bilgisayarım” ve “ortağımın bilgisayarı” kendi <b>yerel depolarını</b> tutar ve push/pull ile uzak depoyla eşitlenir.</p>

<h2>VS Code ile C++ projesi + GitHub</h2>
<ol>
<li>GitHub hesabında yeni depo oluştur. <b>README.md eklemeyi unutma</b> — böylece <b>main dalı hazır</b> olur.</li>
<li>VS Code’da “Clone Repository” → git adresini gir → yerel klasöre klonla.</li>
<li>Yeni program dosyası oluştur (ör. <code>p1.cpp</code>).</li>
<li>Kaynak kontrol panelinde <b>+</b> ile dosyayı <b>sahnele (stage)</b> → <b>mesaj girerek commit</b> et → <b>push</b> et.</li>
<li>GitHub’da dosya <b>main</b> dalında görünür.</li>
</ol>
<h2>CLion</h2>
<p><b>CLion</b>, JetBrains’in C ve C++ IDE’sidir. Yeni C projesi oluştururken proje adı/konumu, <b>dil</b> ve <b>derleyici standardı</b> seçilir; ardından IDE içinden Git başlatılıp (VCS) commit/push yapılabilir.</p>

<h2>HTML</h2>
<ul>
<li><b>HyperText Markup Language</b>; Tim Berners-Lee tarafından geliştirildi.</li>
<li><b>Etiketlerden (tag)</b> oluşur. İki tür: <b>çift etiket (paired)</b> – başlangıç ve bitiş etiketi birlikte bulunmalı (ör. <code>&lt;p&gt;…&lt;/p&gt;</code>); <b>tek etiket (unpaired)</b> – yalnız başlangıç etiketi (ör. <code>&lt;br&gt;</code>, <code>&lt;img&gt;</code>).</li>
<li>Etiketler <b>üst üste binmemeli (overlap)</b>: <code>&lt;b&gt;&lt;i&gt;x&lt;/i&gt;&lt;/b&gt;</code> doğru, <code>&lt;b&gt;&lt;i&gt;x&lt;/b&gt;&lt;/i&gt;</code> yanlış.</li>
<li>Son sürüm <b>HTML5</b> (2014).</li>
<li>HTML dosyaları <b>metin editörüyle</b> oluşturulur/düzenlenir, <b>web tarayıcısında</b> görüntülenir. Öğrenmek için: w3schools.com.</li>
</ul>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;&lt;title&gt;SWE 103&lt;/title&gt;&lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Başlık&lt;/h1&gt;
    &lt;p&gt;Paragraf&lt;br&gt;yeni satır&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<h2>Markdown</h2>
<ul>
<li>Düz metin editörüyle biçimlendirilmiş metin oluşturmak için <b>hafif (lightweight) işaretleme dili</b>.</li>
<li>2004’te <b>John Gruber ve Aaron Swartz</b> tarafından, kaynak hâliyle de insanlar için okunaklı olacak şekilde tasarlandı.</li>
<li>Blog, anlık mesajlaşma, forumlar, iş birliği yazılımları, dokümantasyon ve <b>readme</b> dosyalarında yaygın. <b>GitHub’da README ve dokümantasyon</b> Markdown ile yazılır (<code>.md</code>).</li>
</ul>
<pre><code># Başlık 1
## Başlık 2
**kalın**  *italik*
- madde
1. numaralı madde
[bağlantı](https://github.com)
\`satır içi kod\`</code></pre>

<h2>Algoritmalar</h2>
<p><b>Algoritma:</b> Özellikle bir bilgisayar tarafından, hesaplamalarda veya diğer problem çözme işlemlerinde izlenecek <b>süreç ya da kurallar kümesi</b>.</p>
<ul>
<li>“<b>Algorithms + Data Structures = Programs</b>” — <b>Niklaus Wirth</b>.</li>
<li><b>Linus Torvalds</b> (Linux’un yaratıcısı): “Kötü programcılar kodu dert eder; iyi programcılar <b>veri yapılarını ve ilişkilerini</b> dert eder.”</li>
</ul>

<h2>Algoritma analizi</h2>
<h3>Roller (cast of characters)</h3>
<ul>
<li><b>Programcı</b>: çalışan bir çözüm geliştirmeli.</li>
<li><b>Müşteri (client)</b>: problemi <b>verimli</b> çözmek ister.</li>
<li><b>Teorisyen</b>: anlamak ister.</li>
<li><b>Öğrenci</b>: bir gün bu rollerin herhangi birini veya hepsini oynayabilir.</li>
</ul>
<p><b>Charles Babbage (1864)</b>, Analitik Makine için: “Sonuçlara hangi hesaplama yoluyla <b>en kısa sürede</b> ulaşılabilir?” — yani <i>krankı kaç kez çevirmek gerekir?</i> Bu, <b>çalışma süresi (running time)</b> sorusudur.</p>
<h3>Algoritmaları neden analiz ederiz?</h3>
<ul>
<li><b>Performansı tahmin etmek</b>,</li>
<li><b>Algoritmaları karşılaştırmak</b>,</li>
<li><b>Garanti sağlamak</b>,</li>
<li><b>Teorik temeli anlamak</b>.</li>
</ul>
<div class="key">Temel pratik neden: <b>performans hatalarından (performance bugs) kaçınmak</b> — programcı performans özelliklerini anlamadığı için müşteri kötü performans alır.</div>
<h3>Algoritmik başarılar</h3>
<div class="tw"><table>
<tr><th>Problem</th><th>Kaba kuvvet</th><th>Akıllı algoritma</th><th>Sonuç</th></tr>
<tr><td>Ayrık Fourier dönüşümü (DVD, JPEG, MRI…)</td><td>N² adım</td><td><b>FFT</b>: N log N</td><td>yeni teknolojiyi mümkün kıldı</td></tr>
<tr><td>N-cisim simülasyonu (kütleçekim)</td><td>N² adım</td><td><b>Barnes-Hut</b>: N log N</td><td>yeni araştırmayı mümkün kıldı</td></tr>
</table></div>
<p>Grafikte: girdi 1K’dan 8K’ya (8 kat) çıkınca <b>doğrusal</b> süre 8T, <b>linearitmik (N log N)</b> süre ~8T’nin biraz üstü, <b>karesel (N²)</b> süre <b>64T</b> olur.</p>
<h3>Zorluk ve bilimsel yöntem</h3>
<p>Soru: “Programım büyük bir pratik girdiyi çözebilecek mi? Neden bu kadar yavaş? Neden belleği tükeniyor?” <b>Knuth (1970’ler)</b>: performansı anlamak için <b>bilimsel yöntemi</b> kullan.</p>
<ol>
<li><b>Gözlemle</b> (observe) – doğal dünyanın bir özelliğini,</li>
<li><b>Hipotez kur</b> (hypothesize) – gözlemlerle tutarlı bir model,</li>
<li><b>Tahmin et</b> (predict) – hipotezi kullanarak olayları,</li>
<li><b>Doğrula</b> (verify) – tahminleri yeni gözlemlerle,</li>
<li><b>Geçerle</b> (validate) – hipotez ve gözlemler uyuşana kadar tekrarla.</li>
</ol>
<p>İlkeler: deneyler <b>tekrarlanabilir (reproducible)</b>, hipotezler <b>yanlışlanabilir (falsifiable)</b> olmalı. Burada “doğal dünyanın özelliği” <b>bilgisayarın kendisidir</b>.</p>
<p>Ayrıca: Wikipedia’daki “bilgisayar biliminin öncüleri” listesi incelenmesi önerilir.</p>
`,
en: `
<h2>Local and remote repositories</h2>
<p>In team work the <b>remote repository</b> on GitHub is central; “my computer” and “my partner’s computer” keep their own <b>local repositories</b> and synchronize with the remote via push/pull.</p>

<h2>C++ project with VS Code + GitHub</h2>
<ol>
<li>Create a new repository in your GitHub account. <b>Do not forget to add README.md</b> — so the <b>main branch is ready</b>.</li>
<li>In VS Code: “Clone Repository” → enter the git address → clone into a local folder.</li>
<li>Create a new program file (e.g. <code>p1.cpp</code>).</li>
<li>In the source-control panel press <b>+</b> to <b>stage</b> the file → <b>commit with a message</b> → <b>push</b>.</li>
<li>The file appears on the <b>main</b> branch on GitHub.</li>
</ol>
<h2>CLion</h2>
<p><b>CLion</b> is JetBrains’ IDE for C and C++. When creating a new C project you choose the name/location, the <b>language</b> and the <b>compiler standard</b>; then Git (VCS) can be started from inside the IDE to commit/push.</p>

<h2>HTML</h2>
<ul>
<li><b>HyperText Markup Language</b>; developed by Tim Berners-Lee.</li>
<li>Made up of <b>tags</b>. Two types: <b>paired tags</b> – both starting and ending tags must be present (e.g. <code>&lt;p&gt;…&lt;/p&gt;</code>); <b>unpaired tags</b> – only a starting tag (e.g. <code>&lt;br&gt;</code>, <code>&lt;img&gt;</code>).</li>
<li>Tags <b>must not overlap</b>: <code>&lt;b&gt;&lt;i&gt;x&lt;/i&gt;&lt;/b&gt;</code> is correct, <code>&lt;b&gt;&lt;i&gt;x&lt;/b&gt;&lt;/i&gt;</code> is wrong.</li>
<li>Latest version: <b>HTML5</b> (2014).</li>
<li>HTML files are created/edited with a <b>text editor</b> and viewed in a <b>web browser</b>. Learning resource: w3schools.com.</li>
</ul>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;&lt;title&gt;SWE 103&lt;/title&gt;&lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Heading&lt;/h1&gt;
    &lt;p&gt;Paragraph&lt;br&gt;new line&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<h2>Markdown</h2>
<ul>
<li>A <b>lightweight markup language</b> for creating formatted text using a plain-text editor.</li>
<li>Created in 2004 by <b>John Gruber and Aaron Swartz</b>, designed to be readable for humans even in source form.</li>
<li>Widely used in blogs, instant messaging, forums, collaborative software, documentation and <b>readme</b> files. On <b>GitHub, README files and documentation</b> are written in Markdown (<code>.md</code>).</li>
</ul>
<pre><code># Heading 1
## Heading 2
**bold**  *italic*
- item
1. numbered item
[link](https://github.com)
\`inline code\`</code></pre>

<h2>Algorithms</h2>
<p><b>Algorithm:</b> a <b>process or set of rules</b> to be followed in calculations or other problem-solving operations, especially by a computer.</p>
<ul>
<li>“<b>Algorithms + Data Structures = Programs</b>” — <b>Niklaus Wirth</b>.</li>
<li><b>Linus Torvalds</b> (creator of Linux): bad programmers worry about the code; good programmers worry about <b>data structures and their relationships</b>.</li>
</ul>

<h2>Analysis of algorithms</h2>
<h3>Cast of characters</h3>
<ul>
<li><b>Programmer</b> needs to develop a working solution.</li>
<li><b>Client</b> wants to solve the problem <b>efficiently</b>.</li>
<li><b>Theoretician</b> wants to understand.</li>
<li><b>Student</b> might play any or all of these roles someday.</li>
</ul>
<p><b>Charles Babbage (1864)</b> on the Analytic Engine: by what course of calculation can results be arrived at <b>in the shortest time</b>? — i.e. <i>how many times do you have to turn the crank?</i> This is the <b>running time</b> question.</p>
<h3>Reasons to analyze algorithms</h3>
<ul>
<li><b>Predict performance</b>,</li>
<li><b>Compare algorithms</b>,</li>
<li><b>Provide guarantees</b>,</li>
<li><b>Understand the theoretical basis</b>.</li>
</ul>
<div class="key">Primary practical reason: <b>avoid performance bugs</b> — the client gets poor performance because the programmer did not understand performance characteristics.</div>
<h3>Algorithmic successes</h3>
<div class="tw"><table>
<tr><th>Problem</th><th>Brute force</th><th>Clever algorithm</th><th>Result</th></tr>
<tr><td>Discrete Fourier transform (DVD, JPEG, MRI…)</td><td>N² steps</td><td><b>FFT</b>: N log N</td><td>enables new technology</td></tr>
<tr><td>N-body simulation (gravity)</td><td>N² steps</td><td><b>Barnes-Hut</b>: N log N</td><td>enables new research</td></tr>
</table></div>
<p>On the plot: when the input grows from 1K to 8K (8×), <b>linear</b> time becomes 8T, <b>linearithmic (N log N)</b> slightly above 8T, and <b>quadratic (N²)</b> time <b>64T</b>.</p>
<h3>The challenge and the scientific method</h3>
<p>Q: “Will my program be able to solve a large practical input? Why is it so slow? Why does it run out of memory?” <b>Knuth (1970s)</b>: use the <b>scientific method</b> to understand performance.</p>
<ol>
<li><b>Observe</b> some feature of the natural world,</li>
<li><b>Hypothesize</b> a model consistent with the observations,</li>
<li><b>Predict</b> events using the hypothesis,</li>
<li><b>Verify</b> the predictions by further observations,</li>
<li><b>Validate</b> by repeating until hypothesis and observations agree.</li>
</ol>
<p>Principles: experiments must be <b>reproducible</b>; hypotheses must be <b>falsifiable</b>. Here the “feature of the natural world” is <b>the computer itself</b>.</p>
<p>Also suggested: Wikipedia’s list of pioneers in computer science.</p>
`}},

/* ================= WEEK 6 ================= */
{ id: 6,
  title: ['Yazılım mühendisliği etik kuralları', 'Software engineering code of ethics'],
  sub: ['ACM Etik ve Mesleki Davranış Kuralları, Yazılım Mühendisliği Etik Kodu’nun 8 ilkesi, sık kullanılan kısaltmalar', 'ACM Code of Ethics and Professional Conduct, the 8 principles of the SE Code of Ethics, frequently used acronyms'],
  html: {
tr: `
<h2>ACM Etik ve Mesleki Davranış Kuralları (“Kod”, 2018)</h2>
<p>Bilişim profesyonellerinin eylemleri dünyayı değiştirir; sorumlu davranmak için işlerinin geniş etkilerini düşünmeli ve <b>kamu yararını</b> sürekli desteklemelidirler. Kod, mesleğin <b>vicdanını</b> ifade eder; tüm bilişim profesyonellerine (mevcut/aday uygulayıcılar, eğitmenler, <b>öğrenciler</b>, etkileyiciler ve teknolojiyi etkili biçimde kullanan herkes) ilham ve rehberlik eder. İhlallerde <b>düzeltici işlem (remediation)</b> için temel oluşturur. İlkeler sorumluluk ifadeleri olarak yazılmıştır ve <b>kamu yararı her zaman birincil husustur</b>. Her ilke açıklayıcı yönergelerle desteklenir.</p>
<p>Kod 4 bölümdür: <b>1) Genel etik ilkeler, 2) Mesleki sorumluluklar, 3) Mesleki liderlik ilkeleri, 4) Koda uyum.</b></p>

<h2>1. Genel etik ilkeler</h2>
<p>Bir bilişim profesyoneli…</p>
<ol>
<li>Topluma ve insan refahına katkıda bulunmalı; <b>tüm insanların bilişimin paydaşı olduğunu</b> kabul etmeli.</li>
<li><b>Zarardan kaçınmalı.</b></li>
<li><b>Dürüst ve güvenilir</b> olmalı.</li>
<li><b>Adil</b> olmalı ve <b>ayrımcılık yapmamak</b> için önlem almalı.</li>
<li>Yeni fikir, buluş, yaratıcı eser ve bilişim ürünlerini üretmek için gereken <b>emeğe saygı</b> göstermeli.</li>
<li><b>Mahremiyete (privacy) saygı</b> göstermeli.</li>
<li><b>Gizliliğe (confidentiality) riayet</b> etmeli.</li>
</ol>

<h2>2. Mesleki sorumluluklar</h2>
<ol>
<li>Mesleki işin hem <b>süreçlerinde hem ürünlerinde yüksek kalite</b> için çabalamalı.</li>
<li>Yüksek mesleki <b>yetkinlik, davranış ve etik uygulama</b> standartlarını korumalı.</li>
<li>Mesleki işle ilgili mevcut <b>kuralları bilmeli ve saygı</b> göstermeli.</li>
<li>Uygun <b>mesleki incelemeyi (review) kabul etmeli ve sağlamalı</b>.</li>
<li>Bilgisayar sistemleri ve etkileri hakkında, <b>olası risklerin analizi</b> dâhil, kapsamlı değerlendirmeler yapmalı.</li>
<li><b>Yalnızca yetkin olduğu alanlarda</b> iş yapmalı.</li>
<li>Bilişim, ilgili teknolojiler ve sonuçları hakkında <b>kamu farkındalığını</b> artırmalı.</li>
<li>Bilişim ve iletişim kaynaklarına <b>yalnızca yetkili olduğunda</b> veya kamu yararı zorunlu kıldığında erişmeli.</li>
<li><b>Sağlam ve kullanılabilir biçimde güvenli</b> sistemler tasarlamalı ve gerçekleştirmeli.</li>
</ol>

<h2>3. Mesleki liderlik ilkeleri</h2>
<p>Bir bilişim profesyoneli, özellikle lider konumundaysa…</p>
<ol>
<li>Tüm mesleki bilişim işlerinde <b>kamu yararının merkezi kaygı</b> olmasını sağlamalı.</li>
<li>Kuruluş/grup üyelerinin <b>sosyal sorumluluklarını</b> dile getirmeli, kabulünü teşvik etmeli ve yerine getirilmesini değerlendirmeli.</li>
<li>Personeli ve kaynakları <b>çalışma yaşamının kalitesini artıracak</b> şekilde yönetmeli.</li>
<li>Kodun ilkelerini yansıtan <b>politika ve süreçleri</b> dile getirmeli, uygulamalı ve desteklemeli.</li>
<li>Kuruluş üyelerinin profesyonel olarak <b>gelişmesi için fırsatlar</b> yaratmalı.</li>
<li>Sistemleri <b>değiştirirken veya emekliye ayırırken</b> özen göstermeli.</li>
<li><b>Toplumun altyapısına entegre olan</b> sistemleri tanımalı ve onlara özel özen göstermeli.</li>
</ol>

<h2>4. Koda uyum</h2>
<ol>
<li>Kodun ilkelerini <b>desteklemeli, yaymalı ve saygı göstermeli</b>.</li>
<li>Kod ihlallerini <b>ACM üyeliğiyle bağdaşmaz</b> kabul etmeli.</li>
</ol>
<p>ACM üyeleri, ACM üyesi olsun olmasın tüm bilişim profesyonellerinin uyumunu teşvik etmelidir. İhlali fark eden üyeler bunu ACM’ye bildirmeyi düşünmelidir; bu, ACM’nin Uygulama Politikası’nda belirtilen düzeltici işlemle sonuçlanabilir.</p>

<h2>Yazılım Mühendisliği Etik Kodu ve Mesleki Uygulama — 8 ilke</h2>
<p>Yazılım mühendisleri yazılımın <b>analizi, belirtimi, tasarımı, geliştirilmesi, test edilmesi ve bakımını</b> yararlı ve saygın bir meslek yapmayı taahhüt eder; kamunun <b>sağlığı, güvenliği ve refahı</b> taahhüdü doğrultusunda şu sekiz ilkeye uyarlar:</p>
<div class="tw"><table>
<tr><th>#</th><th>İlke</th><th>Özü</th></tr>
<tr><td>1</td><td><b>PUBLIC</b> (Kamu)</td><td>Kamu yararıyla tutarlı davranmak.</td></tr>
<tr><td>2</td><td><b>CLIENT AND EMPLOYER</b> (Müşteri ve işveren)</td><td>Kamu yararıyla tutarlı olarak müşteri ve işverenin <b>en iyi çıkarına</b> davranmak.</td></tr>
<tr><td>3</td><td><b>PRODUCT</b> (Ürün)</td><td>Ürünlerin ve değişikliklerinin <b>mümkün olan en yüksek mesleki standartları</b> karşılamasını sağlamak.</td></tr>
<tr><td>4</td><td><b>JUDGMENT</b> (Muhakeme)</td><td>Mesleki muhakemede <b>dürüstlük (integrity) ve bağımsızlığı</b> korumak.</td></tr>
<tr><td>5</td><td><b>MANAGEMENT</b> (Yönetim)</td><td>Yöneticiler ve liderler yazılım geliştirme ve bakımının yönetiminde <b>etik bir yaklaşımı</b> benimsemeli ve teşvik etmeli.</td></tr>
<tr><td>6</td><td><b>PROFESSION</b> (Meslek)</td><td>Kamu yararıyla tutarlı olarak <b>mesleğin itibarını ve bütünlüğünü</b> ilerletmek.</td></tr>
<tr><td>7</td><td><b>COLLEAGUES</b> (Meslektaşlar)</td><td>Meslektaşlarına karşı <b>adil ve destekleyici</b> olmak.</td></tr>
<tr><td>8</td><td><b>SELF</b> (Kendisi)</td><td>Mesleğiyle ilgili <b>yaşam boyu öğrenmeye</b> katılmak ve etik yaklaşımı teşvik etmek.</td></tr>
</table></div>

<h2>Sık kullanılan kısaltmalar</h2>
<h3>Donanım / mimari</h3>
<div class="tw"><table>
<tr><td><b>CPU</b> Central Processing Unit</td><td><b>RAM</b> Random Access Memory</td></tr>
<tr><td><b>IO</b> Input Output</td><td><b>DRAM</b> Dynamic Random Access Memory</td></tr>
<tr><td><b>ROM</b> Read Only Memory</td><td><b>HDD</b> Hard Disk Drive</td></tr>
<tr><td><b>SSD</b> Solid State Drive</td><td><b>NIC</b> Network Interface Card</td></tr>
<tr><td><b>BIOS</b> Basic Input Output System</td><td><b>LCD</b> Liquid Crystal Display</td></tr>
<tr><td><b>OS</b> Operating System</td><td><b>PC</b> Personal Computer</td></tr>
<tr><td><b>SATA</b> Serial Advanced Technology Attachment</td><td><b>CLI</b> Command Line Interface</td></tr>
</table></div>
<h3>Web</h3>
<div class="tw"><table>
<tr><td><b>HTTP</b> HyperText Transfer Protocol</td><td><b>HTTPS</b> HyperText Transfer Protocol Secure</td></tr>
<tr><td><b>WWW</b> World Wide Web</td><td><b>HTML</b> HyperText Markup Language</td></tr>
<tr><td><b>CSS</b> Cascading Style Sheets</td><td><b>URL</b> Uniform Resource Locator</td></tr>
<tr><td><b>URI</b> Uniform Resource Identifier</td><td><b>MD</b> MarkDown</td></tr>
<tr><td><b>XML</b> eXtensible Markup Language</td><td><b>JSON</b> JavaScript Object Notation</td></tr>
<tr><td><b>API</b> Application Program(ming) Interface</td><td><b>REST</b> Representational State Transfer</td></tr>
<tr><td><b>FTP</b> File Transfer Protocol</td><td><b>SFTP</b> Secure File Transfer Protocol</td></tr>
</table></div>
<h3>Ağ ve güvenlik</h3>
<div class="tw"><table>
<tr><td><b>VPN</b> Virtual Private Network</td><td><b>SDN</b> Software Defined Network</td></tr>
<tr><td><b>TX / RX</b> Transmit / Receive</td><td><b>ACK</b> Acknowledge</td></tr>
<tr><td><b>SSO</b> Single Sign On</td><td><b>LAN</b> Local Area Network</td></tr>
<tr><td><b>WAN</b> Wide Area Network</td><td><b>NAT</b> Network Address Translat(or/ion)</td></tr>
<tr><td><b>SAML</b> Security Assertion Markup Language</td><td><b>IPS</b> Intrusion Prevention System</td></tr>
<tr><td><b>IDS</b> Intrusion Detection System</td><td><b>AES</b> Advanced Encryption Standard</td></tr>
<tr><td><b>DES</b> Data Encryption Standard</td><td><b>PAP</b> Password Authentication Protocol</td></tr>
</table></div>
<p class="note">Not: Slaytta AES/DES/PAP açılımları “System” olarak yazılmıştır; yaygın kabul gören açılımlar <b>Advanced Encryption Standard</b>, <b>Data Encryption Standard</b> ve <b>Password Authentication Protocol</b>’dür. Sınavda bu kısaltmaların <b>şifreleme/kimlik doğrulama</b> ile ilgili olduğunu bilmek önemlidir.</p>
`,
en: `
<h2>ACM Code of Ethics and Professional Conduct (“the Code”, 2018)</h2>
<p>Computing professionals’ actions change the world. To act responsibly, they should reflect upon the wider impacts of their work, consistently supporting the <b>public good</b>. The Code expresses the <b>conscience of the profession</b>; it inspires and guides all computing professionals (current and aspiring practitioners, instructors, <b>students</b>, influencers and anyone using computing technology in an impactful way). It also serves as a basis for <b>remediation</b> when violations occur. Principles are formulated as statements of responsibility, and <b>the public good is always the primary consideration</b>. Each principle is supplemented by guidelines.</p>
<p>The Code has 4 sections: <b>1) General ethical principles, 2) Professional responsibilities, 3) Professional leadership principles, 4) Compliance with the Code.</b></p>

<h2>1. General ethical principles</h2>
<p>A computing professional should…</p>
<ol>
<li>Contribute to society and to human well-being, acknowledging that <b>all people are stakeholders in computing</b>.</li>
<li><b>Avoid harm.</b></li>
<li>Be <b>honest and trustworthy</b>.</li>
<li>Be <b>fair</b> and take action <b>not to discriminate</b>.</li>
<li><b>Respect the work</b> required to produce new ideas, inventions, creative works and computing artifacts.</li>
<li><b>Respect privacy.</b></li>
<li><b>Honor confidentiality.</b></li>
</ol>

<h2>2. Professional responsibilities</h2>
<ol>
<li>Strive to achieve <b>high quality in both the processes and products</b> of professional work.</li>
<li>Maintain high standards of professional <b>competence, conduct and ethical practice</b>.</li>
<li><b>Know and respect existing rules</b> pertaining to professional work.</li>
<li><b>Accept and provide appropriate professional review.</b></li>
<li>Give comprehensive and thorough evaluations of computer systems and their impacts, including <b>analysis of possible risks</b>.</li>
<li>Perform work <b>only in areas of competence</b>.</li>
<li>Foster <b>public awareness and understanding</b> of computing, related technologies and their consequences.</li>
<li>Access computing and communication resources <b>only when authorized</b> or when compelled by the public good.</li>
<li>Design and implement systems that are <b>robustly and usably secure</b>.</li>
</ol>

<h2>3. Professional leadership principles</h2>
<p>A computing professional, especially one acting as a leader, should…</p>
<ol>
<li>Ensure that <b>the public good is the central concern</b> during all professional computing work.</li>
<li>Articulate, encourage acceptance of and evaluate fulfillment of <b>social responsibilities</b> by members of the organization or group.</li>
<li>Manage personnel and resources to <b>enhance the quality of working life</b>.</li>
<li>Articulate, apply and support <b>policies and processes</b> that reflect the principles of the Code.</li>
<li>Create <b>opportunities for members to grow</b> as professionals.</li>
<li>Use care when <b>modifying or retiring systems</b>.</li>
<li>Recognize and take special care of systems that become <b>integrated into the infrastructure of society</b>.</li>
</ol>

<h2>4. Compliance with the Code</h2>
<ol>
<li><b>Uphold, promote and respect</b> the principles of the Code.</li>
<li>Treat violations of the Code as <b>inconsistent with membership in the ACM</b>.</li>
</ol>
<p>Each ACM member should encourage and support adherence by all computing professionals regardless of ACM membership. Members who recognize a breach should consider reporting it to the ACM, which may result in remedial action as specified in the ACM’s Enforcement Policy.</p>

<h2>Software Engineering Code of Ethics and Professional Practice — 8 principles</h2>
<p>Software engineers shall commit themselves to making the <b>analysis, specification, design, development, testing and maintenance</b> of software a beneficial and respected profession. In accordance with their commitment to the <b>health, safety and welfare</b> of the public, they shall adhere to eight principles:</p>
<div class="tw"><table>
<tr><th>#</th><th>Principle</th><th>Essence</th></tr>
<tr><td>1</td><td><b>PUBLIC</b></td><td>Act consistently with the public interest.</td></tr>
<tr><td>2</td><td><b>CLIENT AND EMPLOYER</b></td><td>Act in the <b>best interests</b> of client and employer, consistent with the public interest.</td></tr>
<tr><td>3</td><td><b>PRODUCT</b></td><td>Ensure products and modifications meet the <b>highest professional standards possible</b>.</td></tr>
<tr><td>4</td><td><b>JUDGMENT</b></td><td>Maintain <b>integrity and independence</b> in professional judgment.</td></tr>
<tr><td>5</td><td><b>MANAGEMENT</b></td><td>Managers and leaders subscribe to and promote an <b>ethical approach</b> to managing software development and maintenance.</td></tr>
<tr><td>6</td><td><b>PROFESSION</b></td><td>Advance the <b>integrity and reputation of the profession</b>, consistent with the public interest.</td></tr>
<tr><td>7</td><td><b>COLLEAGUES</b></td><td>Be <b>fair to and supportive of</b> colleagues.</td></tr>
<tr><td>8</td><td><b>SELF</b></td><td>Participate in <b>lifelong learning</b> and promote an ethical approach to the profession.</td></tr>
</table></div>

<h2>Frequently used acronyms</h2>
<h3>Hardware / architecture</h3>
<div class="tw"><table>
<tr><td><b>CPU</b> Central Processing Unit</td><td><b>RAM</b> Random Access Memory</td></tr>
<tr><td><b>IO</b> Input Output</td><td><b>DRAM</b> Dynamic Random Access Memory</td></tr>
<tr><td><b>ROM</b> Read Only Memory</td><td><b>HDD</b> Hard Disk Drive</td></tr>
<tr><td><b>SSD</b> Solid State Drive</td><td><b>NIC</b> Network Interface Card</td></tr>
<tr><td><b>BIOS</b> Basic Input Output System</td><td><b>LCD</b> Liquid Crystal Display</td></tr>
<tr><td><b>OS</b> Operating System</td><td><b>PC</b> Personal Computer</td></tr>
<tr><td><b>SATA</b> Serial Advanced Technology Attachment</td><td><b>CLI</b> Command Line Interface</td></tr>
</table></div>
<h3>Web</h3>
<div class="tw"><table>
<tr><td><b>HTTP</b> HyperText Transfer Protocol</td><td><b>HTTPS</b> HyperText Transfer Protocol Secure</td></tr>
<tr><td><b>WWW</b> World Wide Web</td><td><b>HTML</b> HyperText Markup Language</td></tr>
<tr><td><b>CSS</b> Cascading Style Sheets</td><td><b>URL</b> Uniform Resource Locator</td></tr>
<tr><td><b>URI</b> Uniform Resource Identifier</td><td><b>MD</b> MarkDown</td></tr>
<tr><td><b>XML</b> eXtensible Markup Language</td><td><b>JSON</b> JavaScript Object Notation</td></tr>
<tr><td><b>API</b> Application Program(ming) Interface</td><td><b>REST</b> Representational State Transfer</td></tr>
<tr><td><b>FTP</b> File Transfer Protocol</td><td><b>SFTP</b> Secure File Transfer Protocol</td></tr>
</table></div>
<h3>Network and security</h3>
<div class="tw"><table>
<tr><td><b>VPN</b> Virtual Private Network</td><td><b>SDN</b> Software Defined Network</td></tr>
<tr><td><b>TX / RX</b> Transmit / Receive</td><td><b>ACK</b> Acknowledge</td></tr>
<tr><td><b>SSO</b> Single Sign On</td><td><b>LAN</b> Local Area Network</td></tr>
<tr><td><b>WAN</b> Wide Area Network</td><td><b>NAT</b> Network Address Translat(or/ion)</td></tr>
<tr><td><b>SAML</b> Security Assertion Markup Language</td><td><b>IPS</b> Intrusion Prevention System</td></tr>
<tr><td><b>IDS</b> Intrusion Detection System</td><td><b>AES</b> Advanced Encryption Standard</td></tr>
<tr><td><b>DES</b> Data Encryption Standard</td><td><b>PAP</b> Password Authentication Protocol</td></tr>
</table></div>
<p class="note">Note: the slide expands AES/DES/PAP with “System”; the commonly accepted expansions are <b>Advanced Encryption Standard</b>, <b>Data Encryption Standard</b> and <b>Password Authentication Protocol</b>. For the exam, the key point is that they relate to <b>encryption/authentication</b>.</p>
`}}
];
