// Util packages
import Icon from '../utils/icon.util'

// Utility packages
import space from '../utils/spacing.util';

import button from '../../styles/blocks/button.module.scss'
import content from '../../content/index/hero.json'

/**
 * About section component block that contains the written copy
 * 
 * @param {string} 	classProp template literals of classes for contain
 * @param {array}	icon request props [ iconType, iconKey ] 
 * @param {string} 	title to be displayed 
 * @param {string} 	copy written content
 * @returns {jsx} <CopyBlock />
 */
import { useRouter } from 'next/router';

export default function CopyBlock({ containerClass, iconClass, icon, title, copy }) {
	const router = useRouter();

	const handleClick = () => {
		router.push('/IT');
	};

	return (
		<>
			<div className={containerClass}>
				<span className={iconClass}>
					<Icon icon={icon} />
				</span>
				<h3>{title}</h3>
				<p>{copy}</p>
				{title === "Information Technology and Cybersecurity" && (
					<section>
						<button className={`button ${button.primary}`} onClick={handleClick}>
							{content.buttons.third.title}
						</button>
					</section>
				)}
			</div>
		</>
	);
}