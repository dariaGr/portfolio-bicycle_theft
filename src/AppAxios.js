import axios from 'axios';
import { useState, useEffect } from 'react';

export const AxiosComponent = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then((res) => {
				setPosts(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<h1>Axios test</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
};
