const { expect } = require('@jest/globals')
const fs = require('fs')

const {setupCompanyMockData} = require('./setupCompanyMockData')

jest.mock('fs')

describe('setupCompanyMockData', () => {

    it('should create some random companies and save data to file system', () => {
        fs.writeFileSync.mockReturnValue();

        setupCompanyMockData();

        const createdMockFileContent = JSON.parse(fs.writeFileSync.mock.calls[0][1])

        expect(fs.writeFileSync).toHaveBeenCalled();
        expect(createdMockFileContent.length).toEqual(10)
    });

})
