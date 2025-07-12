'use client';

import { motion } from 'framer-motion';
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

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: 'easeOut' }
	}
};

export default function Education() {
	return (
		<section id="education" className="min-h-screen py-20 px-6 relative">
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
					style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
				>
					{education.map((edu, index) => (
						<motion.div
							key={edu.institution}
							className="card group hover:border-accent/50"
							variants={itemVariants}
							whileHover={{ y: -5, scale: 1.02 }}
							whileTap={{ scale: 0.97 }}
							transition={{ type: 'spring', stiffness: 340, damping: 22, mass: 1.1 }}
							style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
						>
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
										initial={{ opacity: 0, x: 20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
										viewport={{ once: true }}
										style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
									>
													<div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
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
									className="text-sm text-muted hover:text-foreground transition-colors cursor-default will-change-transform"
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									whileHover={{ x: 5, scale: 1.13, boxShadow: '0 6px 32px 0 rgba(168,85,247,0.18)', backgroundColor: 'rgba(168,85,247,0.08)', filter: 'brightness(1.12)' }}
									whileTap={{ scale: 0.96, boxShadow: '0 2px 8px 0 rgba(168,85,247,0.10)', backgroundColor: 'rgba(168,85,247,0.14)', filter: 'brightness(0.98)' }}
									transition={{ type: 'spring', stiffness: 540, damping: 16, mass: 1.01 }}
									style={{ WebkitTapHighlightColor: 'transparent', backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
								>
												• {course}
											</motion.div>
										))}
									</div>
								</div>
							</div>
						</motion.div>
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
								className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium will-change-transform"
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								whileHover={{ scale: 1.08 }}
								whileTap={{ scale: 0.97 }}
								transition={{ type: 'spring', stiffness: 340, damping: 22, mass: 1.1 }}
								viewport={{ once: true }}
								style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
							>
								{skill}
							</motion.span>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
