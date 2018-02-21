class dataHaku
{
	
	constructor(datannimi)
	{
		this.datannimi = datannimi;
		this.kasiteltaviasoluja = 0;
		this.nimi = "Teppo";
		this.sukunimi = "Testaaja";
		this.osoite = "Avaruusrakettikatu 1000, Kuu";
		this.postinumero = "345343";
		this.postitoimipaikka = "Testaamo";
		this.sahkoposti = "teppo@testaaja.nulll";
		this.puhelin = "+819044444444";
		this.ytunnus = "Y-123456567";
		this.talonyhtio = "As Oy Talo";
		this.huoneisto = "C 53";
		this.ilmoitusotsikko = "Kyttääjä tippui katolta. Pitääkö kutsua palokunta, vai poliisi?";
		this.ilmoitustyyppi = "Heippalappu";
		this.ilmoituksenkuvaus = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin nibh nec ipsum rhoncus, a varius velit fringilla. Cras laoreet lobortis felis vel commodo. Etiam tincidunt vulputate leo, in rutrum mi congue vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse odio metus, pellentesque vel tempor quis, venenatis ullamcorper est. Vestibulum turpis augue, lobortis vel ipsum eu, vulputate efficitur nisl. Pellentesque malesuada eros a tincidunt faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin nibh nec ipsum rhoncus, a varius velit fringilla. Cras laoreet lobortis felis vel commodo. Etiam tincidunt vulputate leo, in rutrum mi congue vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse odio metus, pellentesque vel tempor quis, venenatis ullamcorper est. Vestibulum turpis augue, lobortis vel ipsum eu, vulputate efficitur nisl. Pellentesque malesuada eros a tincidunt faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin nibh nec ipsum rhoncus, a varius velit fringilla. Cras laoreet lobortis felis vel commodo. Etiam tincidunt vulputate leo, in rutrum mi congue vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse odio metus, pellentesque vel tempor quis, venenatis ullamcorper est. Vestibulum turpis augue, lobortis vel ipsum eu, vulputate efficitur nisl. Pellentesque malesuada eros a tincidunt faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin nibh nec ipsum rhoncus, a varius velit fringilla. Cras laoreet lobortis felis vel commodo. Etiam tincidunt vulputate leo, in rutrum mi congue vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse odio metus, pellentesque vel tempor quis, venenatis ullamcorper est. Vestibulum turpis augue, lobortis vel ipsum eu, vulputate efficitur nisl. Pellentesque malesuada eros a tincidunt faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin nibh nec ipsum rhoncus, a varius velit fringilla. Cras laoreet lobortis felis vel commodo. Etiam tincidunt vulputate leo, in rutrum mi congue vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse odio metus, pellentesque vel tempor quis, venenatis ullamcorper est. Vestibulum turpis augue, lobortis vel ipsum eu, vulputate efficitur nisl. Pellentesque malesuada eros a tincidunt faucibus.";
		
	}
	maaritaSolujenMaara(maara)
	{
		this.kasiteltaviasoluja = maara;
	}
	haeHenkiloTiedot()
	{
		// TODO
		
	}
	haeYhtioTiedot()
	{
		// TODO
		
	}
	
	talletaHenkilonTiedotKysy(kenttaID)
	{
		document.getElementById("isannoitsijaHenkilotHenkilotd"+kenttaID).innerHTML = '<h4>Tietojen tallennus</h4><p>Haluatko varmasti tallentaa tiedot?</p><form><div class="form-row"><div class="col"><button type="button" class="btn btn-primary">Kyllä</button> <button type="button" class="btn btn-danger">Ei</button></div></div></form> ';
	}
	poistaHenkilonTiedotKysy(kenttaID)
	{
		document.getElementById("isannoitsijaHenkilotHenkilotd"+kenttaID).innerHTML = '<h4>Käyttäjän poistaminen</h4><p>Haluatko varmasti poistaa käyttäjän?</p><form><div class="form-row"><button type="button" class="btn btn-primary">Kyllä</button>&nbsp;<button type="button" class="btn btn-danger">Ei</button></div><div class="form-check"><br><br><input class="form-check-input" type="checkbox" id="gridCheck"><label class="form-check-label" for="gridCheck">Olen täysin varma. (Käyttäjän poistoa ei voi peruuttaa.)</label></div></form>';
	}
	
	talletaYhtionTiedotKysy(kenttaID)
	{
		document.getElementById("isannoitsijaYhtiotYhtiotd"+kenttaID).innerHTML = '<h4>Tietojen tallennus</h4><p>Haluatko varmasti tallentaa tiedot?</p><form><div class="form-row"><div class="col"><button type="button" class="btn btn-primary">Kyllä</button> <button type="button" class="btn btn-danger">Ei</button></div></div></form> ';
	}
	poistaYhtionTiedotKysy(kenttaID)
	{
		document.getElementById("isannoitsijaYhtiotYhtiotd"+kenttaID).innerHTML = '<h4>Talonyhtiön poistaminen</h4><p>Haluatko varmasti poistaa talonyhtiön?</p><form><div class="form-row"><button type="button" class="btn btn-primary">Kyllä</button>&nbsp;<button type="button" class="btn btn-danger">Ei</button></div><div class="form-check"><br><br><input class="form-check-input" type="checkbox" id="gridCheck"><label class="form-check-label" for="gridCheck">Olen täysin varma. (Talonyhtiön poistoa ei voi peruuttaa.)</label></div></form>';
	}
	
	
	
	naytaHenkilonTiedot(kenttaID)
	{
		var sisalto = "";
		var curStyle = ""
		var elem,displayStyle;
		
		document.getElementById("isannoitsijaHenkilotHenkilotd"+kenttaID).innerHTML = '<h4>' + this.nimi + '</h4><form><div class="form-row"><div class="form-group col-md-3"><label for="formGroupNimi">Nimi</label><input type="text" class="form-control" id="formGroupNimi" value="' + this.nimi + '"></div><div class="form-group col-md-3"><label for="formGroupNimi">Sukunimi</label><input type="text" class="form-control" id="formGroupNimi" value="' + this.sukunimi + '"></div></div><div class="form-row"><div class="form-group col-md-6"><label for="formGroupOsoite">Osoite</label><input type="text" class="form-control" id="formGroupOsoite" value="' + this.osoite + '"></div></div><div class="form-row"><div class="form-group col-md-2"><label for="formGroupPostinumero">Postinumero</label><input type="text" class="form-control" id="formGroupPostinumero" value="' + this.postinumero + '"></div><div class="form-group col-md-4"><label for="formGroupPostinumero">Postitoimipaikka</label><input type="text" class="form-control" id="formGroupPostinumero" value="' + this.postitoimipaikka + '"></div></div><div class="form-row"><div class="form-group col-md-6"><label for="kayttajaInputEmail1">Sähköposti</label><input type="email" class="form-control" id="kayttajaInputEmail1" aria-describedby="emailHelp" value="' + this.sahkoposti + '"><small id="emailHelp" class="form-text text-muted">Emme tee osoitteellasi mitään laitonta.</small></div></div><button type="button" class="btn btn-primary" onclick="'+ this.datannimi +'.talletaHenkilonTiedotKysy('+ kenttaID +');">Tallenna</button> <button type="button" class="btn btn-primary" onclick="'+ this.datannimi +'.poistaHenkilonTiedotKysy('+ kenttaID +');">Poista käyttäjä</button></form>';
		
		elem = document.getElementById("isannoitsijaHenkilotHenkilo"+kenttaID);
		if (elem.currentStyle)
		{
			displayStyle = elem.currentStyle.display;
		}
		else if (window.getComputedStyle)
		{
			curStyle = window.getComputedStyle(elem, null).getPropertyValue("display");
		}
		
		if (curStyle == "none")
		{
			document.getElementById("isannoitsijaHenkilotHenkilo"+kenttaID).style.display = "table-row";
		}
		else if (curStyle == "table-row")
		{
			document.getElementById("isannoitsijaHenkilotHenkilo"+kenttaID).style.display = "none";
		}
		
		for (var i=1;i<this.kasiteltaviasoluja;i++)
		{
				if (i != kenttaID)
				{
					document.getElementById("isannoitsijaHenkilotHenkilo"+i).style.display = "none";
				}
		}
	}
	naytaYhtionTiedot(kenttaID)
	{
		var sisalto = "";
		var curStyle = ""
		var elem,displayStyle
	
	
		document.getElementById("isannoitsijaYhtiotYhtiotd"+kenttaID).innerHTML = '<h4>'+ this.nimi+ '</h4><form><div class="form-row"><div class="form-group col-md-4"><label for="formGroupNimi">Nimi</label><input type="text" class="form-control" id="formGroupNimi" value="' + this.nimi + '"></div><div class="form-group col-md-2"><label for="formGroupNimi">Y-tunnus</label><input type="text" class="form-control" id="formGroupYtunnus" value="' + this.ytunnus + '"></div></div><div class="form-row"><div class="form-groupform-group3 col-md-6"><label for="formGroupOsoite">Osoite</label><input type="text" class="form-control" id="formGroupOsoite" value="' + this.osoite + '"></div></div><div class="form-row"><div class="form-group col-md-2"><label for="formGroupPostinumero">Postinumero</label><input type="text" class="form-control" id="formGroupPostinumero" value="' + this.postinumero + '"></div><div class="form-group col-md-4"><label for="formGroupPostinumero">Postitoimipaikka</label><input type="text" class="form-control" id="formGroupPostinumero" value="' + this. postitoimipaikka + '"></div></div><button type="button" class="btn btn-primary" onclick="'+ this.datannimi +'.talletaYhtionTiedotKysy('+ kenttaID +');">Tallenna</button> <button type="button" class="btn btn-primary" onclick="'+ this.datannimi +'.poistaYhtionTiedotKysy('+ kenttaID +');">Poista talonyhtiö</button></form>';
		
		elem = document.getElementById("isannoitsijaYhtiotYhtio"+kenttaID);
		
		if (elem.currentStyle)
		{
			displayStyle = elem.currentStyle.display;
		}
		else if (window.getComputedStyle)
		{
			curStyle = window.getComputedStyle(elem, null).getPropertyValue("display");
		}
		
		if (curStyle == "none")
		{
			document.getElementById("isannoitsijaYhtiotYhtio"+kenttaID).style.display = "table-row";
		}
		else if (curStyle == "table-row")
		{
			document.getElementById("isannoitsijaYhtiotYhtio"+kenttaID).style.display = "none";
		}
		
		for (var i=1;i<this.kasiteltaviasoluja;i++)
		{
				if (i != kenttaID)
				{
					document.getElementById("isannoitsijaYhtiotYhtio"+i).style.display = "none";
				}
		}
	}
	
	suljeIlmoituksenTiedot()
	{
		document.getElementById("ilmoituksetKokoRuutu").style.display = "none";
	}	
	
	naytaIlmoituksenTiedotIsannoitsija(kenttaID)
	{
		var sisalto = "";
		var curStyle = ""
		var elem,displayStyle
	
	
		document.getElementById("ilmoituksetKokoRuutu").innerHTML = '<form><div class="form-row"><button type="button" class="btn btn-primary" onclick="'+ this.datannimi +'.suljeIlmoituksenTiedot();">Sulje</button></div></form><br><table class="table table-bordered"><thead><tr><th colspan="4">'+ this.ilmoitusotsikko +'</th></tr></thead><tbody><tr><th>Ilmoitustyyppi</th><td colspan="3">'+ this.ilmoitustyyppi +'</td></tr><tr><th>Talonyhtiö</th><td>'+ this.talonyhtio +'</td><th>Huoneisto</th><td>'+ this.huoneisto +'</td></tr><tr><th>Lähettäjä</th><td colspan="3">'+ this.nimi +' '+ this.sukunimi +'</td></tr><tr><th>Osoite</th><td>'+ this.osoite +'</td><th>Postinumero</th><td>'+ this.postinumero +'</td></tr><tr><th>Postitoimipaikka</th><td colspan="3">'+ this.postitoimipaikka +'</td></tr><tr><th>Puhelin</th><td>'+ this.puhelin +'</td><th>Sähköposti</th><td>'+ this.sahkoposti +'</td></tr><tr><th colspan="4">Kuvaus</th></tr><tr><td colspan="4">'+ this.ilmoituksenkuvaus +'</td></tr></tbody></table><form>Muuta tilaa :<a href="#"><img src="img/vastaanotettu.svg" class="img-fluid" alt="[H]" height="20" width="20"></a> <a href="#"><img src="img/tyonalla.svg" class="img-fluid" alt="[H]" height="20" width="20"></a> <a href="#"><img src="img/keskeytynyt.svg" class="img-fluid" alt="[H]" height="20" width="20"></a> <a href="#"><img src="img/valmis.svg" class="img-fluid border border-dark rounded bg-success" alt="[H]" height="20" width="20"></a> <div class="form-row"><label for="exampleFormControlTextarea1">Kommentti</label><textarea class="form-control" id="isannoijaIlmoituksetKommenttiTextarea" rows="3">Soitettu ambulanssi.</textarea></div><br><button type="button" class="btn btn-primary">Tallenna</button></form><br><form><div class="form-row"><button type="button" class="btn btn-primary" onclick="'+ this.datannimi +'.suljeIlmoituksenTiedot();">Sulje</button></div></form><br>';
		
		elem = document.getElementById("ilmoituksetKokoRuutu");
		
		if (elem.currentStyle)
		{
			displayStyle = elem.currentStyle.display;
			
		}
		else if (window.getComputedStyle)
		{
			curStyle = window.getComputedStyle(elem, null).getPropertyValue("display");
		}
		if (curStyle == "none")
		{
			document.getElementById("ilmoituksetKokoRuutu").style.display = "block";
		}
		else if (curStyle == "block")
		{
			document.getElementById("ilmoituksetKokoRuutu").style.display = "none";
		}
		

	}
	naytaIlmoituksenTiedotAsukas(kenttaID)
	{
		var sisalto = "";
		var curStyle = ""
		var elem,displayStyle
	
	
		document.getElementById("ilmoituksetKokoRuutu").innerHTML = '<form><div class="form-row"><button type="button" class="btn btn-primary" onclick="'+ this.datannimi +'.suljeIlmoituksenTiedot();">Sulje</button></div></form><br><table class="table table-bordered"><thead><tr><th colspan="4">'+ this.ilmoitusotsikko +'</th></tr></thead><tbody><tr><th>Ilmoitustyyppi</th><td colspan="3">'+ this.ilmoitustyyppi +'</td></tr><tr><th>Talonyhtiö</th><td>'+ this.talonyhtio +'</td><th>Huoneisto</th><td>'+ this.huoneisto +'</td></tr><tr><th>Lähettäjä</th><td colspan="3">'+ this.nimi +' '+ this.sukunimi +'</td></tr><tr><th>Osoite</th><td>'+ this.osoite +'</td><th>Postinumero</th><td>'+ this.postinumero +'</td></tr><tr><th>Postitoimipaikka</th><td colspan="3">'+ this.postitoimipaikka +'</td></tr><tr><th>Puhelin</th><td>'+ this.puhelin +'</td><th>Sähköposti</th><td>'+ this.sahkoposti +'</td></tr><tr><th colspan="4">Kuvaus</th></tr><tr><td colspan="4">'+ this.ilmoituksenkuvaus +'</td></tr></tbody></table><br>';
		
		elem = document.getElementById("ilmoituksetKokoRuutu");
		
		if (elem.currentStyle)
		{
			displayStyle = elem.currentStyle.display;
			
		}
		else if (window.getComputedStyle)
		{
			curStyle = window.getComputedStyle(elem, null).getPropertyValue("display");
		}
		if (curStyle == "none")
		{
			document.getElementById("ilmoituksetKokoRuutu").style.display = "block";
		}
		else if (curStyle == "block")
		{
			document.getElementById("ilmoituksetKokoRuutu").style.display = "none";
		}
		

	}
	
	
	
	
	
	
	
	
}