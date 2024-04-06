import React from 'react'
import './NotFoundPage.style.scss';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div id="notfound">
		<div className="notfound-bg"></div>
		<div className="notfound">
			<div className="notfound-404">
				<h1>404</h1>
			</div>
			<h2>we are sorry, but the page you requested was not found</h2>
			<Link class="home-btn" to="/">Go Home</Link>
			<a href="mailto:seoy2515@gmail.com" class="contact-btn">Contact us</a>
		</div>
	</div>
  )
}

export default NotFoundPage