/* eslint-disable */
import axios from 'axios';
// const API_URL = 'http://localhost:8000'; /* http://groyce.pythonanywhere.com/ or http://localhost:8000 */
const API_URL = 'https://efs-development.herokuapp.com/api/v1'

export class APIService {
    constructor() {

    }

    getHeaders() {
        let jwtToken = localStorage.getItem('token');
        const headers = {Authorization: `jwt ${jwtToken}`};
        return headers
    }

    getStock(param_pk) {
        const url = API_URL + '/stocks/' + param_pk
        return axios.get(url, { headers: this.getHeaders() })
    }

    getStockList() {
        const url = API_URL + '/stocks'
        return axios.get(url, { headers: this.getHeaders() })
    }

    addNewStock(stock) {
        const url = API_URL + '/stocks/'
        return axios.post(url, stock, { headers: this.getHeaders() })
    }

    updateStock(stock) {
        const url = API_URL + '/stocks/' + stock.pk
        return axios.put(url, stock, { headers: this.getHeaders() })
    }

    deleteStock(stock_pk) {
        const url = API_URL + '/stocks/' + stock_pk
        return axios.delete(url, { headers: this.getHeaders() })
    }

    getInvestment(param_pk) {
        const url = API_URL + '/investments/' + param_pk
        return axios.get(url, { headers: this.getHeaders()})
    }

    getInvestmentList() {
        const url = API_URL + '/investments'
        return axios.get(url, { headers: this.getHeaders() })
    }

    addNewInvestment(investment) {
        const url = API_URL + '/investments/'
        return axios.post(url, investment, { headers: this.getHeaders() })
    }

    updateInvestment(investment) {
        const url = API_URL + '/investments/' + investment.pk
        return axios.put(url, investment, { headers: this.getHeaders() })
    }

    deleteInvestment(investment_pk) {
        const url = API_URL + '/investments/' + investment_pk
        return axios.delete(url, { headers: this.getHeaders() })
    }

    getCustomer(param_pk) {
        const url = `${API_URL}/customers/${param_pk}`;
        let jwtToken = localStorage.getItem('token');
        console.log(":::jwtToken:::::"+jwtToken);
        const headers = {Authorization: `jwt ${jwtToken}`};
        return axios.get(url, {headers: headers});
    }

    getCustomerList() {
        const url = `${API_URL}/customers/`;
        let jwtToken = localStorage.getItem('token');
        console.log(":::jwtToken:::::"+jwtToken);
        const headers = {Authorization: `jwt ${jwtToken}`};
        return axios.get(url, {headers: headers});

    }

    addNewCustomer(customer){
        const url = `${API_URL}/customers/`;
        let jwtToken = localStorage.getItem('token');
        const headers = {Authorization: `jwt ${jwtToken}`};
        return axios.post(url, customer, {headers: headers});
    }

    updateCustomer(customer){
        const url = `${API_URL}/customers/${customer.pk}`;
        let jwtToken = localStorage.getItem('token');
        const headers = {Authorization: `jwt ${jwtToken}`};
        return axios.put(url, customer, {headers: headers});
    }

    deleteCustomer(customer_Pk){
        const url = `${API_URL}/customers/${customer_Pk}`;
        let jwtToken = localStorage.getItem('token');
        const headers = {Authorization: `jwt ${jwtToken}`};
        return axios.delete(url, {headers: headers});
    }


    authenticateLogin(credentials) {
        const url = `${API_URL}/auth/`;
        return axios.post(url, credentials);
    }
}
