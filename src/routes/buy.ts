import type { EndpointOutput } from '@sveltejs/kit';
import type { ParameterizedBody } from '@sveltejs/kit/types/app';

export async function post({ body }: { body: ParameterizedBody<Body> }): Promise<EndpointOutput> {
	// TODO: Save incoming data
	// TODO: Check if data exists so no duplication?
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
