import type { EndpointOutput } from '@sveltejs/kit';
import type { ParameterizedBody } from '@sveltejs/kit/types/app';
import { readFileSync, writeFileSync } from 'fs';

interface Person {
	name: string;
	phone: string;
	email?: string;
}

export async function post({ body }: { body: ParameterizedBody<Body> }): Promise<EndpointOutput> {
	// TODO: Save incoming data
	// TODO: Check if data exists so no duplication?

	console.log(body);
	const data = await body.formData();
	const name = data.get('name')?.toString() ?? '';
	const phone = data.get('phone')?.toString() ?? '';
	const email = data.get('email')?.toString();

	updateDB({ name, phone, email });
	return {
		body: { success: true }
	};
	// return {
	// 	status: 303,
	// 	body: 'success: ',
	// 	headers: {
	// 		location: 'https://ticketon.kz/event/skameyka'
	// 	}
	// };
}

function updateDB(person: Person): void {
	const data: Person[] = JSON.parse(readFileSync('./db.json').toString());
	data.push(person);
	writeFileSync('./db.json', JSON.stringify(data));
}
