const { defaults } = require("lodash");
import Axios from 'axios';
import ordinateur from './ordinateur.vue';
import addPosteModal from '../components/addPosteModal.vue';
import { CLIENT_RENEG_LIMIT } from 'tls';

export default {
name:"home",
 data(){
 return{listepostes:[],dialog:false,disabled:false,jour:"", date: new Date().toISOString().substr(0, 10),listeattributions:{}};
 },
    components: { ordinateur,addPosteModal },
    created(){
        console.log("composant home");
        
  
        this.initialize();
           
    },methods:{
        initialize(){
          console.log("data ");
                  Axios.get("/api/postes",{ params: { date: this.date } }).then(({ data })=>{
               
                        this.listepostes=data.data
        })


        },
        setDate(date){
           // console.log(date)
           //this.$set(this.done,0,date);
            this.jour=date;
        
           this.$emit("reload-attr", this.listeattributions);
           //this.initialize();
        }
    }
};
