// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';

export const projectsData = [
	{
		id: 1,
		title: 'iAssist',
		category: 'Swift App',
		short_desc: 'Swift App which improves iOS home screen usability for elderly users'
		img: WebImage2,
		ProjectHeader: {
			title: 'iAssist' ,
			publishDate: '05/16/2025',
			tags: 'Swift',
			url: 'https://github.com/ariaramanathan/iAssist',
			Collaborators: 'Aria Ramanathan'
		},
	},
	{
		id: 2,
		title: 'Air Quality Alert System',
		category: 'App',
		short_dec: 'Alerts subscribers to air quality events within a two block radius. '
		img: MobileImage2,
		url: 'https://github.com/SpikeAlerts/SpikeAlerts_0',
		Collaborators: 'Rob Hendrickson'
	},
	{
		id: 3,
		title: 'xxx',
		category: 'UI/UX Design',
		img: UIImage1,
	},
	{
		id: 4,
		title: 'Cloud Storage Platform',
		category: 'UI/UX Design',
		img: UIImage2,
	},
	{
		id: 5,
		title: 'React Social App',
		category: 'Mobile Application',
		img: MobileImage1,
	},
	{
		id: 6,
		title: 'Apple Design System',
		category: 'Web Application',
		img: WebImage1,
	},
];
