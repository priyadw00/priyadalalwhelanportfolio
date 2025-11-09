function AppFooterCopyright() {
	return (
		

		<div className="font-general-regular flex flex-col justify-center items-center text-center">
			<div className = "text-sm text-ternary-dark dark:text-ternary-light"> 
			&copy; 2025 Priya Dalal-Whelan 
			</div>
			<div className="text-sm text-ternary-dark dark:text-ternary-light">
				
				<a
					href="https://github.com/realstoman/react-tailwindcss-portfolio"
					target="__blank"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					 Powered by React & Tailwind CSS Portfolio
				</a>
				.
				<a
					href="https://stoman.me"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Stoman 
				</a>

				<a 
					href= "/files/MIT License.md"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"

				>
					View license. 
				</a>

			
			</div>
		</div>
	);
}

export default AppFooterCopyright;
