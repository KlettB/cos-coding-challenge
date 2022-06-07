import EmptyStateComponent from "../emptyState/EmptyStateComponent";

const CompanyDetailsComponent = props => (
    <section aria-labelledby="primary-heading" className="min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-last">
        <div className="p-7">
            {props.selectedCompany ? <>
                <h3 className="text-lg leading-6 font-medium text-gray-900">{props.selectedCompany?.companyName}</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Company details and related files.</p>
                <div className="mt-5 border-t border-gray-200">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Specialty</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.selectedCompany?.companySpecialty}</dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Address</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {props.selectedCompany?.companyStreet}
                                <div>{props.selectedCompany?.companyZip} {props.selectedCompany?.companyCity}</div>
                            </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Phone</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.selectedCompany?.companyPhone}</dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">About</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.selectedCompany?.companyDescription}</dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                        <div className="w-0 flex-1 flex items-center">
                                            <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd"/>
                                            </svg>
                                            <span className="ml-2 flex-1 w-0 truncate"> company_resume.pdf </span>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href="/#" className="font-medium text-indigo-600 hover:text-indigo-500"> Download </a>
                                        </div>
                                    </li>
                                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                        <div className="w-0 flex-1 flex items-center">
                                            <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd"/>
                                            </svg>
                                            <span className="ml-2 flex-1 w-0 truncate"> company_handout.pdf </span>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href="/#" className="font-medium text-indigo-600 hover:text-indigo-500"> Download </a>
                                        </div>
                                    </li>
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
            </> : <EmptyStateComponent />}
        </div>
    </section>
)

export default CompanyDetailsComponent;
