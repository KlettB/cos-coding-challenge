const SearchFilterBarComponent = props => (
    <header className="w-full">
        <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
            <div className="flex-1 flex justify-between px-4 sm:px-6">
                <div className="flex-1 flex">
                    <form className="w-full flex md:ml-0" action="#" method="GET">
                        <label htmlFor="search-field" className="sr-only">Search all files</label>
                        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                <svg className="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
                                </svg>
                            </div>
                            <input name="search-field" id="search-field" onChange={props.searchListOnChangeHanlder} className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400" placeholder="Search company" type="search" />
                        </div>
                    </form>
                </div>
                <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                    <div className="relative flex-shrink-0">
                        <select id="CompanySpecialty" onChange={props.filterCompanySpecialtyOnChangeHandler} name="CompanySpecialty" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                            <option value="All">All Specialties</option>
                            <option value="Excavation">Excavation</option>
                            <option value="Plumbing">Plumbing</option>
                            <option value="Electrical">Electrical</option>
                            <option value="Real Estate Development">Real Estate Development</option>
                            <option value="Small Renovation Contraction">Small Renovation Contraction</option>
                            <option value="Architecture">Architecture</option>
                        </select>
                    </div>
                    <div className="relative flex-shrink-0">
                        <a href="https://github.com/KlettB/cos-coding-challenge" target="_blank" rel="noreferrer noopener" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700">Github Repo</a>
                    </div>
                    <div className="relative flex-shrink-0">
                        <a href="https://www.linkedin.com/in/bastian-klett-0b0912193" className="rounded-full" target="_blank" rel="noreferrer noopener">
                            <img className="h-8 w-8 rounded-full" src="images/bastianklett.jpeg" alt="Link to Bastian Klett LinkedIn Profile" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
)

export default SearchFilterBarComponent;
