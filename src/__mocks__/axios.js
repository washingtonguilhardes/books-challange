// src/__mocks__/axios.ts

const mockAxios = jest.genMockFromModule('axios')

mockAxios.create = jest.fn(() => mockAxios)

export default mockAxios;
