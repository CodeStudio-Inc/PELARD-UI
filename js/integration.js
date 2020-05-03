



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
	return json.data.token;
};

export const userRegistration = async (data) => {
	console.log(data);
	try {
		const token = await getToken({ secret });
		const response = await fetch(`${baseUrl}/user/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token
			},
			body: JSON.stringify(data)
		});

		const json = await response.json();
		console.log('Registration');
		console.log(json);
	} catch (errors) {
		console.log(errors);
	}
};
export const userRegistration = async (data) => {
	console.log(data);
	try {
		const token = await getToken({ secret });
		const response = await fetch(`${baseUrl}/user/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token
			},
			body: JSON.stringify(data)
		});

		const json = await response.json();
		console.log('Registration');
		console.log(json);
	} catch (errors) {
		console.log(errors);
	}
};