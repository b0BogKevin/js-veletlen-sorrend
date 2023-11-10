var napok = [ "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"];
var ujNapok = [];

kistr = "Eredeti sorrend: ";

for (let j = 0; j < napok.length; j++) {
    kistr += napok[j] + " "
 }
 kistr +="<br>Véletlen sorrend: ";

for (let i = 7; i > 1; i--) {
    var rand = Math.floor(Math.random() * i);
    console.log(rand + ", " + napok[rand])
    ujNapok.push(napok[rand]);
    napok.splice(rand,1);
}
ujNapok.push(napok[0]);
napok.splice(0,1);

for (let j = 0; j < ujNapok.length; j++) {
   kistr += ujNapok[j] + " "
}
document.getElementById("content").innerHTML = kistr;