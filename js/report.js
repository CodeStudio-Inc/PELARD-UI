const baseUrl = 'https://pelard-n.herokuapp.com';
  const secret = '2cfb9e9a-34a9-4843-961f-6e2639c41856-b10445eb-a0e8-4fa2-b636-015b2f1e3660';
  const _id= sessionStorage.getItem('_id')
  
  const getToken = async ({ secret, _id }) => {
    const response = await fetch(`${baseUrl}/token/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ secret, _id })
    });
  
    const json = await response.json();
    console.log(json);
     sessionStorage.setItem('access', json.data.token)
     return json.data.token;
  };
  
  async function isLoggedIn () {  
  const access= sessionStorage.getItem('access')
  if (!access) return false
}

const handleSubmit = async ({ files }) => {
  try {
    const SERVER_URI = "https://api.cloudinary.com/v1_1/dwa3soopc/upload";

    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", "dh1h4tq3");
    formData.append("folder", "pelard-n");

    const options = {
      method: "POST",
      body: formData,
    };

    const response = await fetch(SERVER_URI, options);
    const json = await response.json();
    const { secure_url } = json;

    console.log(`secure_url ${secure_url}`); // You send me this secure url
  } catch (errors) {
    console.log(errors);
  }
};

  const userReport = async () => {
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
    try {
      const token = await getToken({ secret, _id });
      const secure_url= await handleSubmit({ files });
      const validLogin = await isLoggedIn()

//async function autoRedirect () {}
const response = await fetch(`${baseUrl}/violations/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        },
        body: JSON.stringify(
          {
            reporter: {
                name: reporterName,
                contact: reporterContact,
            },
            dateTime: dateTime,
            type: violationType,
            description: violationDescription,
            location: {
                name: districtOfViolation,
            },
            
            involved: [
                { type: "victim", name: victimName,
                relevantLinks:[
                { 
                  description:otherVictim,
                  link:'string'
                  }
                ] 
                },

                { type: "suspect", name: suspectName,
                relevantLinks:[
                { 
                  description:otherSuspect,
                  link:'string'
                  }
                ] 
                 },
                { type: "witness", name: witnessName,
                relevantLinks:[
                { 
                  description:otherWitness,
                  link:'string'
                  }
                ] 
                 },
            ],
             injuries: [
              {
                description: injuries,
                link: "string"
              }
            ],
            authorityResponse:[
                { name: contactAuthority, response: authorityResponse,
                 relevantLinks:[
                { 
                  description:otherViolation,
                  link:fileDescription
                  }
                ] 
                 },
               
            ]
        })
    });
  
      const json = await response.json();
      console.log(json);
  console.log('Case Documented');
  if (!validLogin && location.pathname !== '/report') window.location = '/submitted.html';
if (validLogin && location.pathname === '/report') window.location ='/submitted.html';
       
    } catch (errors) {
      console.log(errors);
    }

  
  }
  
 
  document.getElementById('create-group-button').addEventListener('click',userReport);