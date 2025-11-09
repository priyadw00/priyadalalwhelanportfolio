import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
//import { Link } from 'react-router-dom';

const ProjectSingle = ({ title, category, image, url, short_desc}) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.9,
				delay: 0.3,
			}}
		>
			{/* <Link to="/projects/single-project" aria-label="Single Project"> */}
				<div className=" focus:ring-1 focus:ring-indigo-900 flex-col content-center rounded-md shadow-sm hover:shadow-lg cursor-pointer mb-10 sm:mb-0 bg-ternery-light dark:bg-ternary-dark ">
					<div>
						<img
							src={image}
							className="rounded-t-xl border-none"
							alt="Single Project"
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>
						<span className="text-sm text-ternary-dark dark:text-ternary-light">
							{category}
						</span>
				
						<br/>
						<span className="text-sm text-ternary-dark dark:text-ternary-light">
							{short_desc}
						</span>
					</div>
					<div className="mx-auto px-4 py-6">	
						{/* <motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								ease: 'easeInOut',
								duration: 0.7,
								delay: 0.3,
							}}
						className="flex justify-center"
						> */}
						<div className = "flex justify-center"> 
							<a 
								href={url}
								className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-black-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-sm rounded-lg focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
								aria-label="See Project on Github"
							>
								<FiGithub className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiGithub>
								<span className="text-sm sm:text-lg font-general-medium duration-100">
									View on Github 
								</span>
							</a>
						</div>
						{/* </motion.div> */}
					</div>
				</div>
			{/* </Link> */}
		</motion.div>
	);
};

export default ProjectSingle;
