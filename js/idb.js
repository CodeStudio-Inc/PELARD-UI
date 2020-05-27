
window.addEventListener('online',document.getElementById("offline").addEventListener("click",function(event){
    event.preventDefault();

if(navigator.onLine){
    console.log('online mode');
}

else{
    //Reporters Information
const reporterName = document.getElementById("reporterName").value;
const reporterContact = document.getElementById("reporterContact").value;
const dateTime =document.getElementById('dateTime').value;
//Violation Details
const districtOfViolation = document.getElementById("districtOfViolation").options[
        document.getElementById("districtOfViolation").selectedIndex].text;
const violationType = document.getElementById("violationType").options[
        document.getElementById("violationType").selectedIndex].text;
        
const violationDescription = document.getElementById("violationDescription").value;
const injuries = document.getElementById("injuries").value;
const contactAuthority = document.getElementById("contactAuthority").value;
const authorityResponse = document.getElementById("authorityResponse").value;
const otherViolation = document.getElementById("otherViolation").value;
//People Involved 
const victimName = document.getElementById("victimName").value;
const otherVictim = document.getElementById("otherVictim").value;
const suspectName = document.getElementById("suspectName").value;
const otherSuspect  = document.getElementById("otherSuspect").value;
const witnessName = document.getElementById("witnessName").value;
const otherWitness = document.getElementById("otherWitness").value;
//Evidence     
 const files = document.getElementById("img").files;
 const fileDescription = document.getElementById("fileDescription").value;

 //const res = fetch(files);
 //const blob = res.blob();

    var db = new Dexie("pelard_database");
    db.version(1).stores({
        violations: 'reporter,reporter_contact'
    });

     db.violations.put(
        {
    reporter: reporterName,
    reporter_contact: reporterContact,
     dateTime: dateTime,
    violationType: violationType,
    violationDescription: violationDescription,
    districtOfViolation: districtOfViolation,
    victimName: victimName,
     otherVictim:otherVictim,
     suspectName: suspectName,
     otherSuspect:otherSuspect,
    witnessName: witnessName,
     otherWitness:otherWitness,
    injuries_damages: injuries,
    //images_video:blob,
    AuthorityContacted: contactAuthority, 
     AuthorityResponse: authorityResponse,
     otherViolation:otherViolation,
    evidenceFileDescription:fileDescription
      
        })
        .then (function(){
        //
        // Then when data is stored, read from it
        //
        if (location.pathname !== '/report') {
            window.location = '/submitted.html';
           
          }
          if (location.pathname === '/report'){
            window.location ='/submitted.html';
            
          } 
    });

   
}
  }));
