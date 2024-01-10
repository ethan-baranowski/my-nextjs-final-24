import FeaturedProject from '../../blocks/projects/featured'


// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';
import Badges 		from '../../utils/badge.list.util'
import Icon 		from '../../utils/icon.util'
import SectionTitle from '../../blocks/section.title.block'

import css 			from '../../../styles/sections/projects/featured.module.scss'
import content 		from '../../../content/projects/featured.json'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Switch } from '@headlessui/react';
function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
  }

export default function Layout() {
	const [agreed, setAgreed] = useState(false)
	return (
		
		<Section>	
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Contact Me"
					preTitle="Let's work together!"
					subTitle=""
				/> 				{/* {
				content.map( (data, index) => {
					return (
						<FeaturedProject content={data} index={index} key={index} />
					)
				})
				} */}
				<div className="isolate bg-red px-6 py-24 sm:py-32 lg:px-8">
					<div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"aria-hidden="true">
						<div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={{
            				clipPath:
              				'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',}}>
						</div>
						
					</div>
					<div className="mx-auto max-w-2xl text-center">
						<h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">Send Me a Message</h3>
						<p className="mt-2 text-lg leading-8 text-gray-600"></p>
					</div>
					<form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
						<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
							{/* <div style={{ border: '1px solid white', padding: '.5rem', borderRadius: '0.5rem' }}>
								<div>
									<label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name: <input type="text" name="first_name" id="first_name" autoComplete="given-name" className=" text-gray-900 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"/></label>
								</div>
							</div>
							<div style={{ border: '1px solid white', padding: '.5rem', borderRadius: '0.5rem' }}>
								<label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name: <input type="text" name="last_name" id="_name" autoComplete="given-name" className=" text-gray-900 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"/></label>
								<div className="mt-1">
									<input type="text" name="last_name" id="last_name" autoComplete="family-name" className="block w-full px-4 py-3 text-gray-900 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500" />
								</div>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
								<div className="mt-1">
									<input type="text" name="company" id="company" autoComplete="organization" className="block w-full px-4 py-3 text-gray-900 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500" />
								</div>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
								<div className="mt-1">
									<input id="email" name="email" type="email" autoComplete="email" className="block w-full px-4 py-3 text-gray-900 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500" />
								</div>
							</div>
							<div className="sm:col-span-2">
								<div className="flex justify-between">
									<label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
								Message
								</label>
								<div className="mt-2.5">
								<textarea
									name="message"
									id="message"
									rows={4}
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									defaultValue={''}
								/>
								</div>
							</div> */}
						</div>
						<Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
							<div className="flex h-6 items-center">
							<Switch
								checked={agreed}
								onChange={setAgreed}
								className={classNames(
								agreed ? 'bg-indigo-600' : 'bg-gray-200',
								'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
								)}
							>
								<span className="sr-only">Agree to policies</span>
								<span
								aria-hidden="true"
								className={classNames(
									agreed ? 'translate-x-3.5' : 'translate-x-0',
									'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
								)}
								/>
							</Switch>
							</div>
							<Switch.Label className="text-sm leading-6 text-gray-600">
							By selecting this, you agree to our{' '}
							<a href="#" className="font-semibold text-indigo-600">
								privacy&nbsp;policy
							</a>
							.
							</Switch.Label>
          				</Switch.Group>
						  <div className="mt-10">
								<button
									type="submit"
									className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Button
								</button>
							</div>
					</form>
				</div>
			</Container>
			<div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
		</Section>
	)
}