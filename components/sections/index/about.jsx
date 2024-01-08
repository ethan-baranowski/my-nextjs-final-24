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
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section id="about" classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="I am an IT Analyst by profession, specializing in various aspects of information technology. With a strong foundation in Applied Computer Science, I bring a unique blend of technical expertise and analytical skills to my work."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/group1.png" alt=""/>
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Soft Skills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="In addition to my technical skills and expertise, I have honed strong communication skills, allowing me to effectively convey ideas and collaborate with diverse teams. Furthermore, my multitasking abilities enable me to handle multiple projects simultaneously while maintaining attention to detail and meeting deadlines. Outside of work, I enjoy indulging in hobbies such as video games, PC building, researching new topics, and exploring the world of whiskey tasting. These activities fuel my curiosity and passion for lifelong learning."
						/>
						<BadgesBlock 
							title="Exploring Tools and Open-Source Resources for Streamlined Processes" 
							subtitle="Work smarter not harder"
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="As an IT professional, I am passionate about creating efficient workflows that drive success. One of my favorite aspects is planning the architecture of a project, utilizing AI tools and open-source resources to explore innovative ways of accomplishing tasks. By leveraging these resources, I strive to make processes easier and more efficient, ultimately optimizing productivity and delivering exceptional results."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]