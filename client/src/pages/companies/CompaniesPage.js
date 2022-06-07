import {useEffect, useState} from "react";

import CompanyDetailsComponent from "../../components/companyDetails/CompanyDetailsComponent";
import CompanyListComponent from "../../components/companyList/CompanyListComponent";
import SearchFilterBarComponent from "../../components/searchFilterBar/SearchFilterBarComponent";

const CompaniesPage = () => {
    document.title = 'Cosuno - Companies'

    const [companies, setCompanies] = useState()
    const [selectedCompany, setSelectedCompany] = useState()
    const [searchCompanyNameInput, setSearchCompanyNameInput] = useState('')
    const [filterCompanySpecialty, setFilterCompanySpecialty] = useState('All')

    useEffect( ()=> {
        getCompanies()
    }, [])

    async function getCompanies() {
        const getCompaniesResponse = await fetch(process.env.API_URL || 'http://localhost:3030/companies');
        const companiesFromResponse = await getCompaniesResponse.json()
        setCompanies(companiesFromResponse)
    }

    function searchListOnChangeHanlder(event) {
        setSearchCompanyNameInput(event.target.value)
        setSelectedCompany(null)
    }

    function filterCompanySpecialtyOnChangeHandler(event) {
        setFilterCompanySpecialty(event.target.value)
        setSelectedCompany(null)
    }

    return (
        <>
            <SearchFilterBarComponent searchListOnChangeHanlder={searchListOnChangeHanlder} filterCompanySpecialtyOnChangeHandler={filterCompanySpecialtyOnChangeHandler} />
            <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex">
                <CompanyListComponent companies={companies} searchCompanyNameInput={searchCompanyNameInput} filterCompanySpecialty={filterCompanySpecialty} setSelectedCompany={setSelectedCompany} />
                <CompanyDetailsComponent selectedCompany={selectedCompany} />
            </main>
        </>
    )
};

export default CompaniesPage;
