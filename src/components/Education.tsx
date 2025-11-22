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
 * 📁 File    : Education.tsx
 * 🕒 Updated : Jun 12, 2025
 */
'use client';

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaAward, FaTrophy, FaBook } from 'react-icons/fa';

const education = [
	{
		institution: 'Mount Royal University',
		degree: 'Bachelor of Science in Computer Information Systems',
		period: '2024 - Present',
		location: 'Calgary, AB',
		status: 'In Progress',
		description:
			'Comprehensive program combining computer science principles with business information systems, focusing on software development, database management, and system analysis.',
		highlights: [
			"Dean's List recognition for academic excellence",
			'Focus on software development and system architecture',
			'Coursework in advanced programming and database design',
			'Active participation in technology student organizations'
		],
		relevantCourses: [
			'Data Structures & Algorithms',
			'Database Systems',
			'Software Engineering',
			'Network Security',
			'System Analysis & Design',
			'Web Development'
		],
		icon: <FaGraduationCap className="text-accent" />,
		gpa: '3.8',
		expectedGraduation: '2028'
	},
	{
		institution: 'Southern Alberta Institute of Technology (SAIT)',
		degree: 'Information Technology Software Development Diploma',
		period: '2020 - 2023',
		location: 'Calgary, AB',
		status: 'Completed',
		description:
			'Intensive hands-on program focused on practical software development skills, including programming languages, database management, and web technologies.',
		highlights: [
			'Graduated with honors distinction',
			'Completed capstone project in full-stack web development',
			'Gained extensive experience in multiple programming languages',
			'Participated in industry collaboration projects'
		],
		relevantCourses: [
			'Java Programming',
			'JavaScript & Web Development',
			'Database Programming (MySQL)',
			'Software Testing & Quality Assurance',
			'Mobile Application Development',
			'Project Management'
		],
		icon: <FaBook className="text-accent2" />,
		gpa: '3.7',
		certification: 'Diploma with Honors'
	}
];

const skills = [
	'Object-Oriented Programming',
	'Database Design & Management',
	'Web Application Development',
	'Software Testing & QA',
	'System Analysis',
	'Project Management',
	'Network Fundamentals',
	'Cybersecurity Principles'
];

// Ultra-premium cinematic animation
const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.32
		}
	}
};

const itemVariants = {
	hidden: { scale: 0.96, filter: 'blur(12px)', opacity: 0.6 },
	visible: {
		scale: 1,
		filter: 'blur(0px)',
		opacity: 1,
		transition: { duration: 1.1, ease: [0.77, 0, 0.175, 1] }
	}
};

// WebGL Fluid Simulation Wrapper
const WaterBlob = ({ children, index }: { children: React.ReactNode; index: number }) => {
	return (
		<motion.div
			className="relative"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{
				duration: 0.6,
				delay: index * 0.2,
				ease: [0.25, 0.46, 0.45, 0.94],
			}}
		>
			<div 
				className="card group border border-border-subtle/50 shadow-lg hover:border-border-strong/70 transition-all duration-300 hover:scale-[1.02] rounded-2xl"
				style={{ minHeight: '400px', position: 'relative' }}
			>
				{children}
			</div>
		</motion.div>
	);
};

