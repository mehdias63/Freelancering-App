import useOwnerProjects from './useOwnerProjects'
import Loading from '../../ui/Loading'
import Empty from '../../ui/Empty'

function ProjectTable() {
	const { isLoading, projects } = useOwnerProjects()

	if (isLoading) return <Loading />

	return (
		<table>
			<thead>
				<tr className="title-row">
					<th>#</th>
					<th>عنوان پروژه</th>
					<th>دسته بندی</th>
					<th>بودجه</th>
					<th>ددلاین</th>
					<th>تگ ها</th>
					<th>فریلنسر</th>
					<th>وضعیت</th>
					<th>عملیات</th>
					<th>درخواست ها</th>
				</tr>
			</thead>
			<tbody>
				{projects.map((project, index) => (
					<tr key={project.id}>
						<td>{index + 1}</td>
						<td>{project.title}</td>
						<td> {project.category.title}</td>
						<td>{project.budget}</td>
						<td>{project.deadline}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default ProjectTable
