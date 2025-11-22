/*
 * ███╗░░░███╗░█████╗░██████╗░██████╗░██╗░░░██╗███████╗██████╗░██████╗░
 * ████╗░░████║██╔══██╗██╔══██╗██╔══██╗██║░░░██║██╔════╝██╔══██╗██╔══██╗
 * ██╔████╔██║███████║██████╔╝██████╔╝██║░░░██║█████╗░░██████╔╝██████╔╝
 * ██║╚██╔╝██║██╔══██║██╔══██╗██╔══██╗██║░░░██║██╔══╝░░██╔══██╗██╔══██╗
 * ██║░╚═╝░██║██║░░██║██║░░██║██║░░██║╚██████╔╝███████╗██║░░██║██║░░██║
 * ╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░╚═════╝░╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝
 *
 * 👤 Author  : Salman Ahmad
 * 🌐 URL     : https://portfolio.ahmxd.net
 * 📧 Contact : s.ahmad0147@gmail.com
 * 📝 License : MIT (Educational/Personal Use)
 * 📁 File    : Contact.tsx
 * 🕒 Updated : Jun 12, 2025
 */
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

const contactInfo = [
  {
	icon: <FaEnvelope className="text-accent" />,
	label: 'Email',
	value: 's.ahmad0147@gmail.com',
	href: 'mailto:s.ahmad0147@gmail.com',
	description: 'Send me an email for professional inquiries',
	simple: true,
  },
  {
	icon: <FaMapMarkerAlt className="text-secondary" />,
	label: 'Location',
	value: 'Calgary, AB, Canada',
	href: 'https://www.google.com/maps/place/Calgary,+AB',
	description: 'Based in Calgary, open to remote opportunities',
	simple: true,
  }
];

const socialLinks = [
	{
		icon: <FaGithub />,
		label: 'GitHub',
		href: 'https://github.com/InfamousMorningstar',
		username: '@InfamousMorningstar',
		color: 'hover:text-accent'
	},
	{
		icon: <FaLinkedin />,
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/salman-ahmad-6788811b6/',
		username: 'Salman Ahmad',
		color: 'hover:text-accent2'
	},
	{
		icon: <FaDiscord />,
		label: 'Discord',
		href: 'https://discord.com/users/699763177315106836',
		username: 'infamous_morningstar',
		color: 'hover:text-secondary'
	}
];

// Ultra-premium cinematic animation
const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.24
		}
	}
};

const itemVariants = {
	hidden: { scale: 0.96, filter: 'blur(12px)', opacity: 0.6 },
	visible: {
		scale: 1,
		filter: 'blur(0px)',
		opacity: 1,
		transition: { duration: 1.05, ease: [0.77, 0, 0.175, 1] }
	}
};

// S-tier 3D pop class for all buttons
const button3dClass =
	"rounded-full bg-transparent shadow-md border border-transparent hover:border-2 hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent/60";

