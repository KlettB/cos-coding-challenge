const CompanyListComponent = props => {
    const getFilteredCompanies = () => {
        const filteredCompanies = props.companies && props.companies
            .filter(company => {
                if (props.filterCompanySpecialty === 'All') {
                    return company
                }

                return props.filterCompanySpecialty === company.companySpecialty
            })
            .filter(company => company.companyName.toLowerCase().includes(props.searchCompanyNameInput.toLowerCase()))
            .map((company, index) => {
                    const companyNameParts = company.companyName.split(' ')

                    return <li className="py-4 flex cursor-pointer" key={index} onClick={() => props.setSelectedCompany(company)}>
                                        <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500">
                                          <span className="font-medium leading-none text-white">{companyNameParts[0].charAt(0)}{companyNameParts[1].charAt(0)}</span>
                                        </span>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">{company.companyName}</p>
                            <p className="text-sm text-gray-500">{company.companySpecialty}</p>
                        </div>
                    </li>
                }
            )

        return filteredCompanies && filteredCompanies.length > 0 ? filteredCompanies : <div className="text-center mt-24">
            <h3 className="mt-2 text-sm font-medium text-gray-900">No results</h3>
            <p className="mt-1 text-sm text-gray-500">Please adjust your filters.</p>
        </div>
    }

    return (
        <aside className="hidden lg:block lg:flex-shrink-0 lg:order-first">
            <div className="h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100 overflow-y-auto">
                <ul className="px-5 divide-y divide-gray-200">
                    {getFilteredCompanies()}
                </ul>
            </div>
        </aside>
    )
}

export default CompanyListComponent;
