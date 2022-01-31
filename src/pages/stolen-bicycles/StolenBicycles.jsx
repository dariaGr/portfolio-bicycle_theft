import './StolenBicycles.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from '../../components/Spinner';

export const StolenBicycles = () => {
	const location = useLocation()
	const token = location.token

	const [posts, setPosts] = useState([])
	// const [post, setPost] = useState()
	const [loading, setLoading] = useState(false)

	const getStolenBicyclesFunc = async () => {
		try {
			const response = await axios.get(`https://sf-final-project.herokuapp.com/api/cases`, { headers: { "Authorization": `Bearer ${token}` } })
				.then(res => {
					// console.log(res.data.data)
					setPosts(res.data.data)

				})
			setLoading(true)
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		getStolenBicyclesFunc()
	}, [])

	const handleDelete = post => {
		try {
			axios
				.delete(`https://sf-final-project.herokuapp.com/api/cases/${post._id}`, { headers: { "Authorization": `Bearer ${token}` } })
				.then(response => {
					// window.confirm(`Delete ${post}?`);
					// setPosts(null)
					// getPosts
				});
		} catch (e) {
			console.log(e)
		}
	}

	const header = ["ФИО клиента", "Тип велосипеда", "Цвет велосипеда", "Дата кражи"];
	const table = <table>
		<thead>
			<tr>{header.map((h, i) => <th key={i}>{h}</th>)}</tr>
		</thead>
		<tbody>
			{posts.map((post, i) => {
				return (
					<tr key={i} >
						<td><Link to={{ pathname: "/bicycle-details", token: token, postId: post._id }}>{post.ownerFullName}</Link></td>
						<td><Link to={{ pathname: "/bicycle-details", token: token, postId: post._id }}>{post.type}</Link></td>
						<td><Link to={{ pathname: "/bicycle-details", token: token, postId: post._id }}>{post.color}</Link></td>
						<td><Link to={{ pathname: "/bicycle-details", token: token, postId: post._id }}>{post.date}</Link></td>
						<td><button type="button" className='button' onClick={() => handleDelete(post)}>Удалить</button></td>
					</tr>
				);
			})}
		</tbody>
	</table >

	return (
		<div className="bicycles">
			<Header />
			<main className="bicycles-container">
				<div className="container">
					<div className="bicycles-content">
						<Link className="bicycles-back" to="/user-account">
							Назад
						</Link>
						<h1 className="bicycles-title">Сообщения о кражах</h1>
						{loading ? table : <Spinner />}
					</div>
				</div>
			</main >
			<Footer />
		</div >
	);
};