export default function Education() {
	const sectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"]
	});

	return (
		<section id="education" ref={sectionRef} className="py-16 lg:py-20 px-6 relative">
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
						<span className="gradient-text">Education</span>
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-accent to-accent2 mx-auto mb-8"></div>
					<p className="text-xl text-muted max-w-3xl mx-auto">
						Continuous learning and academic excellence in computer science and
						information systems
					</p>
				</motion.div>

		<motion.div
		  className="space-y-12"
		  variants={containerVariants}
		  initial="hidden"
		  whileInView="visible"
		  viewport={{ once: true }}
		>
		  {education.map((edu, index) => (
			<WaterBlob key={edu.institution} index={index}>
							<div className="grid lg:grid-cols-3 gap-8">
								{/* Left Column - Institution Info */}
								<div className="lg:col-span-1">
									<div className="flex items-center space-x-3 mb-4">
								<motion.div
									className="text-3xl"
									whileHover={{ scale: 1.08, rotate: 10 }}
									whileTap={{ scale: 0.97 }}
									transition={{ type: 'spring', stiffness: 340, damping: 22, mass: 1.1 }}
									style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
								>
											{edu.icon}
										</motion.div>
										<div>
											<h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
												{edu.institution}
											</h3>
											<span
												className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
													edu.status === 'Completed'
														? 'bg-green-500/20 text-green-400 border border-green-500/30'
														: 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
												}`}
											>
												{edu.status}
											</span>
										</div>
									</div>

									<div className="space-y-3 text-sm">
										<div className="flex items-center justify-between">
											<span className="text-muted">Period:</span>
											<span className="font-mono text-accent2">
												{edu.period}
											</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="text-muted">Location:</span>
											<span className="text-foreground">
												{edu.location}
											</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="text-muted">GPA:</span>
											<span className="text-accent font-semibold">
												{edu.gpa}/4.0
											</span>
										</div>
										{edu.expectedGraduation && (
											<div className="flex items-center justify-between">
												<span className="text-muted">Expected:</span>
												<span className="text-secondary">
													{edu.expectedGraduation}
												</span>
											</div>
										)}
										{edu.certification && (
											<div className="flex items-center justify-between">
												<span className="text-muted">Achievement:</span>
												<span className="text-accent font-semibold">
													{edu.certification}
												</span>
											</div>
										)}
									</div>
								</div>

								{/* Middle Column - Description & Highlights */}
								<div className="lg:col-span-1 space-y-6">
									<div>
										<h4 className="text-lg font-semibold text-accent2 mb-3">
											{edu.degree}
										</h4>
										<p className="text-muted leading-relaxed mb-4">
											{edu.description}
										</p>
									</div>

									<div>
										<h4 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wide flex items-center">
											<FaTrophy className="mr-2" />
											Highlights
										</h4>
										<ul className="space-y-2">
											{edu.highlights.map((highlight, idx) => (
									<motion.li
										key={highlight}
										className="flex items-start space-x-2 text-sm text-muted"
										initial={{ 
											opacity: 0, 
											x: -20,
											scale: 0.7,
											filter: 'blur(3px)'
										}}
										whileInView={{ 
											opacity: 1, 
											x: 0,
											scale: 1,
											filter: 'blur(0px)'
										}}
										transition={{ 
											delay: 0.5 + (idx * 0.1), 
											duration: 0.7, 
											ease: [0.34, 1.56, 0.64, 1],
											scale: {
												type: 'spring',
												stiffness: 130,
												damping: 14,
												mass: 0.7
											}
										}}
										viewport={{ once: true }}
										style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform, filter' }}
									>
													<motion.div 
														className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0"
														initial={{ scale: 0, borderRadius: '0%' }}
														whileInView={{ scale: 1, borderRadius: '50%' }}
														transition={{
															delay: 0.5 + (idx * 0.1) + 0.2,
															duration: 0.4,
															ease: [0.34, 1.56, 0.64, 1]
														}}
														viewport={{ once: true }}
													/>
													<span>{highlight}</span>
												</motion.li>
											))}
										</ul>
									</div>
								</div>

								{/* Right Column - Relevant Courses */}
								<div className="lg:col-span-1">
									<h4 className="text-sm font-semibold text-secondary mb-4 uppercase tracking-wide flex items-center">
										<FaBook className="mr-2" />
										Relevant Coursework
									</h4>
									<div className="space-y-2">
										{edu.relevantCourses.map((course, idx) => (
								<motion.div
									key={course}
									className="text-sm text-muted hover:text-foreground transition-colors cursor-default will-change-transform px-3 py-1.5 rounded-lg"
									initial={{ 
										opacity: 0, 
										y: 10,
										borderRadius: '50%',
										scale: 0.6,
										filter: 'blur(3px)',
										background: 'radial-gradient(circle, rgba(20,184,166,0.2) 0%, transparent 100%)'
									}}
									whileInView={{ 
										opacity: 1, 
										y: 0,
										borderRadius: '8px',
										scale: 1,
										filter: 'blur(0px)',
										background: 'transparent'
									}}
									viewport={{ once: true }}
									transition={{
										duration: 0.6,
										delay: 0.6 + (idx * 0.08),
										ease: [0.34, 1.56, 0.64, 1],
										borderRadius: {
											duration: 0.5,
											ease: [0.34, 1.56, 0.64, 1]
										},
										scale: {
											type: 'spring',
											stiffness: 140,
											damping: 13,
											mass: 0.6
										}
									}}
									whileHover={{ 
										x: 5, 
										scale: 1.08, 
										boxShadow: '0 4px 20px 0 rgba(20,184,166,0.2)', 
										backgroundColor: 'rgba(20,184,166,0.08)', 
										filter: 'brightness(1.12) blur(0px)' 
									}}
									whileTap={{ scale: 0.96, boxShadow: '0 2px 8px 0 rgba(20,184,166,0.10)', backgroundColor: 'rgba(20,184,166,0.14)', filter: 'brightness(0.98)' }}
									style={{ WebkitTapHighlightColor: 'transparent', backfaceVisibility: 'hidden', willChange: 'opacity, transform, filter, border-radius' }}
								>
												• {course}
											</motion.div>
										))}
									</div>
								</div>
							</div>
						</WaterBlob>
					))}
				</motion.div>

				{/* Skills Section */}
				<motion.div
					className="mt-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
					viewport={{ once: true }}
					style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
				>
					<h3 className="text-2xl font-bold text-center mb-8">
						Academic <span className="gradient-text">Skills</span>
					</h3>
					<div className="flex flex-wrap justify-center gap-3">
						{skills.map((skill, index) => (
							<motion.span
								key={skill}
								className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium will-change-transform relative overflow-hidden"
								initial={{ 
									opacity: 0, 
									scale: 0.3,
									borderRadius: '50%',
									filter: 'blur(4px)',
									background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(20,184,166,0.4) 100%)'
								}}
								whileInView={{ 
									opacity: 1, 
									scale: 1,
									borderRadius: '9999px',
									filter: 'blur(0px)',
									background: 'rgba(168,85,247,0.1)'
								}}
								viewport={{ once: true, margin: "-100px" }}
								whileHover={{ 
									scale: 1.1,
									boxShadow: '0 4px 20px rgba(168,85,247,0.3), inset 0 1px 4px rgba(255,255,255,0.2)',
									filter: 'blur(0px) brightness(1.2)',
									borderColor: 'rgba(168,85,247,0.6)'
								}}
								whileTap={{ 
									scale: 0.85,
									transition: {
										type: 'spring',
										stiffness: 400,
										damping: 10
									}
								}}
								transition={{
									duration: 0.9,
									delay: index * 0.05,
									ease: [0.25, 0.46, 0.45, 0.94],
									scale: {
										type: 'spring',
										stiffness: 80,
										damping: 18,
										mass: 0.8
									}
								}}
								style={{ 
									backfaceVisibility: 'hidden', 
									willChange: 'opacity, transform, filter',
									// Water meniscus shadow - STATIC
									boxShadow: '0 2px 8px rgba(20,184,166,0.15), inset 0 1px 2px rgba(255,255,255,0.1)',
									cursor: 'pointer'
								}}
							>
								{/* Water refraction shimmer - STATIC */}
								<div
									className="absolute inset-0 rounded-full pointer-events-none"
									style={{
										background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(20,184,166,0.08) 100%)',
										mixBlendMode: 'overlay',
										opacity: 0.8
									}}
								/>
								<span className="relative z-10">{skill}</span>
							</motion.span>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
