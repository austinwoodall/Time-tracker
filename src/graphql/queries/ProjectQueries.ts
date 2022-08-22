import { gql } from "graphql-tag";

const GET_PROJECTS = gql`
	query {
		projectCollection {
			edges {
				node {
					id
					userId
					name
					description
					rate
					createdAt
					updatedAt
				}
			}
		}
	}
`;

export { GET_PROJECTS };
