export function getOwnerProjectsApi() {
	return http
		.get('/project/owner-projects')
		.then(({ data }) => data.data)
}
