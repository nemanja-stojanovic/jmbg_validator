const jmbg = document.getElementById("jmbg");
const msg = document.getElementById("msg");

function checkJMBG() {
    let number = jmbg.value.split("");
    if (number.length === 13) {
        let k = number[12];
        let m = (7 * number[0] + 6 * number[1] + 5 * number[2] + 4 * number[3] + 3 * number[4] + 2 * number[5] +
            7 * number[6] + 6 * number[7] + 5 * number[8] + 4 * number[9] + 3 * number[10] + 2 * number[11]) % 11;

        if ((m === 0 && k != 0) || (m === 1) || (m > 1 && k != (11 - m))) {
            msg.innerHTML = "Maticni broj je pogresan!"
            return
        }
        parseJMBG();
    } else {
        msg.innerHTML = "JMBG mora imati 13 cifara!"
    }
}

function parseJMBG() {
    let number = jmbg.value.split("");
    let dan = number[0] + number[1];
    let mesec = number[2] + number[3];
    let godina = number[4] + number[5] + number[6];
    let mesto = Number(number[7] + number[8]);
    let pol = number[9] + number[10] + number[11];

    switch (mesto) {
        case 1:
            mesto = "stranci u BiH";
            break;
        case 2:
            mesto = "stranci u Crnoj Gori";
            break;
        case 3:
            mesto = "stranci u Hrvatskoj";
            break;
        case 4:
            mesto = "stranci u Makedoniji";
            break;
        case 5:
            mesto = "stranci u Sloveniji";
            break;
        case 6:
            mesto = "nedefinisano mesto rodjenja";
            break;
        case 7:
            mesto = "stranci u Srbiji (bez pokrajina)";
            break;
        case 8:
            mesto = "stranci u Vojvodini";
            break;
        case 9:
            mesto = "stranci u Kosovu";
            break;
        case 10:
            mesto = "Bosna i Hercegovina - Banja Luka";
            break;
        case 11:
            mesto = "Bosna i Hercegovina - Bihać";
            break;
        case 12:
            mesto = "Bosna i Hercegovina - Doboj";
            break;
        case 13:
            mesto = "Bosna i Hercegovina - Goražde";
            break;
        case 14:
            mesto = "Bosna i Hercegovina - Livno";
            break;
        case 15:
            mesto = "Bosna i Hercegovina - Mostar";
            break;
        case 16:
            mesto = "Bosna i Hercegovina - Prijedor";
            break;
        case 17:
            mesto = "Bosna i Hercegovina - Sarajevo";
            break;
        case 18:
            mesto = "Bosna i Hercegovina - Tuzla";
            break;
        case 19:
            mesto = "Bosna i Hercegovina - Zenica";
            break;
        case 20:
            mesto = "Crna Gora";
            break;
        case 21:
            mesto = "Crna Gora - Podgorica";
            break;
        case 22:
            mesto = "Crna Gora";
            break;
        case 23:
            mesto = "Crna Gora";
            break;
        case 24:
            mesto = "Crna Gora";
            break;
        case 25:
            mesto = "Crna Gora";
            break;
        case 26:
            mesto = "Crna Gora - Nikšić";
            break;
        case 27:
            mesto = "Crna Gora";
            break;
        case 28:
            mesto = "Crna Gora";
            break;
        case 29:
            mesto = "Crna Gora - Pljevlja";
            break;
        case 30:
            mesto = "Hrvatska - Osijek, Slavonija region";
            break;
        case 31:
            mesto = "Hrvatska - Bjelovar, Virovitica, Koprivnica, Pakrac, Podravina region";
            break;
        case 32:
            mesto = "Hrvatska - Varaždin, Međimurje region";
            break;
        case 33:
            mesto = "Hrvatska - Zagreb";
            break;
        case 34:
            mesto = "Hrvatska - Karlovac";
            break;
        case 35:
            mesto = "Hrvatska - Gospić, Lika region";
            break;
        case 36:
            mesto = "Hrvatska - Rijeka, Pula, Istra and Primorje";
            break;
        case 37:
            mesto = "Hrvatska - Sisak, Banovina region";
            break;
        case 38:
            mesto = "Hrvatska - Split, Zadar, Dubrovnik, Dalmacija region";
            break;
        case 39:
            mesto = "Hrvatska";
            break;
        case 40:
            mesto = "nedefinisano mesto rodjenja";
            break;
        case 41:
            mesto = "Makedonija - Bitolj";
            break;
        case 42:
            mesto = "Makedonija - Kumanovo";
            break;
        case 43:
            mesto = "Makedonija - Ohrid";
            break;
        case 44:
            mesto = "Makedonija - Prilep";
            break;
        case 45:
            mesto = "Makedonija - Skoplje";
            break;
        case 46:
            mesto = "Makedonija - Strumica";
            break;
        case 47:
            mesto = "Makedonija - Tetovo";
            break;
        case 48:
            mesto = "Makedonija - Veles";
            break;
        case 49:
            mesto = "Makedonija - Štip";
            break;
        case 50:
            mesto = "Slovenija";
            break;
        case 70:
            mesto = "Centralna Srbija";
            break;
        case 71:
            mesto = "Srbija - Beograd region (Grad Beograd: Stari Grad, Savski Venac, Voždovac, Vračar, Palilula, Zvezdara, Rakovica, Čukarica, Novi Beograd, Zemun, Mladenovac, Barajevo, Grocka, Obrenovac, Sopot, Lazarevac)";
            break;
        case 72:
            mesto = "Srbija - Šumadija i Pomoravlje region (Šumadijski okrug: Aranđelovac, Batočina, Knić, Kragujevac, Rača, Lapovo, Topola), (Pomoravski okrug: Despotovac, Paraćin, Rekovac, Jagodina, Svilajnac, Ćuprija)";
            break;
        case 73:
            mesto = "Srbija - Niš region (Nišavski okrug: Aleksinac, Svrljig, Niš, Gadžin Han, Doljevac, Merošina, Ražanj), (Pirotski okrug: Babušnica, Bela Palanka, Dimitrovgrad, Pirot), (Toplički okrug: Blace, Žitorađa, Prokuplje, Kuršumlija)";
            break;
        case 74:
            mesto = "Srbija - Južna Morava region (Jablanički okrug: Leskovac, Vlasotince, Medveđa, Lebane, Bojnik, Crna Trava), (Pčinjski okrug: Vranje, Bujanovac, Surdulica, Bosilegrad, Preševo, Trgovište, Vladičin Han)";
            break;
        case 75:
            mesto = "Srbija - Zaječar region (Zaječarski okrug: Zaječar, Boljevac, Knjaževac, Sokobanja), (Borski okrug: Bor, Majdanpek, Kladovo, Negotin)";
            break;
        case 76:
            mesto = "Srbija - Podunavlje region (Podunavski okrug: Smederevska Palanka, Velika Plana, Smederevo), (Braničevski okrug: Veliko Gradište, Kučevo, Petrovac na Mlavi, Požarevac, Žagubica, Golubac, Žabari, Malo Crniće)";
            break;
        case 77:
            mesto = "Srbija - Podrinje i Kolubara regions (Mačvanski okrug: Loznica, Krupanj, Ljubovija, Šabac, Bogatić, Koceljeva, Vladimirci, Mali Zvornik), (Kolubarski okrug: Valjevo, Lajkovac, Ljig, Ub, Osečina, Mionoca)";
            break;
        case 78:
            mesto = "Srbija - Kraljevo region (Raški okrug: Kraljevo, Vrnjačka Banja, Novi Pazar, Raška, Tutin), (Moravički okrug: Gornji Milanovac, Čačak, Ivanjica, Lučani), (Rasinski okrug: Aleksandrovac, Brus, Kruševac, Trstenik, Varvarin, Ćićevac)";
            break;
        case 79:
            mesto = "Srbija - Užice region (Zlatiborski okrug: Arilje, Bajina Bašta, Kosjerić, Nova Varoš, Požega, Priboj, Prijepolje, Sjenica, Užice, Čajetina)";
            break;
        case 80:
            mesto = "Autonomna Pokrajina Vojvodina - Novi Sad region (Južnobački okrug: Bač, Bačka Palanka, Bački Petrovac, Vrbas, Žabalj, Novi Sad, Srbobran, Sremski Karlovci, Temerin, Titel, Bečej, Beočin)";
            break;
        case 81:
            mesto = "Autonomna Pokrajina Vojvodina - Sombor region (Zapadnobački okrug: Apatin, Kula, Odžaci, Sombor)";
            break;
        case 82:
            mesto = "Autonomna Pokrajina Vojvodina - Subotica region (Severnobački okrug: Bačka Topola, Subotica, Mali Iđoš)";
            break;
        case 83:
            mesto = "Autonomna Pokrajina Vojvodina";
            break;
        case 84:
            mesto = "Autonomna Pokrajina Vojvodina";
            break;
        case 85:
            mesto = "Autonomna Pokrajina Vojvodina - Zrenjanin region (Srednjebanatski okrug: Zrenjanin, Nova Crnja, Novi Bečej, Sečanj, Žitište)";
            break;
        case 86:
            mesto = "Autonomna Pokrajina Vojvodina - Pančevo region (Južnobanatski okrug: Alibunar, Bela Crkva, Vršac, Kovačica, Kovin, Pančevo, Opovo, Plandište)";
            break;
        case 87:
            mesto = "Autonomna Pokrajina Vojvodina - Kikinda region (Severnobanatski okrug: Ada, Kikinda, Kanjiža, Novi Kneževac, Senta, Čoka)";
            break;
        case 88:
            mesto = "Autonomna Pokrajina Vojvodina - Ruma region (Sremski okrug: Inđija, Pećinci, Ruma, Sremska Mitrovica, Stara Pazova, Šid, Irig)";
            break;
        case 89:
            mesto = "Autonomna Pokrajina Vojvodina - Sremska Mitrovica region (Sremski okrug: Inđija, Pećinci, Ruma, Sremska Mitrovica, Stara Pazova, Šid, Irig)";
            break;
        case 90:
            mesto = "Autonomna Pokrajina Kosovo i Metohija";
            break;
        case 91:
            mesto = "Autonomna Pokrajina Kosovo i Metohija - Priština region (Kosovski okrug: Priština, Obilić, Podujevo, Štrpce, Lipljan, Glogovac, Kačanik, Kosovo Polje, Uroševac, Štimlje)";
            break;
        case 92:
            mesto = "Autonomna Pokrajina Kosovo i Metohija - Kosovska Mitrovica region (Kosovsko Mitrovački okrug: Kosovska Mitrovica, Zvečan, Leposavić, Zubin Potok, Vučitrn, Srbica)";
            break;
        case 93:
            mesto = "Autonomna Pokrajina Kosovo i Metohija - Peć region (Pećki okrug: Peć, Istok, Klina)";
            break;
        case 94:
            mesto = "Autonomna Pokrajina Kosovo i Metohija - Đakovica region (Pećki okrug: Dečani, Đakovica)";
            break;
        case 95:
            mesto = "Autonomna Pokrajina Kosovo i Metohija - Prizren region (Prizrenski okrug: Gora-Dragaš, Orahovac, Prizren, Suva Reka)";
            break;
        case 96:
            mesto = "Autonomna Pokrajina Kosovo i Metohija - Kosovsko Pomoravski okrug: (Gnjilane, Kosovska Kamenica, Vitina, Novo Brdo)";
            break;
        case 97:
            mesto = "Autonomna Pokrajina Kosovo i Metohija";
            break;
        case 98:
            mesto = "Autonomna Pokrajina Kosovo i Metohija";
            break;
        case 99:
            mesto = "Autonomna Pokrajina Kosovo i Metohija";
            break;
        default:
            break;
    }
    if (pol < 500) {
        pol = "Muški";
    } else {
        pol = "Ženski";
    }
    msg.innerHTML = `Datum rodjenja: ${dan}.${mesec}.1${godina}. <br> Mesto rodjenja: ${mesto} <br> Pol: ${pol}`;
}
