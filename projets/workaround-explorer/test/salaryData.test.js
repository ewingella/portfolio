import { expect } from "chai";
import salaryData, { getRoles, getCompanies, getDataByCompany, getDataByRole } from "../modules/salaryData.js";

describe("Salary Data Module", function () {
    describe("getRoles()", function () {
        it("should return exactly four roles", function () {
            const roles = getRoles();
            expect(roles).to.be.an('array').with.lengthOf(4);
            expect(roles).to.include.members(['CTO', 'Technical Lead', 'Software Engineer II', 'Software Engineer I']);
        });

        it("should always return the same roles", function () {
            const roles1 = getRoles();
            const roles2 = getRoles();
            expect(roles1).to.deep.equal(roles2);
        });
    });



    describe("getCompanies()", function () {
        it("should return exactly three companies", function () {
            const companies = getCompanies();
            expect(companies).to.be.an('array').with.lengthOf(3);
            expect(companies).to.include.members(['Big Data Inc.', 'Medium Data Inc.', 'Small Data Inc.']);
        });

        it("should always return the same companies", function () {
            const companies1 = getCompanies();
            const companies2 = getCompanies();
            expect(companies1).to.deep.equal(companies2);
        });

    });
    describe("getDataByRole(role)", function () {
        //happy path
        it("should return an array of data objects for a valid role", function () {
            const role = 'CTO';
            const data = getDataByRole(role);
            expect(data).to.be.an('array');
            expect(data.length).to.be.greaterThan(0);
            data.forEach(item => {
                expect(item).to.have.property('role', role);
                expect(item).to.have.property('company');
                expect(item).to.have.property('salary');
            });
        });
        //edge case: role not found
        it("should return an empty array if the role is not found", function () {
            const role = 'NonExistentRole';
            const data = getDataByRole(role);
            expect(data).to.be.an('array').that.is.empty;
        });
        //edge case: invalid input
        it("should handle invalid input gracefully", function () {
            const role = null; // Invalid input
            const data = getDataByRole(role);
            expect(data).to.be.an('array').that.is.empty;
        });

    });

    describe("getDataByCompany(company)", function () {
        // Add tests here as needed
        //happy path
        it("should return an array of data objects for a valid company", function () {
            const company = 'Big Data Inc.';
            const data = getDataByCompany(company);
            expect(data).to.be.an('array');
            expect(data.length).to.be.greaterThan(0);
            data.forEach(item => {
                expect(item).to.have.property('company', company);
                expect(item).to.have.property('role');
                expect(item).to.have.property('salary');
            });
        });
        //edge case: company not found
        it("should return an empty array if the company is not found", function () {
            const company = 'NonExistentCompany';
            const data = getDataByCompany(company);
            expect(data).to.be.an('array').that.is.empty;
        });
        //edge case: invalid input
        it("should handle invalid input gracefully", function () {
            const company = undefined; // Invalid input
            const data = getDataByCompany(company);
            expect(data).to.be.an('array').that.is.empty;
        });
    });
    // Data integrity tests
    // test de structure des données
    describe("salaryData (data integrity)", function () {
        it("should contain 12 entries", function () {
            expect(salaryData).to.be.an('array').with.lengthOf(12);
        });

        it("each entry should have role, company, and salary properties", function () {
            salaryData.forEach(item => {
                expect(item).to.be.an('object');
                expect(item).to.have.all.keys('role', 'company', 'salary');
                expect(item.role).to.be.a('string').that.is.not.empty;
                expect(item.company).to.be.a('string').that.is.not.empty;
                expect(item.salary).to.be.a('number').that.is.greaterThan(0);
            });
        });


    });
    // test de la cohérence des données avec les liste pres definies
    describe("salaryData (data consistency)", function () {
        it("should only contain roles from getRoles()", function () {
            const validRoles = getRoles();
            const rolesInData = salaryData.map(item => item.role);
            rolesInData.forEach(role => {
                expect(validRoles).to.include(role);
            });
        });

        it("should only contain companies from getCompanies()", function () {
            const validCompanies = getCompanies();
            const companiesInData = salaryData.map(item => item.company);
            companiesInData.forEach(company => {
                expect(validCompanies).to.include(company);
            });
        });
    });

    // teste de logic metier
    describe("salaryData (business logic)", function () {
        it("all salaries should be positive numbers", function () {
            salaryData.forEach(item => {
                expect(item.salary).to.be.a('number').that.is.greaterThan(0);
            });
        });

        it("should have all 4 roles represented for each company", function () {
            const companies = getCompanies();
            const roles = getRoles();
            companies.forEach(company => {
                const companyData = getDataByCompany(company);
                expect(companyData).to.have.length(4);

                const companyRoles = companyData.map(entry => entry.role);
                expect(companyRoles).to.include.members(roles);
            });
        });

    });

});