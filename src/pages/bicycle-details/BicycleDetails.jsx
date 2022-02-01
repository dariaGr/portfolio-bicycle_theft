import './BicycleDetails.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from '../../components/Spinner';

export const BicycleDetails = () => {
	const location = useLocation()
	const token = location.token
	const postId = location.postId

	const [post, setPost] = useState({})
	const [loading, setLoading] = useState(false)
	const [toggle, setToggle] = useState(false)
	const [field, setField] = useState('')

	const getStolenBicycleFunc = async (postId) => {
		try {
			const response = await axios.get(`https://sf-final-project.herokuapp.com/api/cases/${postId}`, { headers: { "Authorization": `Bearer ${token}` } })
				.then(res => {
					setPost(res.data.data)

				})
			setLoading(true)
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		getStolenBicycleFunc(postId)
	}, [])

	const putFunc = async (postId) => {
		try {
			const response = await axios.put(`https://sf-final-project.herokuapp.com/api/cases/${postId}`, { ownerFullName: field }, { headers: { "Authorization": `Bearer ${token}` } })
		} catch (e) {
			console.log(e)
		}
	}

	const handleClick = () => {
		setToggle(v => !v)
	}

	const handleSend = () => {
		putFunc(postId)
		setToggle(false)
		getStolenBicycleFunc(postId)
		getStolenBicycleFunc(postId)
	}

	const inputField = <div><input type="text" value={field} onChange={(event) => setField(event.target.value)} /></div>

	const list =
		<table>
			<tbody>
				<tr>
					{toggle ? <div>{inputField}<button onClick={handleSend}>Send</button></div> : <td>{post.ownerFullName}</td>}<td><button type="button" className='button' onClick={handleClick}>Edit</button></td>
				</tr>
				<tr>
					<td>{post.licenseNumber}</td><td><button type="button" className='button'>Edit</button></td>
				</tr>
				<tr>
					<td>{post.clientId}</td>
				</tr>
				<tr>
					<td>{post.createdAt}</td>
				</tr>
				<tr>
					<td>{post.updatedAt}</td>
				</tr>
				<tr>
					<td>{post.type}</td><td><button type="button" className='button'>Edit</button></td>
				</tr>
				<tr>
					<td>{post.color}</td><td><button type="button" className='button'>Edit</button></td>
				</tr>
				<tr>
					<td>{post.date}</td><td><button type="button" className='button'>Edit</button></td>
				</tr>
				<tr>
					<td>{post.officer}</td><td><button type="button" className='button'>Edit</button></td>
				</tr>
				<tr>
					<td>{post.description}</td><td><button type="button" className='button'>Edit</button></td>
				</tr>
				<tr>
					<td>{post.resolution}</td><td><button type="button" className='button'>Edit</button></td>
				</tr>
			</tbody>
		</table >

	return (
		<div>
			<Header />
			<main className="bicycles-container">
				<div className="container">
					<div className="bicycles-content">
						<Link className="bicycles-back" to="/user-account">
							Back
						</Link>
						<h1 className="bicycles-title">Detailed page of the theft report</h1>
						{loading ? list : <Spinner />}
					</div>
				</div>
			</main >
			<Footer />
		</div>
	);
};
