import Vue from "vue";
import axios from "axios";

var api = "http://127.0.0.1:8000/";

Vue.prototype.$apiURL = api + "api/";
Vue.prototype.$storageURL = api + "storage/";

axios.defaults.baseURL = api + "api/";

