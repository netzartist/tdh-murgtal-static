ns = false;
ie = false;
if(document.layers)
{
    ns=true;
}

if(document.all)
{
    ie=true;
}

function HLon(lnk,overcolor)
{
    if(ie)
    {
	if (overcolor!="") {
	    document.all[lnk].style.backgroundColor=overcolor;
	}
	document.all[lnk].style.cursor='hand';
    }
}

function HLoff(lnk,outcolor)
{
    if(ie)
    {
	if (outcolor!="") {
	    document.all[lnk].style.backgroundColor=outcolor;
	}	
     document.all[lnk].style.backgroundColor=outcolor;
    }
}

function showImg(ziel,breite,hoehe) {

	var breite=breite+10;
	var hoehe=hoehe+60;
	var	ho	=	screen.availHeight;
	var	br	=	screen.availWidth;

	var params="width="+breite+",height="+hoehe+",resize=no,menubar=no,resizable=no";
	picwin=window.open("/wait.html","Detailansicht",params);
	picwin.document.location.href="/display.html?pic="+ziel;
	picwin.moveTo(Math.round((br-breite)/2),Math.round((ho-hoehe)/2));
	picwin.focus();

}

function Aktionshinweis(url,name,w,h) {

	var breite=w;
	var hoehe=h;
	var	ho	=	screen.availHeight;
	var	br	=	screen.availWidth;

	var params="width="+breite+",height="+hoehe+",resize=no,menubar=no,resizable=no,scrollbars=1";

	aktionswin=window.open(url,name,params);
	aktionswin.moveTo(Math.round((br-breite)/2),Math.round((ho-hoehe)/2));
	aktionswin.focus();

}

function Check()
// gaestebucheintrag
	
	{
	var ok=false;
	var name=document.gb.name.value;
	var email=document.gb.email.value;
	var bemerkung=document.gb.bemerkung.value;

	var re_email=/^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+\.([a-zA-Z]{2,3})$/;

	if (bemerkung.length==0)
		{
		alert ("Bitte geben Sie Ihre Mitteilung ein.");
		document.gb.bemerkung.focus();
		ok=false;
		return ok;
		} 

	if (name.length==0)
		{
		alert ("Bitte Name eingeben.");
		document.gb.name.focus();	
		ok=false;
		return ok;
		}
	
	if (email.length>0)
		{
		if ((re_email.test(email)==false))
			{
			alert ("Bitte gültige Emailadresse eingeben.");
			document.gb.email.focus();
			ok=false;
			return ok;
			}
		}

	if (ok==true)
		{
		document.gb.submit();
		}

	}

function Check2()
// kontaktformular
	
	{
	var ok=false;
	var name=document.kontakt.name.value;
	var email=document.kontakt.email.value;
	var betreff=document.kontakt.betreff.value;
	var mitteilung=document.kontakt.mitteilung.value;

	var re_email=/^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+\.([a-zA-Z]{2,3})$/;
	
	if (betreff.length==0)
		{
		alert ("Bitte geben Sie einen Betreff ein.");
		document.kontakt.betreff.focus();
		ok=false;
		return ok;
		}

	if (name.length==0)
		{
		alert ("Bitte Name eingeben.");
		document.kontakt.name.focus();	
		ok=false;
		return ok;
		}
	
	if (email.length>0)
		{
		if ((re_email.test(email)==false))
			{
			alert ("Bitte gültige Emailadresse eingeben.");
			document.kontakt.email.focus();
			ok=false;
			return ok;
			}
		}

	if (mitteilung.length==0)
		{
		alert ("Bitte geben Sie Ihre Mitteilung ein.");
		document.kontakt.mitteilung.focus();
		ok=false;
		return ok;
		} 

	if (ok==true)
		{
		document.kontakt.submit();
		}

	}
	
function Check3()
// powerkids - vorschläge
	
	{
	var ok=false;
	var name=document.vorschlag.name.value;
	var email=document.vorschlag.email.value;
	var vorschlag=document.vorschlag.vorschlag.value;

	var re_email=/^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+\.([a-zA-Z]{2,3})$/;

	if (vorschlag.length==0)
		{
		alert ("Du hast vergessen, einen Vorschlag einzutippen.");
		document.vorschlag.vorschlag.focus();	
		ok=false;
		return ok;
		}	
	
	if (name.length==0)
		{
		alert ("Bitte gib Deinen Namen ein.");
		document.vorschlag.name.focus();	
		ok=false;
		return ok;
		}
	
	if (email.length>0)
		{
		if ((re_email.test(email)==false))
			{
			alert ("Bitte überprüfe Deine Emailadresse.");
			document.vorschlag.email.focus();
			ok=false;
			return ok;
			}
		}
		
	if (ok==true)
		{
		document.vorschlag.submit();
		}

	}

