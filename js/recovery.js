
  const baseUrl = 'https://pelard-n.herokuapp.com';
  const secret = '2cfb9e9a-34a9-4843-961f-6e2639c41856-b10445eb-a0e8-4fa2-b636-015b2f1e3660';
  
  
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

  const emailRecovery = async () => {
    const loader =document.querySelector('div.progress');
    loader.style.display = "block"

  const email =document.getElementById('email').value;

    try {
      const token = await getToken({ secret });
      const validLogin = await isLoggedIn()

//async function autoRedirect () {}
      const response = await fetch(`${baseUrl}/email/request-password-reset`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        },
        body: JSON.stringify(
          {
            identifier:email
          }
          )
      });
  
      const json = await response.json();
      console.log(json);
  if (!validLogin && location.pathname !== '/forgot') {
    document.getElementById("message").innerHTML = `check your email`;
  }
  if (validLogin && location.pathname === '/forgot'){
    document.getElementById("message").innerHTML = `check your email`;
  } 
       
    } catch (errors) {
      console.log(errors);
      document.getElementById("message2").innerHTML = `could not send try again`;
    }

  
  }
  
 
  document.getElementById('create-group-button').addEventListener('click',emailRecovery);

