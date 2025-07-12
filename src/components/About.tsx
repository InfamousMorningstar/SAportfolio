'use client';

import { motion } from 'framer-motion';
import { FaServer, FaCode, FaDocker, FaLinux, FaNetworkWired, FaCloud, FaUserTie } from 'react-icons/fa';
import Image from 'next/image';

const skills = [
	{
		category: 'DevOps & Infrastructure',
		icon: <FaServer className="text-accent" />,
		items: [
			'Docker',
			'Kubernetes',
			'TrueNAS SCALE',
			'Prometheus/Grafana',
			'VPN Architecture',
			'CI/CD Pipelines',
		],
	},
	{
		category: 'Programming',
		icon: <FaCode className="text-accent2" />,
		items: [
			'JavaScript',
			'Java',
			'Python',
			'TypeScript',
			'HTML/CSS',
			'React/Next.js',
		],
	},
	{
		category: 'Systems & Networking',
		icon: <FaLinux className="text-secondary" />,
		items: [
			'Linux Administration',
			'MySQL/PostgreSQL',
			'Network Configuration',
			'Security Protocols',
			'Cloudflare',
			'DNS Management',
		],
	},
	{
		category: 'Soft Skills',
		icon: <FaUserTie className="text-accent" />,
		items: [
			'Customer Service',
			'Team Leadership',
			'Problem Solving',
			'Technical Documentation',
			'Project Management',
			'Mentoring',
		],
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: 'easeOut' },
	},
};

export default function About() {
	return (
		<section id="about" className="min-h-screen py-20 px-6 relative">
			{/*
			  CLS TIP: All custom fonts are loaded with next/font, which uses font-display: swap by default.
			  No FOIT/FOUC risk here. If you add custom @font-face, use font-display: swap.
			*/}
			<div className="max-w-7xl mx-auto">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
					viewport={{ once: true }}
					style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
				>
					<h2 className="text-4xl md:text-6xl font-bold mb-6">
						About <span className="gradient-text">Me</span>
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-accent to-accent2 mx-auto mb-8"></div>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
					{/* Left Column - Text */}
				<motion.div
					className="space-y-6"
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
					viewport={{ once: true }}
					style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
				>
					<div className="text-lg md:text-xl text-muted leading-relaxed space-y-6">
						{/* Fade-in pop animation for each paragraph, staggered for premium effect */}
						{[
							<>I'm a passionate{' '}
								<span className="text-accent font-semibold">Computer Information Systems student</span>{' '}
								at Mount Royal University with a strong background in{' '}
								<span className="text-accent2 font-semibold">IT support</span>,{' '}
								<span className="text-secondary font-semibold">home server architecture</span>
								, and{' '}
								<span className="text-accent font-semibold">software development</span>.
							</>,
							<>My journey began with a curiosity for technology and evolved into
								expertise in{' '}
								<span className="text-accent2 font-semibold">DevOps practices</span>,{' '}
								<span className="text-accent font-semibold">container orchestration</span>
								, and{' '}
								<span className="text-secondary font-semibold">infrastructure automation</span>.
								I've built and maintain a sophisticated home lab environment that
								serves as both a learning platform and a production-grade media and
								monitoring solution.</>,
							<>Beyond technical skills, I bring{' '}
								<span className="text-accent font-semibold">6+ years of customer service experience</span>{' '}
								and proven leadership abilities from my roles in retail and manufacturing
								environments. This unique combination allows me to bridge technical
								complexity with clear communication and user-focused solutions.</>
						].map((content, i) => (
						<motion.p
							key={i}
							initial={{ opacity: 0, scale: 0.96, y: 24 }}
							whileInView={{ opacity: 1, scale: 1, y: 0 }}
							transition={{ duration: 0.7, delay: i * 0.18, ease: [0.4, 0, 0.2, 1] }}
							viewport={{ once: true }}
							className=""
						>
							{content}
						</motion.p>
					))}
					</div>

					<div className="flex flex-wrap gap-3 mt-8">
						{['Problem Solver', 'Team Player', 'Self-Learner', 'Innovation-Driven'].map(
							(trait) => (
								<motion.span
									key={trait}
									layout
									className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium will-change-transform"
									whileHover={{ scale: 1.13, boxShadow: '0 6px 32px 0 rgba(168,85,247,0.18)', backgroundColor: 'rgba(168,85,247,0.08)', filter: 'brightness(1.12)' }}
									whileTap={{ scale: 0.96, boxShadow: '0 2px 8px 0 rgba(168,85,247,0.10)', backgroundColor: 'rgba(168,85,247,0.14)', filter: 'brightness(0.98)' }}
									transition={{ type: 'spring', stiffness: 540, damping: 16, mass: 1.01 }}
									style={{ WebkitTapHighlightColor: 'transparent' }}
								>
									{trait}
								</motion.span>
							)
						)}
					</div>
					</motion.div>

					{/* Right Column - Profile Image */}
					{/*
					  CLS TIP: To prevent layout shift, always reserve space for <Image fill />.
					  Here, h-[32rem] and max-w-sm ensure the image container has a fixed size.
					  If you change to a responsive or dynamic size, use aspect-[3/4] or min-h-[] to reserve space.
					*/}
				<motion.div
					className="relative"
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
					viewport={{ once: true }}
					style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
				>
						<div className="relative h-[32rem] max-w-sm mx-auto border-2 border-accent/30 rounded-lg overflow-hidden hover:border-accent/50 transition-colors duration-300">
							<Image
								src="/images/profile-photo.webp"
								alt="Ahmad Profile Photo"
								fill
								className="object-cover rounded-lg"
								priority
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
						</div>
					</motion.div>
				</div>

				{/* Skills Grid */}
				{/*
				  CLS TIP: All Framer Motion and animation blocks only animate transform/opacity.
				  No layout shift risk. If you add new animations, avoid animating width, height, margin, or padding.
				*/}
				<motion.div
					className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
				>
						{skills.map((skillGroup, index) => (
							<motion.div
								key={skillGroup.category}
								className="card group hover:border-accent/50 transition-all duration-300"
								variants={itemVariants}
								whileHover={{ y: -5 }}
								style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
							>
							<div className="flex items-center mb-4">
								<div className="text-2xl mr-3 group-hover:scale-110 transition-transform">
									{skillGroup.icon}
								</div>
								<h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
									{skillGroup.category}
								</h3>
							</div>
							<ul className="space-y-2">
								{skillGroup.items.map((skill) => (
									<li key={skill} className="text-muted text-sm flex items-center">
										<div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
										{skill}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