function Check4()
// weiterempfehlung
	
	{
	var ok=false;
	var email=document.weiterempfehlen.email.value;
	var emailempf=document.weiterempfehlen.emailempf.value;
	var betreff=document.weiterempfehlen.betreff.value;
	var mitteilung=document.weiterempfehlen.mitteilung.value;

	var re_email=/^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+\.([a-zA-Z]{2,3})$/;
	
	if (betreff.length==0)
		{
		alert ("Bitte geben Sie einen Betreff ein.");
		document.weiterempfehlen.betreff.focus();
		ok=false;
		return ok;
		}

	if ((re_email.test(email)==false))
		{
		alert ("Bitte gültige Absender-Emailadresse eingeben.");
		document.weiterempfehlen.email.focus();
		ok=false;
		return ok;
		}
	
	if ((re_email.test(emailempf)==false))
		{
		alert ("Bitte gültige Emailadresse des Empfaengers eingeben.");
		document.weiterempfehlen.emailempf.focus();
		ok=false;
		return ok;
		}

	if (mitteilung.length==0)
		{
		alert ("Bitte geben Sie Ihre Mitteilung ein.");
		document.weiterempfehlen.mitteilung.focus();
		ok=false;
		return ok;
		} 

	if (ok==true)
		{
		document.weiterempfehlen.submit();
		}

	}

function Check5()
// newsletter-abo/kuendigung
	
	{
	var ok=false;
	var name=document.newsletter.name.value;
	var email=document.newsletter.email.value;

	var re_email=/^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+\.([a-zA-Z]{2,3})$/;

	if (name.length==0)
		{
		alert ("Bitte geben Sie Ihren Namen ein.");
		document.newsletter.name.focus();	
		ok=false;
		return ok;
		}
	
		if ((re_email.test(email)==false))
			{
			alert ("Bitte überprüfen Sie die Schreibweise Ihrer Emailadresse.");
			document.newsletter.email.focus();
			ok=false;
			return ok;
			}
		
	if (ok==true)
		{
		document.newsletter.submit();
		}

	}	
		
function Check6()
// links-vorschlag
	
	{
	var ok=false;
	var website_name=document.vorschlag.vorschlag_name.value;
	var website_url=document.vorschlag.vorschlag_url.value;
	var website_beschreibung=document.vorschlag.vorschlag_beschreibung.value;	

	var name=document.vorschlag.vorschlag_absname.value;
	var email=document.vorschlag.vorschlag_email.value;
	var nlabo=document.vorschlag.vorschlag_nlabo.value;

	var re_email=/^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+\.([a-zA-Z]{2,3})$/;

	if (website_name.length==0)
		{
		alert ("Bitte geben Sie einen Namen fuer die Website ein.");
		document.vorschlag.vorschlag_name.focus();	
		ok=false;
		return ok;
		}
		
	if (website_url.length==0)
		{
		alert ("Bitte geben Sie eine Webadresse ein.");
		document.vorschlag.vorschlag_url.focus();	
		ok=false;
		return ok;
		}

	if (website_beschreibung.length==0)
		{
		alert ("Bitte beschreiben Sie die Website einwenig.");
		document.vorschlag.vorschlag_beschreibung.focus();	
		ok=false;
		return ok;
		}

	if (name.length==0)
		{
		alert ("Bitte geben Sie Ihren Namen ein.");
		document.vorschlag.vorschlag_absname.focus();	
		ok=false;
		return ok;
		}

	if (email.length>0)	
		{
		if ((re_email.test(email)==false))
			{
			alert ("Bitte überprüfen Sie die Schreibweise Ihrer Emailadresse.");
			document.vorschlag.vorschlag_email.focus();
			ok=false;
			return ok;
			}
		}
		
	if ((nlabo==0) && (email.length<=1))
		{
		alert ("Bitte geben Sie Ihre Emailadresse ein oder waehlen Sie 'NEIN' wenn Sie den Newsletter nicht abonnieren moechten.");
		document.vorschlag.vorschlag_email.focus();
		ok=false;
		return ok;
		}
		
	if (ok==true)
		{
		document.newsletter.submit();
		}

	}	
