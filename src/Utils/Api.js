import axios from "axios";


export default {
    getEmployees: function () {
       axios.get("https://randomuser.me/api/?inc=name,email,location,picture");
       return 
    }

};