export default function Contact() {
	const sectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"]
	});

	return (
		<section id="contact" ref={sectionRef} className="py-16 lg:py-20 px-6 relative" style={{ perspective: '1200px' }}>
			<div className="max-w-6xl mx-auto">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
					viewport={{ once: true }}
					style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
				>
					<h2 className="text-4xl md:text-6xl font-bold mb-6">
						Say <span className="gradient-text">Hello</span>
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-accent to-accent2 mx-auto mb-8"></div>
					<p className="text-xl text-muted max-w-3xl mx-auto">
						Ready to discuss opportunities, collaborate on projects, or just chat about technology?
						I&apos;m always open to connecting with fellow developers and innovators.
					</p>
				</motion.div>

				<div className="max-w-4xl mx-auto">
					{/* Single Column - Complete Contact Information */}
		<motion.div
		  className="card border border-border-subtle/60 backdrop-blur-2xl rounded-2xl shadow-lg px-6 py-5 md:px-8 md:py-7"
		  initial={{ scale: 0.96, filter: 'blur(12px)', opacity: 0.6 }}
		  whileInView={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
		  transition={{ duration: 1.05, ease: [0.77, 0, 0.175, 1] }}
		  viewport={{ once: true }}
		  style={{ willChange: 'transform, filter, opacity', backfaceVisibility: 'hidden' }}
		>
						<div className="space-y-8">
							{/* Contact Information Section */}
							<div>
								<h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
									<span className="text-accent mr-3">📞</span>
									Contact Information
								</h3>

<div className="grid md:grid-cols-2 gap-4">
  {contactInfo.map((item, index) => {
	return item.simple ? (
	  <motion.a
		key={item.label}
		href={item.href}
		target={item.href.startsWith('http') ? '_blank' : undefined}
		rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
		className="flex items-center space-x-4 p-4 bg-transparent rounded-lg border border-border hover:border-accent transition-colors"
		style={{ 
		  color: '#fff', 
		  background: 'none', 
		  boxShadow: 'none', 
		  WebkitTapHighlightColor: 'transparent', 
		  border: 'none',
		}}
		initial={{ 
		  opacity: 0, 
		  y: 20,
		}}
		whileInView={{ 
		  opacity: 1, 
		  y: 0,
		}}
		viewport={{ once: true, margin: "-100px" }}
		transition={{
		  duration: 0.6,
		  delay: index * 0.1,
		  ease: [0.33, 1, 0.68, 1]
		}}
	  >
		<span className="text-2xl">{item.icon}</span>
		<div>
		  <h4 className="font-semibold text-foreground">{item.label}</h4>
		  <p className="text-lg text-muted">{item.value}</p>
		  <p className="text-sm text-muted">{item.description}</p>
		</div>
	  </motion.a>
	) : (
	  <motion.a
		key={item.label}
		href={item.href}
		target={item.href.startsWith('http') ? '_blank' : undefined}
		rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
		className={`flex items-center space-x-4 p-4 ${button3dClass} group hover:text-secondary bg-transparent`}
		style={{
		  background: 'none',
		  color: '#fff',
		  boxShadow: 'none',
		  WebkitTapHighlightColor: 'transparent',
		  border: 'none',
		}}
		initial={{ 
		  opacity: 0, 
		  y: 20,
		}}
		whileInView={{ 
		  opacity: 1, 
		  y: 0,
		}}
		viewport={{ once: true, margin: "-100px" }}
		transition={{
		  duration: 0.6,
		  delay: index * 0.1,
		  ease: [0.33, 1, 0.68, 1]
		}}
		whileHover={{ scale: 1.05, boxShadow: '0 6px 32px 0 rgba(168,85,247,0.18)', backgroundColor: 'rgba(168,85,247,0.08)' }}
		whileTap={{ scale: 0.98 }}
	  >
		<motion.div
		  className="text-2xl group-hover:scale-110 transition-transform"
		>
		  {item.icon}
		</motion.div>
		<div>
		  <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
			{item.label}
		  </h4>
		  <p className="text-lg text-muted group-hover:text-foreground transition-colors">
			{item.value}
		  </p>
		  <p className="text-sm text-muted">
			{item.description}
		  </p>
		</div>
	  </motion.a>
	);
  })}
</div>
							</div>

							{/* Divider */}
							<div className="border-t border-accent/20"></div>

							{/* Social Media Section */}
							<div>
								<h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
									<span className="text-accent2 mr-3">🌐</span>
									Social Media
								</h3>

								<div className="grid md:grid-cols-3 gap-4">
						{socialLinks.map((social, index) => {
							return (
							<motion.a
								key={social.label}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								className={`flex items-center space-x-4 p-4 ${button3dClass} group ${social.color}`}
								style={{ 
									WebkitTapHighlightColor: 'transparent', 
								}}
								initial={{ 
									opacity: 0, 
									y: 20,
								}}
								whileInView={{ 
									opacity: 1, 
									y: 0,
								}}
								viewport={{ once: true, margin: "-100px" }}
								transition={{
									duration: 0.6,
									delay: 0.2 + (index * 0.1),
									ease: [0.33, 1, 0.68, 1]
								}}
								whileHover={{ scale: 1.05, boxShadow: '0 6px 32px 0 rgba(168,85,247,0.18)', backgroundColor: 'rgba(168,85,247,0.08)' }}
								whileTap={{ scale: 0.98 }}
							>
											<motion.div
												className="text-2xl group-hover:scale-110 transition-transform"
											>
												{social.icon}
											</motion.div>
											<div>
												<h4 className="font-semibold text-foreground">
													{social.label}
												</h4>
												<p className="text-muted text-sm">
													{social.username}
												</p>
											</div>
										</motion.a>
							);
						})}
								</div>
							</div>

							{/* Divider */}
							<div className="border-t border-accent/20"></div>

							{/* Availability & Quick Message Section */}
							<div>
								<h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
									<span className="text-secondary mr-3">✉️</span>
									Let's Connect
								</h3>

								<div className="grid md:grid-cols-2 gap-8">
									<motion.div 
										className="p-6 bg-accent/5 border border-accent/20 rounded-lg"
										style={{
											transformOrigin: 'left',
											transformStyle: 'preserve-3d'
										}}
										initial={{ 
											rotateY: -75, 
											opacity: 0, 
											scale: 0.9,
											filter: 'blur(4px)'
										}}
										whileInView={{ 
											rotateY: 0, 
											opacity: 1, 
											scale: 1,
											filter: 'blur(0px)'
										}}
										viewport={{ once: true, margin: "-100px" }}
										transition={{
											duration: 0.9,
											delay: 0.9, // After social links
											ease: [0.33, 1, 0.68, 1]
										}}
									>
										<h4 className="text-lg font-semibold text-accent mb-3">Currently Available For:</h4>
										<ul className="space-y-2 text-muted">
											<li className="flex items-center space-x-2">
												<div className="w-2 h-2 bg-green-500 rounded-full"></div>
												<span>Full-time DevOps opportunities</span>
											</li>
											<li className="flex items-center space-x-2">
												<div className="w-2 h-2 bg-green-500 rounded-full"></div>
												<span>Contract & freelance projects</span>
											</li>
											<li className="flex items-center space-x-2">
												<div className="w-2 h-2 bg-green-500 rounded-full"></div>
												<span>Technical consultations</span>
											</li>
											<li className="flex items-center space-x-2">
												<div className="w-2 h-2 bg-green-500 rounded-full"></div>
												<span>Open source collaborations</span>
											</li>
										</ul>
									</motion.div>

									<motion.div 
										className="flex flex-col justify-center space-y-6"
										style={{
											transformOrigin: 'right',
											transformStyle: 'preserve-3d'
										}}
										initial={{ 
											rotateY: 75, 
											opacity: 0, 
											scale: 0.9,
											filter: 'blur(4px)'
										}}
										whileInView={{ 
											rotateY: 0, 
											opacity: 1, 
											scale: 1,
											filter: 'blur(0px)'
										}}
										viewport={{ once: true, margin: "-100px" }}
										transition={{
											duration: 0.9,
											delay: 1.05, // Slightly after availability card
											ease: [0.33, 1, 0.68, 1]
										}}
									>
										<div className="text-center">
											<p className="text-muted mb-6">
												Prefer email? Send me a message directly and I'll get back to you within 24 hours.
											</p>

						<motion.a
							href="mailto:s.ahmad0147@gmail.com?subject=Let's Connect!&body=Hi Salman,%0D%0A%0D%0AI'd like to discuss..."
							className={`btn-primary inline-flex items-center space-x-2 px-8 py-4 text-lg ${button3dClass}`}
							style={{ 
								WebkitTapHighlightColor: 'transparent', 
								background: 'linear-gradient(90deg, #a855f7 0%, #14b8a6 100%)', 
								color: '#fff', 
								border: 'none', 
							}}
							initial={{
								opacity: 0,
								y: 20,
							}}
							whileInView={{
								opacity: 1,
								y: 0,
							}}
							viewport={{ once: true, margin: "-100px" }}
							transition={{
								duration: 0.6,
								delay: 0.3,
								ease: [0.33, 1, 0.68, 1]
							}}
							whileHover={{ scale: 1.13, boxShadow: '0 6px 32px 0 rgba(168,85,247,0.18)', background: 'linear-gradient(90deg, #a855f7 0%, #14b8a6 100%)', filter: 'brightness(1.12)' }}
							whileTap={{ scale: 0.96, boxShadow: '0 2px 8px 0 rgba(168,85,247,0.10)', background: 'linear-gradient(90deg, #a855f7 0%, #14b8a6 100%)', filter: 'brightness(0.98)' }}
						>
												<FaEnvelope />
												<span>Send Email</span>
											</motion.a>
										</div>

										<div className="border-t border-accent/20 pt-6">
											<div className="text-center">
												<p className="text-sm text-muted mb-2">Response Time</p>
												<div className="flex items-center justify-center space-x-2">
													<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
													<span className="text-accent font-semibold">Usually within 24 hours</span>
												</div>
											</div>
										</div>
									</motion.div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
