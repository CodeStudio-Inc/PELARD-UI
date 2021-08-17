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

  const userRegister = async () => {
    const loader =document.querySelector('div.progress');
    loader.style.display = "block"
    const firstName =document.getElementById('firstName').value;
	const lastName =document.getElementById('lastName').value;
	const userName =document.getElementById('userName').value;
	const password =document.getElementById('password').value;
	const phoneNumber =document.getElementById('phoneNumber').value;
	const email = document.getElementById('email').value;
    try {
      const token = await getToken({ secret });
      const validLogin = await isLoggedIn()

//async function autoRedirect () {}
const response = await fetch(`${baseUrl}/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        },
        body:JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            password: password,
            phoneNumber: phoneNumber,
            email: email
          })
      });
  
      const json = await response.json();
      console.log(json);
      sessionStorage.setItem('_id', json.data.userId)
       console.log('Logged In');
 if (!validLogin && location.pathname !== '/register') window.location = '/pages/report.html';
  if (validLogin && location.pathname === '/register') window.location ='/pages/register.html';
       
    } catch (errors) {
      console.log(errors);
      document.getElementById("register_failed").innerHTML = `username taken or phone does not start with 7`;
    }

  
  }
  
 
  document.getElementById('create-group-button').addEventListener('click',userRegister);