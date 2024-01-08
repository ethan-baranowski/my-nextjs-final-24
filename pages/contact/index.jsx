// Sections
import ComingSoon from '../../components/sections/comingsoon'
import Color  from '../../components/utils/page.colors.util'
import settings from '../../content/_settings.json'
import colors from '../../content/projects/_colors.json'

//
export default function Contact({ user, repos }) {
	return (
		<>
		<ComingSoon />
		<Color colors={colors} />
		</>
	)
}