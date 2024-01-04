// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hardskills"
					subTitle="As a versatile IT professional, I excel in working with a diverse range of technologies and tools across multiple domains. From security and development to programming, I have gained extensive experience and exposure to various facets of the IT landscape."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Multidisciplinary Expertise"
							icon={[ 'fat', 'chart-network' ]}
							copy="With a strong foundation in design and development, I bring a unique perspective to every project. I stay up-to-date with the latest industry trends, constantly learning and evolving."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title="Software Showcase" 
							copy=""
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Technologies" 
							copy=""
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
{/* 					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div> */}
					<div className={`${about.image} ${about.technicalSvg}`}>
						<video autoPlay loop muted playsInline>
							<source src="/img/video2.mp4" type="video/mp4" />
						</video>
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' },
	{ key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
	{ key: 'jira', 			name: 'Jira', 				type: 'devicon' },
	{ key: 'trello', 		name: 'Trello', 			type: 'devicon' },
	{ key: 'slack', 		name: 'Slack', 				type: 'devicon' },
	{ key: 'google', 		name: 'Google Suite', 		type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'apple', 		name: 'apple', 				type: 'devicon' },
	{ key: 'docker', 	name: 'docker', 			type: 'devicon' },
	{ key: 'github', 	name: 'github', 			type: 'devicon' },
	{ key: 'putty', 	name: 'putty', 			type: 'devicon' },
	{ key: 'azure', 	name: 'azure', 			type: 'devicon' },
	{ key: 'amazonwebservices', 	name: 'aws', 			type: 'devicon' },
]

const tech	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'svelte', 		name: 'svelte', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'angularjs', 		name: 'angular', 				type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'bootstrap', 	name: 'bootstrap', 			type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'python', 	name: 'python', 			type: 'devicon' },
	{ key: 'java', 	name: 'java', 			type: 'devicon' },
	{ key: 'c', 	name: 'c', 			type: 'devicon' },
]