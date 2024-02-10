import { LightningElement } from 'lwc';

export default class ForEachLoop extends LightningElement {

    employee={
        Fname:'Tushar',
        Lname:'Bhoskar',
        Age:30,
        City:'Nagpur'
    }

    employeeList=[
    
    {
        Fname:'Tushar',
        Lname:'Bhoskar',
        Age:30,
        City:'Nagpur'
    },

    {
        Fname:'Chetan',
        Lname:'Bhramankar',
        Age:30,
        City:'Pune'
    },

    {
        Fname:'Karishma',
        Lname:'kale',
        Age:30,
        City:'Wardha'
    },

    {
        Fname:'Akash',
        Lname:'Deshbratar',
        Age:30,
        City:'Gujrat'
    },

]


}