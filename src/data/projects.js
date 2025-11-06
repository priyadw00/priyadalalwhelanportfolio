// Import images
//import WebImage2 from '../images/web-project-2.jpg';
import iAssistLogo from '../images/projectImages/iAssistLogo.png';
import portScanner from '../images/projectImages/portscanner.png';
import addressCleanerAfter from '../images/projectImages/addressCleanerAfter.png';
import airQuality from '../images/projectImages/airQualityAlertSystem.png'; 
import clientServer from '../images/projectImages/clientServer.png'; 
import chessBot from '../images/projectImages/chessbotSmaller.png';



export const projectsData = [
	{
		id: 1,
		title: 'iAssist',
		category: 'Swift App',
		short_desc: 'Swift App which improves iOS home screen usability for elderly users',
		img: iAssistLogo,
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
		short_desc: 'Alerts subscribers to air quality events within a two block radius. ',
		img: airQuality,
		url: 'https://github.com/SpikeAlerts/SpikeAlerts_0',
		Collaborators: 'Rob Hendrickson'
	},
	{
		id: 3,
		title: 'Port Scanner',
		category: 'Python App',
		short_desc:  'Port Scanner Capable of conductuing Connect, Syn, and UDP Scans. ',
		img: portScanner,
		url: 'https://github.com/priyadw00/portScanner'
	},
	{
		id: 4,
		title: ' Chess Bot',
		category: 'Python App',
		img: chessBot,
		url: 'https://github.com/priyadw00/randomchessbot',
	},
	{
		id: 5,
		title: 'Address Standardization Automation',
		category: 'Google Sheets Custom Function',
		short_desc: 'Custum function which validates and cleans messy address data by calling google geocoder. ',
		img: addressCleanerAfter,
		url: 'https://github.com/priyadw00/AddressCleaner'
	},

	// {
	// 	id: 6,
	// 	title: 'Dikstra\'s Algorithm',
	// 	category: 'Python',
	// 	short_desc: 'Python implementation of Dikstra\'s Algorithm',
	// 	img: WebImage1,
	// 	url: 'https://github.com/priyadw00/dikstras'
	// },

	{
		id: 7,
		title: 'Chat Client and Server',
		category: 'C',
		short_desc: 'Chat Client and Server written in C',
		img: clientServer,
		url: 'https://github.com/priyadw00/Chat'
	},

	{
		id: 8, 
		title: 'CLI',
		category: 'C', 
		short_desc: 'My implentation of a command unix command line, written in C.',
		img: clientServer, 
		url: 'https://github.com/priyadw00/Shell'
	}



	
];
